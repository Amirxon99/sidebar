import  './App.css'
import Hero from './components/hero/Hero'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className='main'>
     <Sidebar></Sidebar>
     <Hero></Hero>

    </div>
  )
}

export default App