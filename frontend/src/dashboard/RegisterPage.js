import React, { Fragment, useState } from 'react'
import axios from 'axios';

function RegisterPage() {

    const [data, setData] = useState();

    const getdata = (item) => {
        setData({
            ...data,
            [item.target.name]: item.target.value
        })
        console.log(data);
    }

    const savedata = async () => {
        const response = await axios.post('http://localhost:3500/register', data);
        console.log(response.data);
        alert(response.data.message);
    }

    return (
        <Fragment>
            <h1 className='heading'>REGISTER HERE</h1>
            <div className='main'>
                <div className='container'>
                    <input type='text' placeholder='enter username' name='username' onInput={getdata} />
                    <input type='email' placeholder='enter email' name='email' onInput={getdata} />
                    <input type='number' placeholder='enter mobile' name='mobile' onInput={getdata} />
                    <input type='password' placeholder='enter password' name='password' onInput={getdata} />
                    <button onClick={savedata}>REGISTER</button>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage