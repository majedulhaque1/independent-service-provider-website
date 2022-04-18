import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Reviews from './Pages/Home/Reviews/Reviews';
import Blogs from './Pages/Home/Blogs/Blogs';
import Login from './Pages/Home/Login/Login/Login';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
