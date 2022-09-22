import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import { dataBlogs } from '../data.js';
import Posts from '../Posts/Posts';

const Home = ({handleClick}) => {
    return(
        <div className=''>
            <div className="hero mt-24">
                <div className="mx-auto mt-5">  
                    <img className='w-1/3 mx-auto' alt='' src={require('./assets/blog2.png')} />    
                    <div className='mx-auto w-1/3 border-b-2 border-black'>
                        <p className='text-center font-bold mt-3 text-4xl'>A few words about why I did this Blog, and how to use it</p>
                        <p className='pt-3 text-center font-s pb-3'>This website I made for my final Exam, i Hope you will like it:)</p>
                    </div>
                </div>
                <div className='mx-auto mt-5'>
                    <p className='text-center font-semibold text-3xl mb-5'>All Articles</p>
                    {
                        dataBlogs.map((item) => <Posts key={item.id} item={item} handleClick={handleClick}/>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;