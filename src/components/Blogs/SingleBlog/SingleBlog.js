import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogPostsData } from '../BlogSection/BlogSection'
import Mainnav from '../../mainnav/Mainnav'
import Footer from '../../main/footer/Footer'
import './SingleBlog.css'

const SingleBlog = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const post = blogPostsData.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="single-blog-page">
                <Mainnav />
                <div className="article-not-found">
                    <h2>Article Not Found</h2>
                    <button onClick={() => navigate('/blogs')} className="back-btn">&#8592; Back to Newsroom</button>
                </div>
                <Footer />
            </div>
        )
    }

    // Splitting content by newlines to render proper paragraphs
    const paragraphs = post.content.split('\n\n');

    return (
        <div className="single-blog-page">
            <Mainnav />
            
            <article className="blog-article-wrapper">
                <div className="article-hero" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 25, 51, 0.4), rgba(0, 25, 51, 0.9)), url(${post.image})`}}>
                    <div className="article-hero-content">
                        <span className="article-tag">{post.tag}</span>
                        <h1 className="article-title">{post.title}</h1>
                        <div className="article-meta">
                            <span className="article-date"><i className="far fa-calendar-alt"></i> {post.date}</span>
                            <span className="article-author"><i className="far fa-user"></i> 940 Air Cargo Editorial</span>
                        </div>
                    </div>
                </div>

                <div className="article-body-container">
                    <div className="article-content">
                        {paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                    
                    <div className="article-footer-actions">
                        <button onClick={() => navigate('/blogs')} className="back-to-blogs-btn">
                            &#8592; Back to All Articles
                        </button>
                        
                        <div className="article-share">
                            <span>Share this article:</span>
                            <i className="fab fa-linkedin" title="Share on LinkedIn"></i>
                            <i className="fab fa-twitter" title="Share on Twitter"></i>
                            <i className="fab fa-facebook-square" title="Share on Facebook"></i>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    )
}

export default SingleBlog
