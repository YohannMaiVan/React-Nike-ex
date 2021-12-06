import './index.css';
import Menu from '../Menu';
import MainMenu from '../MainMenu';

const Header = (props) => {
    return (
        <div className="Header">
            <Menu />
            <MainMenu toggleCategoriesHandler={props.toggleCategoriesHandler}/>
        </div>
    );
}

export default Header;