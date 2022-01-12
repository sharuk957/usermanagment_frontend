import './App.css';
import HomePage from './pages/home_page/HomePage';
import LoginPage from './pages/login_page/LoginPage';
import SigninPage from './pages/signin_page/SigninPage'
import { BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/' element={<LoginPage/>}></Route>
            <Route exact path='/Register' element={<SigninPage/>}></Route>
            <Route exact path='/Home' element={<HomePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
