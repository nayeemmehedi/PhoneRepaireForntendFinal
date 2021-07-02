
import React, { Component, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import "./Six.css"
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';





const SixView = () => {


    const [review, setreview] = useState([])

    useEffect(() => {

        fetch('https://calm-ocean-64588.herokuapp.com/reviewnow')
            .then(res => res.json())
            .then(data =>



                setreview(data)

            )

    }, []);








    return (
        <div>
            <h1 className="display-4 text-center ">ReVIEW CUSTOMER</h1>
            <p className="text-center "> <Link to='/review'> review us - click here</Link></p>

            <Flip>

            <Carousel>
                {review.map(item => <div className="six text-center newsix m-5 p-5" key={item.id}>

                    <div>


                        <h1>{item.name}</h1><br />

                        <p>{item.text}</p>



                    </div>



                </div>)}
            </Carousel>
            </Flip>





        </div>

    )
}


export default SixView;