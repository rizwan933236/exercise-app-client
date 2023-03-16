import React, { useState } from 'react'
import '../CSS/AddExcercise.css'
import { useNavigate } from 'react-router-dom';
import ExerciseEditorForm from '../component/ExerciseEditorForm';

const intialFormData = () => ({
  title: "",
  des: "",
  type: "",
  duration: "",
})

export default function AddExcercise() {
  let navigate = useNavigate();
  async function HandleSubmit(exerciseData) {
    try {

      const result = await fetch("https://dizzy-fly-flannel-nightgown.cyclic.app/excercise/addexcercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem("Token")
        },
        body: JSON.stringify(exerciseData)
      })

      const data = await result.json()
      alert("Added")

      console.log(data)
      navigate('/GetExcercise');

    }
    catch (err) {
      alert(err)
      console.log(err)
    }

  }

  return (
    <ExerciseEditorForm handleSubmit={HandleSubmit} data={intialFormData()} />
  )
}
