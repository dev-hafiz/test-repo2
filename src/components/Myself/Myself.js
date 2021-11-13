import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
     const {house, seretGift} = props 
     return (
          <div>
               <h3>Myself</h3>
               <p>house {house}</p>
               <Special seretGift={seretGift}></Special>

          </div>
     );
};

export default Myself;