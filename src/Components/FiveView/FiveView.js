import React from 'react';
import './FiveView.css'
import lottie from 'lottie-web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBatteryHalf } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { useEffect } from 'react';



const FiveView = () => {


    const container1 = useRef(null)

    useEffect(() => {

        lottie.loadAnimation({
            container: container1.current, // Required

            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            animationData: require('./product.json'), // Name for future reference. Optional.
        })


    }, [0]);











    return (

        <div class="row nayeem" style={{ height: "900px" }}>
            <div style={{ color: "white" }} class="col-6 text-center mt-5 pt-5">

                <div style={{ height: "900px" }} className="container" ref={container1}></div>





            </div>


            <div class="col-5 m-5 p-5">

                <div style={{ height: "900px" }} className=" text-wrap text-center ">

                    <h3 className="text-center"> <FontAwesomeIcon style={{ color: "black" }} icon={faCoffee} size="2x " />  SERVICE AVALAIBLE 24/7</h3><br />


                    <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
                        commodo, tortor mauris.</h5> <br />


                    <h3 className="text-center"><FontAwesomeIcon style={{ color: "black" }} icon={faBatteryHalf} size="2x " /> WATER DAMAGE</h3> <br />


                    <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
                        commodo, tortor mauris.</h5> <br />

                    <h3 className="text-center"><FontAwesomeIcon style={{ color: "black" }} icon={faHeadphonesAlt} size="2x " /> SPEAKER FAILURE</h3><br />
                    <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
                        commodo, tortor mauris.</h5> <br />


                    <h3 className="text-center"><FontAwesomeIcon style={{ color: "black" }} icon={faTv} size="2x " /> LCD REPLACEMENT</h3> <br />
                    <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
                        commodo, tortor mauris.</h5>




                </div>

            </div>
        </div>




    );
};

export default FiveView;












