import { Container, Navbar, Nav } from "react-bootstrap";

export function HeaderNav() {

    const navElements = [
        {
            ref: "http://localhost:5173/",
            mess: "Home",
        },
        {
            ref: "http://localhost:5173/firstApp",
            mess: "FirstApp PropTypes",
        },
        {
            ref: "http://localhost:5173/profiles",
            mess: "Profiles",
        },
        {
            ref: "http://localhost:5173/event",
            mess: "Evento",
        },
        {
            ref: "http://localhost:5173/toolbar",
            mess: "Toolbar",
        },
        {
            ref: "http://localhost:5173/signup",
            mess: "Sign Up Here!",
        },
        {
            ref: "http://localhost:5173/usestate",
            mess: "Use State Exercise",
        },
        {
            ref: "http://localhost:5173/dadosgame",
            mess: "juego dados",
        },
        {
            ref: "http://localhost:5173/gallery",
            mess: "GALERIA",
        },
        {
            ref: "http://localhost:5173/apiex",
            mess: "API EJEMPLO",
        },
        {
            ref: "http://localhost:5173/fetch",
            mess: "API con FETCH",
        },
    ]


    return (

        <>
            <Navbar style={{ width: 800 }} bg="light" expand="lg" className="mt-3">
                <Container>
                    <Nav className="me-auto">
                        {navElements.map((elem, i) => (
                            <Nav.Link key={i} href={elem.ref}>
                                {elem.mess}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
