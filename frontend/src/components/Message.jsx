import './Message.css'
import PropTypes from 'prop-types'

const Message = ({msg, type}) => {
    Message.propTypes = {
        msg: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,

    }

    
  return (
    <div className={`message ${type}`}>
        <p>{msg}</p>
    </div>
  )
}

export default Message