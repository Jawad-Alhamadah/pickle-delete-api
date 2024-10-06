 
import React, { useEffect } from 'react'
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import Card from '../components/Card'



function Home() {
    let [cast, setCast] = React.useState([])
   let [filtered,setFiltered] = React.useState([])
  

    useEffect(() => {
        getCast()

    }, [])




    let [search,setSearch] = React.useState("")
    function handleSearchChange(event){

       setSearch(event.target.value)
       
   }
   function searchCast(){
    if(search.length<=0) {return  setFiltered(cast)}
        let filtered_cast = cast.filter(person => person.name ===search)
        setFiltered(filtered_cast)
        
   }
   

    function getCast() {
        axios.get("https://66e8028eb17821a9d9daf072.mockapi.io/chars")
            .then(res => {
                setCast(res.data)
                setFiltered(res.data)
            
            })

            
    }

    return (
        <div className='mt-4 space-x-2 p-3'>
            <Link to="/add" className='bg-yellow-600 p-2 rounded-md text-yellow-200'>Add a new Charcter</Link>
            <button onClick={getCast} type="button" class=" bg-green-500  px-7 py-2 rounded-md">All</button>
            <div className='text-center mt-5 space-x-1 ml-auto'>

                <input onChange={handleSearchChange} className='border-[1px] border-black rounded-lg p-2' type="text" />
                <button onClick={searchCast} className=' text-blue-50 bg-blue-400 p-2 rounded-e-md'>Search</button>

            </div>




            <div className='flex flex-wrap gap-10 justify-center mt-10'>



                {filtered && filtered.map((person,index) => {

                    return <Card
                    key={index}
                        image={person.image}
                        gender={person.gender}
                        name={person.name}
                        id={person.id}
                        origin={person.origin}
                        status={person.status}
                        species={person.species}
                        hair={person.hair}
                        getCast={getCast}
                    />
                })}

            </div>
        </div>

    )
}

export default Home
