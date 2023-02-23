import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { UserList } from './pages/UserList/UserList';
import './app.css';
import { Home } from './pages/Home/Home';
import { User } from './pages/User/User';
import { NewUser } from './pages/newUser/NewUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList } from './pages/ProductList/ProductList';
import { Product } from './pages/Product/Product';
import { NewProduct } from './pages/NewProduct/NewProduct';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
