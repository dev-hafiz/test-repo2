import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
     const {house, seretGift } = props;
     return (
          <div>
               <h2>Father</h2>
               <h4>house {house}</h4>
               <div className="wrapper">
               <Brother house = {house}></Brother>
               <Myself house = {house} seretGift={seretGift}></Myself>
               <Sister house = {house}></Sister>
               </div>
          </div>
     );
};

export default Father;