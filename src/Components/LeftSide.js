import { useState, useEffect } from "react";
import Labels from "./Labels";
import axios from 'axios';
import { useListId } from "../Context/ListIdContext";
import LogOut from "./LogOut";
import deleteImg from "./../image/delete.png";


function LeftSide() {
    const { setId } = useListId();
    const [createToDoLists, setToDoLists] = useState('');
    const [showTextField, setShowTextField] = useState(false);
    const [CreatedList, setCreatedList] = useState([]);
    const { ListId } = useListId();
    const [selectedListName, setSelectedListName] = useState('');
    
    useEffect(() => {
        fetchUserAllTask()
    }, []);


    function handleDeleteList() {
        DeleteList();
    }

    ////////////////////begin Add a new to do list////////////////////////////////
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
            await fetchUserAllTask();
        } catch (error) {
            alert(error.response.data.message);
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };
    /////////////////////End Add a new to do list///////////////////////////////////


    /////////////////////begin display all tasks in the to do list /////////////////
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
    ////////////////////End display all tasks in the to do list ////////////////////

    ////////////////////Begin Delete new list///////////////////////////////////////
    const DeleteList = async () => {

        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(`https://todo.midend.tech/api/todolists/${ListId}`, config);
            alert(response.data.message);
            fetchUserAllTask()
            window.location.reload();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.response.data.message);
            }
        }
    };
    ////////////////////End Delete new list/////////////////////////////////////////

    const toggleTextField = () => {
        setShowTextField(!showTextField);
    };


    return (
        <div>
            <div style={styles.menuStyle}>
                <LogOut />
                <div>
                    <div style={styles.NewList} >
                        {CreatedList.map(task => (
                            <div key={task.id} style={styles.ListsName} onClick={() => { setId(task.id); setSelectedListName(task.name); }} ><p style={{ cursor: "pointer", }}>{task.name}</p>

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
            <div style={styles.selectedListNameContainer}>
                {selectedListName === 0 || selectedListName === null ? (
                    <div>
                        <img src={deleteImg} style={styles.deleteIm} onClick={handleDeleteList} />
                        <p style={styles.selectedListName}>Please Select a list</p>
                    </div>
                ) : (
                    <div>
                        <img src={deleteImg} style={styles.deleteIm} onClick={handleDeleteList} />
                        <p style={styles.selectedListName}>The Selected list:
                            <p style={styles.selectedListName2}>{selectedListName}
                            </p>
                        </p>
                    </div>
                )

                }
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
    NewList: {
        position: "relative",
        fontSize: "25px",
        fontFamily: "interSemiBold",
        maxWidth: "500px",
        maxHeight: "300px",
        left: "17px",
        top: "180px",
        borderRadius: "2px",
        overflowX: "auto",

    },
    ListsName: {
        width: "285px",
    },
    deleteIm: {
        position: 'absolute',
        height: '25px',
        width: '25px',
        top: "32px",
        left: "990px",
        cursor: "pointer"
    },
    selectedListNameContainer: {
        position: 'absolute',
        left: '390px',
        width: '40%',
        backgroundColor: '#fff',
        borderRadius: '4px',

    },
    selectedListName: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
    },
    selectedListName2: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: "#746FAF",
        left: "230px",
        bottom: "0px",
        position: "absolute",
    }

}









