import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=> {
    return (
        <div className="container">
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="link-secondary" href="#!">Subscribe</a>
      </div>
      <div className="col-4 text-center">
        <Link className="blog-header-logo text-dark" to='/'>Blogger</Link>
        
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="link-secondary" href="#!" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        <a className="btn btn-sm btn-outline-secondary" href="#!">Sign up</a>
      </div>
    </div>
  </header>

  <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <Link className="p-2 link-secondary" to='/search/World'>World</Link>
     
      <Link className="p-2 link-secondary" to='/search/Technology'>Technology</Link>
     <Link className='p-2 link-secondary' to='/search/Design'>Design</Link>
     <Link className='p-2 link-secondary' to='/search/Culture'>Culture</Link>
     <Link className='p-2 link-secondary'to='/search/Business'>Business</Link>
     <Link className='p-2 link-secondary' to='/search/Politics'>Politics</Link>
     <Link className='p-2 link-secondary'  to='/search/Science'>Science</Link>
     <Link className='p-2 link-secondary' to='/search/Health'>Health</Link>
     <Link className='p-2 link-secondary' to='/search/Style'>Style</Link>
     <Link className='p-2 link-secondary' to='/search/Travel'>Travel</Link>
    </nav>
  </div>
</div>
    )
}
export default Navbar;