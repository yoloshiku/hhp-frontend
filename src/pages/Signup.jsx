import { Link } from "react-router-dom";
import "./Signup.css";

import googleIcon from "../assets/social/google.svg";
import facebookIcon from "../assets/social/facebook.svg";
import appleIcon from "../assets/social/apple.svg";

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up real signup later
  };

  const onSocial = (provider) => {
    // TODO: hook up OAuth later
    console.log("Social signup:", provider);
  };

  return (
    <section className="authPage">
      <div className="authContainer">
        <h1 className="authTitle">Sign up</h1>

        <p className="authSubtitle">
          Join the HHP movement today. If you are already a member, please{" "}
          <Link className="authLink" to="/login">
            log in here
          </Link>
        </p>

        <form className="authForm" onSubmit={onSubmit}>
          <label className="authLabel" htmlFor="firstName">
            First Name:*
          </label>
          <input className="authInput" id="firstName" name="firstName" type="text" />

          <label className="authLabel" htmlFor="lastName">
            Last Name:*
          </label>
          <input className="authInput" id="lastName" name="lastName" type="text" />

          <label className="authLabel" htmlFor="username">
            Username:*
          </label>
          <input className="authInput" id="username" name="username" type="text" />

          <label className="authLabel" htmlFor="email">
            Email:*
          </label>
          <input className="authInput" id="email" name="email" type="email" />

          <label className="authLabel" htmlFor="password">
            Password:*
          </label>
          <div className="authPasswordRow">
            <input className="authInput authInputPassword" id="password" name="password" type="password" />
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

          <label className="authLabel" htmlFor="confirmPassword">
            Password Confirmation:*
          </label>
          <div className="authPasswordRow">
            <input
              className="authInput authInputPassword"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />
            <button
              type="button"
              className="authEyeBtn"
              aria-label="Toggle confirm password visibility"
              onClick={() => {
                const el = document.getElementById("confirmPassword");
                if (!el) return;
                el.type = el.type === "password" ? "text" : "password";
              }}
            >
              👁
            </button>
          </div>

          <label className="authNewsletter">
            <input type="checkbox" />
            <span>
              Subscribe to our Newsletter and keep updated on our Learning Academy courses, Patient Advocacy
              Workshops, Shared Patient Information and Online Events.
            </span>
          </label>

          <button className="authPrimaryBtn" type="submit">
            Join Us
          </button>
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
            aria-label="Sign up with Google"
            title="Sign up with Google"
          >
            <img className="socialIconImg" src={googleIcon} alt="Google" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialFacebook"
            onClick={() => onSocial("facebook")}
            aria-label="Sign up with Facebook"
            title="Sign up with Facebook"
          >
            <img className="socialIconImg" src={facebookIcon} alt="Facebook" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialApple"
            onClick={() => onSocial("apple")}
            aria-label="Sign up with Apple"
            title="Sign up with Apple"
          >
            <img className="socialIconImg" src={appleIcon} alt="Apple" />
          </button>
        </div>
      </div>
    </section>
  );
}
