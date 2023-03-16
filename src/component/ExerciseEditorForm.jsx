import React, { useState } from 'react'
import '../CSS/AddExcercise.css'
import { useNavigate } from 'react-router-dom';

export default function ExerciseEditorForm({ handleSubmit, data }) {

    const [title, SetTitle] = useState(data.title)
    const [des, SetDes] = useState(data.des)
    const [type, SetType] = useState(data.type)
    const [duration, SetDuration] = useState(data.duration)


    React.useEffect(() => {
        SetTitle(data.title)
        SetDes(data.des)
        SetType(data.type)
        SetDuration(data.duration)
    }, [data])
    //   
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit({ title, des, type, duration }); }} className="exercise-form">
            <h2>Add Exercise</h2>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Enter title" value={title} onChange={(e) => SetTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <textarea placeholder="Enter description" value={des} onChange={(e) => SetDes(e.target.value)}></textarea>
            </div>
            <div className="form-control">
                {/* <label>Type</label>
        <input type="text" placeholder="Enter type" value={type} onChange={(e) => SetType(e.target.value)} />
      </div> */}
                <label>Type</label>
                <select className="form-control" value={type} onChange={(e) => SetType(e.target.value)}>
                    <option value="">-- Select type --</option>
                    <option value="Running">Running</option>
                    <option value="Walking">Walking</option>
                    <option value="Swiming">Swiming</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Cycling">Cycling</option>
                </select>
            </div>
            <div className="form-control">
                <label>Duration (in minutes)</label>
                <input type="number" placeholder="Enter duration" value={duration} onChange={(e) => SetDuration(e.target.value)} />
            </div>
            <input type="submit" value="Add Exercise" className="btn" />
        </form>
    )
}
