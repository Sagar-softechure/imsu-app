import React from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Home = () => {
    const options = {
        items: 1, // Number of items to show
        loop: true, // Enable looping
        autoplay: false, // Enable autoplay
        nav: true,
        dots: true,
        autoplaySpeed: 1000, // Autoplay speed in milliseconds
        mouseDrag :true
    };

    return(
        <>
        <section className="home-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <OwlCarousel
                            responsiveClass
                            className="owl-theme banner-top p-0 vw-100 " 
                            {...options}
                        >

                                        <div className=" item p-0 ">
                                                <div className='banner-background back-cover back-bottom' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/slide-back.png'})` }}>
                    
                                                <div className='banner-content-wrapper'>
                                                    <div className='banner-content px-md-5'>
                                                         <h1 className='banner-title'>Item 1</h1> 
                                                         <p className='banner-subtitle'>Sub Heading 1</p> 
                                                    </div>
                                                    <Link to='/' className='btn hire-us radius-50 my-3 banner-button'>BOOK FREE CONSULTATION</Link>
                                                </div>
                                                </div>
                                        </div>
                                        <div className=" item p-0 ">
                                                <div className='banner-background back-cover back-bottom' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/slide-back.png'})` }}>
                    
                                                <div className='banner-content-wrapper'>
                                                    <div className='banner-content px-md-5'>
                                                         <h1 className='banner-title'>Item 1</h1> 
                                                         <p className='banner-subtitle'>Sub Heading 1</p> 
                                                    </div>
                                                    <Link to='/' className='btn hire-us radius-50 my-3 banner-button'>BOOK FREE CONSULTATION</Link>
                                                </div>
                                                </div>
                                        </div>
                                        <div className=" item p-0 ">
                                                <div className='banner-background back-cover back-bottom' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/slide-back.png'})` }}>
                    
                                                <div className='banner-content-wrapper'>
                                                    <div className='banner-content px-md-5'>
                                                         <h1 className='banner-title'>Item 1</h1> 
                                                         <p className='banner-subtitle'>Sub Heading 1</p> 
                                                    </div>
                                                    <Link to='/' className='btn hire-us radius-50 my-3 banner-button'>BOOK FREE CONSULTATION</Link>
                                                </div>
                                                </div>
                                        </div>
                                        <div className=" item p-0 ">
                                                <div className='banner-background back-cover back-bottom' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/slide-back.png'})` }}>
                    
                                                </div>
                                                <div className='banner-content-wrapper'>
                                                    <div className='banner-content px-md-5'>
                                                         <h1 className='banner-title'>Item 1</h1> 
                                                         <p className='banner-subtitle'>Sub Heading 1</p> 
                                                    </div>
                                                    <Link to='/' className='btn hire-us radius-50 my-3 banner-button'>BOOK FREE CONSULTATION</Link>
                                                </div>
                                        </div>
                                       
                                    
                           
                            
                        </OwlCarousel>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Home;