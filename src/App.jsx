import Navbar from './Navbar/Navbar'
import Malumot from '../src/Malumot/Ozim'
import Partfol from './Partfol/Partfol'
import It from './It/It'
import '../src/App.css'
import Footer from './Footer/Footer'
import Top from './Navbar/Top'
import Yutuqlarim from './Yutuqlarim/Yutuqlarim'
function App() {

  return (
    <>
      <div className='Container'>
        <Navbar />
        <Malumot/>
        <Partfol/>
        <Yutuqlarim/>
        <It/>
        <Footer/>
        <Top/>
      </div>
    </>
  )
}

export default App
