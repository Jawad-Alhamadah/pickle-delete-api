import React from 'react'
import axios from 'axios'
import { Flip, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
function Update() {

    let navigate = useNavigate()

    let { id,name } = useParams()
    let [nameInput, setnameInput] = React.useState("")
    let [genderInput, setGenderInput] = React.useState("")
    let [imageInput, setImageInput] = React.useState("")


    let [hairInput, sethairInput] = React.useState("")
    let [speciesInput, setSpeciesInput] = React.useState("")

    let [statusInput, setStatusInput] = React.useState("")
    let [originInput, setOriginInput] = React.useState("")
    



    function handlenameInputChange(e) {
        setnameInput(e.target.value)
    }
    function handleGenderInputChange(e) {
        setGenderInput(e.target.value)
    }
    function handleImageInputChange(e) {
        setImageInput(e.target.value)
    }
    function handleHairInput(event) {
        sethairInput(event.target.value)
    }
    function handleSpeciesInput(event) {
        setSpeciesInput(event.target.value)
    }
    function handleStatusInput(event) {
        setStatusInput(event.target.value)
    }
    function handleOriginInput(event) {
        setOriginInput(event.target.value)
    }

    function addChar() {
        let isAllEmpty = (nameInput.length <= 0) && (genderInput.length <= 0) && (imageInput.length <= 0) &&
            (hairInput.length <= 0) && (speciesInput.length <= 0) && (statusInput.length <= 0) &&
            (originInput.length <= 0)
        if (isAllEmpty) return toast.warning("atleast one value must be filled")
        let put_object = {}

        nameInput    ? put_object["name"]    = nameInput : ""
        genderInput  ? put_object["gender"]  = genderInput : ""
        imageInput   ? put_object["image"]   = imageInput : ""
        hairInput    ? put_object["hair"]    = hairInput : ""
        speciesInput ? put_object["species"] = speciesInput : ""
        statusInput  ? put_object["status"]  = statusInput : ""
        originInput  ? put_object["origin"]  = originInput : ""

        axios.put("https://66e8028eb17821a9d9daf072.mockapi.io/chars/" + id, put_object)
            .then(res => {
                navigate("/")
            })

    }


    return (
        <div className='mt-8 flex justify-center rounded-lg'>
            <div className='shadow-md rounded-lg p-3 border-[2px] border-[#080d562] mt-5 items-center flex justify-center flex-wrap space-x-3 max-sm:w-[15em] w-[25em]'>
                <ToastContainer></ToastContainer>

               
                <div className='flex flex-col space-y-2 '>
                    <h1 className='text-center'>{name}</h1>
                    <input onChange={handlenameInputChange} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='Name' />
                    <input onChange={handleGenderInputChange} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='Gender' />
                    <input onChange={handleImageInputChange} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='Image' />
                    <input onChange={handleHairInput} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='hair' />
                    <input onChange={handleOriginInput} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='origin' />
                    <input onChange={handleSpeciesInput} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='species' />
                    <input onChange={handleStatusInput} className=' border-b-[1px] rounded-lg p-2' type="text" placeholder='status' />
                    <button onClick={addChar} className='bg-[#7e2bb6] p-2 rounded-md text-white'>Update</button>
                </div>

            </div>

        </div>

    )
}


export default Update
