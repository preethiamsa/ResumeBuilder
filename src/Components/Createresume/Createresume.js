import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {templateImagesPaths} from '../Data/Data'//templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from 'react-redux'
import {updateState} from '../../ReduxManager/dataStoreSlice'
import image from '../Data/images/ResumeAngels _ Etsy.jpg'
const shortid= require('shortid')


//this Home component is rendering various resume templates on to the screen and the user can select either of them and proceed further. 
function Createresume() {

    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')//this state is used to display 'useTemplate' button when user hovers over the template
     const footer = {width:'500px',height:'500px',paddingTop:'50px',paddingLeft : '100px'}
     const icon = {backgroundColor:'#ffffff',width:'100px',height:'100px',borderRadius:'50px',paddingTop:'40px',marginLeft:'100px',boxShadow:'0 0 0 5px #5c83b9'};
  
    const dispatch = useDispatch();
    return (
        <>
        <div className='Tophead'>
        <div className='head' style={{width:'50rem',padding:'50px',flex:'1'}} > 
       <h1>IMPRESSIVE RESUMES
           EASY ONLINE BUILDER</h1>
       <p >Your gateway to professional success begins here. At Our Resume Builder, we understand the power of a well-crafted resume in opening doors to new opportunities. Whether you're a seasoned professional looking to climb the corporate ladder or a recent graduate eager to make your mark, we're here to help you shine on paper</p>
       <button type="button" className="button" data-mdb-ripple-color="dark">Start</button>
       </div>
       <div style={{marginRight:'40px'}}>
         <img style={{width:'450px',height:'500px'}} src={image} alt='images' />
       </div>
       </div>
       <div className='process'>
       <h3 style={{paddingTop:'80px',color:'#ffffff'}}>Three Steps to Create Resume</h3>
       <div  className='store'>
       <div className='h5p'>
       <div style={icon} >
       <i class="bi bi-file-earmark-person" ></i></div>
       <h5 className='para'>Selecting a Resume Template</h5>
       <p className='para'> Our resume templates adhere to industry standards, incorporating best practices to meet employer expectations and enhance your professional presentation.</p>
       </div>
       <div className='h5p'>
       <div style={icon}  >
       <i class="bi bi-pencil icon-2x"></i></div>
       <h5 className='para'>Filling in the Details</h5>
       <p className='para'>Begin with personal details, and systematically detail education, work, skills, and achievements, crafting a targeted and impactful resume.</p>
       </div>
       <div  className='h5p'>
       <div style={icon}>
       <i class="bi bi-box-arrow-in-down"></i></div>
       <h5 className='para'>Downloading the Resume</h5>
       <p className='para'>Thoroughly review, format, and save your resume in employer-friendly formats like PDF or Word, ensuring accuracy and accessibility for seamless updates. </p>
       </div>
       </div>
     </div>
        <div style={{minWidth:'300px',marginTop:'100px',height:'500px'}}>
    
            <div className='d-flex justify-content-center mt-5' >
                
                <h3 className='p-2 rounded choosing'>Choose Your Resume Template</h3>
            </div>
            

            <div className='container resumes' >

                <div className='row'>
                    {templateImagesPaths.map((currentTemplate)=>{
                            return(
                                <div className='col col-lg-3 col-md-6  col-12 mt-5' key={shortid.generate()}>
                                    <div 
                                        style= {{ position:'relative',height:'330px',borderRadius:'10px'}}
                                        onMouseOver= {()=>{
                                            //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                                            setIsMouseOver(currentTemplate.name)
                                        }}
                                        onMouseOut= {()=>{
                                            //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                            setIsMouseOver('MouseIsNotOver')
                                        }}
                                    >
                                    <div style={{width:'250px',marginLeft:'25px',marginTop:'20px',boxShadow: ' 0 3px 10px rgb(0 0 0 / 0.2)'}} className='newImages' >
                                    <img style={{height:'300px',width:'250px'}} className="image-aspect-ratio" src={currentTemplate.imageSource} alt='template'/></div>
                                    {isMouseOver === currentTemplate.name           //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                                        ?<Link to="/detailsfillingpage/personalinfo">
                                            <button className='btn btn-primary templatebtn'
                                                    
                                                    onClick= {()=>{
                                                        dispatch(updateState({  //this dispatch function is used to update value of 'selectedTemplate' with the targetedTemplate in dataStoreSlice.js//
                                                        key: 'selectedTemplate',
                                                        value:currentTemplate.name
                                                        }))
                                                    }}
                                            >
                                            Use Template
                                            </button>
                                        </Link>
                                        :null
                                    }
                                </div>
                                </div>
                                
                            )
                        })}
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default Createresume
