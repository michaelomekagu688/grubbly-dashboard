
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users/Users';
import { InputValue, ProductValue } from './SingleDataSource';
import Smallside from './components/Smallside/Smallside';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='smallside' element={<Smallside />} />
            <Route path='new' element={<New />} />
            <Route path='users' element={<Users />} />
            <Route path='input' element={<Single input={InputValue} titles={"Add New User"} />} />
            <Route path='product' element={<Single input={ProductValue} titles={"Add New Product"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
