import { adminCardData } from "../../data";

import styles from "./Admin.module.css";

import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          {adminCardData.map((cardData) => {
            return <Card card={cardData} key={cardData.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;
