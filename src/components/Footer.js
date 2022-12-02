import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Footer = ({ appname }) => {

    var today = new Date()

  return (
    <footer>
        <h5>{appname}-{today.getFullYear()}</h5>
        <p>Copyright &copy; 2022</p>
        <Link to="/About">About</Link>
    </footer>
  )
}

Footer.defaultProps = {
  appname: 'Daily Doggo Tracker'
}

Footer.propTypes = {
  appname: PropTypes.string.isRequired,
}

export default Footer