import './index.css';
import ScreenFlag from '../../assets/nike-flag.png';

const Products = (props) => {
    return (
        <div className="Products">
            {props.showCategory ? props.showCategory : <img src={ScreenFlag} alt="flagship nike" /> }
        </div>
    );
}

export default Products;