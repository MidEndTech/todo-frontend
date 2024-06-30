import Buttonss from "./Buttonss";

function LeftSide(){
    return(
<div style={styles.menuStyle}>
    <div>
        <Buttonss/>
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
}