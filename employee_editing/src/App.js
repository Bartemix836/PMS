import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import './assest/App.css';
import CreateUser from './components/User/CreateUser';
import ListUser from './components/User/ListUser';
import EditUser from './components/User/EditUser';

function App() {
  return (
    <div className="App">
        <h3>Employees and shifts management</h3>
        
        <BrowserRouter>
          <nav>
              <ul>
                <li>
                  <button><Link to="/">Employees List</Link></button>
                </li>
                <li>
                  <button><Link to="user/create">Add Employee</Link></button>
                </li>
              </ul>      
            </nav>
                  <Routes>
                      <Route index element={<ListUser/>}/>
                      <Route path='user/create' element={<CreateUser/>}/>
                      <Route path='user/:id_employee/edit' element={<EditUser/>}/>
                  </Routes>
        </BrowserRouter>
        
    </div>
    
    
  );
}

export default App;
