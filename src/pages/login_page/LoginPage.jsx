import React, { useState } from 'react'
import LoginComponent from '../../components/login_components/LoginComponent'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

function LoginPage() {
    const navigate = useNavigate()
    const [email,setEmail] =  useState('')
    const [password,setPassword] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [error,setError] = useState('')

    const checkPassword = ()=>{
        if (password ==""){
            setPasswordError("required field")
            return false
        }
        else if(password.length < 4){
            setPasswordError("atleast 4 character required")
            return false
        }
        else{
            setPasswordError("")
            return true
        }
    }
    const checkEmail= ()=>{
        const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
        if (email == ""){
            setEmailError("required field")
            return false
        }
        else if(email.match(pattern)){
            setEmailError("")
            return true
        }
        else{
            setEmailError("email id is not correct")
            return false
        }
    }
    const handleSubmit = ()=>{
        const emailFlag = checkEmail()
        const passwordFlag = checkPassword()
        if (emailFlag && passwordFlag ){
            const data ={
                'email' : email,
                'password':password
            }
            axios.post('http://127.0.0.1:8000/login',data)
            .then((res)=>{
                console.log(res)
                localStorage.setItem('token',res.data.access)
                navigate('/Home')
            })
            .catch((error)=>{
                setError("Invalid credentials")
            })

        }

    }
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/Home')
        }
        
    }, [])
    return (
        <div>
            <LoginComponent setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} email={email} 
                    password={password} emailError={emailError} passwordError={passwordError} error={error} navigate={navigate}/>
        </div>
    )
}

export default LoginPage
