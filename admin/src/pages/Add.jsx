import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)

  const [name, setName] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("Fiction");
  const [subCategory, setSubCategory] = useState("Young Adult");
  const [bestseller, setBestseller] = useState(false);
  const [cover, setCover] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData()

      formData.append("name", name)
      formData.append("synopsis", synopsis)
      formData.append("price", price)
      formData.append("genre", genre)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("cover", JSON.stringify(cover))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setSynopsis('')
        setImage1(false)
        setImage2(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-fill items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt ="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type= "file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt ="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type= "file" id="image2" hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Book name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Synopsis</p>
        <textarea onChange={(e)=>setSynopsis(e.target.value)} value={synopsis} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write here' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Genre</p>
          <select onChange={(e)=>setGenre(e.target.value)} className='w-full px-3 py-2'>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Fiction">Fiction</option>
            <option value="Children's Books">Children's Books</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Age Rating</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Children">Children</option>
            <option value="Young Adult">Young Adult</option>
            <option value="Adult">Adult</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25'/>        </div>
      </div>

      <div>
        <p className='mb-2'>Cover</p>
        <div className='flex gap-3'>

          <div onClick={() => setCover(prev =>
            prev.includes("Hardcover")
              ? prev.filter(item => item !== "Hardcover")
              : [...prev, "Hardcover"])}>
            <p className={`${cover.includes("Hardcover") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Hardcover</p>
          </div>

          <div onClick={() => setCover(prev =>
            prev.includes("Softcover")
              ? prev.filter(item => item !== "Softcover")
              : [...prev, "Softcover"])}>
            <p className={`${cover.includes("Softcover") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Softcover</p>
          </div>

          <div onClick={() => setCover(prev =>
            prev.includes("Hardcover with sleeve")
              ? prev.filter(item => item !== "Hardcover with sleeve")
              : [...prev, "Hardcover with sleeve"])}>
            <p className={`${cover.includes("Hardcover with sleeve") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Hardcover with sleeve</p>
          </div>

          <div onClick={() => setCover(prev =>
            prev.includes("Softcover with sleeve")
              ? prev.filter(item => item !== "Softcover with sleeve")
              : [...prev, "Softcover with sleeve"])}>
            <p className={`${cover.includes("Softcover with sleeve") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Softcovers with sleeve</p>
          </div>

        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
