import React from 'react';
import './marina.css';
import marinaLogo from './marinaLogo.png';


function Marina(){
    return(
        <section className = 'cardContainer'>
            <div className = 'nameLogo'>
                <img src = {marinaLogo} className = 'marinaLogo'></img>
                <h2 className = 'marinaTitle'>Marina Bay Market</h2>
            </div>
            <div className = 'roleDescription'>
                <h4>Store Clerk (May - Aug. 2019)</h4>
                <ul className = 'marinaList'>
                    <li className = 'bulletCover'><span className = 'bullet'> {'>'} </span>
                        <span className = 'indent'>
                            Mentored and trained new employees on register operations and customer
                            service guidelines
                        </span>
                    </li>
                    <li className = 'bulletCover'><span className = 'bullet'>{'>'} </span>
                        <span className = 'indent'>
                            Utilized problem-solving and analytical skills to resolve technical issues
                            regarding the payment terminal's security software
                        </span>
                    </li>
                </ul>
            </div>
        </section>
)   

}

export default Marina;