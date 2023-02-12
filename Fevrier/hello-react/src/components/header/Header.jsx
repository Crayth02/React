import Nav from "./Nav";

const Header = () => {

    const navBDD = [
        {id:1, name: "Home"},
        {id:2, name: "Blog"},
        {id:3, name: "Cgv"},
        {id:4, name: "Contact"},
    ]

    return (
        <>
            <h1>Header</h1>
            <Nav bdd={navBDD} />
        </>
    )
}

export default Header;