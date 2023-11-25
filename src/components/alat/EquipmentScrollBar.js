import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import EquipmentCard from './EquipmentCard'; // Assuming you have an EquipmentCard component
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const EquipmentScrollBar = ({ data, setEquipment, equipment }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* Use EquipmentCard instead of BodyPart or ExerciseCard */}
        <EquipmentCard item={item} onSelect={setEquipment} selectedItem={equipment} />
      </Box>
    ))}
  </ScrollMenu>
);

export default EquipmentScrollBar;
