import React, { useEffect, useState } from 'react';
import HomeSectionTwoComponent from './HomeSectionTwoComponent';


const HomeSectionTwo = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myPosts')
            .then(res => res.json())
            .then(data => {
                const result = data.slice(0, 3).sort((a, b) => a.like.localeCompare(b.like))
                setPosts(result)
            }
               
               )
    }, []);
    return (
        <div>
            {
                posts.map(post =>
                    <HomeSectionTwoComponent
                        key={post._id}
                    allPost={post}></HomeSectionTwoComponent>)
            }
        </div>
    );
};

export default HomeSectionTwo;