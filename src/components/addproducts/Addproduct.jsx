import React from 'react'
import { Navbar } from '../Navbar'
import { GiCartwheel } from "react-icons/gi";
import './Addproduct.css'
import MultiStepForm from './MultiStepForm';
const Addproduct = () => {
    return (
        <div>
            <aside>
                <div className="container">
                    <div className="grid-navbar">
                        <div className="logo">
                            <GiCartwheel style={{ color: 'yellow', fontSize: '30px' }} />
                            <h3>
                                LEMON <br />
                                INC.
                            </h3>
                        </div>
                        <hr className="horizontal-hr" />
                        <div className="item">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Stores</a>
                                    </li>
                                    <li>
                                        <a href="/" className="activey">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" >Catalogue</a>
                                    </li>
                                    <li>
                                        <a href="#">Promotions</a>
                                    </li>
                                    <li>
                                        <a href="#">Reports</a>
                                    </li>
                                    <li>
                                        <a href="#">Docs</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Settings</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <hr className="horizontal-hr2" />
                        <div className="user">
                            <p>Andy Samberg</p>
                            <p style={{ color: 'grey' }}>andy.samberg@gmail.com</p>
                        </div>
                    </div>
                    <hr style={{ width: '1px', height: '1319px', margin: '0px 0px 0px 310px' }} />

                    {/* HERO  */}
                    <div className="outernavii">
                        <div className="navii">
                            <h1>Add Products</h1>

                        </div>
                        <div className="formmulti"></div>
                        <MultiStepForm/>
                    </div>
                    

                </div>

            </aside >
            


        </div >

    )
}

export default Addproduct