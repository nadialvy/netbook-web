import TeamCard from "./TeamCard";

export default function OurTeam(){
    return(
        <>
            <div className="py-10 px-4 text-center">
                <p className="text-blue-500 font-bold text-sm">Valuable Team</p>
                <h1 className="text-blue-900 font-bold text-2xl">Our Active Members</h1>
                <p className="mt-3 text-sm text-gray-500">when an unknown printer took a galley of type and meeting fari scrambled it.</p>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <TeamCard
                        img="./team_1.png"
                        name="Aditya Pratama"
                        usn="@aditp_"
                    />
                </div>
                <div className="w-1/2">
                    <TeamCard
                        img="./team_2.png"
                        name="Kazi Rahman"
                        usn="@rahman"
                    />
                </div>
                <div className="w-1/2">
                    <TeamCard
                        img="./team_3.png"
                        name="Noval Akbar"
                        usn="@nopal"
                    />
                </div>
                <div className="w-1/2">
                    <TeamCard
                        img="./team_4.png"
                        name="Jamal Deren"
                        usn="@jamal"
                    />
                </div>
            </div>
        </>
    );
}