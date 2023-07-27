import React from 'react'
import './get-name.css'



function savingData(){
        const input = document.querySelector('#name').value
        localStorage.setItem("name",input)
        nameFormClose()
        }
        

    function nameFormClose(){
       
        document.querySelector('.formContainer').classList.add('nameFormClosed')
        window.location.reload()
    }


export function NameForm(){
    
if(localStorage.length === 0){

 return  <div className='formContainer' >
            <div className='nameContainer' >

                <div className='formBody' >
                    <input placeholder='Qual é seu nome ?' id='name' type='text' />
                    <button onClick={savingData} className='nameFormBtn' type='submit' >Enviar</button>
                    <button  onClick={nameFormClose} className='nameFormExit' >X</button>
                </div>



            </div>


 </div>

}
}