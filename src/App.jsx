import Navbar from './Navbar/Navbar'
import Malumot from '../src/Malumot/Ozim'
import Partfol from './Partfol/Partfol'
import It from './It/It'
import '../src/App.css'
import Footer from './Footer/Footer'
function App() {

  return (
    <>
      <div className='Container'>
        <Navbar />
        <Malumot/>
        <Partfol/>
        <It/>
        <Footer/>
      </div>
    </>
  )
}

export default App
