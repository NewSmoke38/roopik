import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;
