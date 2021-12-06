import './index.css';
import JordanLogo from '../../../assets/jordan.svg';

const Menu = () => {
    return (
        <div className="Menu">
             <div className="Jumpman"><img src={JordanLogo} alt="JumpMan Logo" /></div>
             <nav className="Options">
                <ul>
                    <li>Help</li>
                    <li>Join Us</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </div>

    );
}

export default Menu;