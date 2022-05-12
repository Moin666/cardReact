import logo from './logo.svg';
import './App.css';
import Button from './common/button';
import Card from './component/card';
import getData from './services/fetchdata'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
let cardsdata = [{
  title:"Nike",
  description:"Air Max Pre-Day LX low Top Sneakers",
  price:"148$",
  urlImg:"https://cdn-images.farfetch-contents.com/16/94/48/96/16944896_35851481_1000.jpg"
},{
  title:"Nikes",
  description:"Air Max Pre-Day LX low Top Sneakers",
  price:"148$",
  urlImg:"https://cdn.shopify.com/s/files/1/0508/2690/3702/products/at1368-006_00182_3.jpg?v=1608793673"
},{
  title: "VALOUR BLUE",
  price:"130$",
  description:"Air Max Pre-Day LX low Top Sneakers",
  urlImg:
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
{
  title: "JORDAN MARS 270 LONDON",
  price:"130$",
  description:"Air Max Pre-Day LX low Top Sneakers",
  urlImg:
  "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
  {
    title: "RACER BLUE",
    price:"130$",
    description:"Air Max Pre-Day LX low Top Sneakers",
    urlImg:
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
]
const alerPop = (itemClicked) =>{
  alert(JSON.stringify(itemClicked))
  console.log(itemClicked)
}
  return (
    <div className="App d-flex" >
      {cardsdata.map((e,i) =><Card key={e.title}   itemClick = {e}  alerPop = {alerPop} title ={e.title} description ={e.description} price = {e.price} urlImg ={e.urlImg} /> )}

    </div>
  );
}

export default App;
