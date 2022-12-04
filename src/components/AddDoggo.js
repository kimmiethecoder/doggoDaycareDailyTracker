import { useState } from 'react'

const AddDoggo = ({onAdd}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [notes, setNotes] = useState('')
    const [image, setImage] = useState(null)
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add a name')
            return
        }

        onAdd({ name, breed, notes, image, reminder })

        setName('')
        setBreed('')
        setNotes('')
        setImage(null)
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="img-thumbnail">
            <label>Image</label>
            <input 
            type="file" 
            placeholder="Add Image" alt="dog" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Doggo</label>
            <input type="text" placeholder="Add New Doggo" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Breed</label>
            <input type="text" placeholder="Add Breed" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Notes</label>
            <input type="text" placeholder="Add Special Notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input className="btn btn-block" type="submit" value='Save Doggo' />
    </form>
  )
}

export default AddDoggo