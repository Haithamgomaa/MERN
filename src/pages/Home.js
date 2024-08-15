import React from 'react'
import SecHeader from '../components/SecHeader'
import GoogleMap from '../components/GoogleMap '
import GoogleMaps from '../components/GoogleMaps.css';
import './Homepage.css';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';


const Home = () => {
  return (

    
<div>
<CategoryList/>
<BannerProduct/>
<HorizontalCardProduct category={"تريلا"} heading={"Top's تريلا"}/>
<HorizontalCardProduct category={"لوري"} heading={"Top's لوري "}/>
<HorizontalCardProduct category={"مقطورة"} heading={"Top's مقطورة "}/>
<HorizontalCardProduct category={"بيك_اب"} heading={"Top's بيك اب "}/>
<VerticalCardProduct category={"تريلا"} heading={"تريلا"}/>


</div>



  )
}

export default Home