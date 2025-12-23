import { Link } from "react-router-dom";
import "./Login.css";

import googleIcon from "../assets/social/google.svg";
import facebookIcon from "../assets/social/facebook.svg";
import appleIcon from "../assets/social/apple.svg";
import microsoftIcon from "../assets/social/microsoft.svg";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up real auth later
  };

  const onSocial = (provider) => {
    // TODO: hook up OAuth later
    console.log("Social login:", provider);
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

        <form className="authForm" onSubmit={onSubmit}>
          <label className="authLabel" htmlFor="username">
            Username
          </label>
          <input
            className="authInput"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder=""
          />

          <label className="authLabel" htmlFor="password">
            Password
          </label>
          <div className="authPasswordRow">
            <input
              className="authInput authInputPassword"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=""
            />
            <button
              type="button"
              className="authEyeBtn"
              aria-label="Toggle password visibility"
              onClick={() => {
                const el = document.getElementById("password");
                if (!el) return;
                el.type = el.type === "password" ? "text" : "password";
              }}
            >
              👁
            </button>
          </div>

          <label className="authRemember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>

          <button className="authPrimaryBtn" type="submit">
            Log In
          </button>

          <div className="authFooterLinks">
            <a className="authLink" href="#" onClick={(e) => e.preventDefault()}>
              Forgot Password
            </a>
          </div>
        </form>

        <div className="authDivider">
          <span className="authDividerLine" />
          <span className="authDividerText">OR</span>
          <span className="authDividerLine" />
        </div>

        <div className="authSocialRow">
          <button
            type="button"
            className="socialIconBtn socialGoogle"
            onClick={() => onSocial("google")}
            aria-label="Continue with Google"
            title="Continue with Google"
          >
            <img className="socialIconImg" src={googleIcon} alt="Google" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialFacebook"
            onClick={() => onSocial("facebook")}
            aria-label="Continue with Facebook"
            title="Continue with Facebook"
          >
            <img className="socialIconImg" src={facebookIcon} alt="Facebook" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialMicrosoft"
            aria-label="Continue with Microsoft"
            title="Continue with Microsoft"
          >
            <img className="socialIconImg" src={microsoftIcon} alt="Microsoft" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialApple"
            onClick={() => onSocial("apple")}
            aria-label="Continue with Apple"
            title="Continue with Apple"
          >
            <img className="socialIconImg" src={appleIcon} alt="Apple" />
          </button>


        </div>
      </div>
    </section>
  );
}
