

function TextFieldAndLabel({textFname , textFNameStyle,labelName, textFStyle, typeOfInput, placeholderText, FieldValue, isRequired, onchange}){
    return(
        <div>
        <label style={textFNameStyle} htmlFor={labelName}>{textFname}</label>
        <input type={typeOfInput} className={labelName} style={textFStyle} placeholder={placeholderText} value={FieldValue} required={isRequired} onChange={onchange}/>
        </div>
    );
}
export default TextFieldAndLabel;