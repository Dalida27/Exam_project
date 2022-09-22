import { dataBlogs } from '../data';

const Post=()=>{
  return(
    <div>
      {dataBlogs.map(( data) => {
      return(
          <div className='' key={data.id}>
             <div className='mx-auto w-1/2'>
                  <img className='w-1/2 mx-auto' alt=""  src={ data.img } />
                  <p className='text-center mb-3 font-semibold text-xl'>{data.desc}</p>
             </div>
          </div>
      )   
  })}
    </div>
  )


}
export default Post;