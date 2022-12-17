import React, { useState } from "react"
import Select from "react-select"
const Color=()=>{
    var clr=[
        {
            value:1,
            label:'Lavender'
            
        },
        {
            value:2,
            label:'Crimson'
            
        },
        {
            value:3,
            label:'Darkblue'
        },
        {
            value:4,
            label:'Teal'
            
        },
        {
            value:5,
            label:'Lime'
            
        },
    ];
    var [setbgcolor,valuename]=useState(clr.label);
    var handleChange =e=>
    {
        valuename(e.label);
    }
    return(
        <div className="static" >
            <style>
                {'table {background-color:'+setbgcolor+';}'}
            </style>
            <h1>Color Changer</h1>
            <div className="sample">
            
            <Select id="select" options={clr} onChange={handleChange}></Select>
            </div>
            
            <table>
                <tbody>
                    <td>{setbgcolor}</td>
                </tbody>
            </table>
        </div>
    )
}
export default Color