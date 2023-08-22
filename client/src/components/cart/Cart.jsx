
import {useSelector} from 'react-redux';
import { Box, Button, Grid, Typography, styled} from '@mui/material'
// components 
import CartItems from './CartItems';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';


const Container = styled(Grid)(({ theme}) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0'
  }
}))
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`
const ButtonStyled = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 3px;
`
const LeftComponent = styled(Grid)(({ theme}) => ({
  paddingRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '15px'
  }
}))
const Cart = () => {
  const {cartItems} = useSelector(state => state.cart);

  return (
    <>
      {
        cartItems.length ?
          <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
              </Header>
              {
                cartItems.map(item => (
                  <CartItems item ={item}/>
                ))
              }
              <ButtonWrapper>
                <ButtonStyled>Place Order</ButtonStyled>
              </ButtonWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalBalance cartItems={cartItems}/>
            </Grid>
          </Container>
          :
          <EmptyCart />
      }
    </>
  )
}

export default Cart
