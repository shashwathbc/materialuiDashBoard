// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { ResponsiveContainer ,BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";


const ThirdCard= () => {
    const data = [
        { name: "india", students: 400 },
        { name: "usa", students: 700 },
        { name: "uk", students: 200 },
        { name: "nepal", students: 1000 },
        { name: "india", students: 400 },
        { name: "usa", students: 700 },
        { name: "uk", students: 200 },
        { name: "nepal", students: 1000 },
        { name: "india", students: 400 },
        { name: "usa", students: 700 },
        { name: "uk", students: 200 },
        { name: "nepal", students: 1000 },
      ];

  return (
    <Card>
      <CardHeader
        title='Weekly Overview'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <MoreVertOutlinedIcon  />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
     <ResponsiveContainer width={455} height={250}>
        <BarChart width={455} height={180} data={data} className="BarChartStyle" style={{marginTop:"30px"}}>
              <Bar dataKey="students" fill="#0050b3" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
</ResponsiveContainer>

        <Box sx={{ mb: 10, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            45%
          </Typography>
          <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default ThirdCard
