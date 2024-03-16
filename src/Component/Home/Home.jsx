import React from 'react'
import img1 from '../../images/avataaars (1).svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return <>
    <div className='bg-babyblue '>
    <div className="container p-5">
          <div className="row">
            <div className='d-flex justify-content-center align-items-center'>
                <img src={img1} alt=""className='w-25' />
            </div>
            <div className='text-center'>
                <h2 className='pt-5 fs-1 fw-bold text-white'>START FRAMEWORK</h2>
                <span className='line d-inline-block'><FontAwesomeIcon icon={faStar} className='text-white' /></span>
                <p className=' text-white p-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
            
   </div>
    </div>
    
    </>
}

export default Home
