import React, {  useEffect,useContext } from 'react';
import context from '../../context/context'
import './workspace.css'
import Items from './items';
import ModalWindow from './Modal';
import Header from './header'
import { byId } from '../../api';
import Storage from '../../services/storage'


const WorkSpace = () => {
    const { state, dispatch } = useContext(context)
    const {name, modalShow,id} = state;

    const handleShow = () =>{dispatch({type : "Modal_Show"})};
    const handleClose =() =>{dispatch({type : "Modal_Hide"})}

    useEffect(() => {
        const user = Storage.get('user');
        if (user) {
            byId(user.id).then(data => {
                dispatch({ type: 'GetName', payload: `${data.lastname} ${data.username}`  })
            })
        } else {
            return
        }
    }, [])

    return (
        <div className="main">
            <Header handleShow={handleShow} name={name} id={id}/>
            <ModalWindow show={modalShow} handleClose={handleClose} name={name} id={id} />
            <Items />
        </div >
    )
}

export default React.memo(WorkSpace);