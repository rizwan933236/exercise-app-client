import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Register.css'

function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formValues.name) {
      errors.name = 'Name is required';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await fetch('https://dizzy-fly-flannel-nightgown.cyclic.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      });

      if (response.status === 409) {
        alert('Email address is already registered');
      } else {
        alert('Successfully registered');
        navigate('/login');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div className="register-page">
      <header>
        <h1>Register</h1>
      </header>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:
          <input type="text" name="name" value={formValues.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formValues.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

