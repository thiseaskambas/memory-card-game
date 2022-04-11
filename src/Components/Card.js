import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick} id={props.id}>
      <p>{props.title}</p>
      <img src={props.src} />
      <div className="img-container"></div>
    </div>
  );
};

export default Card;
