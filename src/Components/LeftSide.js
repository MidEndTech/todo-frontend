import Buttonss from "./Buttonss";
import Labels from "./Labels";

function LeftSide(){
    return(
<div style={styles.menuStyle}>
    <div>
        {/* <Buttonss/> */}
        <Labels textStyle={styles.nameLabel} text={"user name here"}/>
    </div>
</div>
    );
}
export default LeftSide;


const styles = {
    menuStyle:{
        position: "absolute",
        width:"25%",
        backgroundColor:"#EEE7FD",
        height: "100%",

    },
    nameLabel:{
        position: "absolute",
        left: "100px",
        top: "10px",
    },
}