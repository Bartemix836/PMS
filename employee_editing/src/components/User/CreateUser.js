import React, { useState } from 'react'
import axios from  "axios";
import { useNavigate } from 'react-router-dom';
import '../../assest/user-style/user-style.css';

export default function CreateUser() {
  
  const navigate = useNavigate;
  const [inputs,setInputs]=useState({});

  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:8888/api/user/save',inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    });
  }
  
  return (
    <div>
        <h1>List Employee</h1>
        <form onSubmit={handleSubmit}>

          <table cellSpacing='10'>
            <tbody>
              <tr>
                <th>
                  <label>Name</label>
                </th>
                <td>
                  <input type="text" name='name' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Surname </label>
                </th>
                <td>
                  <input type="text" name='surname' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Shift</label>
                </th>
                <td>
                  <input type="text" name='shift' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align='right'>
                  <button>Save</button>
                </td>
              </tr>
            </tbody>
          </table>            
        </form>
    </div>
  )
}
