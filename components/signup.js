import styles from "../styles/Login.module.css";
import React from "react";
import { FaTwitter,FaGoogle,FaFacebook } from "react-icons/fa";

export default function SignUp() {
  return <LoginForm />;
}

class LoginForm extends React.Component {
  render() {
    return (
      <div id={styles.loginform}>
        <FormHeader title="Create Account" />
        <Form />
        <OtherMethods />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id={styles.headerTitle}>{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Email"
      placeholder="Enter your Email Address"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <FormInput
      description="Password"
      placeholder="Confirm password"
      type="password"
    />
    <FormButton title="Sign Up" />
  </div>
);

const FormButton = (props) => (
  <div id={styles.button} className={styles.row}>
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className={styles.row}>
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = (props) => (
  <div id={styles.alternativeLogin}>
    <label>Or sign Up with:</label>
    <div id={styles.iconGroup}>
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = () => <a href="#" id={styles.facebookIcon}><FaFacebook /></a>;

const Twitter = () => <a href="#" id={styles.twitterIcon}><FaTwitter /></a>;

const Google = () => <a href="#" id={styles.googleIcon}><FaGoogle /></a>;

