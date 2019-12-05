import React, { useState, useEffect } from 'react';
import './blogers.css';
import { Spinner } from 'react-bootstrap';
import { getPeople } from '../../../api/index'



const Blogers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPeople().then(function (data) {
            setData(data)
            setLoading(false)
        });
    }, [])

    return (
        <div className="blogers" >
            <h2>Blogers</h2>
            {loading && <Spinner animation="grow" variant="danger" className="spiner" />}
            {data.map((item) => {
                return <div className='item-bloger' key={item.id}>
                    <img src={item.avatar} alt="" className="phot" />
                    <p> {item.name}</p>
                </div>
            })}
        </div>
    )
}

export default React.memo(Blogers);;