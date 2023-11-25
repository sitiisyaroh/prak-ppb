import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner3.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' }, position: 'relative', p: '20px', textAlign: 'left' }}>
    <Typography color="#FF2625" fontWeight="600" fontSize={{ xs: '24px', lg: '26px' }}>
      FitOn
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, mb: '23px', mt: '30px' }}>
      Sweat, Smile <br />
      And Healthy
    </Typography>
    <Typography
      marginBottom={{ xs: '30px', lg: 0 }}
      marginRight={{ xs: 0, lg: '700px' }}
      fontSize={{ xs: '18px', lg: '22px' }}
      fontFamily="Alegreya"
      lineHeight={{ xs: '28px', lg: '35px' }}
    >
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <Link to="/exercisepage" style={{ textDecoration: 'none' }}>
        <button
          type="submit"
          style={{
            marginTop: '20px', // Adjusted margin for spacing
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Explore Exercises
        </button>
      </Link>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FFFF"
      sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" sx={{ maxWidth: '100%', marginTop: '20px' }} />
  </Box>
);

export default HeroBanner;
