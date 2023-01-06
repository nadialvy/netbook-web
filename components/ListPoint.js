export default function ListPoint(props){
    return(
        <div className="flex mb-1">
            <img src="./point.svg" alt="" />
            <p className="font-semibold text-gray-800 ml-4">{props.content}</p>
        </div>
    );
}