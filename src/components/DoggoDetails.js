import { useState, useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Button from './Button'



function DoggoDetails () {
  const [loading, setLoading] = useState(true)
  const [doggo, setDoggo] = useState({})
  const [error, setError] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDoggo = async () => {
        const res = await fetch(`http://localhost:5000/doggos/${params.id}`)
        const data = await res.json()

        setDoggo(data)
        setLoading(false)
        setError(null)
    }

    fetchDoggo()

  })

  if(error) {
    return <Navigate to='/' />
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
        <h2>Doggo Details</h2>
        <img type="file" src={doggo.image} alt="dog" />
        <h3>{doggo.name}</h3>
        <p>{doggo.breed}</p>
        <p>{doggo.teamName} Team</p>
        <p>Special Notes: {doggo.notes}</p>
        <Button onClick={() => {
            navigate(-1)
        }} text='Go Back' />
    </div>
  )
}

export default DoggoDetails