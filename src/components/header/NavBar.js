import Brand from "../../components/header/Brand";
import ItemListContainer from "../../components/header/ItemListContainer";
import CartWidget from "../../components/header/CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Yerba"
                    itemDos = "Mermelada"
                    itemTres = "Granola"
                    itemCuatro = "Jugos"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;