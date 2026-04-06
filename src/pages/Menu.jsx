import './Menu.css';
import PancitSizzler from '../images/menu/pancit-sizzler.jpg';
import SizzlerCombo from '../images/menu/sizzler-combo.jpg';
import FlavoredChicken from '../images/menu/flavored-chicken.jpg';
import PizzaFries from '../images/menu/pizza-fries.jpg';

export const Menu = () => {
    return(
        <div className="menu-container">
            
            <div className="grid grid-cols-1 m-3 mt-1 gap-2">
                <img src={PancitSizzler} className='max-[420px]:h-[00px]' alt="" />
                <img src={SizzlerCombo}  alt="" />
                <img src={SizzlerCombo}  alt="" />
                <img src={FlavoredChicken}  alt="" />
                <img src={PizzaFries}  alt="" />
                

            </div>
        </div>
    );
}
