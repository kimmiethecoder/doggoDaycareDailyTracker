import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Doggo = ({ doggo, onDelete, onToggle }) => {
  return (
    <div className={`doggo ${doggo.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(doggo.id)}>
      <img type="file" src={doggo.image} alt="dog" />
      <h3>{doggo.name} <FaTimes style={{color: 'red', 
      cursor: 'pointer'}} 
      onClick={() => onDelete(doggo.id)} 
      onToggle={onToggle}/>
      </h3>
      <p>{doggo.breed}</p>
      <p><Link to={`/doggo/${doggo.id}`}>View Details</Link></p>
      <p>{doggo.teamName} Team</p>
      <p>Special Notes: {doggo.notes}</p>
    </div>
  )
}

export default Doggo