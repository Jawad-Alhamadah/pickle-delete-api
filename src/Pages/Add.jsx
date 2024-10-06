import React from 'react'
import axios from 'axios'
import { Flip, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
function Add(props) {

    let navigate = useNavigate()

    let [nameInput, setnameInput] = React.useState("")
    let [genderInput, setGenderInput] = React.useState("")
    let [imageInput, setImageInput] = React.useState("")

    function handlenameInputChange(e) {
        setnameInput(e.target.value)
    }
    function handleGenderInputChange(e) {
        setGenderInput(e.target.value)
    }
    function handleImageInputChange(e) {
        setImageInput(e.target.value)
    }

    function addChar() {
        if(nameInput.length<=0) return toast.warning("you must fill all the info")
        if(genderInput.length<=0) return toast.warning("you must fill all the info")
        if(imageInput.length<=0) return toast.warning("you must fill all the info")
        axios.post("https://66e8028eb17821a9d9daf072.mockapi.io/chars", {
            name: nameInput,
            gender: genderInput,
            image: imageInput,
            hair:"unknown",
            species:"unknown",
            status:"unknown",
            origin:"unknown",

        })
            .then(res => {
                //props.getCast()
                // setnameInput("")
                // setGenderInput("")
                // setImageInput("")
                navigate("/")
            })

    }


    return (
        <div className='mt-5 items-center flex justify-center flex-wrap space-x-3 w-[100%]'>
            <ToastContainer></ToastContainer>
            <div className='space-x-1'>
                <button onClick={addChar} className='bg-yellow-600 p-2 rounded-md text-yellow-200'>Add a new Charcter</button>
                <input onChange={handlenameInputChange} className='border-[1px] border-black rounded-lg p-2' type="text" placeholder='Name' />
                <input onChange={handleGenderInputChange} className='border-[1px] border-black rounded-lg p-2' type="text" placeholder='Gender' />
                <input onChange={handleImageInputChange} className='border-[1px] border-black rounded-lg p-2' type="text" placeholder='Image' />
            </div>

        </div>
    )
}

export default Add
