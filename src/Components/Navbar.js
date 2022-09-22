import React, { useState } from 'react';
import Sign from './Sign/Sign';
import Post from './Post/Post'
import About from './About/About';
import Projects from './Projects/Projects';
import Create from './Create/Create';
import {Routes, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Navbar=({setSho})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
         <div className='header border-b fixed top-0 left-0 w-full bg-white'>
             <div className='flex justify-between items-center mt-3 mb-2'>
                 <div className='ml-20'>
                     <p onClick={()=>setSho(true)} className='text-3xl'>Art_Blog</p>  
                 </div>
                 <div className='flex justify-around'>
                     <Link to="/about" className=' px-5 font-bold text-yellow-500'>About</Link>
                     <Link to="/projects" className='font-bold'>Your Blog</Link>
                     <Link to="/create" className=' pl-10 font-bold text-yellow-500'>Create new Blog</Link>
                     <p className='pl-10 font-bold' onClick={()=>setSho(false)}>Favorities</p>
                 </div>
                 <div className='flex items-center mr-20'>
                     <p variant="primary" onClick={handleShow} className='border border-2 border-black rounded-full px-3 py-2 font-bold hover:border-white hover:cursor-pointer'>Sign In</p>
                     <Link to="/sign" className='mx-5 border border-2 border-black rounded-full px-3 py-2 text-white bg-black font-bold hover:cursor-pointer'>Sign Up</Link>
                 </div> 
             </div>
         </div>
         <Routes>
             <Route path='/about' element={<About />}/> 
             <Route path='/projects' element={<Projects />}/>
             <Route path='/create' element={<Create />}/>
             <Route path='/sign' element={<Sign />}/>
             <Route path='/post' element={<Post />}/>
         </Routes>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='block'>
                <input className='border border-black p-2' type="text" placeholder='Login...' />
                <input className='border border-black p-2 ml-5' type="text" placeholder='Telephone number...' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
      </Modal>
    </div>
)
}

export default Navbar;