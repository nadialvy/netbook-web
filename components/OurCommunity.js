import CommunityCard from "./CommunityCard";

export default function OurCommunity(){
    return(
        <div className="community-gradient mt-8">
            <div className="py-10 px-4 text-center">
                <p className="text-blue-500 font-bold text-sm">Our Community</p>
                <h1 className="text-blue-900 font-bold text-2xl">Community Main Feature</h1>
                <p className="mt-3 text-sm text-gray-500">The wise man therefore always holds in these matters to this principle of selection.</p>
            </div>
            <div className="md:flex md:flex-wrap">
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./member.png"
                        title="Members, Friends"
                        desc="Members, Friends Connection (like followers), Private Message"
                    />
                </div>
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./groups.png"
                        title="Groups"
                        desc="Your users can create groups to let other users to join and talk"
                    />
                </div>
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./forum.png"
                        title="Forum"
                        desc="Forum is ready by BBPress. Your users can make topics and talk."
                    />
                </div>
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./custom_module.png"
                        title="Custom Module"
                        desc="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
                    />
                </div>
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./list_builder.png"
                        title="List Builder"
                        desc="Members, Groups list can be modified by drag & drop live builder."
                    />
                </div>
                <div className="md:w-1/2">
                    <CommunityCard
                        icon="./list_scroll.png"
                        title="List Scroll Efects"
                        desc="8 different scroll effects are ready. You can always change by your tastes."
                    />
                </div>
            </div>
        </div>
    );
}