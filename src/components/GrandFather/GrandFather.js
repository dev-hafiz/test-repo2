import React from 'react';
import Father from '../Father/Father';
import Fuppi from '../Fuppi/Fuppi';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
     const {house, seretGift } = props;
     

     return (
          <div>
               <h1>GrandFather</h1>
               <h4>house {house}</h4>
               <div className="wrapper">
               <Father house = {house} seretGift={seretGift}></Father>
               <Uncle house = {house} ></Uncle>
               <Fuppi house = {house}></Fuppi>   
               </div>
          </div>
     );
};

export default GrandFather;