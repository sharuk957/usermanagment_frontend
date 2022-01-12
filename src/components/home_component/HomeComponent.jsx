import React from 'react'
import './HomeComponent.css'
import { useState, useEffect } from 'react/cjs/react.development'
import axios from 'axios'

function HomeComponent(props) {
    const [userData, setUserData] = useState('')
    const [token, seToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/accounts',{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            setUserData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        

    }, [])
    return (
        <div >
            <nav className='navbar'>
                <ul>
                    <li>Home</li>
                    <li className='logout-button'><a onClick={()=>{props.logout()}}>logout</a></li>
                </ul>
            </nav>   
            <div className='home-content'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {(userData)?(userData.map((value,key)=>{return(
                            <tr key={key}>
                                <td><img src={value.profile_pic} alt="profile" style={{width:"100px",height:"100px"}} /></td>
                                <td aria-label='First Name'>{value.first_name}</td>
                                <td aria-label='Last Name'>{value.last_name}</td>
                                <td aria-label='Email'>{value.email}</td>
                                <td aria-label='Mobile Number'>{value.mobile_number}</td>
                                <td aria-label='Date of Birth'>{value.date_of_birth}</td>
                                <td aria-label='Address'>{value.address}</td>
                            </tr>
                        )})
                        ):(<></>)}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default HomeComponent
