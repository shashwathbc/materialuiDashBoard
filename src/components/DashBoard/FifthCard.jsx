import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const data = [
  {
    sales: '894k',
    trendDir: 'up',
    subtitle: 'USA',
    title: '$8,656k',
    avatarText: 'US',
    trendNumber: '25.8%',
    avatarColor: 'success',
    trend: <ArrowDropUpOutlinedIcon sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '645k',
    subtitle: 'UK',
    trendDir: 'down',
    title: '$2,415k',
    avatarText: 'UK',
    trendNumber: '6.2%',
    avatarColor: 'error',
    trend: <ArrowDropDownOutlinedIcon sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '148k',
    title: '$865k',
    trendDir: 'up',
    avatarText: 'IN',
    subtitle: 'India',
    trendNumber: '12.4%',
    avatarColor: 'warning',
    trend: <ArrowDropUpOutlinedIcon sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '86k',
    title: '$745k',
    trendDir: 'down',
    avatarText: 'JA',
    subtitle: 'Japan',
    trendNumber: '11.9%',
    avatarColor: 'secondary',
    trend: <ArrowDropDownOutlinedIcon sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '42k',
    title: '$45k',
    trendDir: 'up',
    avatarText: 'KO',
    subtitle: 'Korea',
    trendNumber: '16.2%',
    avatarColor: 'error',
    trend: <ArrowDropUpOutlinedIcon sx={{ color: 'success.main', fontWeight: 600 }} />
  }
]

const FifthCard = () => {
  return (
    <Card>
      <CardHeader
        title='Sales by Countries'
        action={
          <IconButton>
            <MoreVertOutlinedIcon  />
          </IconButton>
        }
      />
      <CardContent >
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:"space-between",
                paddingTop:"37px"
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: '1rem',
                  backgroundColor: `${item.avatarColor}.main`
                }}
              >
                {item.avatarText}
              </Avatar>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography>{item.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.trend}
                      <Typography
                        variant='caption'
                        sx={{
                          color: item.trendDir === 'down' ? 'error.main' : 'success.main'
                        }}
                      >
                        {item.trendNumber}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant='caption'>
                    {item.subtitle}
                  </Typography>
                </Box>

                <Box>
                  <Typography>
                    {item.sales}
                  </Typography>
                  <Typography variant='caption'>
                    Sales
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default FifthCard
