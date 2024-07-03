import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tasks from './pages/Tasks.js';
import Calendar from './pages/Calendar.js';
import Focus from './pages/Focus.js';
import Notes from './pages/Notes.js';
import Profile from './pages/Profile.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Focus" element={<Focus />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
