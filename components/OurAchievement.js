export default function OurAchievement(){
    return(
        <>
            <div className="lg:flex pb-20 mt-14">
                <div className="lg:w-4/12 shadow-xl rounded-md p-6 mb-4">
                    <div className="flex items-center mb-4">
                        <img src="./Star.svg" alt="" />
                        <p className="text-blue-900 ml-4 font-semibold text-lg">4.8 Rating</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="./people.png" alt="" className="-ml-4"/>
                        <p className="text-gray-500"><span className="text-blue-500 font-semibold">+836k</span> Member</p>
                    </div>
                    <p className="text-gray-500 mb-8 tracking-wide">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                    <div className="flex items-center">
                        <p className="text-gray-600 mr-2 font-semibold">Join Our Comunitas</p>
                        <img src="./ArrowRightBlack.svg" alt="" className="hover:"/>
                    </div>
                </div>
                <div className="lg:w-4/12 shadow-xl rounded-md p-6 lg:mx-6 mb-10">
                    <div className="flex items-center mb-4">
                        <img src="./Trophy.svg" alt="" />
                        <p className="text-blue-900 ml-4 font-semibold text-lg">Awards</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="./github.svg" alt="" className="-ml-4"/>
                        <p className="text-gray-500">Best of <span className="text-blue-500 font-semibold">2021</span> on Github</p>
                    </div>
                    <p className="text-gray-500 mb-8 tracking-wide">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                    <div className="flex items-center">
                        <p className="text-gray-600 mr-2 font-semibold">Go To Awards</p>
                        <img src="./ArrowRightBlack.svg" alt="" />
                    </div>
                </div>
                <div className="lg:w-4/12">
                    <div className="">
                        <p className="text-blue-500 font-semibold">Our Achievement</p>
                        <h1 className="text-blue-900 font-bold text-2xl my-2">We are Connecting You The Digital Life.</h1>
                        <p className="text-sm text-gray-500 my-2">The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
                        <button className="bg-blue-500 text-white shadow shadow-blue py-3 px-6 text-sm rounded-lg mt-6">Discover Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}