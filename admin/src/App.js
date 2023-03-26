import './app.css';
import {
  Home,
  UserList,
  User,
  NewUser,
  MovieList,
  Movie,
  NewMovie,
  Login,
  List,
  NewList
} from './pages/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from './Context/AuthContext/AuthContext';
import { useContext } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { CategoryList } from './pages/CategoryList/CategoryList';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {user && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/newMovie" element={<NewMovie />} />
            <Route path="/lists" element={<CategoryList />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="/newList" element={<NewList />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
