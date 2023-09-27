import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";


function NavBar() {

    const customStyle = {
        width: '400px', 
      };
    return (
        <>
            <div>
                <Navbar bg="black" variant="dark" expand="lg">
                    <Navbar.Brand>CAMCRAFT</Navbar.Brand>
                    <Form>
                        <div className='row'>
                            <div className='col'>
                                <Form.Group>
                                    <FormControl type="text" placeholder="Search" name="search" style={customStyle}/>
                                </Form.Group>
                            </div>
                            <div className='col'>
                                <Button type="submit" variant="dark">SEARCH</Button>
                            </div>
                        </div>

                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">COURSE</Nav.Link>
                            <Nav.Link as={Link} to="/contact">PROFILE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
               
            </div>

        </>
    );
}

export default NavBar;
