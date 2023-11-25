import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './bodyparts/HorizontalScrollbar';

const SearchExercises = ({ bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      try {
        const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        // Check if the response is an object and contains a property with body parts
        if (response && typeof response === 'object' && Object.keys(response).length > 0) {
          // Extract the body parts from the response object
          const extractedBodyParts = Object.values(response);
          // Check if the extracted body parts is an array
          if (Array.isArray(extractedBodyParts)) {
            setBodyParts(['all', ...extractedBodyParts]);
          } else {
            console.error('Invalid body parts data structure:', response);
            // Handle the error or set default value as needed
          }
        } else {
          console.error('Invalid body parts data structure:', response);
          // Handle the error or set default value as needed
        }
      } catch (error) {
        console.error('Error fetching body parts data:', error);
      }
    };
    fetchBodyPartsData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
