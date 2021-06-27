import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Blogpost=({match})=> {
    const [blogData,setBlogData] = useState(null);
   
    useEffect(()=>{

      axios.get(`${process.env.REACT_APP_API_URL}/app/blogapi/?q=${match.params.blogname}`).then(res=>{setBlogData(res.data[0])})

    },[match.params.blogname]);

   
    return (
        <>
        
        <div>
           {blogData !== null ? (
               <>
               <div className="container">
                    <h1 className='text-center'>{blogData.title}</h1>
                    <div className="d-flex justify-content-between">
                        <h3 className='text-success'>[{blogData.category}]</h3>
                        <h3 className='text-end text-primary'>{blogData.date_post}</h3>
                    </div>
                    
                     <p className='textp' style={{whiteSpace:'pre-wrap'}}>{blogData.content}</p>
                     </div>
               </>
           ) : (
           <div className="container">
               <div className="d-flex justify-content-center mt-5">
               <div className="spinner-grow" style={{width:4+'rem',height:4 +'rem'}} role='status'>
                   <span className='sr-only'></span>
               </div>
               </div>
           
           </div>
           )}
           

        </div>
        </>
    )
}
export default Blogpost;
