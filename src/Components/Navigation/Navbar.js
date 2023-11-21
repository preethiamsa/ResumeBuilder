import React from 'react'
import {Link} from 'react-router-dom'
function NavBar(){
 
  
    return(
         <div >
            <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 " >
                <div className="container-fluid" >
                  <div className="navbar-brand d-flex align-items-center" style={{color:'#525252',fontSize:'30px', fontWeight:"600"}}>
                    <div className='me-3 mb-2'><i style={{color:'#2fbe6e'}} class="bi bi-file-earmark-bar-graph"></i></div>
                    <div><b>Resume</b>
                    <h4 style={{color:'#fe8c26',fontSize:'medium',paddingLeft:'15px'}}>__BUILDER__</h4></div>
                    
                  </div>
                  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <div className='flex-grow-1'></div>
                    <div className="navbar-nav mb-2 ms-5 ">
                      <li className="nav-item">
                      {/* /*this link will show the Home page */}
                        <Link to='/' className="nav-link active me-4" style={{textDecoration:'none',color:'#525252',fontSize:"20px"}}>Resume Templates</Link> 
                      </li>
                      <li className="nav-item">
                        {/* this link will show the MyResume page displaying the preview of the resume created by the user. */}
                        <Link to='/myresume' className="nav-link active me-4" style={{textDecoration:'none',color:'#525252',fontSize:"20px"}} >My Resume</Link>
                      </li>
                      <li className="nav-item">
                        {/* this link will show the About Us page. */}
                        <Link to='/about' className="nav-link active " style={{textDecoration:'none',color:'#525252',fontSize:"20px"}} >About Us</Link>
                      </li>
                    </div>
                  </div>
                </div>
            </nav>  
        </div>
    )
}

export default NavBar
