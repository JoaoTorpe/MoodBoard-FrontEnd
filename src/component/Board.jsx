import React from 'react'
import './Board.css'
import img from './assents/delete.png'

export function Board(props){


    return <div className='boardContainer' > 
    
    <img className='imgSize' alt='imagem do banco'  src={props.url} /> 
    
    <div className='descContainer' >
    <img name={props.url}  className='trashCan' src={img} alt='trash'/>
    <p className='desc' >  {props.desc}</p>  </div>
</div>
}