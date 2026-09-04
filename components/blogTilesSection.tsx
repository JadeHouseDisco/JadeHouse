"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    noFeatured?: boolean;
    noActive?: boolean;
}

const BlogTilesSection: React.FC<BlogTilesSectionProps> = ({ blogPosts, categories, noActive, noFeatured }) => {
    const [sortMethod, setSortMethod] = useState(() =>
        !noFeatured ? 'featured' : !noActive ? 'active' : 'newest',
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveringTile, setHoveringTile] = useState<number | null>(null);
    const [overflowingTitles, setOverflowingTitles] = useState<boolean[]>([]);

    // Correctly typing the useRef hook to hold an array of HTMLHeadingElement | null
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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

    const filteredBlogPosts = filterBlogPosts(sortBlogPosts(sortMethod), searchQuery);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleMouseEnter = (index: number) => {
        setHoveringTile(index);
    }

    const handleMouseLeave = () => {
        setHoveringTile(null);
    }
    
    useEffect(() => {
        const checkOverflowingTitles = () => {
            const next = titleRefs.current.map((title) =>
                title ? title.scrollWidth > title.clientWidth : false,
            );
            setOverflowingTitles((current) =>
                current.length === next.length && current.every((value, index) => value === next[index])
                    ? current
                    : next,
            );
        };

        checkOverflowingTitles();
        window.addEventListener('resize', checkOverflowingTitles, { passive: true });

        return () => {
            window.removeEventListener('resize', checkOverflowingTitles);
        };
    }, [blogPosts, categories, searchQuery, sortMethod]);

    return (
        <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-8">
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
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-active">
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
                        <label className="text-sm font-medium text-gray-200" htmlFor="sort-oldest">
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
                                id={`sort-category-${index}`}
                                name="sort"
                                type="radio"
                                checked={sortMethod === category}
                                onChange={() => setSortMethod(category)}
                            />
                            <label className="text-sm font-medium text-gray-200" htmlFor={`sort-category-${index}`}>
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
            <div className="min-w-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {filteredBlogPosts.map((blogPost, index) => (
                        <Link
                            className={`min-w-0 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:cursor-pointer bg-gray-700 ${(sortMethod === "featured" && blogPost.featured === "y") ? " border-2 border-[#00a896]" : ""} ${(sortMethod === "active" && blogPost.active === "y") ? " border-2 border-[#00a896]" : ""} ${(categories.includes(sortMethod) && blogPost.category === sortMethod) ? " border-2 border-[#00a896]" : ""}`}
                            href={blogPost.href}
                            key={blogPost.slug}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                alt={blogPost.title}
                                className="w-full h-48 object-cover"
                                height={300}
                                src={blogPost.imageHref}
                                style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                                }}
                                width={400}
                                loading={index < 4 ? "eager" : "lazy"}
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                            />
                            <div className="p-4 bg-gray-700">
                                <div className="relative flex min-w-0 overflow-hidden whitespace-nowrap">
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogTilesSection;
