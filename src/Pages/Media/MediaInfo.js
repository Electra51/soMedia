import React, { useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import PerPost from './PerPost';
import PostCommentModal from './PostCommentModal';

const MediaInfo = () => {
    const [postDataModals, setPostDataModals] = useState(null);
    const myPostData = useLoaderData();
    console.log(myPostData);
    return (
        <div>
               <div className='flex flex-col gap-20 '>
            {
                myPostData.sort((a, b) => b.like.localeCompare(a.like, 'en', {numeric: true})).map(postData => <PerPost
                    key={postData._id}
                    onePostData={postData}
                    setPostDataModals={setPostDataModals}
                ></PerPost>
                 )
            }
           
        </div>
         {
            postDataModals && <PostCommentModal
            postDataModals={postDataModals}
            setPostDataModals={setPostDataModals}></PostCommentModal>
            }
         
     </div>
    );
};

export default MediaInfo;