import Modal from "@mui/material/Modal";
import styles from "./SignUp.module.css";

import CloseIcon from "@mui/icons-material/Close";

export default function SignUp(props: any) {
  return (
    <div>
      <Modal open={props.open} onClose={props.closeModal}>
        <div className={styles.container}>
          <CloseIcon
            sx={{ float: "right", cursor: "pointer" }}
            onClick={props.closeModal}
          />
          <h1 className={styles.title}>Sign up</h1>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="title">
              Email
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="title">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="branch">
              Branch
            </label>
            <select className={styles.select} name="branch" id="branch">
              <option
                className={styles.option}
                value="computer science engineering"
              >
                Computer Science Engineering
              </option>
              <option className={styles.option} value="front end development">
                Front end
              </option>

              <option className={styles.option} value="other">
                other
              </option>
            </select>
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="title">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="title">
              Confirm password
            </label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className={styles.button}>Sign Up</button>
        </div>
      </Modal>
    </div>
  );
}
