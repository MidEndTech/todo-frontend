function Buttonss({buttonName, buttonStyle,buttonAction,oc}){
    return(
<button style={buttonStyle} onClick={oc} onChange={buttonAction} type="submit" >{buttonName} </button>
    );
}
export default Buttonss;

