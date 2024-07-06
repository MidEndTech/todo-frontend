import { useState, useEffect } from "react";
import Labels from "./Labels";
import axios from 'axios';
import { useListId } from "../Context/ListIdContext";
import LogOut from "./LogOut";

function LeftSide() {
    const {setId} = useListId(); 
    const [createToDoLists, setToDoLists] = useState('');
    const [showTextField, setShowTextField] = useState(false);
    const [CreatedList, setCreatedList] = useState([]);

    console.log(CreatedList);
  

    useEffect(() => {
        fetchUserAllTask()
    }, []);



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
             console.log("data is sent",CreatedList);
             await fetchUserAllTask();
        } catch (error) {
            console.error('API Error', error.response);
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };

    //get method
    const fetchUserAllTask = async (e) => {
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const reapons = await axios.get(`https://todo.midend.tech/api/todolists/`, config);
            if (Array.isArray(reapons.data.data)) {
                setCreatedList(reapons.data.data);
            } else {
                const list = [reapons.data.data];
                setCreatedList(list);
            }
        } catch (error) {
            console.log(error);
        }

    }


    const toggleTextField = () => {
        setShowTextField(!showTextField); 
    };


    return (
        <div style={styles.menuStyle}>
            <LogOut/>
            <div>
                <div style={styles.NewList} > 
                {CreatedList.map(task => (
                    <div key={task.id} style={styles.ListsName} onClick={() => setId(task.id)}><p style={{  cursor: "pointer",}}>{task.name}</p> 
            </div>
            ))}
                </div>
                <Labels textStyle={styles.nameLabel} text={"+ Add a New List"} oc={toggleTextField} />
                <div value={createToDoLists} hidden={!showTextField}>
                    <input style={styles.nameTextfeild} maxLength="15" type="text" className="name" onChange={(e) => { setToDoLists(e.target.value) }} placeholder="Enter List Name" hidden={!showTextField} />
                    <button style={styles.addNewListButton} onClick={creatAnewToDoList} >Add</button>
                    
                </div>
            </div>
        </div>
    );

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
        fontSize: "20px",
        left: "10px",
        top: "550px",
        cursor: "pointer",
        color: "#746FAF",
    },
    nameTextfeild: {
        border: '1px solid',
        position: "absolute",
        borderRadius: "6px",
        borderColor: '#B4B3B3',
        top: "610px",
        left: "20px",
        height: "30px",
        width: "200px",
        borderRadios: "10px",
    },
    addNewListButton: {
        position: "absolute",
        borderRadius: "9px",
        top: "610px",
        left: "230px",
        height: "34px",
        width: "65px",
        backgroundColor: "#746FAF",
        color: "white",
        border: "none",
        fontSize: "18px",

    },
    dicreptionTask: {
        position: "absolute",
        fontSize: "22px",
        left: "130px",
    },
    NewList:{
    position: "relative",
    fontSize:"30px",
    fontFamily:"interSemiBold",
    maxWidth:"500px",
    maxHeight: "500px",
    left:"15px",
    top:"55px",
    borderRadius:"2px",
    overflowX: "hidden",
},
    ListsName:{
        width:"360px",
    }
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
