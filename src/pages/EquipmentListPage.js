// pages/EquipmentListPage.js

import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchEquipment from '../components/alat/SearchEquipment';
import Equipment from '../components/alat/Equipment'; // Update the import

const EquipmentListPage = () => {
  const [exercises, setExercises] = useState([]);
  const [equipment, setEquipment] = useState('all');

  return (
    <Box>
      <SearchEquipment setExercises={setExercises} equipment={equipment} setEquipment={setEquipment} />
      <Equipment setExercises={setExercises} exercises={exercises} equipment={equipment} />
    </Box>
  );
};

export default EquipmentListPage;
