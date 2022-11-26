
import React, { useState } from 'react'
import Select from 'react-select'
import './app1.css'

function Form() {
  var colors=[
    {
       value:1,
       label:"red"
    },
    {
       value:2,
       label:"blue"
    },
    {
       value:3,
       label:"pink"
    },
    {
       value:4,
       label:"violet"
    },
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>

          
      
      <div className='h'>
      

        <Select options={colors} onChange={ddlhandle} className="sl">
        </Select>
      </div>
        <div className='drop'>
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
          <h3> {setbgcolor}</h3>
        </div>
             </>
    
  )
}

export default Form