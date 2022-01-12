import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import HomeComponent from '../../components/home_component/HomeComponent'


function HomePage() {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
        
    }, [])
    return (
        <div>
            <HomeComponent  logout={logout}/>
        </div>
    )
}

export default HomePage
