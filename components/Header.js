export default function Header(){
    return(
        <div className="p-4 lg:flex">
            <div className="lg:w-1/2">
                <button className="bg-blue-50 text-blue-500 py-3 px-6 text-xs font-bold rounded-lg">Netbook Community</button>
                <h1 className="my-4 text-blue-900 font-extrabold text-4xl">Your Solutions For Community!</h1>
                <p className="text-sm text-gray-500">More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                <div className="flex mt-8 mb-4">
                    <button className="bg-blue-500 text-white py-3 px-6 text-xs rounded-lg mr-4">About More</button>
                    <button className=" text-blue-500 py-3 px-6 text-xs rounded-lg border border-blue-500">Invite Friend</button>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img src="./headerimg.png" className=""></img>
            </div>
        </div>
    );
}