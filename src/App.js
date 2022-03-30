import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Home/Home'
import './components/About us/About'
import './components/Users/Users'
import Home from './components/Home/Home';
import About from './components/About us/About';
import Users from './components/Users/Users';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <h1>Welcome To My Fancy Routing Website!!!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes >

    </div >
  );
}

export default App;
