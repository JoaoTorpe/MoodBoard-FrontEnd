import  './App.css'
import { Top } from './TopBar'
import {Section} from './Section'
import { MoodForm } from './Forms/create-mood'
import { pop } from './Forms/create-mood'
function App(){

return <div className='appContainer' > <Top/> <Section/> <MoodForm/> <button onClick={pop} >Adicionar</button> </div>

}

export default App 