import { useState, useEffect } from "react";
import axios from "axios";
import { useListId } from "../Context/ListIdContext";
import starfilled from "./../image/starFilled.png";
import star from "./../image/star.png";



function ToDoCard({ item }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [isImportant, setIsImportant] = useState(item.important);
  const { ListId } = useListId();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);


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

  const handlestar = async () => {
    const newChecked = !isChecked;
    setIsImportant(newChecked);
    await updateTask({ important: newChecked });
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

  const styles = {
    cardStyle: {
      backgroundColor: "#EEE7FD",
      marginTop: "15px",
      marginLeft: "20px",
      borderRadius: "6px",
      width: "800px",
      height: "120px",
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
      marginTop: '40px',
      height: '25px',
      width: '25px',
      left:"670px",
    }
  };

  return (
    <div style={styles.cardStyle}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={styles.checkStyle}
      />
      <p style={styles.titleTask}>{title}</p>
      <br />
      <br />
      <p style={styles.descriptionTask}>{description}</p>
      <img style={styles.star} src={isImportant ? starfilled : star} onClick={handlestar} />
      
    </div>
  );
}

export default ToDoCard;