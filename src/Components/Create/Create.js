import Footer from "../Footer/Footer"

function Create(){
    return(
        <div className="mt-20">
            <p className="text-center text-3xl">Create your own New Blog!</p>
            <div className="mx-auto mb-20">
                <div className=" mx-auto mt-24 w-1/3">
                    <input type="text" className="w-full py-3 border rounded-md pl-5" placeholder="Enter your title..." />
                    <input type="text" className="w-full py-3 my-3 border rounded-md pl-5" placeholder="Enter your description..." />
                    <input type="text" className="w-full py-3 border rounded-md pl-5" placeholder="Enter your image..." />
                    <div className="text-center">
                        <button className="mt-5 text-xl bg-yellow-500 border border-black rounded-lg px-3 py-2">Save and create</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )   
}   

export default Create