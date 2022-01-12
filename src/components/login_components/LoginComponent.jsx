import React from 'react'
import './LoginComponent.css'


function LoginComponent(props) {
    return (
        <div className="login">
            <form className="form">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="name@email.com" value={props.email} onChange={(e)=>{props.setEmail(e.target.value)}}/>
                    <p>{props.emailError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}}/>
                    <p>{props.passwordError}</p>
                </div>
            </form>
            <button className="primary" onClick={()=>{props.handleSubmit()}}>Submit</button>
                <p>{props.error}</p>
            <button className="secondary" onClick={()=>{
                props.navigate('/Register')
            }}>
            Create An Account
            </button>
        </div>
    )
}

export default LoginComponent
