import React, { useContext } from 'react';
import Storage from '../../services/storage';
import context from '../../context/context'
import { logOut } from '../../api/index'
import { Button } from 'react-bootstrap'

const LogOut = (props) => {
    const { state, dispatch } = useContext(context)

    const userLogOut = () => {
        const token = Storage.get('user').token
        logOut(token).then(() => {
            Storage.remove('user');
            dispatch({ type: 'LOGOUT' })
            props.history.push('/home')
        })
    }

    const cancelLogin = ()=>{
        props.history.push('/home')
    }
    return (
        <div className="logout">
            <div>Are You Shure</div>
            <div className="btnloguot">
                <Button variant="dark" onClick={cancelLogin}>Cancel</Button>
                <Button variant="danger" className="btnloguot" onClick={userLogOut}>ok</Button>
            </div>
        </div>
    )
}

export default LogOut;