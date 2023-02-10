import React, { useEffect } from 'react';
import { useState } from 'react';

const MCQ = (props) => {

  const [options, setOptions] = useState(['option 1'])
  const [label, setLabel] = useState('label')

  var count=options.length

  const handleAddOption = () => {
    setOptions([...options,`option ${count+1}`])
  }

  const handleOptionChange=(e)=>{
    var optionArray = options.slice() 
    optionArray[e.target.id] = e.target.value 
    setOptions(optionArray) 
  }

  const handleLabelChange = (e) => {
    setLabel(e.target.value)
  }

  useEffect(()=>{
    const field={
      id:`MCQ_${props.id}`,
      type:"MCQ",
      label:label,
      options:options
    }
    props.addFormConfiguration(field)
  })

  return (
    <div>
      <input value={label} onChange={handleLabelChange} />


      <div id='options'>
        {
          options.map((op,index) => {
            return (
            <div key={index}>
              <input type="radio" value={op} name={op} />
              <label ><input value={op} id={index} onChange={handleOptionChange}/></label>
            </div>
              )
          })
        }

        <button onClick={handleAddOption}>Add option</button>
      </div>
    </div>
  );
};

export default MCQ;
