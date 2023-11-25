import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExercisePage from './pages/ExercisePage';
import About from './pages/About';
import SimilarExercisesPage from './pages/SimilarExercisePage';
import EquipmentListPage from './pages/EquipmentListPage';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercisepage" element={<ExercisePage />} />
      <Route path="/equipmentpage" element={<EquipmentListPage />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/aboutpage" element={<About />} />
      <Route path="/similarpage/:id" element={<SimilarExercisesPage />} />
    </Routes>
  </Box>
);

export default App;
