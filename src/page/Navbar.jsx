import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHippo, faCartShopping, faDove, faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import shop_image1  from '../images/shop_image1.jpg';
import logo  from '../images/Burger.jpg';
import { Link } from 'react-router-dom';
import  '../styles/amazon.css';
import '../styles/index.css'
import { useState } from 'react';


export const AmazonNav = () => {
    
    function setWindow (val) {
        let elem = document.getElementById('sign-in-pop')
        if( val ) elem.style.display='block'
        else elem.style.display='none'
    }

    return (
        <div id='amazon-nav' >
            

            
            <div className='nav-child' >
                 <FontAwesomeIcon icon={faDove} className='icon' /> 
            </div>

            <div className='nav-child' >
                <FontAwesomeIcon icon={faLocationDot} className='icon' />
                <div style={{ paddingLeft: '.3rem' }} > Deliver To <br/> Bangladesh </div> 
            </div>

            <div  id='midbar' className='nav-child' >
                <select >
                    <option value="" > All </option>
                    <option value="art" > Arts </option>
                    <option value="film"> Film </option>
                    <option value="Sport"> Sports </option>
                </select>
                <input placeholder='search me'></input>
                <button onClick={() => alert('submitted')} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </button>
            </div>

            <div className='nav-child' >
                <select >
                    <option value="english" > EN </option>
                    <option value="art" > Arts </option>
                    <option value="film"> Film </option>
                    <option value="Sport"> Sports </option>

                </select>
            </div>

            <div className='nav-child' id='sign-in'
            onMouseEnter={ () => setWindow(true) }
            onMouseLeave={ () => setWindow(false) }
            >
                
                
                <div> Sign in or Accounts </div> 
                <div id='sign-in-pop' 
                onMouseEnter={ () => setWindow(true) } 
                onMouseLeave={ () => setWindow(false) } 
                >
                    Hi I am here
                </div>    

            </div>
            
            <div className='nav-child' >
                <FontAwesomeIcon icon={faCartShopping} className='icon' />
                Cart
            </div>
        </div>
    )
}



export const Footer = () => {


    return (
        <div id='footer' >
            <div id='back-to-top' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <a  href='#amazon-nav' style={{  color: 'white', textDecoration: 'none' }} >Back to top</a> 
            </div>

            <div className='footer' >

                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor,  </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor,  </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, kjgk dofdof odkfodk </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
            </div>

            <div className='footer-pro' >
                <div className='footer-extra' ></div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='grid-child' > Lorem ipsum dolor, </div>
                <div className='footer-extra' ></div>
            </div>

        </div>
    )
}