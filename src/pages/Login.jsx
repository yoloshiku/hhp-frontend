import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

import googleIcon from "../assets/social/google.svg";
import facebookIcon from "../assets/social/facebook.svg";
import appleIcon from "../assets/social/apple.svg";
import microsoftIcon from "../assets/social/microsoft.svg";

export default function Login() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("email"); // email, phone, emailLink

  // Email/Password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Phone OTP state
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Email Link state
  const [emailLinkSent, setEmailLinkSent] = useState(false);
  const [emailForLink, setEmailForLink] = useState("");

  // Common state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    login,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
    signInWithMicrosoft,
    resetPassword,
    sendPhoneOTP,
    verifyPhoneOTP,
    sendEmailLink,
    completeEmailLinkSignIn,
    isEmailSignInLink
  } = useAuth();
  const navigate = useNavigate();

  // Handle email link sign-in on page load
  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'emailLink' && isEmailSignInLink(window.location.href)) {
      const savedEmail = window.localStorage.getItem('emailForSignIn');
      if (savedEmail) {
        setLoading(true);
        completeEmailLinkSignIn(savedEmail, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            navigate("/");
          })
          .catch((err) => {
            setError(getErrorMessage(err.code));
            setLoading(false);
          });
      } else {
        setActiveTab("emailLink");
        setError("Please enter your email to complete sign-in");
      }
    }
  }, [searchParams]);

  // Email/Password Login
  const onEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  // Phone OTP - Send Code
  const onSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await sendPhoneOTP(phone, "recaptcha-container");
      setOtpSent(true);
      setSuccess("OTP sent! Check your phone.");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  // Phone OTP - Verify Code
  const onVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await verifyPhoneOTP(otp);
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  // Email Link - Send Link
  const onSendEmailLink = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await sendEmailLink(emailForLink);
      setEmailLinkSent(true);
      setSuccess("Sign-in link sent! Check your email inbox.");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  // Social Login Handler
  const handleSocialLogin = async (provider) => {
    setError("");
    setLoading(true);

    try {
      switch (provider) {
        case "google":
          await signInWithGoogle();
          break;
        case "facebook":
          await signInWithFacebook();
          break;
        case "apple":
          await signInWithApple();
          break;
        case "microsoft":
          await signInWithMicrosoft();
          break;
        default:
          throw new Error("Unknown provider");
      }
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address first");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later";
      case "auth/popup-closed-by-user":
        return "Sign-in popup was closed";
      case "auth/account-exists-with-different-credential":
        return "Account exists with different sign-in method";
      case "auth/invalid-phone-number":
        return "Invalid phone number. Include country code (e.g., +1)";
      case "auth/invalid-verification-code":
        return "Invalid OTP code. Please try again";
      case "auth/code-expired":
        return "OTP expired. Please request a new code";
      default:
        return "An error occurred. Please try again";
    }
  };

  return (
    <section className="authPage">
      <div className="authContainer">
        <h1 className="authTitle">Login</h1>

        <p className="authSubtitle">
          If you are not a member, please{" "}
          <Link className="authLink" to="/signup">
            sign up here
          </Link>
        </p>

        {/* Login Method Tabs */}
        <div className="authTabs">
          <button
            className={`authTab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => { setActiveTab('email'); setError(''); setSuccess(''); }}
          >
            Email
          </button>
          <button
            className={`authTab ${activeTab === 'phone' ? 'active' : ''}`}
            onClick={() => { setActiveTab('phone'); setError(''); setSuccess(''); }}
          >
            Phone OTP
          </button>
          <button
            className={`authTab ${activeTab === 'emailLink' ? 'active' : ''}`}
            onClick={() => { setActiveTab('emailLink'); setError(''); setSuccess(''); }}
          >
            Passwordless
          </button>
        </div>

        {error && <div className="authError">{error}</div>}
        {success && <div className="authSuccess">{success}</div>}

        {/* Email/Password Form */}
        {activeTab === 'email' && (
          <form className="authForm" onSubmit={onEmailSubmit}>
            <label className="authLabel" htmlFor="email">Email</label>
            <input
              className="authInput"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="authLabel" htmlFor="password">Password</label>
            <div className="authPasswordRow">
              <input
                className="authInput authInputPassword"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="authEyeBtn"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <label className="authRemember">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>

            <button className="authPrimaryBtn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>

            <div className="authFooterLinks">
              <a className="authLink" href="#" onClick={handleForgotPassword}>
                Forgot Password
              </a>
            </div>
          </form>
        )}

        {/* Phone OTP Form */}
        {activeTab === 'phone' && (
          <form className="authForm" onSubmit={otpSent ? onVerifyOTP : onSendOTP}>
            {!otpSent ? (
              <>
                <label className="authLabel" htmlFor="phone">Phone Number</label>
                <input
                  className="authInput"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <p className="authHint">Include country code (e.g., +1 for US)</p>

                <button className="authPrimaryBtn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <label className="authLabel" htmlFor="otp">Enter OTP Code</label>
                <input
                  className="authInput authOtpInput"
                  id="otp"
                  name="otp"
                  type="text"
                  maxLength="6"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  required
                />

                <button className="authPrimaryBtn" type="submit" disabled={loading}>
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>

                <div className="authFooterLinks">
                  <a className="authLink" href="#" onClick={(e) => { e.preventDefault(); setOtpSent(false); setOtp(''); }}>
                    Resend OTP
                  </a>
                </div>
              </>
            )}
            <div id="recaptcha-container"></div>
          </form>
        )}

        {/* Email Link (Passwordless) Form */}
        {activeTab === 'emailLink' && (
          <form className="authForm" onSubmit={onSendEmailLink}>
            <label className="authLabel" htmlFor="emailLink">Email</label>
            <input
              className="authInput"
              id="emailLink"
              name="emailLink"
              type="email"
              value={emailForLink}
              onChange={(e) => setEmailForLink(e.target.value)}
              required
              disabled={emailLinkSent}
            />

            {!emailLinkSent ? (
              <>
                <p className="authHint">We'll send you a magic link to sign in - no password needed!</p>
                <button className="authPrimaryBtn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Magic Link"}
                </button>
              </>
            ) : (
              <>
                <p className="authHint">Check your email and click the link to sign in.</p>
                <button
                  className="authSecondaryBtn"
                  type="button"
                  onClick={() => { setEmailLinkSent(false); setSuccess(''); }}
                >
                  Send Again
                </button>
              </>
            )}
          </form>
        )}

        <div className="authDivider">
          <span className="authDividerLine" />
          <span className="authDividerText">OR</span>
          <span className="authDividerLine" />
        </div>

        <div className="authSocialRow">
          <button
            type="button"
            className="socialIconBtn socialGoogle"
            onClick={() => handleSocialLogin("google")}
            aria-label="Continue with Google"
            title="Continue with Google"
            disabled={loading}
          >
            <img className="socialIconImg" src={googleIcon} alt="Google" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialFacebook"
            onClick={() => handleSocialLogin("facebook")}
            aria-label="Continue with Facebook"
            title="Continue with Facebook"
            disabled={loading}
          >
            <img className="socialIconImg" src={facebookIcon} alt="Facebook" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialMicrosoft"
            onClick={() => handleSocialLogin("microsoft")}
            aria-label="Continue with Microsoft"
            title="Continue with Microsoft"
            disabled={loading}
          >
            <img className="socialIconImg" src={microsoftIcon} alt="Microsoft" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialApple"
            onClick={() => handleSocialLogin("apple")}
            aria-label="Continue with Apple"
            title="Continue with Apple"
            disabled={loading}
          >
            <img className="socialIconImg" src={appleIcon} alt="Apple" />
          </button>
        </div>
      </div>
    </section>
  );
}
