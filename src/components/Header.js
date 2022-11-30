import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='purple' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Daily Doggo Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;