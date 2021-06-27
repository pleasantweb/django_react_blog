import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MyContext} from '../Layout'

//////////////////////////////////////////////////////////////////////
const Homecat=({match})=> {
    const [blogData,setBlogData] = useState(null);

///////////////////////////////////////////////////////////////////////
   const ourData = React.useContext(MyContext);
useEffect(()=>{
    setBlogData(ourData.fullData);
},[ourData.fullData])
/////////////////////////////////////////////////////////////////////
    const blogContainer =()=>{
        let coldiv = [];
        let rowdiv = [];
        let arr =[];  
       
        arr = blogData.filter(e=>e.category === match.params.category)
        arr.map((data,j)=>{
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
////////////////////////////////////////////////////////////////////////
    return (
        <>
            {/* <MyContext.Consumer>
                {data=>setourstate(data.fullData)}
            </MyContext.Consumer>  */}
             <div className="container">
            {blogData !== null ? ( blogContainer()) : (<div></div>)}
            </div>
        </> 
    )
}
export default Homecat;
/////////////////////////////////////////////////////////////////