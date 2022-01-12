import React, { useState } from 'react'
import SigninComponentsTwo from '../../components/signin_components/SigninComponentsTwo'
import SigninComponentsOne from '../../components/signin_components/SigninComponentsOne'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

function SigninPage() {
    const [changeWindow,setChangeWindow] = useState(false)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [mobileNumber,setMobileNumber] = useState('')
    const [address,setAddress] = useState('')
    const [profilePic,setProfilePic] = useState('')
    const [password,setPassword] = useState('')
    const [dob,setDob] = useState('')
    const [firstNameError,setFirstNameError] = useState('')
    const [lastNameError,setLastNameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [mobileError,setMobileError] = useState('')
    const [addressError,setAddressError] = useState('')
    const [profilePicError,setProfilePicError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [dobError,setDobError] = useState('')
    const [error,setError] = useState('')
    const [preview,setPreview] = useState('')
    const navigate = useNavigate()


    const emailCheck = (emailvalue)=>{
        setEmail(emailvalue)
        const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
        if (emailvalue == ""){
            setEmailError("required field")
            return false
        }
        else if(emailvalue.match(pattern)){
            setEmailError("")
            return true
        }
        else{
            setEmailError("email id is not correct")
            return false
        }
    }

    const firstNameCheck = (firstnamevalue)=>{
        setFirstName(firstnamevalue)
        if (firstnamevalue == ""){
            setFirstNameError("required field")
            return false
        }
        else if(!(firstnamevalue.match(/^[a-zA-Z ]+$/))){
            setFirstNameError("Character only")
            return false
        }else if(firstnamevalue.length < 3){
            setFirstNameError("atleast 3 character")
            return false
        }else{
            setFirstNameError('')
            return true
        }
    }

    const lastNameCheck = (namevalue)=>{
        setLastName(namevalue)
        if (namevalue == ""){
            setLastNameError("required field")
            return false
        }
        else if(!(namevalue.match(/^[a-zA-Z ]+$/))){

            setLastNameError("Character only")
            return false
        }else if(namevalue.length < 2){
            setLastNameError("atleast 3 character")
            return false
        }else{
            setLastNameError('')
            return true
        }
    }
    const mobileNumberCheck = (mobilenumber)=>{
        setMobileNumber(mobilenumber)
        if (mobilenumber == ''){
            setMobileError('Required field')
            return false
        }
        else if(!mobilenumber.match(/^\+[0-9]{1,2}-+[0-9][-\s\./0-9]*$/g)){
            setMobileError("invalid format")
            return false
        }
        else if (mobilenumber.length<14){
            setMobileError("invalid number")
            return false
        }
        else if (mobilenumber.length>14){
            setMobileError("digit exeeded")
            return false
        }
        else{
            setMobileError('')
            return true
        }
    }
    const addressCheck = (addressvalue)=>{
        setAddress(addressvalue)
        if (addressvalue == ''){
            setAddressError('required field')
            return false

        }else{
            setAddressError('')
            return true
        }
    }

    const profilePicCheck = (profilevalue)=>{
        setProfilePic(profilevalue)
        if(profilevalue){
            const objectUrl = URL.createObjectURL(profilevalue)
            setPreview(objectUrl)
        }
        if(profilevalue == ''){
            setProfilePicError('required field')
            return false

        }else{
            setProfilePicError('')
            return true
        }
    }
    const passwordCheck = (passwordvalue)=>{
        setPassword(passwordvalue)
        if (passwordvalue == ''){
            setPasswordError('required field')
            return false
        }else if(passwordvalue.length < 4){
            setPasswordError("minimum 4 digits or characters")
            return false
        }
        else{
            setPasswordError('')
            return true
        }
    }

    const dateOfBirthCheck = (dateofbirth)=>{
        setDob(dateofbirth)
        if (dateofbirth == ''){
            setDobError('requierd field')
            return false
        }
        else{
            setDobError('')
            return true
        }
    }
    const handleContinue = ()=>{
        const firstNameFlag = firstNameCheck(firstName)
        const lastNameFlag = lastNameCheck(lastName)
        const emailFlag = emailCheck(email)
        const mobileNumberFlag = mobileNumberCheck(mobileNumber)
        if (firstNameFlag && lastNameFlag && emailFlag &&  mobileNumberFlag){
            setChangeWindow(true)
        }
        
    }
    const handleSubmit = ()=>{

        const profileFlag = profilePicCheck(profilePic)
        const addressFlag = addressCheck(address)
        const dobFlag = dateOfBirthCheck(dob)
        const passwordFlag = passwordCheck(password)

        if (profileFlag && addressFlag  && dobFlag && passwordFlag){
            
            const uploadData = new FormData();

            uploadData.append('first_name',firstName)
            uploadData.append('last_name',lastName)
            uploadData.append('email',email)
            uploadData.append('mobile_number',mobileNumber)
            uploadData.append('profile_pic',profilePic,profilePic.name)
            uploadData.append('address',address)
            uploadData.append('date_of_birth',dob)
            uploadData.append('password',password)

            axios.post('http://127.0.0.1:8000/registration/',uploadData)
            .then((res)=>{
                console.log(res)
                alert('user registered successfully')
                navigate('/')
            })
            .catch((error)=>{
                setError("email id already registered")
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
            {(changeWindow)?(
                <SigninComponentsTwo passwordCheck={passwordCheck} addressCheck={addressCheck} profilePicCheck={profilePicCheck}
                    dateOfBirthCheck={dateOfBirthCheck} setChangeWindow={setChangeWindow} password={password} address={address} dob={dob} 
                    passwordError={passwordError} profilePicError={profilePicError} error={error} dobError={dobError} addressError={addressError} handleSubmit={handleSubmit} preview={preview} navigate={navigate}/>
                ):
                (<SigninComponentsOne  emailCheck={emailCheck} mobileNumberCheck={mobileNumberCheck} firstNameCheck={firstNameCheck} 
                    lastNameCheck={lastNameCheck} handleContinue={handleContinue} email={email} mobileNumber={mobileNumber}
                    firstName={firstName} lastName={lastName} firstNameError={firstNameError} lastNameError={lastNameError}
                    mobileError={mobileError} emailError={emailError} error={error} navigate={navigate}/>
                )}
            

            
        </div>
    )
}

export default SigninPage
