import './navli.css';

const NavLi = (props) => {

    const fs = '1.3rem'

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('upper');
    }

    return (
        <li onClick={(e) => handleClick(e)} style={{ fontSize : fs }} id={"cats-" + props.id}>{props.name}</li>
        // style={{...style, fontSize : fs }} destructure pour sortir d'un tableau
    )
}

// const style = {
//     backgroundcolor : 'red',
// }

export default NavLi;