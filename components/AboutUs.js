import ListPoint from "./ListPoint";

export default function AboutUs(){
    return(
        <>
            <div className="mt-6 mb-10">
                <p className="text-blue-500 font-semibold text-sm">Whats Netbooks?</p>
                <h1 className="text-blue-900 font-bold text-2xl my-4">Why Join to Netbook Social Network?</h1>
                <p className="text-sm text-gray-500 mb-4">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                <ListPoint content="Groups"/>
                <ListPoint content="Message"/>
                <ListPoint content="Share"/>
            </div>
            <div className="flex items-center mx-6">
                <img src="./about_us_1.png" alt="" className="w-1/2 h-1/2 pr-2" />
                <div>
                    <img src="./about_us_2.png" alt="" className="pb-2" />
                    <img src="./about_us_3.png" alt="" />
                </div>
            </div>
        </>
    );
}