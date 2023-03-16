import React from 'react'
import '../CSS/AddExcercise.css'
import { useNavigate, useParams } from 'react-router-dom';
import ExerciseEditorForm from '../component/ExerciseEditorForm';

export default function EditExcercise() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [mydata, setData] = React.useState({})


  React.useEffect(() => {

    console.log(id)

    fetch('http://localhost:5000/excercise/getexcercise/' + id, {
      method: "GET",
      headers: {
        "authorization": localStorage.getItem("Token")
      }
    })
      .then(res => res.json())
      .then(data1 => { setData(data1.exercise); })
      .catch(err => console.log(err));
  }, [])

  async function HandleSubmit(exerciseData) {
    try {

      const result = await fetch("http://localhost:5000/excercise/editExcercise/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem("Token")
        },
        body: JSON.stringify(exerciseData)

      })

      const data2 = await result.json()
      alert("Updated")

      console.log(data2)
      navigate('/GetExcercise');

    }
    catch (err) {
      alert(err)
      console.log(err)
    }

  }

  return (
    <ExerciseEditorForm handleSubmit={HandleSubmit} data={mydata} />
  )
}
