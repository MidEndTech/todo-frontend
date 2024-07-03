import { useState } from "react";
import Buttonss from "./Buttonss";
import Labels from "./Labels";
import axios from 'axios';


function LeftSide() {
    const [createToDoLists, setToDoLists] = useState('');
    const [showTextField, setShowTextField] = useState(false);
    const [CreatedList, setCreatedList] = useState(null);
    const creatAnewToDoList = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const formData = new FormData();
            formData.append('name', createToDoLists);
            const response = await axios.post('https://todo.midend.tech/api/todolists', formData, config);
            setCreatedList(response.data.name)
            console.log("data is sent");
            console.log("print mmeeeeeeee",response.data);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };

    //get method
// const fetchUserAllTask = async (e) => {
//     try {
//         const token = localStorage.getItem('authToken');
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         const Data = await axios.get('https://todo.midend.tech/api/todolists', config);
//         //setCreatedList(Data.data)
//         console.log(Data.data);
//         console.log("helllllllllllo");
//     } catch (error) {
//         console.log(error);
//     }

// }


    const toggleTextField = () => {
        setShowTextField(!showTextField); // Toggle the state
    };


    return (
        <div style={styles.menuStyle}>
            <div>
                <Labels textStyle={styles.nameLabel} text={"+ Add a New List"} oc={toggleTextField} />
                <div value={createToDoLists} hidden={!showTextField}>
                {/* value={createToDoLists} */}
                <input style={styles.nameTextfeild} type="text" className="name" onChange={(e)=>{setToDoLists(e.target.value)}} placeholder="Enter List Name" hidden={!showTextField} />
                <button style={styles.addNewListButton} onClick={creatAnewToDoList} >Add</button>
                {/* <button onClick={fetchUserAllTask} > save1</button> */}
                </div>
                <p style={{position:"absolute", top:"200px"}}>{CreatedList}</p>
            </div>
        </div>
    );
    // {(e)=>{setPassword(e.target.value)}}
}
export default LeftSide;


const styles = {
    menuStyle: {
        position: "absolute",
        width: "25%",
        backgroundColor: "#EEE7FD",
        height: "100%",

    },
    nameLabel: {
        position: "absolute",
        fontSize:"20px",
        left: "10px",
        top: "550px",
        cursor: "pointer",
        color:"#746FAF",
    },
    nameTextfeild:{
        border: '1px solid',
        position: "absolute",
        borderRadius:"6px",
        borderColor: '#B4B3B3',
        top: "610px",
        left: "20px",
        height: "30px",
        width: "200px",
        borderRadios:"10px",
    },
    addNewListButton:{
        position: "absolute",
        borderRadius:"9px",
        top: "610px",
        left: "230px",
        height: "34px",
        width: "65px",
        backgroundColor:"#746FAF",
        color:"white",
        border:"none",
        fontSize:"18px",

    },
}















//get method
// const fetchUserAllTask = async (e) => {
//     try {
//         const{data} = await axios.get('https://todo.midend.tech/api/todolists');
//         setuserTask(data);
//         console.log(data);
//         console.log("helllllllllllo");
//     } catch (error) {
//         console.log(data);
//     }

// }
