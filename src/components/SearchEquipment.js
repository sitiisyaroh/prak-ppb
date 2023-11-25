// components/SearchEquipment.js

import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import EquipmentScrollBar from './EquipmentScrollBar';

const SearchEquipment = ({ equipment, setEquipment }) => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/equipmentList', exerciseOptions);

        // Check if the response is an object and contains a property with equipment list
        if (response && typeof response === 'object' && Object.keys(response).length > 0) {
          // Extract the equipment list from the response object
          const extractedEquipmentList = Object.values(response);

          // Check if the extracted equipment list is an array
          if (Array.isArray(extractedEquipmentList)) {
            setEquipmentList(['all', ...extractedEquipmentList]);
          } else {
            console.error('Invalid equipment list data structure:', response);
            // Handle the error or set default value as needed
          }
        } else {
          console.error('Invalid equipment list data structure:', response);
          // Handle the error or set default value as needed
        }
      } catch (error) {
        console.error('Error fetching equipment list data:', error);
      }
    };

    fetchEquipmentData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Equipment You <br /> Should Know
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <EquipmentScrollBar data={equipmentList} setEquipment={setEquipment} equipment={equipment} />
      </Box>
    </Stack>
  );
};

export default SearchEquipment;
