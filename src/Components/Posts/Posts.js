import React from "react"

const Posts = ({item, handleClick }) => {
  const {id, desc, user_name, img} = item;
  return(
      <div>
        <div className='mx-auto w-1/2'> 
          <div className='ml-60'> 
              <p className='text-lg font-semibold'><span className='text-yellow-500'>Author:</span> {user_name}</p> 
          </div> 
          <img className='w-1/2 h-1/2 mx-auto' alt=""  src={ img } /> 
          <p className='text-center mb-3 font-semibold text-xl'>{desc} <span onClick={() => handleClick(item)} className='pl-10'><i class="far fa-heart"></i></span></p> 
        </div> 
        </div> 
  )
}

export default Posts