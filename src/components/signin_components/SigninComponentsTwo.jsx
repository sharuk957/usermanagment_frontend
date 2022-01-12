import React from 'react'
import '../login_components/LoginComponent.css'

function SigninComponentsTwo(props) {
    return (
        <div className="login">
            <form className="form">
            <div className="input-group">
                    <div className='custom-file'>
                        <input className='custom' type="file" id='file' name="profile_pic"  onChange={(e)=>{props.profilePicCheck(e.target.files[0])}}/>
                        <label htmlFor="file">Choose an image</label>
                        <img src={props.preview} id='profile_id'></img>
                    </div>
                    <p>{props.profilePicError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <textarea name="address" cols="30" rows="5" onChange={(e)=>{
                        props.addressCheck(e.target.value)
                    }}>{props.address}</textarea>
                    <p>{props.addressError}</p>

                </div>
                
                <div className="input-group">
                    <label htmlFor="date_of_birth">Date of Birth</label>
                    <input type="date" name="date_of_birth" onChange={(e)=>{props.dateOfBirthCheck(e.target.value)}}/>
                    <p>{props.dobError}</p>

                </div>
                
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={props.password} onChange={(e)=>{props.passwordCheck(e.target.value)}}/>
                    <p>{props.passwordError}</p>

                </div>
                
            </form>
            <button className="primary" onClick={()=>{
                    props.handleSubmit()
                }}>Submit</button>
                <p>{props.error}</p>
                <button className="primary" onClick={()=>{
                    props.setChangeWindow(false)
                }}>Back</button>
            <button className="secondary" onClick={()=>{
                props.navigate('/')
            }}>
            Already have an Account
            </button>
        </div>
    )
}

export default SigninComponentsTwo
