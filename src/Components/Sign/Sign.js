function Sign() {
  return(
    <div className="mt-20">
      <div className="mx-auto">
        <p className="text-center text-3xl font-bold">You don't have account yet?</p>
        <p className="text-center text-2xl font-semibold mt-3 text-yellow-500">Let's create it!</p>
      </div>
      <div className="mx-auto block w-1/3">
        <input className="w-full py-2 border mt-20 pl-5" type="text" placeholder="Enter your name..."/>
        <input className="w-full py-2 border mt-3 pl-5" type="text" placeholder="Enter your surname..."/>
        <input className="w-full py-2 border mt-3 pl-5" type="text" placeholder="Enter your login..."/>
        <input className="w-full py-2 border mt-3 pl-5" type="text" placeholder="Enter your email..."/>
        <input className="w-full py-2 border mt-3 pl-5" type="password" placeholder="Enter your password..."/>
          <div className="text-center">
            <button className="button mt-5 bg-yellow-500 text-xl border rounded-lg px-3 py-2">Save</button>
          </div>
      </div>  
    </div>
  )
}

export default Sign