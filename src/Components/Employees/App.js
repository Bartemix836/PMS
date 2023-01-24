import  {Routes,Route, Link} from 'react-router-dom';
import '../../Assest/employee-style/employeelist.css';
// import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
// import EditUser from './components/EditUser';


function App() {
  return (
    <div className="App">
       
          <nav>
              <ul>
                <li>
                  <Link to="/employees">List Users</Link>
                </li>
              </ul>      
            </nav>
            {/* <BrowserRouter> */}
                  <Routes>
                      <Route index element={<ListUser/>}/>
                      {/* <Route path='/employees/create' element={<CreateUser/>}/> */}
                      {/* <Route path='/employees/user/:id_employee/edit' element={<EditUser/>}/> */}
                  </Routes>
            {/* </BrowserRouter> */}
        
    </div>    
  );
}

export default App;
