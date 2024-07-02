import logo from './image/p1.png';
import Buttonss from './Components/Buttonss.js';
import Labels from './Components/Labels.js';
import TextFieldAndLabel from './Components/TextFieldAndLabel.js';
import SignUp from './SignUp.js';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


function SignIn() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const SubmitSignUpForm = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('email', Email);
            formData.append('password', Password);
            const response = await axios.post('https://todo.midend.tech/api/login', formData);
            console.log(response.data.message);
            console.log("sent");
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
  return (
  <><div >
          <img style={styles.image_on_the_lift} src={logo} alt="Logo" />
      </div>
      <div style={styles.rightSide}>
        <Labels textStyle={styles.greeting} text="Welcome Back"/>
        <Labels textStyle={styles.pageHeadline} text="Sign in"/>
        <TextFieldAndLabel labelName="email" textFname="Email" typeOfInput="email" textFNameStyle={styles.EmailLabel} 
        placeholderText="enter your email" textFStyle={styles.EmailTextFeild} isRequired={true} FieldValue={Email} onchange={(e)=>{setEmail(e.target.value)}}/>
        <TextFieldAndLabel labelName="password" textFname="Password" typeOfInput="password" textFNameStyle={styles.PasswordLabel} 
        placeholderText="enter your password" textFStyle={styles.PasswordTextFeild} isRequired={true} FieldValue={Password} onchange={(e)=>{setPassword(e.target.value)}}/>
        <Buttonss buttonStyle={styles.sginInButton} buttonName="Sign in" oc={SubmitSignUpForm}/>
        <Labels text="Do not Have an Account? " textStyle={styles.DontHaveAnAccountLabel}  />
        <Link to="/SignUp">
        <Labels text="Sign Up" textStyle={styles.SignInLabel}/>
        </Link>
          </div></>
  );
}

export default SignIn;


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
        left:"300px",
        top:"135px",
        fontFamily:"interSemiBold"

    },
    DontHaveAnAccountLabel:{
        position:"absolute",
        fontSize:"22px",
        left:"180px",
        top:"498px",
        fontFamily:"interSemiBold"
    },
    SignInLabel:{
        position:"absolute",
        fontSize:"22px",
        left:"452px",
        top:"498px",
        fontFamily:"interSemiBold",
        color:"#746FAF",
    },
    sginInButton:{
        backgroundColor:"#746FAF",
        borderRadius:"10px",
        width:"182px",
        height:"53px",
        fontSize:"28px",
        color:"white",
        border:"none",
        position:"absolute",
        left:"275px",
        top:"580px",
    },
    EmailLabel:{
        fontSize:"23px",
        position: "absolute",
        top: "280px",
        left:"175px",
        fontFamily:"interSemiBold",
    },
    EmailTextFeild:{
        position: "absolute",
        top: "315px",
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
    PasswordLabel:{
        fontSize:"21px",
        position: "absolute",
        top: "394px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    PasswordTextFeild:{
        position: "absolute",
        top: "425px",
        left:"175px",
        width:"372px",
        height:"53px",
        borderRadius:"10px",
        border: '1px solid',
        borderColor: '#B4B3B3',
        paddingLeft:"10px",
        fontSize: "19px",
        fontFamily:"interSemiBold",
    }
    
  };

