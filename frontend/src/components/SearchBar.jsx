import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if (location.pathname.includes('collection')){
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])

    const handleSearchClick = () => {
        console.log("Search icon clicked");  // Check if this is logged
        console.log("Search term:", search);  // Log the search term
    
        if (search.trim()) {
            console.log("Navigating to collection with search term:", search);
            navigate(`/collection?search=${search}`);
            console.log("Navigating to:", `/collection?search=${search}`);

        } else {
            console.log("Navigating to collection without search term");
            navigate('/collection');
            console.log("Navigating to:", `/collection?search=${search}`);

        }
    
        setShowSearch(false); // Close the search bar after navigation
    };
    

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search'
                />
                <img 
                    className='w-4' 
                    src={assets.search_icon} 
                    alt="Search"
                    onClick={handleSearchClick} />
            </div>
            <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
  ) : null
}

export default SearchBar
