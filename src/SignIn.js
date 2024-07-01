import logo from './image/p1.png';
import Buttonss from './Components/Buttonss.js';
import Labels from './Components/Labels.js';
import TextFieldAndLabel from './Components/TextFieldAndLabel.js';
import SignUp from './SignUp.js';
import { Link, useNavigate } from 'react-router-dom';


function SignIn() {
    const Navigate = useNavigate();
    const handleSignIn = () => {
        // Perform sign-in logic here
        // If successful, navigate to the SignUp page
        Navigate('/SignUp');
      };
  return (
  <><div >
          <img style={styles.image_on_the_lift} src={logo} alt="Logo" />
      </div>
      <div style={styles.rightSide}>
        <Labels textStyle={styles.greeting} text="Welcome Back"/>
        <Labels textStyle={styles.pageHeadline} text="Sign in"/>
        <TextFieldAndLabel labelName="email" textFname="Email" typeOfInput="email" textFNameStyle={styles.EmailLabel} 
        placeholderText="enter your email" textFStyle={styles.EmailTextFeild} isRequired={true}/>
        <TextFieldAndLabel labelName="password" textFname="Password" typeOfInput="password" textFNameStyle={styles.PasswordLabel} 
        placeholderText="enter your password" textFStyle={styles.PasswordTextFeild} isRequired={true}/>
        <Buttonss buttonStyle={styles.sginInButton} buttonName="Sign in" oc={handleSignIn} />
        <Labels text="Do not Have an Account? Sign Up" textStyle={styles.DontHaveAnAccountLabel}  />
        {/* <button onClick={handleSignIn}>nh</button> */}
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

