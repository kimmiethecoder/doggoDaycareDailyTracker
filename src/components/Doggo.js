import { FaTimes } from 'react-icons/fa'

const Doggo = ({ doggo, onDelete, onToggle }) => {
  return (
    <div className={`doggo ${doggo.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(doggo.id)}>
      <h3>{doggo.name} <FaTimes style={{color: 'red', 
      cursor: 'pointer'}} 
      onClick={() => onDelete(doggo.id)} 
      onToggle={onToggle}/>
      </h3>
      <p>{doggo.breed}</p>
      <p>{doggo.teamName} Team</p>
      <p>Special Notes: {doggo.notes}</p>
    </div>
  )
}

export default Doggo