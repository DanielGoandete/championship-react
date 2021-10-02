import TeamName from "./TeamName"


const TeamNames = ({getTeamNames, onDelete}) => {
   

    return (
        <>
            {getTeamNames.map((teamName, index)=>(
               <TeamName key={index} teamName={teamName} onDelete={onDelete}/>
            
            ))}
        </>
    )
}

export default TeamNames
