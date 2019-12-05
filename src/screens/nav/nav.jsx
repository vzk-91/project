import React from 'react';
import './nav.css';
import { Nav } from 'react-bootstrap';
import Storage from '../../services/storage'

const Navigate = () => {

    return (
        <Nav fill variant="tabs"  >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">{Storage.get("user") ? 'Log Out' : 'Log In'}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/registration" >Registration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/workspace" >Post</Nav.Link>
            </Nav.Item>
        </Nav>

    )
}

export default Navigate;