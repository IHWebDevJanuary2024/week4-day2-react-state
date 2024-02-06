import './Header.css';

function Header(props){
    console.log("THIS IS THE HEADER AND THE STATE OF THE THEME IS: ", props.theme);


    return(
        <nav>
            <ul className={`nav-list ${props.theme}`}>    
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
export default Header;