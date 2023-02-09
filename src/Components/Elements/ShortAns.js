import React from 'react';
import { useState ,useEffect} from 'react';

const ShortAns = (props) => {
  const [label, setLabel] = useState('label')

  const handleLabelChange = (e) => {
    setLabel(e.target.value)
  }

  useEffect(()=>{
    const field={
      id:`ShortAns_${props.id}`,
      type:"short_ans",
      label:label
    }
    props.addFormConfiguration(field)
  })

  return (
    <div>
      <input value={label} onChange={handleLabelChange}/>
      <br></br>
      <input type='text'></input>
    </div>
  );
};

export default ShortAns;
