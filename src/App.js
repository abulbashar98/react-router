import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Home/Home'
import './components/About us/About'
import './components/Users/Users'
import Home from './components/Home/Home';
import About from './components/About us/About';
import Users from './components/Users/Users';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import UserDetail from './components/UserDetail/UserDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postID" element={<PostDetail />}></Route>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<UserDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes >

    </div >
  );
}

export default App;
