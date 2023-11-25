import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/bodyparts/Exercises';
import SearchExercises from '../components/SearchExercises';

const ExercisePage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default ExercisePage;
