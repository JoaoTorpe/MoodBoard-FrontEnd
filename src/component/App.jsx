import  './App.css'
import { Top } from './TopBar'
import {Section} from './Section'
import { MoodForm } from './Forms/create-mood'
import { pop } from './Forms/create-mood'
import { NameForm } from './Forms/get-name'
function App(){

return <div className='appContainer' > <Top/> <NameForm/> <Section/> <MoodForm/> <button className='appBtn' onClick={pop} >Adicionar</button> </div>

}

export default App 