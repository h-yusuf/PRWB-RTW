const Navbar = (props) => {
    return(
        <nav className="mx-24">
            <div className="rounded-nav">
                <img src="/logo192.png" alt="" />
            </div>
            <button>
            <ion-icon className="button-nav" name="menu"></ion-icon>
            </button>
            <div className="none">
                <ul className="">
                    <li className=""><a href="">Home</a></li>
                    <li className=""><a href="">About</a></li>
                    <li className=""><a href="">Contact Us</a></li>
                    <li className=""><a onClick={props.navAlt}>{props.navText}</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;