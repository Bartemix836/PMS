import React, { useState,useEffect  } from 'react';
import axios from  "axios";
import { useNavigate,useParams } from 'react-router-dom';
import '../../assest/user-style/user-style.css';

export default function ListUser() {
  
  const navigate = useNavigate();

  const [inputs,setInputs]=useState([]);

 
  let {id_employee} =  useParams();
  // console.log(id_employee);
  //  id_employee = number.id;
  //  id_employee += useParams();
 
   
  useEffect(()=>{
    getUser();
  },[]);
  
  function getUser() {
    axios.get(`http://localhost:8888/api/user/${id_employee}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
    });
}


  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8888/api/user/${id_employee}/edit`,inputs).then(function(response){
      console.log(response.data);
      // console.log(id);
      navigate('/');
    });
  }
  // console.log(inputs[0].shift);
  return (
    <div>
        <h1>Edit</h1>
        <form onSubmit={handleSubmit}>

          <table cellSpacing='10'>
            <tbody>
              
              <tr>
                <th>
                  <label>Name</label>
                </th>
                <td>
                  <input value={inputs.name} type="text" name='name' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Surname </label>
                </th>
                <td>
                  <input value={inputs.surname} type="text" name='surname' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Shift</label>
                </th>
                <td>
                <input value={inputs.shift} type="text" name='shift' onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align='right'>
                  <button className='btn-save'>Save</button>
                </td>
              </tr>
            </tbody>
          </table>            
        </form>
    </div>
  )
}
