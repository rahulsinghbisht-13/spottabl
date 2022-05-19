import React from 'react';
import Customers from './Customers';
import './CSM.css';

const customers = [
    {id: 1, firstname: 'Chilman', lastname: 'Mehrotra', designation: 'Client Manager'},
    {id: 2, firstname: 'Saboor', lastname: 'Sirwal', designation: 'Recruitment Success'},
    {id: 3, firstname: 'Smriti', lastname: 'Wadhwa'},
]

function CSM() {
    return (
        <div className='CSM'>
            <div className='card'>
                <h2>Customer Success Managers</h2>
                <div>
                    <form className='searchArea'>
                        <input type='text' placeholder='Add by Name or email' />
                        <button>Add CSM</button>
                    </form>
                </div>

                <Customers customers={customers}/>
            </div>
        </div>
    );
}

export default CSM;