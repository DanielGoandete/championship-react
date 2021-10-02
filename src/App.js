import Header from "./components/Header";
import Button from "./components/Button";
import TeamNames from "./components/TeamNames";
import AddTeamName from "./components/AddTeamName";
import { useState } from 'react'

function App() {

  const [getTeamNames , setTeamNames] = useState([])

//add name
const insertTeamsName = (name) =>{
    const id  = Math.floor(Math.random() * 10000) +1
    //will get the id and the ... will keep all previouly information from name
    const newName = {id , ...name}

    //will set the new name with the new id and keep all previouly information
    getTeamNames.push(newName)
    setTeamNames([...getTeamNames])
}

//delete Team's Name
const deleteTeamName = (id)=>{
     setTeamNames(getTeamNames.filter((teamNamesByID)=> teamNamesByID.id !==id))
    
}

  return (
    
    <div className="container">
    
       <Header ></Header>
       <AddTeamName onAdd={insertTeamsName}></AddTeamName>
       <TeamNames getTeamNames={getTeamNames} onDelete={deleteTeamName}></TeamNames>
       
       
       {getTeamNames.length >= 4 ? 
          (<Button text='Next' ></Button>)
          : " To set up a Championship you need at least 4 Teams"
      }
         
       
       
    </div>
  );
}

export default App;
