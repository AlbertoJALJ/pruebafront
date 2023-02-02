import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Layout = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {

    const styles = {
        link: {
            color: "white",
            textDecoration: "none",
            alignSelf: "center",
        }
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Inicio</Navbar.Brand>
                    <Nav className="me-auto" style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <Link style={styles.link} to={"/locations"}>Locations</Link>
                        <Link style={styles.link} to={"/admin"}>Admin</Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                {props.children}
            </Container>

        </>
    )
}

export default Layout