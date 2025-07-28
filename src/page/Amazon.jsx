

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHippo, faCartShopping, faDove, faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import shop_image1  from '../images/shop_image1.jpg';
import logo  from '../images/Burger.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AmazonNav, Footer } from './Navbar';
import { Dev, ScrollProduct } from './dev';



const Card = (props) => {


    return (
        <div className='card' >
            <button 
                style={{ backgroundColor: ' #92002e', color: ' #ffffff', width: "90%" }}
                onClick={() => { props.setid( 'home' ) } } 
            > Back </button>

            { props.data && props.data.map( x => (
                <div id={x.name} > 
                    <button
                        style={{ backgroundColor: 'rgb(213, 205, 205)', width: "90%" }}
                        
                    > { x.name } </button>
                </div>
            ))}
        </div>
    )
}

const LeftSlide = (props) => {
    const [ currentID, setID ] = useState('home');

    const data = {
        video: [
            { name: 'video1', link: 'https://www.youtube.com' },
            { name: 'video2', link: 'https://www.youtube.com' },
            { name: 'video3', link: 'https://www.youtube.com' },
        ],
        music: [
            { name: 'music1', link: 'https://www.youtube.com' },
            { name: 'music2', link: 'https://www.youtube.com' },
            { name: 'music3', link: 'https://www.youtube.com' },
        ],
        book: [
            { name: 'book1', link: 'https://www.youtube.com' },
            { name: 'book2', link: 'https://www.youtube.com' },
            { name: 'book3', link: 'https://www.youtube.com' },
        ]
    }

    return (
        <div id='left-slide' >
            
            <div id='window' >

                { currentID==='home' &&  <div id='home' >

                    <button 
                        style={{ backgroundColor: ' #92002e', color: ' #ffffff' }}
                        onClick={() => props.toggle() } 
                    > Cancel </button>    

                    <button 
                        style={{ backgroundColor: 'rgb(213, 205, 205)' }}
                        onClick={ () => setID('video') } 
                    > Video </button>

                    <button  
                        style={{ backgroundColor: 'rgb(213, 205, 205)' }}
                        onClick={ () => setID('music') } 
                    > Music </button>

                    <button 
                        style={{ backgroundColor: 'rgb(213, 205, 205)' }}
                        onClick={ () => setID('book') } 
                    > Book </button>

                </div>  }
                

                { currentID==='video' && <Card data={ data.video } title='Video' setid={setID} /> }
                { currentID==='music' && <Card data={ data.music } title='Music' setid={setID} /> }
                { currentID==='book' && <Card data={ data.book } title='Book' setid={setID} /> }    
                
            </div> 
            
            

        </div>
    )
}

export const OptionBar = (props) => {

    return (
        <div  id="optionbar" >
            <Link className='oplink' onClick={ () => props.toggle() } > Home </Link>
            <Link className="oplink" to='/product' > home2 </Link>
            <Link className="oplink" to="/orders"> home3 </Link>
            <Link className="oplink" to="/style"> home4 </Link>
        </div>
    )
}


export const SlideProduct = () => {
    const ids=[ "img1", "img2", "img3", "img4" ];
    const [ index, setIndex ] = useState(0);

    const leftSlide = () => {
        if( index>0 ) setIndex(index-1);
        else setIndex( ids.length-1 );
    }

    const rightSlide = () => {
        if( index < ids.length-1 ) setIndex( index+1 );
        else setIndex(0);
    }

    return (
        <div className="slide-product" id={ ids[index] } >

            <button onClick={leftSlide} id="left-button" > &#8592; </button>
            <button onClick={rightSlide} id="right-button" > &#8594; </button>

        </div>
    )
}












export const Amazon = () => {
    const [ leftslideOn, setLeftSlide ] = useState(false);
    const toggleSlide = () => {
        if(leftslideOn) setLeftSlide(false);
        else setLeftSlide(true);
    }

    return (
        <div id="amazon101">
            
            <AmazonNav />
            <OptionBar toggle={toggleSlide} />
            <SlideProduct />
            <Dev />
            <ScrollProduct />
            
            
            <Footer /> 
            
        </div>
    )
}


