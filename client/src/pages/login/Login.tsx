import { useState } from "react";
import styles from "./Login.module.css";
import SignUp from "../signup/SignUp";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: any) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={require("../../images/login.png")}
          alt="logo"
        />
        <form className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <input
            className={styles.input}
            onChange={handleInput}
            name="email"
            value={input.email}
            placeholder="Email"
            type="email"
          />
          <input
            className={styles.input}
            onChange={handleInput}
            name="password"
            value={input.password}
            placeholder="Password"
            type="password"
          />
          <button className={styles.button}>Login</button>
          <a className={styles.link} onClick={handleOpen}>Create Account</a>
        </form>
      </div>
      <SignUp open={open} closeModal={handleClose} />
    </>
  );
};

export default Login;
