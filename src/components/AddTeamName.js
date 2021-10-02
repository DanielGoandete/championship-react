import { useState } from "react"

const AddTeamName = ({onAdd}) => {

    const [name , setNameTeam] = useState('')

    const onSubmit =(event)=>{
        event.preventDefault()
        if(!name){
           alert('please insert a Name for your team')
           return
        }
        onAdd({name})
        setNameTeam('')
    }


    return (
       <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>What is your Team's Name?</label>
             <input type="text" className="form-control" id="teamsName" placeholder="team's name:" 
                value={name} onChange={(event)=> setNameTeam(event.target.value)}/>
             <input type="submit" value=" Save Name" className="btn btn-success"></input>
         </div>
       </form>
    )
}

export default AddTeamName
