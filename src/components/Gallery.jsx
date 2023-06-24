import { useState } from "react";
import { sculptureList } from "../data3";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < 11) {
      setIndex(index + 1);
    }
  }
  function handleClickMenos() {
    if (index >= 1) {
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <div className="container">
      <Card className="pos2" style={{ width: "18rem" }}>
        <Card.Img src={sculpture.url} alt={sculpture.alt} />
        <Card.Body>
          <Card.Title>
            {sculpture.name} by {sculpture.artist}
          </Card.Title>
          <Card.Text>
            {sculpture.description}
            <center>
              <h3>
                <Badge bg="secondary">
                  ({index + 1} of {sculptureList.length})
                </Badge>
              </h3>
            </center>
          </Card.Text>
          <Button variant="primary" size="sm" onClick={handleClick}>
            Siguiente
          </Button>{" "}
          <Button variant="primary" size="sm" onClick={handleClickMenos}>
            anterior
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
