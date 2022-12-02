import { Navigate, useNavigate, useParams } from "react-router-dom"
import Button from './Button'

const WoofError = () => {
  return (
    <div>
      <h2>Oops...Not Found</h2>
      <Button onClick={() => {
            Navigate('/')
        }} text='Go Back' />
    </div>
  )
}

export default WoofError