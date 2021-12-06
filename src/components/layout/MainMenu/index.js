import './index.css';
import NikeLogo from '../../../assets/nike.svg';

const MainMenu = (props) => {
    const categories = ["Men", "Women", "Kids", "Sales", "Collections"];
    const center = categories.map((category) => {
        return (
        <li onMouseEnter={props.toggleCategoriesHandler} key={category}>{category}</li>
        );
    });
    console.log("center", center);
    return (
        <div className="MainMenu">
            <div className="MainMenu_Swoosh"><img src={NikeLogo} alt="Nike Logo" /></div>
            <nav className="MainMenu_Center">
                <ul>
                    {center}
                </ul>
            </nav>
            <div className="MainMenu_Right">
                <ul>
                    <li><input type="text" placeholder="Search" /></li>
                    <li>Favorites</li>
                    <li>Basket</li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;