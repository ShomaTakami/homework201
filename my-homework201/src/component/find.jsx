import React from "react";

import "./find.css";

const Find = props => (
  <div className='submit'>
    <input
      className='submit-btn submit-all'
      type='submit'
      name='all'
      value='ALL'
    />
    <input
      className='submit-btn submit-active'
      type='submit'
      name='active'
      value='ACTIVE'
    />
    <input
      className='submit-btn submit-comp'
      type='submit'
      name='complited'
      value='COMPLITED'
    />
  </div>
);

export default Find;
