export default function CommunityCard(props){
    return(
        <div className="bg-white p-4 rounded-2xl flex items-center justify-start mx-6 mb-4">
            <img src={props.icon} alt="" className="mr-8"/>
            <div>
                <p className="text-blue-900 text-lg font-semibold mb-4">{props.title}</p>
                <p className="text-gray-500 text-sm tracking-wide">{props.desc}</p>
            </div>
        </div>
    );
}