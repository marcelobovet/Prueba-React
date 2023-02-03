import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const CardItem = ({ item }) => {
    return (
        <Container>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img_src} />
                <Card.Body>
                    <Card.Title>{item.id}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Fecha: {item.earth_date}</ListGroup.Item>
                    <ListGroup.Item>Camara: {item.camera.full_name}</ListGroup.Item>
                    <ListGroup.Item>Rover: {item.rover.name}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default CardItem;
