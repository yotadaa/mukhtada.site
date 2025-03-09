'use client'

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "./components/header";
import { Skeleton } from "./utilities";

export default function Home() {
    const [headerMenu, setHeaderMenu] = useState([
        { "name": "Explore Pics" },
        { "name": "Story" },
        { "name": "Explore Sounds" }
    ]);

    const [choosenHeaderMenu, setChoosenHeaderMenu] = useState(1);
    const [indicatorStyles, setIndicatorStyles] = useState({ left: 0, width: 0 });
    const [isSticky, setIsSticky] = useState(false);

    const menuRefs = useRef([]);
    const headerRef = useRef(null);

    const [blogs, setBlogs] = useState([
        {
            image: "https://via.placeholder.com/300x400",
            title: "Exploring the Depths of the Ocean",
            author: "John Doe",
            date: "March 8, 2025",
            description: "The ocean holds mysteries beyond imagination, teeming with life, color, and history waiting to be uncovered beneath the waves."
        },
        {
            title: "The Future of Artificial Intelligence",
            author: "Jane Smith",
            date: "March 5, 2025",
            description: "AI is revolutionizing industries, from healthcare to automation, and its future promises even more breakthroughs and ethical challenges ahead."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "10 Tips for a Healthy Lifestyle",
            author: "Michael Johnson",
            date: "February 28, 2025",
            description: "Maintaining a balanced diet, exercising regularly, and managing stress effectively can lead to a happier and healthier life overall."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "A Journey Through the Amazon Rainforest",
            author: "Sarah Lee",
            date: "February 25, 2025",
            description: "Exploring the lush, green heart of the Amazon reveals stunning wildlife, diverse ecosystems, and the importance of conservation efforts."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "Mastering the Art of Photography",
            author: "David Brown",
            date: "February 20, 2025",
            description: "Photography is more than just clicking a button; it's about capturing emotions, stories, and perspectives in the perfect frame."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "The Rise of Electric Vehicles",
            author: "Emily Wilson",
            date: "February 15, 2025",
            description: "Electric cars are transforming transportation, offering sustainability, lower emissions, and advanced technology for a greener future."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "Space Exploration: What’s Next?",
            author: "Daniel Carter",
            date: "February 10, 2025",
            description: "From Mars missions to deep space telescopes, humanity continues to push the boundaries of exploration and scientific discovery."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "The Power of Mindfulness in Daily Life",
            author: "Sophia Martinez",
            date: "February 5, 2025",
            description: "Practicing mindfulness helps reduce stress, improve focus, and enhance overall well-being by bringing awareness to the present moment."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "A Guide to Sustainable Living",
            author: "James Anderson",
            date: "February 2, 2025",
            description: "Reducing waste, conserving energy, and choosing eco-friendly products can significantly contribute to a more sustainable planet."
        },
        {
            image: "https://via.placeholder.com/300x400",
            title: "The History of Ancient Civilizations",
            author: "Olivia White",
            date: "January 28, 2025",
            description: "Exploring ancient cultures from Egypt to Mesopotamia reveals fascinating insights into human history, innovation, and civilization."
        }
    ]);


    useEffect(() => {
        // Adjust highlight position dynamically
        if (menuRefs.current[choosenHeaderMenu]) {
            const menuItem = menuRefs.current[choosenHeaderMenu];
            setIndicatorStyles({
                left: menuItem.offsetLeft,
                width: menuItem.offsetWidth
            });
        }
    }, [choosenHeaderMenu]);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const { top } = headerRef.current.getBoundingClientRect();
                setIsSticky(top <= 55 && window.scrollY > 55);
                //check if current top scroll view is <= 55, iff yes setIsSticky false
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />
            <main className=" w- min-h-screen ">
                <section className="bg-slate-50 w-full h-full rounded-xl">
                    {/* Sticky header behavior */}
                    <header ref={headerRef} className={`w-full flex justify-center items-center p-2 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : ""}`}>
                        <ul className="flex gap-10 py-2 relative items-center">
                            {/* it seems that framer motion object didnt adjusted yet to text height when wrapped */}
                            <motion.div
                                className="absolute bg-gray-700 rounded-full z-0"
                                initial={false}
                                animate={{
                                    left: indicatorStyles.left,
                                    width: indicatorStyles.width,
                                    height: menuRefs.current[choosenHeaderMenu]?.offsetHeight || 40, // Dynamically adjust height
                                }}
                                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                            />


                            {/* Menu Items */}
                            {headerMenu.map((obj, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (menuRefs.current[index] = el)}
                                    onClick={() => setChoosenHeaderMenu(index)}
                                    className={`relative z-10 cursor-pointer px-5 py-2 text-center font-semibold ${index == choosenHeaderMenu ? "text-slate-50" : 'text-gray-700'} transition-all`}
                                >
                                    {obj.name}
                                </li>
                            ))}
                        </ul>
                    </header>
                    <article className="space-y-6 flex flex-col items-center justify-start w-full">
                        {blogs.map((blog, index) => (
                            <div key={index} className="max-w-[700px] w-full flex flex-col sm:flex-row items-start gap-6 bg-white p-4 rounded-lg shadow-md">
                                {/* Blog Image */}
                                {blog.image ? <Skeleton className="w-full sm:w-[200px] h-[150px]" /> : <></>}

                                {/* Blog Metadata */}
                                <div className={`flex ${blog.image ? 'w-full sm:w-[400px]' : ''}  flex-col justify-start`}>
                                    <h2 className="text-lg font-bold text-gray-900">{blog.title}</h2>
                                    <p className="text-sm text-gray-600">By {blog.author} • {blog.date}</p>
                                    <p className="text-gray-700 mt-2">{blog.description}</p>
                                </div>
                            </div>
                        ))}
                    </article>

                </section>
            </main>
        </>
    );
}
