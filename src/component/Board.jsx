import React from 'react'
import './Board.css'
import img from './assents/delete.png'
import { deleteBoard } from '../DataAccess/UseBoadsData'
export function Board(props){


    function handleClick(event){

        const deleteData={
         "description": null,
         "imgUrl": event.target.name
                
        }
        deleteBoard(deleteData);
        window.location.reload();

    }



    return <div className='boardContainer' > 
    
    <img className='imgSize' alt='imagem do banco'  src={props.url} /> 

    <div className='descContainer' >
    <img onClick={(event)=>handleClick(event)} name={props.url}  className='trashCan' src={img} alt='trash'/>
    <p className='desc' >  {props.desc}</p>  </div>
</div>
}