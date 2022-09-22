import Footer from '../Footer/Footer';

function About(){
    return(
        <div className="mt-20">
            <div className="mx-auto">
             <img className='w-1/3 mx-auto' alt='' src={require('../Home/assets/blog1.png')} /> 
             <p className='mt-3 text-center font-semibold'>Some text, I don't know for now what to write</p>
            </div>
            <div className='mx-auto w-1/2 mb-24'>
                <p className='text-center mt-10 text-3xl font-semibold'>About us</p>
                <p className='text-center mt-3 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About