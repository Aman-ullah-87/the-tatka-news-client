import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const LeftNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/categories/')
        .then(res=>res.json())
        .then(data=>setCategories(data))
      
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-3'>
                {categories.map(category=>
                   <p  key={category.id}> <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link></p>
                    )}
            </div>
        </div>
    );
};

export default LeftNav;