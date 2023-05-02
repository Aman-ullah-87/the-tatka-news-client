import moment from 'moment';
import React from 'react';


import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaRegBookmark,FaRegEye,FaRegStar,FaShareAlt, FaStar,}from "react-icons/fa"
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id,title,image_url,details,author,rating,total_view}=news
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'>
        <Image style={{width:'40px',height:'40px'}} src={author.img} roundedCircle />
        <div className='ms-4 flex-grow-1'>
            <p className='mb-0'>{author.name}</p>
            <p className='mb-0'><small> {moment(author.published_date).format('YYYY-MM-DD')}</small></p>
        </div>
        <div>
        <Button variant="light"><FaRegBookmark/></Button>
        <Button variant="light"><FaShareAlt/></Button>
        </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length <250 ? <>{details}</>:<>
            {details.slice(0,250)}... <Link to={`/news/${_id}`}>Read more</Link>
            </> }
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
            <div className='flex-grow-1'>
                
             <Rating
             readonly
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar/>}
              placeholderSymbol={<FaStar/>}
              fullSymbol={<FaStar/>}
             /> 
             
            </div>
            <FaRegEye className='me-2'/> {total_view}
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;