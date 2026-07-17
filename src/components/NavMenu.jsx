export default NavMenu;

function NavMenu({show}){
    const links = [
        {
            linkName: "Home",
            linkAddress: "#"
    },
    {
        linkName: "About",
        linkAddress: "#",
    },
    {
        linkName: "Resources",
        linkAddress: "https://www.cdc.gov/suicide/resources/index.html"
    },
    {
        linkName: "Agent Chat",
        linkAddress: "https://chat.988lifeline.org/"
    }
];

    const linkList = links.map(link => <li key={link.linkName}><a href={link.linkAddress}>{link.linkName}</a></li>)

    return(
        <ul className={`nav__menu ${show ? "nav__menu--active": ""}`}>
            {linkList}
        </ul>
    );
}