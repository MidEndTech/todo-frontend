function ToDoCard ({Titletext, dicreptionText}){

    return(
<div style={styles.cardStyle}>
    <p style={styles.titleTask}>{Titletext}</p>
    <br/>
    <br/>
    <p style={styles.dicreptionTask}>{dicreptionText}</p>
</div>
    );
}
export default ToDoCard;

const styles = {
    cardStyle:{
        backgroundColor: "#EEE7FD",
        marginTop:"15px",
        marginLeft:"20px",
        borderRadius:"6px",
        width:"800px",
        height: "120px",
    },
    titleTask:{
        position:"absolute",
        fontSize:"30px",
        fontFamily:"interSemiBold",
        left:"130px",
    },
    dicreptionTask:{
        position:"absolute",
        fontSize:"22px",
        left:"130px",
    },
}