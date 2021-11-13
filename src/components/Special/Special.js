import React, { useContext } from 'react';
import { giftContext } from '../../App';

const Special = (props) => {
     const {seretGift} = props
     const hardGift =  useContext(giftContext)
     
     return (
          <div>
               <h3>Special</h3>
               <p>gift :{hardGift}</p>
          </div>
     );
};

export default Special;