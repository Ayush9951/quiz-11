import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileItem, setMobileItem] = useState(false);
  const handleMobile = () => {
    setMobileItem(!mobileItem);
  };

  return (
    <>
      <div className={styles.navbarContainer}>
        <h1 className={styles.title}>Admin</h1>
        <div className={styles.itemContainer}>
          <div className={styles.item}>Home</div>
          <div className={styles.item}>Add Question</div>
          <div className={styles.item}>View Questions</div>
          <div className={styles.item}>Create Quiz</div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Logout</button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbarContainer}>
        <div className={styles.mobileNavbar}>
          <h1 className={styles.mobileTitle}>Admin</h1>
          {
            <MenuIcon
              fontSize="large"
              onClick={handleMobile}
              sx={{
                flex: 1,
                display: "block",
                maxWidth: "50px",
                color: "white",
              }}
            />
          }
        </div>
        <div
          className={styles.mobileItemContainer}
          style={{ display: mobileItem ? "block" : "none" }}
        >
          <div className={styles.mobileItem}>Home</div>
          <div className={styles.mobileItem}>Add Question</div>
          <div className={styles.mobileItem}>View Questions</div>
          <div className={styles.mobileItem}>Create Quiz</div>
        </div>
        <div
          className={styles.mobileButtonContainer}
          style={{ display: mobileItem ? "block" : "none" }}
        >
          <button className={styles.mobileButton}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
