import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <div id='header'>
                <img src='https://th.bing.com/th/id/OIP.EY8u7w65nn2Hq_Qr3LFkVAAAAA?pid=ImgDet&rs=1' alt='spottabl logo' height={100} width={100}/>
                <div className='headertext'>
                    <h1>YOUR SPOTTABL TEAM</h1>
                    <p>Spottabl supports you all throughout</p>
                </div>
            </div>
        </div>
    );
}

export default Header;