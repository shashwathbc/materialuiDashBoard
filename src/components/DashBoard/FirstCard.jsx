import React from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const FirstCard = () => {
  return (
    <Card sx={{ position: 'relative' }}>
    <CardContent>
      <Typography variant='h6'>Congratulations John! 🥳</Typography>
      <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        Best seller of the month
      </Typography>
      <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
        $42.8k
      </Typography>
      <Button size='small' variant='contained'>
        View Sales
      </Button>
    </CardContent>
  </Card>
  )
}

export default FirstCard