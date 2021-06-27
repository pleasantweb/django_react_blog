import React from 'react'

const Footer=()=> {
  const scrolltoTop =()=>{
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  }
    return (
        <footer className="blog-footer">
  <p>Blog Design by Bootstrap Example</p>
  <p>
    
    {/* <a href="#">Back to top</a> */}
    <button onClick={()=>scrolltoTop()}>Back to top</button>
  </p>
</footer>




    )
}
export default Footer;
