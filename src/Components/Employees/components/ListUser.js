import axios from 'axios'
import { useEffect, useState } from 'react'
// import CreateUser from './CreateUser';
// import {Link} from 'react-router-dom';

export default function ListUser() {

  const [employees,setUsers]=useState([]);
  useEffect(()=>{
    getUsers();
  },[])

  function getUsers() {
    axios.get('http://localhost:8888/api/users/').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}
  return (
    <div className='employee-section'>
     
      <h1>Employees List</h1>
      <table>
        <thead>
          <tr>          
                {/* <th>id</th> */}
                <th>Name</th>
                <th>Surname</th>
                <th>Shift</th>     
                <th>Created Data</th>   
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,key)=>
            <tr key={key}>
                {/* <td>{employee.id_employee}</td> */}
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.shift}</td>
                <td>{employee.create_at.slice(0,11)}</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>   
  )
}
