import { useState } from "react";
import Labels from "./Labels";
import ToDoCard from "./ToDoCard";
import axios from "axios";
import { useEffect } from "react";

function AddNewTask(){
    const [showTextField, setShowTextField] = useState(false);
    const [AddTask, setAddTask] = useState('');
    const [AddDes, setAddDes] = useState('');
    // const [ShowTasks, setShowTask] = useState([]);
    const [tasks, setTasks] = useState({});

   
    useEffect(() => {
        fetchUserAllTask()
      }, []);


    const toggleTextField = () => {
        setShowTextField(!showTextField); // Toggle the state
    };

////////////////////Add task API POST//////////////////////////////////
    const Add = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const formData = new FormData();
            formData.append('name', AddTask);
            formData.append('description', AddDes);
            const response = await axios.post('https://todo.midend.tech/api/todolists', formData,config);
            console.log(response.data.name);
            fetchUserAllTask()
            // console.log(response.data.description);
            console.log("data is sent");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };
////////////////////Add task API POST//////////////////////////////////

////////////////////show the Added Task GET////////////////////////////
const fetchUserAllTask = async (e) => {
    try {
        const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        const reapons = await axios.get('https://todo.midend.tech/api/todolists',config);
        setTasks(reapons.data.data);
        console.log(reapons.data);
        console.log("helllllllllllo");
    } catch (error) {
        console.log(error);
    }

}
////////////////////show the Added Task GET////////////////////////////
    return(
        <div>
                <Labels textStyle={styles.AddNewTaskLabel} text={"+ Add a New Task"} oc={toggleTextField} />
                <div hidden={!showTextField}>
                <input style={styles.TaskTitleTextfeild} onChange={(e)=>{setAddTask(e.target.value)}} type="text" className="title" placeholder="Enter your Task Title" hidden={!showTextField} required/>
                <input style={styles.TaskdescriptionTextfeild} onChange={(e)=>{setAddDes(e.target.value)}} type="text" className="description" placeholder="Enter your Task description" hidden={!showTextField}/>
                <button style={styles.addNewTaskButton} onClick={Add} >Add</button>
                </div>
                <div style={styles.RightSideStyle}>
                    {tasks.length > 0 ? (tasks.map((task) => (<div key={task.id}>
                <ToDoCard Titletext={task.id} dicreptionText={task.name}/> </div> ))) : (<p>Loading...</p>)}
                </div>
        </div>
    );
}
export default AddNewTask;

const styles = {
    AddNewTaskLabel: {
        position: "absolute",
        fontSize:"20px",
        left: "450px",
        top: "550px",
        cursor: "pointer",
        color:"#746FAF",
    },
    TaskTitleTextfeild:{
        border: '1px solid',
        position: "absolute",
        borderRadius:"6px",
        borderColor: '#B4B3B3',
        top: "610px",
        left: "455px",
        height: "30px",
        width: "200px",
        borderRadios:"10px",
    },
    TaskdescriptionTextfeild:{
        border: '1px solid',
        position: "absolute",
        borderRadius:"6px",
        borderColor: '#B4B3B3',
        top: "610px",
        left: "670px",
        height: "30px",
        width: "200px",
        borderRadios:"10px", 
    },
    addNewTaskButton:{
        position: "absolute",
        borderRadius:"9px",
        top: "610px",
        left: "890px",
        height: "34px",
        width: "65px",
        backgroundColor:"#746FAF",
        color:"white",
        border:"none",
        fontSize:"18px",

    },
        RightSideStyle: {
            position: "relative",
            backgroundColor:"white",
            maxWidth:"880px",
            maxHeight: "500px",
            left:"450px",
            top:"30px",
            borderRadius:"6px",
            overflowX: "auto",
        },
}