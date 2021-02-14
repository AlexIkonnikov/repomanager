import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './../img/gikon.png'

class Logo extends React.Component {
    render() {
        return(
            <Image src={logo} fluid className="mr-5" />
        );
    }
}

export default Logo;