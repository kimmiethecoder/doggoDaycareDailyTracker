import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Doggos from './components/Doggos'
import AddDoggo from './components/AddDoggo'


const App = () => {
  const [showAddDoggo, setShowAddDoggo] = useState(false)
  const [doggos, setDoggos] = useState([
    {
      id:1, 
      name: "Becky", 
      breed: "Labrador Retriever", 
      notes: "dietary", 
      teamName: "Monday",
      reminder: false
    }, 
    {
      id:2, 
      name: "Kim", 
      breed: "French Bulldog", 
      notes: "dietary", 
      teamName: "Tuesday",
      reminder: false
    }, 
    {
      id:3, 
      name: "Charlie", 
      breed: "Dachshund", 
      notes: "seizures", 
      teamName: "Wednesday",
      reminder: false
    },
    {
      id:4, 
      name: "Ollie", 
      breed: "Dachshund", 
      notes: "diabetic", 
      teamName: "Thursday",
      reminder: false
    }, 
    {
      id:5, 
      name: "Waffle", 
      breed: "Shih Tzu", 
      notes: "allergies", 
      teamName: "Friday",
      reminder: false
    }, 
    {
      id:6, 
      name: "Roxy", 
      breed: "Beagle", 
      notes: "visual impairment", 
      teamName: "Saturday",
      reminder: false
    },
    {
    id:7, 
      name: "Jill", 
      breed: "Poodle", 
      notes: "separation anxiety", 
      teamName: "Sunday",
      reminder: false
    }
  ])

  // Add Doggo
  const addDoggo = (doggo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newDoggo = { id, ...doggo }
    setDoggos([...doggos, newDoggo])
  }

  // Delete Doggo
  const deleteDoggo = (id) => {
    setDoggos(doggos.filter((doggo) => doggo.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setDoggos(
      doggos.map((doggo) => 
        doggo.id === id ? { ...doggo, reminder: 
        !doggo.reminder } : doggo
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddDoggo(!showAddDoggo)} showAdd={showAddDoggo} />
      {showAddDoggo && <AddDoggo onAdd={addDoggo} />}
      {doggos.length > 0 ? (<Doggos doggos = {doggos} onDelete={deleteDoggo} onToggle={toggleReminder} />
      ) : (
        'No Doggos Today - You Should Clean'
      )}

      <Footer />
    </div>

    
  );
}

export default App;
