import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Doggos from './components/Doggos'
import AddDoggo from './components/AddDoggo'
import About from './components/About'
import DoggoDetails from './components/DoggoDetails'



const App = () => {
  const [showAddDoggo, setShowAddDoggo] = useState(false)
  const [doggos, setDoggos] = useState([])

  useEffect(() => {
    const getDoggos = async () => {
      const doggosFromServer = await fetchDoggos()
      setDoggos(doggosFromServer)

    }

    getDoggos()
  }, [])

  // Fetch Doggos
  const fetchDoggos = async() => {
    const res = await fetch('http://localhost:5000/doggos')
    const data = await res.json()

    return data
  }

  // Fetch Doggo
  const fetchDoggo = async(id) => {
    const res = await fetch(`http://localhost:5000/doggos/${id}`)
    const data = await res.json()

    return data
  }

  // Add Doggo
  const addDoggo = async (doggo) => {
      const res = await fetch('http://localhost:5000/doggos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(doggo)
      })

      const data = await res.json()

      setDoggos([...doggos, data])
    }

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newDoggo = { id, ...doggo }
    // setDoggos([...doggos, newDoggo])
  

  // Delete Doggo
  const deleteDoggo = async (id) => {
    await fetch(`http://localhost:5000/doggos/${id}`, {
      method: 'DELETE'
    })

    setDoggos(doggos.filter((doggo) => doggo.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const doggoToToggle = await fetchDoggo(id)
    const updateDoggo = { ...doggoToToggle, 
    reminder: !doggoToToggle.reminder }

    const res = await fetch(`http://localhost:5000/doggos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updateDoggo)
    })

    const data = await res.json()

    setDoggos(
      doggos.map((doggo) => 
        doggo.id === id ? { ...doggo, reminder: 
        data.reminder } : doggo
      )
    )
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddDoggo(!showAddDoggo)} showAdd={showAddDoggo} />
      
      <Routes>
      <Route 
        path='/' 
        element={
        <>
          {showAddDoggo && <AddDoggo onAdd={addDoggo} />}
          {doggos.length > 0 ? (<Doggos doggos = {doggos} onDelete={deleteDoggo} onToggle={toggleReminder} />
          ) : (
          'No Doggos Today - You Should Clean'
          )}
        </>
      }
     />
      <Route path='/about' element={<About />} />
      <Route path='/doggo/:id' element={<DoggoDetails />} />
      </Routes>
      <Footer />
      
    </div>
    </Router>

    
  );
}

export default App;
