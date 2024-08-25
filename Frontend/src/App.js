import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Add from './component/Add';
import Dashboard from './component/Dashboard';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import Update from './component/Update';

function App() {
  const location = useLocation(); // Hook to get the current location (route) in the application
  const apiKey = "localhost:8080"; // Defining the API key (base URL) to be passed to components

  return (
    <>
      <div>
        {/* Render the NavBar component and pass the current route as a prop */}
        <NavBar currentRoute={location.pathname} />

        {/* Define routes for different components using the Routes and Route components */}
        <Routes>  
          <Route path='/' element={<Home />} /> {/* Home route */}
          <Route path='/login' element={<Login apiKey={apiKey} />} /> {/* Login route */}
          <Route path='/add' element={<Add apiKey={apiKey} />} /> {/* Add product route */}
          <Route path='/dashboard' element={<Dashboard apiKey={apiKey} />} /> {/* Dashboard route */}
          <Route path='/update' element={<Update apiKey={apiKey} />} /> {/* Update product route */}
        </Routes>
      </div>
    </>
  );
}

export default App; // Exporting the App component as the default export