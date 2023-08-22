

import styled from '@emotion/styled';
import { Box, Typography} from '@mui/material';
import { useState, useEffect } from 'react';

const HeadingWrapper = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`
const Heading = styled(Typography)`
  color: #878787;
`
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p{
    margin-bottom: 20px;
    fontSize: 14px;
  }
`
const Price = styled(Box)`
  float: right;
`
const Discounts = styled(Typography)`
  color: green;
  font-weight: 500;
`
const TotalBalance = ({ cartItems}) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() =>{
    total()
  },[cartItems])
  const total = () => {
    let price = 0, discount = 0;
    cartItems.map(item => {
      price += item.price.mrp; //price nikalne ke liye
      discount += (item.price.mrp - item.price.cost); // total discount nikalne ke liye

    });
    setPrice(price);
    setDiscount(discount);
  }
  return (
    <Box>
      <HeadingWrapper>
        <Heading>Price Details</Heading>
      </HeadingWrapper>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component='span'>-₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
          <Price component='span'>₹40</Price>
        </Typography>
        <Typography variant='h6' style={{marginBottom: '20px'}}>Total Amount
          <Price component='span'>₹{ price - discount + 40}</Price>
        </Typography>
        <Discounts>You will save ₹{discount - 40} on this order</Discounts>
      </Container>
    </Box>
  )
}

export default TotalBalance
