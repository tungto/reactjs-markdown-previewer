import React from 'react';
import './Editor.css';

const editor = (props) => {
  return (
    <div className='Editor'>
      <textarea id='editor' value={props.text} onChange={props.handleChange} />
    </div>
  );
};

export default editor;
