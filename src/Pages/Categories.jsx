import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Components/NewsCard/NewsCard';

const Categories = () => {
    const categoryNews =useLoaderData()
    const {id}=useParams();
    return (
        <div>
         <h4>This Category News: {categoryNews.length} </h4> 
         {
            categoryNews.map(news=> <NewsCard key={news._id} news={news} />)
         }  
        </div>
    );
};

export default Categories;