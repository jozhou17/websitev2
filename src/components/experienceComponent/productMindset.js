import React from 'react';
import './productMindset.css';
import psLogo from './productSinsLogo.png';

function ProductMindset(){

    return(
        <section className = 'cardContainer'>
            <div className = 'nameLogo'>
                <img src = {psLogo} className = 'psLogo'></img>
                <h2 className = 'pmTitle'>Product Mindset</h2>
            </div>
            <div className = 'roleDescription'>
                <h5>Software Engineer Intern (July - Aug. 2020)</h5>
                <ul className = 'pmList'>
                    <li className = 'bulletCover'><span className = 'bullet'> {'>'} </span>
                        <span className = 'indent'>
                            Solely coded and developed the <a href="https://www.productsins.com" target = "_blank">Product Sins</a> website using 
                            a React frontend and Django REST framework backend
                        </span>
                    </li>
                    <li className = 'bulletCover'><span className = 'bullet'>{'>'} </span>
                        <span className = 'indent'>
                            Utilized multiple Google APIs that test for mobile friendliness and a website’s page load speed
                            based on user input
                        </span>
                    </li>
                    <li className = 'bulletCover'><span className = 'bullet'>{'>'} </span>
                        <span className = 'indent'>
                            Collaborated with a UI/UX designer to create the layout and design of the website
                        </span>
                    </li>
                    <li className = 'bulletCover'><span className = 'bullet'>{'>'} </span>
                        <span className = 'indent'>
                            Clearly communicated and proposed new ideas to the product manager about changes needed to
                            be made with our website’s evaluation criteria
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )

}

export default ProductMindset