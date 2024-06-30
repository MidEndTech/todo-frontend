

function TextFieldAndLabel({textFname , textFNameStyle,labelName, textFStyle, typeOfInput, placeholderText, FieldValue, isRequired}){
    return(
        <div>
        <label style={textFNameStyle} htmlFor={labelName}>{textFname}</label>
        <input type={typeOfInput} className={labelName} style={textFStyle} placeholder={placeholderText} value={FieldValue} required={isRequired}/>
        </div>
    );
}
export default TextFieldAndLabel;