import React, { useState } from "react";
import "./create-mood.css"


function Input(props){

return <div>  
     <input  placeholder={props.holder}  value={props.value} onChange={ event => props.updateValue(event.target.value)}/>
</div> 
}







export function pop(){
    document.querySelector('.modal-overlay').classList.add('pop')
    

}

function unPop(){

    document.querySelector('.modal-overlay').classList.remove('pop')

}



export function MoodForm(){
    const [urlImg,setUrl] = useState("")
    const [Desc,setDesc] = useState("")

    const [state,SetState] = useState(false)
    

    function submited(){

    
        const input = document.querySelectorAll('.modal-overlay .modal-body input')
    
        if(input[0].value === ""  && input[0].value === ""){
            alert("Preencha os campos")
    
        }
        else{
    
            unPop()
        }
    }

    function unPop(){

        document.querySelector('.modal-overlay').classList.remove('pop')
        setUrl("")
        setDesc("")
    }

 return   <div className="modal-overlay  ">
    <div className="modal-body">
        <h2>Insira as informações</h2>
        <form  className="input-container ">
           <Input holder="Url da imagem" value= {urlImg} updateValue={setUrl} />
           <Input holder="Descrição" value= {Desc} updateValue={setDesc} />
        </form>
       
        <button onClick={submited} value="submit" className="btn-secondary">  
        Postar
        </button>
        <button className="exit" onClick={unPop} >X</button>
        
    </div>
</div>

}


