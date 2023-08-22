import React, { useState, useContext } from 'react'
import { Box, Typography, Button, styled, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
// components
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';



const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '&& > *': {
        marginRight: 40,
        fontSize: 16,
        textAligns: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }

}))
const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',

}));

const CustomButton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
     const { cartItems} = useSelector(state => state.cart);
    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant='Contained' onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButton;
