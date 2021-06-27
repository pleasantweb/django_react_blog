import React,{useState,useEffect} from 'react'
import './css/Home.css'
import './css/bootstrap.min.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import axios from 'axios'
export const MyContext = React.createContext()
const Layout=(props)=> {
    const [headBlog,setHeadBlog] = useState(null);
    const [blogData,setBlogData] = useState(null);
    const [fullData,setFullData] = useState(null);
/////////////////////////////////////////////////////////////////////////
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/app/blogapi/?q=true`).then(res=>{setHeadBlog(res.data[0]) })
  
        axios.get(`${process.env.REACT_APP_API_URL}/app/blogapi/?q=false`).then(res=>{setBlogData(res.data) })

        axios.get(`${process.env.REACT_APP_API_URL}/app/blogapi/`).then(res=>setFullData(res.data))
      },[]);
/////////////////////////////////////////////////////////////////////////
    return (
        <>
            <Navbar />
            <MyContext.Provider value={{blogData:blogData,headBlog:headBlog,fullData:fullData}} >
            {props.children}
            </MyContext.Provider>
            <Footer />
        </>          
    )
}
export default Layout;
