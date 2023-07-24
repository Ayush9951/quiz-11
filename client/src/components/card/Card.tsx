import styles from "./Card.module.css";
import { CardPropTypes } from "./CardPropTypes";

const Card = (props: CardPropTypes) => {
  return (
    <div className={styles.container}>
      <img src={require(`../../images/${props.card.img}`)} alt="card image" />
      <p>{props.card.info}</p>
      <button onClick={props.callback} className={styles.button}>
        {props.card.buttonText}
      </button>
    </div>
  );
};

export default Card;
