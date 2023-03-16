import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/GetExercise.css'

export default function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5000/excercise/getexcercise', {
      headers: {
        "authorization": localStorage.getItem("Token")
      }
    })
      .then(res => res.json())
      .then(data => { console.log(data.exercises); setExercises(data.exercises) })
      .catch(err => console.log(err));
  }, []);
  const handleDelete = (exerciseId) => {


    fetch('http://localhost:5000/excercise/deleteExcercise/' + exerciseId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('Token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setExercises(exercises.filter(exercise => exercise._id !== exerciseId));
          alert("Excercise deleted Success")
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='cardWraper'>
      {exercises.map((exercise, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{exercise.title}</h5>
            <p className="card-text">decription: {exercise.des}</p>
            <p className="card-text">Type: {exercise.type}</p>
            <p className="card-text">Duration: {exercise.duration}</p>
            <button onClick={() => handleDelete(exercise._id)}>Delete</button>
            <button onClick={() => navigate(`/EditExercise/${exercise._id.toString()}`)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}