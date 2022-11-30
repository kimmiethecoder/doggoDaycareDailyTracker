import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Doggos from './components/Doggos'


const App = () => {
  const [doggos, setDoggos] = useState([
    {
      id:1, 
      name: "Becky", 
      breed: "Labrador Retriever", 
      notes: "vegan", 
      teamName: "Monday"
    }, 
    {
      id:2, 
      name: "Kim", 
      breed: "French Bulldog", 
      notes: "carnivore", 
      teamName: "Tuesday"
    }, 
    {
      id:3, 
      name: "Charlie", 
      breed: "Dachshund", 
      notes: "seizures", 
      teamName: "Wednesday"
    },
    {
      id:4, 
      name: "Ollie", 
      breed: "Dachshund", 
      notes: "diabetic", 
      teamName: "Thursday"
    }, 
    {
      id:5, 
      name: "Waffle", 
      breed: "Shih Tzu", 
      notes: "needy", 
      teamName: "Friday"
    }, 
    {
      id:6, 
      name: "Roxy", 
      breed: "Beagle", 
      notes: "calm", 
      teamName: "Saturday"
    },
    {
    id:7, 
      name: "Jill", 
      breed: "Poodle", 
      notes: "crazy", 
      teamName: "Sunday"
    }
  ])


  // Delete Doggo
  const deleteDoggo = (id) => {
    setDoggos(doggos.filter((doggo) => doggo.id !==id))
  }

  return (
    <div className="container">
      <Header />
      {doggos.length > 0 ? <Doggos doggos = {doggos} onDelete={deleteDoggo} /> : 'No Doggos Today - You Should Clean'}




      <Footer />
    </div>

    
  );
}

export default App;
