import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MyContext} from '../Layout'

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
const Home=()=> {
  const [headBlog,setHeadBlog] = useState(null);
  const [blogData,setBlogData] = useState(null);

///////////////////////////////////////////////////////////////////////
const ourData = React.useContext(MyContext)

useEffect(()=>{
    setBlogData(ourData.blogData);
    setHeadBlog(ourData.headBlog);
},[ourData.blogData,ourData.headBlog])
//////////////////////////////////////////////////////////////////////
  // const setourstate =(data,dataa)=>{
  //   setBlogData(data)
  //   setHeadBlog(dataa)
  // }
  
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////  
    const headBlogcontainer = ()=>{    
      return(
        <div key={headBlog.id} className="col-md-12 px-0">
        <h1 className="display-4 fst-italic">{headBlog.title}</h1>
        <p className="lead my-3">{headBlog.short}</p>
        <p className="lead mb-0">
        <Link to={'/post/' + headBlog.slug}  className="text-white fw-bold">Continue reading...</Link>
          
          </p>
      </div>
      )
    }
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
    const blogContainer =()=>{
      let coldiv = [];
      let rowdiv = []; 
      blogData.map((data,j)=>{
          return coldiv.push(
            <div key={j} className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{data.category}</strong>
                <h3 className="mb-0">{data.title}</h3>
                <div className="mb-1 text-muted">{data.date_post}</div>
                <p className="card-text mb-auto">{data.short}</p>
                <Link to={'/post/' + data.slug}  className="stretched-link">Continue reading</Link>
                
              </div>
             
            </div>
          </div>
          )
      })      
      for(let i=0; i<coldiv.length; i+=2){   
        rowdiv.push(
         
        <div key={i} className="row mb-2">
            {coldiv[i]}
            {coldiv[i+1]}
        </div>
        )  
        }
        return rowdiv
    }

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
    return (
      <>
       
      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          {headBlog !== null ? (headBlogcontainer()) : <div></div>}
        </div>
      {blogData !== null ? (blogContainer()):(<div></div>)}
        </main>
  
        </>
    )
}
export default Home;

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
