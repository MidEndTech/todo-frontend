function Labels({text , textStyle,oc}){
    return(
        <div>
        <p style={textStyle} onClick={oc}>{text}</p>
        </div>
    );
}
export default Labels;