import './Menu.css';
import PancitSizzler from '../images/menu/pancit-sizzler.jpg'
import SizzlerCombo from '../images/menu/sizzler-combo.jpg'

export const Menu = () => {
    return(
        <div className="menu-container">
            <h1>Best Seller</h1>

            <div className="menu-options">
                <img src={PancitSizzler} height="1000" alt="" />
                <img src={SizzlerCombo} height="1000" alt="" />
                <img src={SizzlerCombo} height="1000" alt="" />
                <img src={SizzlerCombo} height="1000" alt="" />

            </div>
        </div>
    );
}
