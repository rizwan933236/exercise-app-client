import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieRechartComponent = () => {
  const COLORS = ["#8884d8", "#FF0000", "#FFBB28", "#FF8042", "#AF19FF"];

  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    fetch('https://dizzy-fly-flannel-nightgown.cyclic.app/excercise/pie/exercises')
      .then(response => response.json())
      .then(data => {
        const exerciseData = data.map(exercise => ({
          name: exercise._id,
          value: exercise.totalDuration
        }));
        setExerciseData(exerciseData);
      })
      .catch(error => console.error(error));
  }, []);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value} min`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <PieChart width={1730} height={300}>
      <Pie
        data={exerciseData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {exerciseData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
};

export default PieRechartComponent;
