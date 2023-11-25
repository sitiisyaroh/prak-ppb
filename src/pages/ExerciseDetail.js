import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': 'b139bf7511msha70b411773459b9p1c0b49jsn21c6014957aa', // Replace with your RapidAPI key
          'Content-Type': 'application/json',
        },
      };

      const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': 'b139bf7511msha70b411773459b9p1c0b49jsn21c6014957aa', // Replace with your RapidAPI key
          'Content-Type': 'application/json',
        },
      };

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions); setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions); setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

      {/* Button to navigate to SimilarExercisesPage */}
      <Link to={`/similarpage/${id}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#FF2625', // Red color
            '&:hover': {
              backgroundColor: '#D6201A', // Darker red on hover
            },
          }}
        >
          View Similar Exercises
        </Button>
      </Link>

    </Box>
  );
};

export default ExerciseDetail;
