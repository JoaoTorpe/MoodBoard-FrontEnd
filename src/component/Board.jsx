import React from 'react'
import './Board.css'
let imgSource = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg";
export function Board(){

    return <div className='boardContainer' > <img className='imgSize' src={imgSource} /> 
    <p className='desc' >Belas montanhas</p>  </div>

}