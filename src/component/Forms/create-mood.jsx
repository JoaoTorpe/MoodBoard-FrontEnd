import React from "react";
import { useEffect, useState } from 'react';
import "./create-mood.css"

export function formPop(){
document.querySelector('.modal-overlay').classList.add('pop')

}

function submited(){

    document.querySelector('.modal-overlay').classList.remove('pop')
}

export function MoodForm(){



 return   <div className="modal-overlay">
    <div className="modal-body">
        <h2>Insira as informações</h2>
        <form method="post" className="input-container">
           <input  type="text" label="URL"  placeholder="Insira a url da imagem"/>
           <input type="text"  label="desc"  placeholder="Insira uma descrição"/>
        </form>
        <button onClick={submited} value="submit" className="btn-secondary">  
        Postar
        </button>
    </div>
</div>

}


