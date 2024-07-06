import Labels from "./Labels";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signOutImage from './../image/logout.png';

function LogOut(){
    const navigate = useNavigate();
    const logOut = async (e) => {
        try {
                const token = localStorage.getItem('authToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            console.log("i am the curent token",token);
            const reapons = await axios.post("https://todo.midend.tech/api/logout",null,config);
            localStorage.removeItem('authToken');
            const updatedToken = localStorage.getItem('authToken');
            console.log('Updated token:', updatedToken);
            console.log(reapons.data.message);
            navigate('/SignIn');
        } catch (error) {
            console.log(error.message);
        }

    }


    return(

        <div>
            <Labels textStyle={styles.LogOutStyle} oc={logOut} text={"Sign Out"}/>
            <img src={signOutImage} style={styles.LogOutImgStyle}/>
        </div>

    );
}
export default LogOut;

const styles = {
    LogOutStyle:{
        position: "absolute",
        fontSize: "20px",
        left: "280px",
        top: "680px",
        cursor: "pointer",
        fontFamily:"interSemiBold",
    },
    LogOutImgStyle:{
        position: "absolute",
        left: "254px",
        top: "702px",
        cursor: "pointer",
        width: "20px",
        height: "20px",
    }
}