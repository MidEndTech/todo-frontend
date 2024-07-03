import logo from './image/p1.png';
import Labels from './Components/Labels';
import TextFieldAndLabel from './Components/TextFieldAndLabel';
import Buttonss from './Components/Buttonss';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';



function SignUp(){
    const navigate = useNavigate();

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConformPassword, setconformPassword] = useState('')

    const SubmitSignUpForm = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', Name);
            formData.append('email', Email);
            formData.append('password', Password);
            formData.append('password_confirmation', ConformPassword);
    
            const response = await axios.post('https://todo.midend.tech/api/register', formData);
            console.log(response.data.message);
            console.log("data is sent");
            navigate('./AllTasksPage');
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
      <Labels textStyle={styles.pageHeadline} text="Sign Up"/>
      <form>
      <TextFieldAndLabel labelName="name" textFname="name" typeOfInput="text" textFNameStyle={styles.NameLabel} 
        placeholderText="enter your name" textFStyle={styles.NameTextFeild} isRequired={true} FieldValue={Name}
        onchange={(e)=>{setName(e.target.value)}}/>
      <TextFieldAndLabel labelName="email" textFname="email" typeOfInput="email" textFNameStyle={styles.EmailLabel} 
        placeholderText="enter your email" textFStyle={styles.EmailTextFeild} isRequired={true} FieldValue={Email}
        onchange={(e)=>{setEmail(e.target.value)}}/>
      <TextFieldAndLabel labelName="password" textFname="password" typeOfInput="password" textFNameStyle={styles.PasswordLabel} 
        placeholderText="enter your password" textFStyle={styles.PasswordTextFeild} isRequired={true} FieldValue={Password}
        onchange={(e)=>{setPassword(e.target.value)}}/>
        <TextFieldAndLabel labelName="password_confirmation" textFname="password conformation" typeOfInput="password" textFNameStyle={styles.PasswordConLabel} 
        placeholderText="enter your password again" textFStyle={styles.PasswordConTextFeild} isRequired={true} FieldValue={ConformPassword}
        onchange={(e)=>{setconformPassword(e.target.value)}}/>
      <Labels text="Already Have an Account? " textStyle={styles.AlreadyHaveAnAccountLabel}/>
      <Link to={'/SignIn'}>
      <Labels text="Sign In" textStyle={styles.SignInLabel}/>
      </Link>
      <Buttonss buttonStyle={styles.sginUpButton} oc={SubmitSignUpForm} buttonName="Sign up"/>
      </form>
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
    pageHeadline:{
        position: "absolute",
        fontSize: "40px" ,
        left:"284px",
        top:"60px",
        fontFamily:"interSemiBold"
    },
    NameLabel:{
        fontSize:"23px",
        position: "absolute",
        top: "175px",
        left:"177px",
        fontFamily:"interSemiBold",
    },
    EmailLabel:{
        fontSize:"21px",
        position: "absolute",
        top: "281px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    NameTextFeild:{
        position: "absolute",
        top: "205px",
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
        top: "307px",
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
        top: "382px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    PasswordTextFeild:{
        position: "absolute",
        top: "410px",
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
        top:"565px",
        fontFamily:"interSemiBold"
    },
    SignInLabel:{
        position:"absolute",
        fontSize:"22px",
        left:"465px",
        top:"565px",
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
        top:"635px",
    },
    PasswordConLabel:{
        fontSize:"21px",
        position: "absolute",
        top: "484px",
        left:"179px",
        fontFamily:"interSemiBold",
    },
    PasswordConTextFeild:{
        position: "absolute",
        top: "510px",
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
}
