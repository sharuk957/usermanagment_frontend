import React from 'react'
import '../login_components/LoginComponent.css'


function SigninComponentsOne(props) {
    return (
        <div className="login">
            <form className="form">
                <div className="input-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" value={props.firstName} onChange={(e)=>{props.firstNameCheck(e.target.value)}}/>
                    <p>{props.firstNameError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" value={props.lastName} onChange={(e)=>{props.lastNameCheck(e.target.value)}}/>
                    <p>{props.lastNameError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="name@email.com" value={props.email} onChange={(e)=>{props.emailCheck(e.target.value)}}/>
                    <p>{props.emailError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="mobile_number">Phone Number</label>
                    <input type="text" name="mobile_number" placeholder="+91-9784562130" value={props.mobileNumber} onChange={(e)=>{props.mobileNumberCheck(e.target.value)}}/>
                    <p>{props.mobileError}</p>
                </div>
                
            </form>
            <button className="primary" onClick={()=>{props.handleContinue()}}>Continue</button>
            <button className="secondary" onClick={()=>{
                props.navigate('/')
            }}>
            Already have an Account
            </button>
        </div>
    )
}

export default SigninComponentsOne
