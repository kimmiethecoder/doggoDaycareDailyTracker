import Doggo from './Doggo'

const Doggos = ({ doggos, onDelete, onToggle }) => {
  
  return (
    <>
    {doggos.map((doggo) => (
    <Doggo key={doggo.id} doggo={doggo} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Doggos