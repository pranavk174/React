import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Header from "../components/head";
import Card from "../components/Card";
import Pagination from "../components/paginations";
import { AppContext } from '../contexts/contextApi';
// import {Url2} from "../baseUrl";
import { Audio } from 'react-loader-spinner';

export default function Blogpage() {
    const Url2 = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const { loading, setLoading } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const blogId = location.pathname.split("/").at(-1);

    const fetchRelatedBlog = async () => {
        setLoading(true);
        let url = `${Url2}get-blog?blogId=${blogId}`;
        console.log("Fetching blog from URL:", url);

        try {
            const response = await axios.get(url);
            const data = response.data;

            console.log("API Response:", data);

            if (data.blog) {
                setBlog(data.blog);
                console.log("Blog data fetched:", data.blog);
            } else {
                console.log("No blog found");
                setBlog(null);
            }

            if (data.relatedBlogs) {
                setRelatedBlogs(data.relatedBlogs);
                console.log("Related blog data fetched:", data.relatedBlogs);
            } else {
                console.log("No related blog data found");
                setRelatedBlogs([]); // Ensure empty array if no related blogs are found
            }

        } catch (err) {
            console.error("Error fetching blog data:", err);
            setBlog(null);
            setRelatedBlogs([]); // Reset related blog on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchRelatedBlog();
    }, [location.pathname]);

    return (
        <div className="flex flex-col items-center min-h-[100vh]">
            <Header />
            <div className="flex  justify-center  items-center flex-col w-[40rem] min-h-[100vh]  mb-[4rem]]">
                <div className="w-full my-3">
                    <button className="px-3 py-1 border-2 rounded-md" onClick={() => navigate(-1)}>
                        Back
                    </button>
                </div>
                {loading ? (
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                    />
                ) : blog ? (
                    <div className="flex flex-col gap-5">
                        <Card post={blog} />
                        <h1 className="font-bold text-[1.5rem] ">Related Blog</h1>
                        <hr />
                        {relatedBlogs.length > 0 ? (
                            relatedBlogs.map((post, index) => (
                                <div key={post.id}>
                                    <Card post={post} />
                                </div>
                            ))
                        ) : (
                            <p>No Related Blogs Found</p>
                        )}
                    </div>
                ) : (
                    <p>No Data Found</p>
                )}
            </div>
            <Pagination/>
        </div>
    );
}
