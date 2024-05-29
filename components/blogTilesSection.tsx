"use client"

import React, { useState, SyntheticEvent } from 'react';

interface BlogTilesSectionProps {
    blogPosts: {
        slug: string,
        title: string,
        date: string,
        content: string,
        imageHref: string,
        href: string,
        featured: string,
    }[];
  }

const BlogTilesSection: React.FC<BlogTilesSectionProps> = ({ blogPosts }) => {
    const [sortMethod, setSortMethod] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveringTile, setHoveringTile] = useState<number | null>(null);

    const sortBlogPosts = (method: string) => {
        const sortedBlogPosts = [...blogPosts].sort((a, b) => {
        switch (method) {
            case 'featured':
                // First, sort by featured status
                const featuredSort = b.featured === 'y' ? 1 : a.featured === 'y' ? -1 : 0;
                if (featuredSort !== 0) return featuredSort;

                // If featured status is the same, sort by date (newest to oldest)
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            case 'newest':
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            case 'oldest':
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            default:
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

    return (
        <div className="mx-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-8">
            <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                <div className="space-y-4">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredBlogPosts.map((blogPost, index) => (
                    <a 
                        className={`rounded-lg overflow-hidden shadow-md transition duration-300 hover:scale-105 hover:cursor-pointer ${(sortMethod === "featured" && blogPost.featured === "y") ? " border-2 border-[#00a896]" : ""}`}
                        href={blogPost.href}
                        key={index}
                        onMouseEnter={(e) => handleMouseEnter(e, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            alt="Blog Post Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src={blogPost.imageHref}
                            style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4 bg-gray-700">
                            <div className="whitespace-nowrap flex">
                                <h3
                                className={`text-lg font-semibold ${hoveringTile === index && blogPost.title.length > 25 ? "animate-marquee inline-block" : "truncate"}`}
                                >
                                {blogPost.title}
                                </h3>
                                {hoveringTile === index && blogPost.title.length > 25 && (
                                <h3 className="absolute text-lg font-semibold animate-marquee2 inline-block">
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
    )
}

export default BlogTilesSection;