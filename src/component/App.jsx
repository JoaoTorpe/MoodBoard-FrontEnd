import  './App.css'
import { Top } from './TopBar'
import {Section} from './Section'
import { MoodForm } from './Forms/create-mood'
import { formPop } from './Forms/create-mood'
function App(){

return <div className='appContainer' > <Top/> <Section/> <MoodForm/> <button onClick={formPop} >Adicionar</button> </div>

}

export default App 