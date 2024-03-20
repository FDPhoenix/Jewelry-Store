import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div>
      <HomePage />

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
