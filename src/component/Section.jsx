import React,{useEffect, useState} from 'react'
import './Section.css'
import { Board } from './Board'
import { getdata } from '../DataAccess/UseBoadsData'



export function Section(){

    const [boardsData, setBoardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getdata();
            setBoardsData(data);
          } catch (error) {
            console.error('Erro ao obter dados:', error.message);
          }
        };
    
        fetchData();
      }, []);
  

    return (<div className='section'> 
   
    {boardsData.map((board)=>(

        <Board url={board.imgUrl} desc={board.description} />

    ))}
    
    
     </div>
    );
}