

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
    const [ cur , setCur ] = useState(null)

    const data = [
        {
            header : 'alu',
            list : [
                {
                    sub_header: 'alu1',
                    sub_list: [
                        { page : 'google', link: 'www.google.com' },
                        { page : 'google1', link: 'www.google.com' }
                    ]
                },
                {
                    sub_header: 'alu2',
                    sub_list: [
                        { page : 'agoogle', link: 'www.google.com' },
                        { page : 'agoogle1', link: 'www.google.com' }
                    ]
                }
            ]
        },
        {
            header : 'balu',
            list : [
                {
                    sub_header: 'balu1',
                    sub_list: [
                        { page : 'bgoogle', link: 'www.google.com' },
                        { page : 'bgoogle1', link: 'www.google.com' }
                    ]
                },
                {
                    sub_header: 'balu2',
                    sub_list: [
                        { page : 'bbgoogle', link: 'www.google.com' },
                        { page : 'bbgoogle1', link: 'www.google.com' }
                    ]
                }
            ]
        }
    ]

    function offLeftSlide () {
        let elem = document.getElementById('left-slide')
        let elem2 = document.getElementById('slidein')
        elem2.style.animation='anim2 .5s forwards'
        setTimeout( ()=> { elem.style.display='none' }, 300 )
        
    }

    function leftSwap () {
        let elem = document.getElementById('swap')
        elem.style.animation = 'left-swap .5s forwards'
    }

    function rightSwap () {
        let elem = document.getElementById('swap')
        elem.style.animation = 'right-swap .5s forwards'
    }

    function actionn1 (val){
        setCur(val)
        leftSwap();
    }

    return (
        <div id='left-slide' >
            <div  id='slidein' style={{   height: '100%', backgroundColor: 'white', overflow: 'hidden' }} >

                <div id='swap' style={{ color: 'var(--color1)', display: 'flex', width : '200%', height: '100%' }} >
                    <div id='left-swap' style={{ width: '50%', padding: '2%' }} >

                        { data && data.map( piece => (
                            <div>
                                <h2>  { piece.header }</h2>
                                { piece.list.map( subpiece => (
                                    <div className='links'
                                    style={{ padding: '.5rem',  display: 'flex', justifyContent: 'space-between', flexDirection: 'row', textAlign: 'left', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem', width: 'calc(100% - .4rem)',   margin: '.2rem' }}  onClick={ () => actionn1( subpiece ) } >
                                        <div  >{ subpiece.sub_header } </div>
                                        <div><FontAwesomeIcon icon={faArrowRight} className='icon' style={{ marginLeft: 'auto' }} /> </div>
                                    </div>
                                ) ) }
                            </div>
                        ) ) }
                    </div>

                    <div id='right-swap'  style={{ color: 'black', width: '50%', padding: '2%' }} >
                        <div className='links' onClick={rightSwap}  > 
                            <FontAwesomeIcon icon={faArrowLeft} className='icon'  />
                             Main Menu
                        </div>

                        { cur && <div>
                            <h4 style={{ color: 'black' }} > { cur.sub_header } </h4>
                            { cur.sub_list.map ( dx => 
                            <div className='links' style={{   display: 'block' }}  onClick={ () => window.open( 'https://'+dx.link, '_blank' ) } > { dx.page } </div> ) }

                        </div> }
                    </div>
                </div>

            </div>

            <div style={{ flexGrow: '1',  height: '100%' }} onClick={offLeftSlide} >

            </div>

        </div>
    )
}

export const OptionBar = (props) => {

    function onLeftSlide () {
        let elem = document.getElementById('left-slide')
        let elem2 = document.getElementById('slidein')
        elem.style.display='flex'
        
        elem2.style.animation='anim1 .5s forwards'
    }

    return (
        <div  id="optionbar" >
            <Link className='oplink' onClick={ onLeftSlide } > Home </Link>
            <Link className="oplink" to='/product' > home2 </Link>
            <Link className="oplink" to="/orders"> home3 </Link>
            <Link className="oplink" to="/style"> home4 </Link>
            <Link className="oplink" to='/product' > home2 </Link>
            <Link className="oplink" to="/orders"> home3 </Link>
            <Link className="oplink" to="/style"> home4 </Link>
            <Link className="oplink" to='/product' > home2 </Link>
            <Link className="oplink" to="/orders"> home3 </Link>
            <Link className="oplink" to="/style"> home4 </Link>
            <LeftSlide />
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
        <div className="slide-product" id={ ids[index] }  style={{ position: 'relative' }}   >

            <button onClick={leftSlide} id="left-button" style={{ fontSize: '2rem' }} > &#8592; </button>
            <button onClick={rightSlide} id="right-button" style={{ fontSize: '2rem' }} > &#8594; </button>

            <div id='black-body' style={{ position: 'absolute', top: '0px', left: '0px', width: '100%',
                height: '150vh', display: 'none', backgroundColor: 'rgb(0, 0, 0, 0.7)', zIndex: '3'
             }} >  </div>

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


