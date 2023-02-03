
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import astronauta from "./assets/img/astronauta.png";
import satelite from "./assets/img/satelite.png"

const finderpoke = ({ onChange }) => {
    return (
        <>
            <Navbar bg="dark" className="text-white justify-content-center">
                <Container>
                    <img
                        alt=""
                        src={astronauta}
                        width="250"
                        height="150"
                        className="align-item-center justify-content-center"
                    />

                    <Container className=" bg-dark text-white justify-content-center text-center">
                        {/* <Form onSubmit={onChange}> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h1>Buscar imagenes de rovers</h1>
                            </Form.Label>
                            <Form.Control
                                onChange={onChange}
                                type="text"
                                placeholder="Ingresa modelo de camara"
                            />
                            <Form.Text className="text-muted">
                                Puedes buscar por modelo de camaras: FHAZ, RHAZ, MAST, CHEMCAM,
                                MAHLI, MARDI, NAVCAM, PANCAM, MINITES
                            </Form.Text>
                        </Form.Group>                        
                    </Container>

                    <img
                        alt=""
                        src={satelite}
                        width="250"
                        height="150"
                        className="align-item-center justify-content-center"
                    />
                </Container>
            </Navbar>
        </>
    );
};

export default finderpoke;
