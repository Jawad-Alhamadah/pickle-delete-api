import React from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'
function Card(props) {


    function deleteCast(id){
       
            withReactContent(Swal).fire({
              title: "Are You sure you want to delete?",
              showCancelButton:true
             
            }).then(res=>{
                if(res.isConfirmed) {

                    axios.delete("https://66e8028eb17821a9d9daf072.mockapi.io/chars/"+id)
                    .then(res =>{
                        props.getCast()})
                    }
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

       
       <div className='mt-auto flex justify-around w-[100%]'>
        <button onClick={()=>deleteCast(props.id)}  className='hover:text-white hover:scale-110 duration-300 mt-auto  rounded-md border-[1px] hover:bg-[#e62d2d] border-[#e62d2d] text-[#e62d2d] text-lg p-2'>Delete</button>
        
        <Link to={"/update/"+props.id+"/"+props.name}  className='hover:text-white hover:scale-110 duration-300 mt-auto  rounded-md border-[1px] border-[#7bfba1] hover:bg-[#7bfba1] text-[#7bfba1]  text-lg p-2'>Update</Link>
       </div>
           
      
    </div>
  )
}



export default Card
