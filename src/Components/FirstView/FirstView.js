import React from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';
import image from '../../image/56.jpg'
import '../Allcss.css'

const FirstView = () => {




    return (
        <div class="row nayeem" style={{height:"900px"}}>

    
            <div style={{color:"white"}} class="col-5 text-center mt-5 pt-5">

            <Fade left>

                <h1 style={{fontSize: "80px"}}>Phone Repair</h1>
                <h3 className="text-center">And</h3>
                <h1>Phone Buy </h1> <br />
                <h5 className="text-center" >Android / IPhone / IPad</h5><br /> <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi sapiente voluptas enim soluta voluptate nihil at ex, non molestias possimus facere suscipit consequatur, vero amet laborum vitae numquam nobis. Doloremque, ut!</p>

               <Link to='/event'>   <button>BUY MOBILE -{'>'} click here</button>    </Link>
                
               </Fade>
                
            </div>





            <div class="col-6 m-5 p-5">
            <Fade right>

                <img style={{height:"560px"}}  className="img-fluid rounded " src={image} alt="" />
            </Fade>
            </div>
        </div>
    );
};

export default FirstView;