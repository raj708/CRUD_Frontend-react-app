
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ViewUser from './components/user/ViewUser';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addUser' element={<AddUser/>}></Route>
        <Route path='/editUser/:id' element={<EditUser/>}></Route>
        <Route path='/viewUser/:id' element={<ViewUser/>}></Route>

      </Routes>
    </Router>
    
  );
}

export default App;
