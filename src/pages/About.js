// About.js
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner3.png';

const About = () => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '70px' },
      ml: { sm: '50px' },
      position: 'relative',
      p: '20px',
      textAlign: 'left', // Center the content
    }}
  >
    <Typography color="#FF2625" fontWeight="600" fontSize={{ xs: '24px', lg: '26px' }}>
      FitOn
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, mb: '23px', mt: '30px' }}>
      Welcome to FitOn
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: '18px', lg: '22px' },
        fontFamily: 'Alegreya',
        lineHeight: { xs: '28px', lg: '35px' },
        marginRight: { xs: 0, lg: '700px' },
        ml: { xs: '20px', lg: 0 }, // Adjust margin left for small screens
      }}
    >
      FitOn is your go-to platform for personalized exercises that help you achieve your fitness goals.
      You can choose the activities that suit you most. This Project was created with
      exercisedb.p.rapidapi.com API and youtube-search-and-download.p.rapidapi.com API.
      You can watch exercises video, get recommendations for similar exercises and equipment based on activities you chose.
    </Typography>
    <Stack>
      {/* You can customize the Link to navigate to different pages */}
      {/* For example, you can link to a "Contact" page */}
      <a
        href="/contact"
        style={{
          marginTop: '45px',
          width: '200px',
          textAlign: 'center',
          background: '#FF2625',
          padding: '14px',
          fontSize: '18px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Contact Us
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FFFF"
      sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
    >
      Fitness
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" sx={{ maxWidth: '100%', marginTop: '20px' }} />
  </Box>
);

export default About;
