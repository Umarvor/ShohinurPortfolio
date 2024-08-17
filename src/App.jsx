import Navbar from './Navbar/Navbar'
import Malumot from '../src/Malumot/Ozim'
import Partfol from './Partfol/Partfol'
import It from './It/It'
import '../src/App.css'
function App() {

  return (
    <>
      <div className='Container'>
        <Navbar />
        <Malumot/>
        <Partfol/>
        <It/>
      </div>
    </>
  )
}

export default App
