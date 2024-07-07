import { useState, useEffect } from "react";
import axios from "axios";
import { useListId } from "../Context/ListIdContext";
import starfilled from "./../image/starFilled.png";
import star from "./../image/star.png";
import deleteImg from "./../image/delete.png";
import editImg from "./../image/pencil.png";



function ToDoCard({ item }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [isImportant, setIsImportant] = useState(item.important);
  const { ListId } = useListId();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [showPopup, setShowPopup] = useState(false);
  const [oldTitle, setoldTitle] = useState(item.title);
  const [oldDescription, setoldDescription] = useState(item.description);


  useEffect(() => {
    setIsChecked(item.completed);
    setIsImportant(item.important);
    setTitle(item.title);
    setDescription(item.description);

  }, [item]);

  const handleCheckboxChange = async () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    await updateTask({ completed: newChecked });
  };

  // const handlestar = async () => {
  //   const newChecked = !isChecked;
  //   setIsImportant(newChecked);
  //   await updateTask({ important: newChecked });
  // };

  const handleCard = async ()=>{
    const newTitle = title;
    const newDes = description
    setTitle(newTitle);
    setDescription(newDes);
    await updateTask({title: newTitle, description: newDes})
    setShowPopup(!showPopup);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setTitle(oldTitle);
    setDescription(oldDescription);
  };

  const updateTask = async (updates) => {
    try {
      const token = localStorage.getItem('authToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const data = {
        title,
        description,
        completed: updates.completed !== undefined ? updates.completed : isChecked,
        important: updates.important !== undefined ? updates.important : isImportant
      };

      const response = await axios.put(`https://todo.midend.tech/api/todolists/${ListId}/tasks/${item.id}`, data, config);
      console.log('Task updated successfully:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors);
      } else {
        console.log(error.response.data.message);
      }
    }
  };

   ////////////////////Begin Delete Task DEL////////////////////////////
   const DeleteTask = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.delete(`https://todo.midend.tech/api/todolists/${ListId}/tasks/${item.id}`, config);
        console.log("i am delet");
    } catch (error) {
        if (error.response && error.response.status === 422) {
            console.log(error.response.data.errors);
        } else {
            console.log(error.response.data.message);
        }
    }
};
////////////////////End Delete Task DEL////////////////////////////

  const styles = {
    cardStyle: {
      backgroundColor: "#EEE7FD",
      marginTop: "15px",
      marginLeft: "20px",
      borderRadius: "6px",
      width: "800px",
      height: "100px",
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    titleTask: {
      position: "absolute",
      fontSize: "30px",
      fontFamily: "interSemiBold",
      left: "130px",
      textDecoration: isChecked ? 'line-through' : 'none',
    },
    descriptionTask: {
      position: "absolute",
      fontSize: "22px",
      left: "130px",
      textDecoration: isChecked ? 'line-through' : 'none',
    },
    checkStyle: {
      position: "absolute",
      left: "50px",
      height: "40px",
      width: "40px",
      borderRadius: "100px",
      marginTop:"32px",
    },
    star:{
      position: 'absolute',
      marginTop: '24px',
      height: '25px',
      width: '25px',
      left:"670px",
    },
    deleteIm:{
      position: 'absolute',
      marginTop: '24px',
      height: '25px',
      width: '25px',
      left:"710px",
      cursor: "pointer"
    },
    editIm:{
      position: 'absolute',
      marginTop: '24px',
      height: '25px',
      width: '25px',
      left:"750px",
      cursor: "pointer"
    },
    popWindow:{
         position: 'fixed',
          top: "100px",
          left: "450px",
          height:"120px",
          backgroundColor: '#FAFAFA',
          padding: '20px',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          zIndex: '999',
    },
    TaskTitleTextfeild: {
      border: '1px solid',
      borderRadius: "6px",
      borderColor: '#B4B3B3',
      height: "40px",
      width: "260px",
      borderRadios: "10px",
  },
  TaskdescriptionTextfeild: {
      border: '1px solid',
      marginLeft:"15px",
      borderRadius: "6px",
      borderColor: '#B4B3B3',
      height: "40px",
      width: "260px",
      borderRadios: "10px",
  },
  updateButton:{
    position: "absolute",
    borderRadius: "9px",
    top: "100px",
    left: "190px",
    height: "45px",
    width: "95px",
    backgroundColor: "#746FAF",
    color: "white",
    border: "none",
    fontSize: "18px",
  },
  closeButton:{
    position: "absolute",
    borderRadius: "9px",
    top: "100px",
    left: "300px",
    height: "45px",
    width: "95px",
    backgroundColor: "#746FAF",
    color: "white",
    border: "none",
    fontSize: "18px",
  }
  };

  return (
    <div style={styles.cardStyle}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} style={styles.checkStyle}/>
      <p style={styles.titleTask}>{title}</p>
      <br />
      <br />
      <p style={styles.descriptionTask}>{description}</p>
      {/* <img style={styles.star} src={isImportant ? starfilled : star} onClick={handlestar} /> */}
      <img src={deleteImg} style={styles.deleteIm} onClick={DeleteTask}/>
      <img src={editImg} style={styles.editIm} onClick={togglePopup}/>
      {showPopup && (
      <div style={styles.popWindow}>
        <input type="text" style={styles.TaskTitleTextfeild} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your Task Title" maxLength="20"/>
        <input type="text" style={styles.TaskdescriptionTextfeild} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your Task description" maxLength="25"/>
        <button onClick={handleCard} style={styles.updateButton}> Update </button>
        <button onClick={togglePopup} style={styles.closeButton}> Cancel </button>
      </div>
    )}
  </div>
);
}

export default ToDoCard;