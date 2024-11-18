import React from 'react'
import {Box, Typography} from '@mui/material'
import Card from './Card'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

const data=[
    {
        id:1,
        src:card1,
        description:'Build ATS friendly,keyword rich resumes',
        text:'Everything you need to make your next career move'
    },
    {
        id:2,
        src:card2,
        description:'Build ATS friendly,keyword rich resumes',
        text:'Everything you need to make your next career move'
    },
    {
        id:3,
        src:card3,
        description:'Build ATS friendly,keyword rich resumes',
        text:'Everything you need to make your next career move'
    },

]

function Description() {
    return (
      <>
        <Box
          padding="40px" // Increased padding for more spacing
          width="100%"
          minHeight="100vh" // Keeps it at least full viewport height
          height="auto"
          bgcolor="white"
          borderBottom="1px solid #B7B7B7"
        >
          <Typography variant="h2" fontWeight="bold" textAlign="left">
            Why Choose Our Website
          </Typography>
          <Typography
            textAlign="left"
            padding="30px"
            variant="body1"
            color="textSecondary"
          >
            Our Website makes it easy to get the help you need, stay organised and
            take on any new challenge.
          </Typography>
          <Box
            width="100%"
            display="flex"
            height='70vh'
            justifyContent="space-evenly"
            alignItems="center"
          >
            {data.map((item) => (
              <Card
                key={item.id}
                src={item.src}
                description={item.description}
                text={item.text}
              />
            ))}
          </Box>
        </Box>
      </>
    );
  }

  export default Description;
  