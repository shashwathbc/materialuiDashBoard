import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    title: 'Gumroad Account',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: 'Bank Transfer',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: '+$446',
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  }
]

const withdrawData = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: '-$145',
    title: 'Google Adsense',
    subtitle: 'Paypal deposit',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 34,
    logoHeight: 34,
    amount: '-$1870',
    title: 'Github Enterprise',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg',
    subtitle: 'Security & compliance'
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '-$450',
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '-$540',
    title: 'Digital Ocean',
    subtitle: 'Cloud Hosting',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'
  },
  {
    logoWidth: 36,
    logoHeight: 21,
    amount: '-$21',
    title: 'AWS Account',
    logo: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg',
    subtitle: 'Cloud Platform'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const  SixthCard= () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Deposit'
          action={<Typography variant='caption'>View All</Typography>}

        />
        <CardContent>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', paddingTop:'40px'}}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Withdraw'
          action={<Typography variant='caption'>View All</Typography>}
        />
        <CardContent>
          {withdrawData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center' ,paddingTop:'40px'}}
              >
                <Box sx={{ minWidth: 36, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '13px' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'error.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default SixthCard
