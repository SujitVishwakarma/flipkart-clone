import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box , styled} from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
  padding: 20px 10px;
  background: #F2F2F2;
`
const Home = () => {
  const { products } = useSelector(state => state.getProducts)
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>
        <MidSlide products={products} title='Deal of the Day' timer={true}/>
        <MidSection/>
        <Slide products={products} title='Discounts for You' timer={false}/>
        <Slide products={products} title='Suggesting Items' timer={false}/>
        <Slide products={products} title='Top Selection' timer={false}/>
        <Slide products={products} title='Recommended Items' timer={false}/>
        <Slide products={products} title='Trendings Offers' timer={false}/>
        <Slide products={products} title=' Seasons top picks' timer={false}/>
        <Slide products={products} title='Top Deals on Accessories' timer={false}/>

      </Component>

    </>
  )
}

export default Home
