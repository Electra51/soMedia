// import React, { useEffect, useState } from 'react';

// const PostDetailsHalf = ({params}) => {
//     const [postComments, setPostComments] = useState([]);
//     useEffect(() => {
//         fetch(`http://localhost:5000/comments/${params}`)
//             .then(res => res.json())
//             .then(data =>console.log(data))
//     }, [params]);
//     return (
//         <div className="card w-full bg-primary text-primary-content">
//         <div className="card-body">
//           <h2 className="card-title">All Comments</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
          
//         </div> 
    
//         </div>
//     );
// };

// export default PostDetailsHalf;