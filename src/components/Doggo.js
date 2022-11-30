import { FaTimes } from 'react-icons/fa'

const Doggo = ({ doggo, onDelete }) => {
  return (
    <div className='doggo'>
      <h3>{doggo.name} <FaTimes style={{color: 'red', 
      cursor: 'pointer'}} 
      onClick={() => onDelete(doggo.id)} />
      </h3>
      <p>{doggo.breed}</p>
      <p>{doggo.teamName} Team</p>
      <p>Special Notes: {doggo.notes}</p>
    </div>
  )
}

export default Doggo