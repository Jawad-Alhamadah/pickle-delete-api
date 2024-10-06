import React from 'react'
import axios from "axios"

function Card(props) {


    function deleteCast(id){
        axios.delete("https://66e8028eb17821a9d9daf072.mockapi.io/chars/"+id)
        .then(res =>{
            props.getCast()
        })
    }
   
  return (
    <div 
    className='hover:scale-105 duration-300 flex flex-col p-4  w-[15em] rounded-md overflow-hidden  border-r-4  shadow-md bg-white'
  style={{filter:"drop-shadow(#9dc4d98e 12px 8px 0px)"}}
    >
        <div
          style={ props.status==="Dead" || props.status== "Deceased"? {filter:"saturate(0)"}:{} }
        >
            <img src={props.image} alt="" className='w-[100%] rounded-md mb-4'
            style={{filter:"drop-shadow(#bca8758e 4px 4px 1px)"}}
            />
        </div>

        <div className='mb-3'>
            <h2>{props.name}</h2>
            <h2>{props.status}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.species}</h2>
            <h2>{props.origin}</h2>
            <h2>{props.hair}</h2>
        </div>

       
            <button onClick={()=>deleteCast(props.id)}  className='hover:scale-110 duration-300 mt-auto ml-auto rounded-md bg-[#e62d2d] text-white text-lg p-2'>Delete</button>
      
       
        
      
    </div>
  )
}

export default Card
