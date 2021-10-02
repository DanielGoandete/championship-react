import {FaTimes} from 'react-icons/fa'

const TeamName = ({teamName, onDelete}) => {
    return (
        <div>
            <h3>{teamName.name} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={ () => onDelete(teamName.id)}></FaTimes></h3>
        </div>
    )
}

export default TeamName
