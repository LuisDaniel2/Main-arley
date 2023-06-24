import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



export function Apiex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
        <h1>Articulos</h1>
        <div className="pos">
          {data.map((post) => (
            
            <Card style={{ width: "20rem",margin: "15px", alignItems: "center", padding: "8px"}}>
              <Card.Img
                variant="top"
                src={post.image}
                style={{ width: "4rem"  }}
              />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>$ {post.status}</Card.Text>
                <Card.Text>{post.species}</Card.Text>
               
              </Card.Body>
              <Button variant="primary" style={{width: "100%"}}>Add Carrito</Button>
            </Card>
          ))}
      </div>
      </div>
    
  );
}

