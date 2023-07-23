import { adminCardData } from "../../data";

import styles from "./Admin.module.css";

import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { useState } from "react";
import Question from "../../components/addQuestion/Question";

const Admin = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          {/* {adminCardData.map((cardData) => {
            return <Card card={cardData} key={cardData.id} />;
          })} */}

          <Card callback={handleOpen} card={adminCardData[0]} />
          <Card card={adminCardData[1]} />
          <Card card={adminCardData[2]} />
          <Card card={adminCardData[3]} />
        </div>
      </div>
      <Question open={open} closeModal={closeModal} />
    </>
  );
};

export default Admin;
