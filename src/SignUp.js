import logo from './image/p1.png';
import Labels from './Components/Labels';
import TextFieldAndLabel from './Components/TextFieldAndLabel';
import Buttonss from './Components/Buttonss';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
// import { response } from 'r'

function SignUp(){

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const SubmitSignUpForm = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', Name);
            formData.append('email', Email);
            formData.append('password', Password);
    
            const response = await axios.post('https://todo.midend.tech/api/register', formData);
            console.log(response.data.message);
            // You can navigate to another page here if needed
            // Example: navigate('/SignIn');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };
    
    return(
<div>
    <div>
        <img style={styles.image_on_the_lift} src={logo} alt="Logo" />
    </div>
    <div style={styles.rightSide}>
      <Labels textStyle={styles.greeting} text="Welcome"/>
      <Labels textStyle={styles.pageHeadline} text="Sign Up"/>
      <TextFieldAndLabel labelName="name" textFname="Name" typeOfInput="text" textFNameStyle={styles.NameLabel} 
        placeholderText="enter your name" textFStyle={styles.NameTextFeild} isRequired={true} FieldValue={Name}
        onchange={(e)=>{setName(e.target.value)}}/>
      <TextFieldAndLabel labelName="email" textFname="Email" typeOfInput="email" textFNameStyle={styles.EmailLabel} 
        placeholderText="enter your email" textFStyle={styles.EmailTextFeild} isRequired={true} FieldValue={Email}
        onchange={(e)=>{setEmail(e.target.value)}}/>
      <TextFieldAndLabel labelName="password" textFname="Password" typeOfInput="password" textFNameStyle={styles.PasswordLabel} 
        placeholderText="enter your password" textFStyle={styles.PasswordTextFeild} isRequired={true} FieldValue={Password}
        onchange={(e)=>{setPassword(e.target.value)}}/>
      <Labels text="Already Have an Account? " textStyle={styles.AlreadyHaveAnAccountLabel}/>
      <Link to={'/SignIn'}>
      <Labels text="Sign In" textStyle={styles.SignInLabel}/>
      </Link>
      <Buttonss buttonStyle={styles.sginUpButton} oc={SubmitSignUpForm} buttonName="Sign up"/>
      <button type='submit' onClick={SubmitSignUpForm}>ccc</button>
    </div>
</div>
    );
}
export default SignUp;


const styles = {
    image_on_the_lift: {
        width: "50%",
        height: "45%",
        paddingTop: '8%',
        body :"background-color: red",
    },
    rightSide:{
        position: "absolute",
        top: 0,
        right: 0,
        width: "48%",
        height: "100%",
        backgroundColor: "#EFE7FE",

    },
    greeting:{
        position: "absolute",
        fontSize: "55px" ,
        fontFamily:"interSemiBold",
        left:"77px",
        top:"4px",
    },
    pageHeadline:{
        position: "absolute",
        fontSize: "40px" ,
        left:"284px",
        top:"125px",
        fontFamily:"interSemiBold"
    },
    NameLabel:{
        fontSize:"23px",
        position: "absolute",
        top: "244px",
        left:"177px",
        fontFamily:"interSemiBold",
    },
    EmailLabel:{
        fontSize:"21px",
        position: "absolute",
        top: "352px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    NameTextFeild:{
        position: "absolute",
        top: "280px",
        left:"175px",
        width:"372px",
        height:"55px",
        borderRadius:"10px",
        border: '1px solid',
        borderColor: '#B4B3B3',
        paddingLeft:"10px",
        fontSize: "19px",
        fontFamily:"interSemiBold",
    },
    EmailTextFeild:{
        position: "absolute",
        top: "382px",
        left:"175px",
        width:"372px",
        height:"53px",
        borderRadius:"10px",
        border: '1px solid',
        borderColor: '#B4B3B3',
        paddingLeft:"10px",
        fontSize: "19px",
        fontFamily:"interSemiBold",
    },
    PasswordLabel:{
        fontSize:"21px",
        position: "absolute",
        top: "450px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    PasswordTextFeild:{
        position: "absolute",
        top: "480px",
        left:"175px",
        width:"372px",
        height:"53px",
        borderRadius:"10px",
        border: '1px solid',
        borderColor: '#B4B3B3',
        paddingLeft:"10px",
        fontSize: "19px",
        fontFamily:"interSemiBold",
    },
    AlreadyHaveAnAccountLabel:{
        position:"absolute",
        fontSize:"22px",
        left:"180px",
        top:"540px",
        fontFamily:"interSemiBold"
    },
    SignInLabel:{
        position:"absolute",
        fontSize:"22px",
        left:"465px",
        top:"540px",
        fontFamily:"interSemiBold",
        color:"#746FAF",
    },
    sginUpButton:{
        backgroundColor:"#746FAF",
        borderRadius:"10px",
        width:"182px",
        height:"53px",
        fontSize:"28px",
        color:"white",
        border:"none",
        position:"absolute",
        left:"275px",
        top:"610px",
    },
}
