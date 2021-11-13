import React from 'react';

const Brother = (props) => {
     const {house} = props
     return (
          <div>
               <h3>Brother</h3>
               <p>house {house}</p>
          </div>
     );
};

export default Brother;