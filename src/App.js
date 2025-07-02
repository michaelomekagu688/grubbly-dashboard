
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='single' element={<Single />} />
            <Route path='new' element={<New />} />
            <Route path='users' element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
