import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import './app.css';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
