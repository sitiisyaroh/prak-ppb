import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../../assets/icons/gym.png';

const EquipmentCard = ({ item, onSelect, selectedItem }) => {
  const isSelected = selectedItem === item;

  return (
    <Stack
      component="button" // Changed "type" to "component" to indicate that it's a button
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={isSelected ? {
        borderTop: '4px solid #FF2625',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '300px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
      } : {
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        onSelect(item); // Corrected the function name
        window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default EquipmentCard;
