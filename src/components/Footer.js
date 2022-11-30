import PropTypes from 'prop-types'

const Footer = ({ appname }) => {

    var today = new Date()

  return (
    <footer>
        <h5>{appname}-{today.getFullYear()}</h5>
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