"use client"

import React, { useState, SyntheticEvent, useEffect, useRef } from 'react';
import Image from 'next/image';

interface BlogTilesSectionProps {
    categories: string[],
    blogPosts: {
        slug: string,
        title: string,
        date: string,
        content: string,
        imageHref: string,
        href: string,
        featured: string,
        active: string,
        category: string,
    }[];
    noFeatured? : Boolean;
    noActive?: Boolean;
}

const BlogTilesSection: React.FC<BlogTilesSectionProps> = ({ blogPosts, categories, noActive, noFeatured }) => {
    const [sortMethod, setSortMethod] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveringTile, setHoveringTile] = useState<number | null>(null);
    const [overflowingTitles, setOverflowingTitles] = useState<boolean[]>([]);

    // Correctly typing the useRef hook to hold an array of HTMLHeadingElement | null
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    useEffect(() => {
        if (!noFeatured) {
            setSortMethod('featured');
        } else if (!noActive) {
            setSortMethod('active');
        } else {
            setSortMethod('newest');
        }
    }, [noFeatured, noActive]);

    const sortBlogPosts = (method: string) => {
        const sortedBlogPosts = [...blogPosts].sort((a, b) => {
            const dateSort = new Date(b.date).getTime() - new Date(a.date).getTime();

            switch (method) {
                case 'featured':
                    const featuredSort = (b.featured === 'y' ? 1 : 0) - (a.featured === 'y' ? 1 : 0);
                    if (featuredSort !== 0) return featuredSort;

                    return dateSort;
                case 'active':
                    const activeSort = (b.active === 'y' ? 1 : 0) - (a.active === 'y' ? 1 : 0);
                    if (activeSort !== 0) return activeSort;

                    return dateSort;
                case 'newest':
                    return dateSort;
                case 'oldest':
                    return -dateSort;
                default:
                    if (categories.includes(method)) {
                        const categorySort = (b.category === method ? 1 : 0) - (a.category === method ? 1 : 0);
                        if (categorySort !== 0) return categorySort;

                        return dateSort;
                    }
                    return 0;
            }
        });

        return sortedBlogPosts;
    };

    interface FilterBlogPostsFunction {
        (blogPosts: BlogTilesSectionProps["blogPosts"], query: string): BlogTilesSectionProps["blogPosts"];
    }

    const filterBlogPosts: FilterBlogPostsFunction = (blogPosts, query) => {
        if (!query) {
            return blogPosts;
        }

        const lowercaseQuery = query.toLowerCase();
        return blogPosts.filter(
            (blogPost) =>
                blogPost.title.toLowerCase().includes(lowercaseQuery) ||
                blogPost.content.toLowerCase().includes(lowercaseQuery)
        );
    };

    const sortedBlogPosts = sortBlogPosts(sortMethod);
    const filteredBlogPosts = filterBlogPosts(sortedBlogPosts, searchQuery);

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }
    interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {}
    type HandleSearchChangeFunction = (event: InputChangeEvent) => void;

    const handleSearchChange: HandleSearchChangeFunction = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        setHoveringTile(index);
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setHoveringTile(null);
    }

    const checkOverflowingTitles = () => {
        const newOverflowingTitles = titleRefs.current.map((titleRef) => {
            if (titleRef) {
                return titleRef.scrollWidth > titleRef.clientWidth;
            }
            return false;
        });
        if (JSON.stringify(newOverflowingTitles) !== JSON.stringify(overflowingTitles) && !hoveringTile && hoveringTile !== 0) {
            setOverflowingTitles(newOverflowingTitles);
        }
    };
    
    useEffect(() => {
        // Check overflowing titles on initial load
        checkOverflowingTitles();

        // Check overflowing titles on window resize
        const handleResize = () => {
            checkOverflowingTitles();
            console.log("check");
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [filteredBlogPosts]);

    return (
        <div className="mx-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-8">
            <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                <div className="space-y-4">
                    {!noFeatured && 
                    <div className="flex items-center gap-2">
                        <input
                            className="h-4 w-4 text-primary-600 focus:ring-primary-600 ring-offset-gray-800"
                            id="sort-featured"
                            name="sort"
                            type="radio"
                            checked={sortMethod === 'featured'}
                            onChange={() => setSortMethod('featured')}
                        />
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-featured">
                            Featured
                        </label>
                    </div>
                    }
                    {!noActive && 
                    <div className="flex items-center gap-2">
                        <input
                            className="h-4 w-4 text-primary-600 focus:ring-primary-600 ring-offset-gray-800"
                            id="sort-active"
                            name="sort"
                            type="radio"
                            checked={sortMethod === 'active'}
                            onChange={() => setSortMethod('active')}
                        />
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-featured">
                            Active
                        </label>
                    </div>
                    }
                    <div className="flex items-center gap-2">
                        <input
                            className="h-4 w-4 text-primary-600 focus:ring-primary-600 ring-offset-gray-800"
                            id="sort-newest"
                            name="sort"
                            type="radio"
                            checked={sortMethod === 'newest'}
                            onChange={() => setSortMethod('newest')}
                        />
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-newest">
                            Newest
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            className="h-4 w-4 text-primary-600 focus:ring-primary-600 ring-offset-gray-800"
                            id="sort-oldest"
                            name="sort"
                            type="radio"
                            checked={sortMethod === 'oldest'}
                            onChange={() => setSortMethod('oldest')}
                        />
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-price-asc">
                            Oldest
                        </label>
                    </div>
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-4">Categories</h3>
                <div className="space-y-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                className="h-4 w-4 text-primary-600 focus:ring-primary-600 ring-offset-gray-800"
                                id="sort-category"
                                name="sort"
                                type="radio"
                                checked={sortMethod === category}
                                onChange={() => setSortMethod(category)}
                            />
                            <label className="text-sm font-medium text-gray-200" htmlFor="sort-featured">
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="my-4 space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Search</h3>
                    <div className="flex items-center gap-2">
                        <input
                            className="h-6 w-full text-black rounded px-1"
                            id="search"
                            name="search"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredBlogPosts.map((blogPost, index) => (
                        <a 
                            className={`rounded-lg overflow-hidden shadow-md transition duration-300 hover:scale-105 hover:cursor-pointer bg-gray-700 ${(sortMethod === "featured" && blogPost.featured === "y") ? " border-2 border-[#00a896]" : ""} ${(sortMethod === "active" && blogPost.active === "y") ? " border-2 border-[#00a896]" : ""} ${(categories.includes(sortMethod) && blogPost.category === sortMethod) ? " border-2 border-[#00a896]" : ""}`}
                            href={blogPost.href}
                            key={index}
                            onMouseEnter={(e) => handleMouseEnter(e, index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                alt="Blog Post Image"
                                className="w-full h-48 object-cover"
                                height={300}
                                src={blogPost.imageHref}
                                style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                                }}
                                width={400}
                                loading="lazy"
                            />
                            <div className="p-4 bg-gray-700">
                                <div className="whitespace-nowrap flex">
                                <h3
                                ref={(el) => {
                                    titleRefs.current[index] = el;
                                }}
                                className={`text-lg font-semibold ${hoveringTile === index && overflowingTitles[index] ? "animate-marquee inline-block" : "truncate"}`}
                                >
                                {blogPost.title}
                                </h3>
                                    {hoveringTile === index && overflowingTitles[index] && (
                                    <h3 
                                    className="absolute text-lg font-semibold animate-marquee2 inline-block"
                                    >
                                    {blogPost.title}
                                    </h3>
                                    )}
                                </div>
                                <p className=" text-xs mb-2">
                                    {blogPost.date}
                                </p>
                                <p className="text-gray-400 line-clamp-3">
                                    {blogPost.content}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogTilesSection;
