export default function TeamCard(props){
    return(
        <div className="border border-gray-200 px-4 pt-2 m-2 rounded-2xl shadow-none hover:border-none hover:shadow-xl hover:transition">
            <div className="w-fit mx-auto">
                <img src={props.img} alt={props.name}/>
                <div className="text-center my-4">
                    <p className="text-xl text-blue-900 font-semibold">{props.name}</p>
                    <p className="text-gray-500 mt-2">{props.usn}</p>
                </div>
            </div>
        </div>
    );
}