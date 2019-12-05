import React, { useState, useEffect } from 'react';
import './workspace.css'
import Items from './items';
import ModalWindow from './Modal';
import Header from './header'
import { byId } from '../../api';
import Storage from '../../services/storage'


const WorkSpace = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const user = Storage.get('user');
        if (user) {
            byId(user.id).then(data => {
                setName(`${data.lastname} ${data.username}`)
            })
        }
    }, [])

    return (
        <div className="main">
            <Header handleShow={handleShow} name={name} />
            <ModalWindow show={show} handleClose={handleClose} />
            <Items />
        </div >
    )
}

export default React.memo(WorkSpace);