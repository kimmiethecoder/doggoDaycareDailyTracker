import Doggo from './Doggo'

const Doggos = ({ doggos, onDelete, onToggle }) => {
  
  return (
    <>
    {doggos.map((doggo, index) => (
    <Doggo key={index} doggo={doggo} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Doggos