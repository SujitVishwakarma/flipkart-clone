
import { Box, Button } from "@mui/material"
import styled from "@emotion/styled"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn'

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart} from '../../redux/actions/cartAction';
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  marginRight: '20px'

}));
  
const Image = styled('img')({
  padding: 15,
    
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  borderRadius: '3px',
  
}));

const ActionItems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1);

  const { id} = product;

  const addItemToCart = () =>{
    dispatch(addToCart(id, quantity));
    navigate('/cart')
  }
  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'sujitv257gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}
  return (
    <LeftContainer sm={{padding: '20px 5px 40px'}} xs={{padding: '20px 5px 40px'}}>
        <Box style={{ padding: '15px 20px',border: '1px solid #f0f0f0', width: '90%'}}>
          <Image src={product.detailUrl} alt="produtDetail" style={{ overflow: 'hidden'}}/><br />
        </Box>       
        <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} md={{width: '46%'}} sm={{width: '46%'}}><ShoppingCartIcon/>Add To Cart</StyledButton>
        <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: '#fb541b'}}><FlashOnIcon/>Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItems
