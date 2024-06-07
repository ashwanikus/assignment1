// pages/index.js
import RootLayout from '../app/layout';
import { fetchData } from '../services/api';
import BlogCard from './blogCard';

export default function Home({ posts }) {
    return (
        <RootLayout>
            <>
                <div className="blog-container">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </>
        </RootLayout>
    );
}

export async function getStaticProps() {
    const posts = await fetchData();
    return {
        props: {
            posts,
        },
    };
}
