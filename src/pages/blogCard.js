// components/BlogCard.js
import React from 'react';
import Link from 'next/link';

const BlogCard = ({ post }) => {
    const { id, title, author, date_published, content } = post;

    const trimContent = (content) => {
        return content.length > 20 ? content.slice(0, 20) + '...' : content;
    };

    return (
        <div className="card">
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Date Published:</strong> {new Date(date_published).toDateString()}</p>
            <div className="content">
                <p>{trimContent(content)}</p><Link href={`/blog/${id}`}>Read more..</Link>
            </div>
        </div>
    );
};

export default BlogCard;
