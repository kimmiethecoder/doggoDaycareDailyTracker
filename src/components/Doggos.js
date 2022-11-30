import Doggo from './Doggo'

const Doggos = ({ doggos, onDelete }) => {
  
  return (
    <>
    {doggos.map((doggo) => (
    <Doggo key={doggo.id} doggo={doggo} onDelete={onDelete}/>))}
    </>
  )
}

export default Doggos