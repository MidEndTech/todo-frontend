function Buttonss({buttonName, buttonStyle,buttonAction,oc}){
    return(
<button style={buttonStyle} onChange={buttonAction} type="submit" >{buttonName} </button>
    );
}
export default Buttonss;

