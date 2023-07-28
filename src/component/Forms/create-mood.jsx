import React, { useState } from "react";
import "./create-mood.css"
import { postdata } from "../../DataAccess/UseBoadsData";

 export function Input(props){

return <div>  
     <input  placeholder={props.holder}  value={props.value} onChange={ event => props.updateValue(event.target.value)}/>
</div> 
}







export function pop(){
    document.querySelector('.modal-overlay').classList.add('pop')
    

}


export function createMoodObject(urlData,descData){
    const moodData={
        description: descData,
        imgUrl: urlData,
    };
    
    return moodData

}


export function MoodForm(){
    const [urlImg,setUrl] = useState("")
    const [Desc,setDesc] = useState("")
    

    function submited(urlData,descData){

    
        const input = document.querySelectorAll('.modal-overlay .modal-body input')
    
        if(input[0].value === ""  && input[0].value === ""){
            alert("Preencha os campos")
    
        }
        else{

              
              postdata(createMoodObject(urlData,descData));
            unPop()
            window.location.reload()
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
       
        <button onClick={()=>submited(urlImg,Desc)}  className="btn-secondary">  
        Postar
        </button>
        <button className="exit" onClick={unPop} >X</button>
        
    </div>
</div>

}


