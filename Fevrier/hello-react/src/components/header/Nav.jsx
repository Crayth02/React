import NavLi from "./NavLi";

const Nav = ({bdd}) => {

    // const toLi = () => {
    //     return bdd.map(o => <NavLi id={o.id} name={o.name} />)
    // }

    return (
        <nav>
            <ul>
                { bdd &&
                    bdd.map((o, index) => <NavLi key={o.id} id={o.id} name={o.name} />)
                }
                {/* { TouchList() } */}
            </ul>
        </nav>
    )
}

export default Nav;