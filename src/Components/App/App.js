import React, { useState } from 'react';
import Navbar from '../Navbar';
import Home from '../Home/Home';
import Favo from '../Favo';


const App = ()=> {
  const [sho, setSho] = useState(true);
  const [fav, setFav] = useState([]);

    const handleClick = (item) =>{
      if (fav.indexOf(item) !== -1) return;
      setFav([...fav, item]);
    }

    const handleChange = (item, d) => {
      const ind = fav.indexOf(item);
      const arr = fav;
      arr[ind].amount += d;

      if(arr[ind].amount === 0) arr[ind].amount = 1;
      setFav([...arr]);
    };

    // useEffect(() => {
    //   console.log("fav change")
    // }, [fav]);

  return(
    <div>
      <Navbar setSho={setSho} size={fav.length}/>
      {sho ? (
        <Home handleClick={handleClick}/> 
        ) : (
        <Favo fav={fav} setFav={setFav} handleChange={handleChange}/>
      )}
         
    </div>
)
}

export default App;
