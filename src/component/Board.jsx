import React from 'react'
import './Board.css'


export function Board(props){

    return <div className='boardContainer' > 
    <img className='imgSize' alt='imagem do banco'  src={props.url} /> 
    <p className='desc' >{props.desc}</p>  </div>

}