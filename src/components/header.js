import React from 'react';
import Logo from './logo';
import Search from './search';
import { getResponse } from './../api/api';
import { Container, Navbar, Button} from 'react-bootstrap';

const users = [];


class Header extends React.Component {
    render() {
        return(
            <div className="bg-secondary">
                <Container className="mb-3">
                    <Navbar  className="custom d-flex justify-content-between">
                        <Logo />
                        <Search />
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;
export {users};