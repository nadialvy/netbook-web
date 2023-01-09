import BlogCard from "./BlogCard";

export default function Blog(){
    return(
        <div className="p-4">
            <div className="p-4 py-10 px-4 text-center">
                <p className="text-blue-500 font-bold text-sm">Get Our Application</p>
                <h1 className="text-blue-900 font-bold text-2xl">Latest News</h1>
            </div>
            <div className="md:flex">
                <BlogCard
                    image="./blog_1.png"
                    desc="It Does Not Matter Hows Slowly go as Long"
                />
                <BlogCard
                    image="./blog_2.png"
                    desc="Netbook Network Added New Photo Filter"
                />
                <BlogCard
                    image="./blog_3.png"
                    desc="We Optimised Netbooks Better Navigation"
                />
            </div>
        </div>
    );
}