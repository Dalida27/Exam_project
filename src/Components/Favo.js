import React from "react";

const Favo = ({fav, setFav}) => {
  const handleRemove = (id) => {
    const arr = fav.filter((item) => item.id !== id);
    setFav(arr);
  }
  return(
    <div>
      {
        fav.map((item) =>(
          <div className="container mx-auto" key={item.id}>
            <div>
              <div className="flex items-center">
                <p clas="text-3xl font-semibold">{item.user_name}</p>
                <p class="text-lg pl-5">{item.title}</p>
              </div>
              <div className="w-1/2">
               <img className="w-1/2" src={item.img} alt=""/>
              </div>
              <div>
              <button className="border mt-3 py-1 px-2 rounded-md" onClick={()=> handleRemove(item.id)}>Remove</button>
            </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Favo