export default function BlogCard(props){
    return(
        <>
            <div className="md:w-1/3 mx-6 mb-8">
                <img src={props.image}></img>
                <div className="flex items-center mt-4">
                    <hr className="bg-yellow-300 w-1/4 h-1 mr-2" />
                    <p className="text-lg font-semibold text-blue-800">{props.desc}</p>
                </div>
                <p className="text-gray-400 text-sm hover:text-blue-500 text-center mt-2">Continue Reading</p>
            </div>
        </>
    );
}