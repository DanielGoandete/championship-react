


const Header = ({title}) => {

    // const onClick = (e)=>{

    // }

    return (
        <header>
              <h1>{title}</h1>        
        </header>
    )
}

Header.defaultProps = {
    title: 'Welcome to the Championship'
}

export default Header


// <Button color='green' text="Add Team's Name:" onClick={onClick}></Button> 