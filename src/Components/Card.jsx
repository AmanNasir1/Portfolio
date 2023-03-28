import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import Code from "../Assets/coding.png";
import Link from "../Assets/external-link.png";
function Cards(props) {
  return (
    <Card className="card">
      <Card.Img className="cardImage" variant="top" src={props.src} />
      <Card.Body>
        <Card.Title className="cardTitle">{props.name}</Card.Title>
        <div className="card-btn">
          <a href="#">
            <img src={Code} />{" "}
          </a>
          <a href="#">
            {" "}
            <img src={Link} />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
