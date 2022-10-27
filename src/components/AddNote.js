import React, { useState, useEffect } from 'react';
import '../styles/add_note.css';

export default function AddNote() {
    const imageAddress = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/add.png';
    return (
        <div className='add-icon-container'>
            <img src={imageAddress}/>
        </div>
    );
}
