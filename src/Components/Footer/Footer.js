function Footer(){
    return(
        <div className="footer bg-black text-white mt-10 pb-16">
            <div class="flex items-center justify-between text-2xl pt-3">
                <p className="font-bold ml-10">Digital product design</p>
                <p>Remote work</p>
                <p className="font-bold">UX design</p>
                <p>Distributed teams</p>
                <p className="font-bold">Creativity </p>    
                <p>Strategy </p>
                <p className="font-bold">Suspense</p>
                <p className="mr-10">Growth</p>
            </div>
            <div className="mx-auto w-2/5">
                <p class="text-center font-semibold text-4xl pt-16">Art_Blog</p>
                <p className="text-center pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className="flex items-center pt-10 mx-auto">
                    <div className="border-b border-white mx-auto">
                        <a href="https://twitter.com/?lang=ru" className="text-xl text-center">Twitter</a>
                    </div>
                    <div className="border-b border-white mx-auto">
                        <a href="https://instagram.com" className="text-xl text-center">Instagram</a>
                    </div>
                    <div className="border-b border-white mx-auto">
                        <a href="https://facebook.com" className="text-xl text-center">Facebook</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer