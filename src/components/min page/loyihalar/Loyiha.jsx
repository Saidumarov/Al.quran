import React, { useState } from 'react';
import "./loyiha.scss";
import bar from "../../../assets/img/bar.png";
import l1 from "../../../assets/img/l1.png";
import l2 from "../../../assets/img/l2.png";
import l3 from "../../../assets/img/l3.png";
import l4 from "../../../assets/img/l4.png";
import l5 from "../../../assets/img/l5.png";
import l6 from "../../../assets/img/l6.png";

const Loyiha = () => {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
    <g clip-path="url(#clip0_0_328)">
      <path d="M25.375 61.625L61.625 25.375" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 25.375L61.625 25.375L61.625 58" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_0_328">
        <rect width="87" height="87" fill="white" transform="translate(0 87) rotate(-90)"/>
      </clipPath>
    </defs>
  </svg>;

const [ op , setOp] = useState(1)

  const data = [

    {
        id:1,
        img:l1,
        title:`Mobil ilova`,
        body:`UYMAKON mobil ilovasi`,
        opasty:{op},

    },
    {
        id:2,
        img:l2,
        title:`Veb sayt`,
        body:`UYMAKON mobil ilovasi`,

    },
    {
        id:3,
        img:l3,
        title:`SMM`,
        body:`UYMAKON mobil ilovasi`,

    },
    {
        id:4,
        img:l4,
        title:`Mobil ilova`,
        body:`UYMAKON mobil ilovasi`,

    },
    {
        id:5,
        img:l5,
        title:`Veb sayt`,
        body:`UYMAKON mobil ilovasi`,

    },
    {
        id:6,
        img:l6,
        title:`SMM`,
        body:`UYMAKON mobil ilovasi`,


    },

]

const filteredData = data.filter((item) => item.id <= 6);
const filteredData1 = data.filter((item) => item.id <= 3);
const [ avto , setAvto ] = useState()
const [ margn , setMargn ] = useState()
const [ left , setLeft] = useState()
const [ wiz , setWiz] = useState()
// const [ op , setOp] = useState(1)





  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section>
      <div className="loyiha-wrap">
        <h2 className='lo-h2'>Bajargan loyihalarimiz</h2>
        <div className="loyiha-menyu">
          <p onClick={() => handleCategoryChange('Barchasi'  ,setAvto(800) ,setMargn(0), setLeft(0) , setWiz(166) ,setOp(1) ) }>Barchasi</p>
          <p onClick={() => handleCategoryChange('Veb sayt' ,setAvto(300)  ,setMargn(100) , setLeft(122) , setWiz(166))}>Veb sayt</p>
          <p onClick={() => handleCategoryChange('Veb dizayn'  ,setAvto(300) ,setMargn(100) , setLeft(245) , setWiz(166))}>Veb dizayn</p>
          <p onClick={() => handleCategoryChange('SMM'  ,setAvto(300) ,setMargn(100) , setLeft(373) , setWiz(145)) }>SMM</p>
          <p onClick={() => handleCategoryChange('Mobil ilova'  ,setAvto(300) ,setMargn(100) , setLeft(495) , setWiz(166) ,setOp(0) )}>Mobil ilova</p>
          <div className="button-loyiha" style={{left:`${left}px`  , width:`${wiz}px`}}></div>
        </div>

        <div className="loyiha-itme" style={{height:`${avto}px`}}>
        {
            filteredData1.map((item) => (
            (selectedCategory === '' || selectedCategory === item.title) && (
              <div className="loyiha-cart" key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
                <div className="top-cart">{item.title}</div>
                <div className="cart-hover" style={{ opacity: `${item.opasty }` }}>
                  <h2>{item.body}</h2>
                  <div className="icon">{icon}</div>
                </div>
              </div>
            )
          ))}
          {
            filteredData.map((item) => (
            (selectedCategory === 'Barchasi' || selectedCategory === item.title) && (
              <div className="loyiha-cart" key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
                <div className="top-cart">{item.title}</div>
                <div className="cart-hover" style={{ opacity: `${item.opasty}` }}>
                  <h2>{item.body}</h2>
                  <div className="icon">{icon}</div>
                </div>
              </div>
            )
          ))}
        </div>
        <img src={bar} alt="" className="bar"  style={{marginTop:`${margn}px`}} />
      </div>
    </section>
  );
};

export default Loyiha;
