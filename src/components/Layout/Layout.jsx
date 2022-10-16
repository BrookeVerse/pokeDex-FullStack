import { useState } from "react";
import "./Layout.scss";
import NavBarContainer from "../../containers/NavBarContainer";
import HeadingContainer from "../../containers/HeadingContainer/HeadingContainer";

const Layout = ({children, pokeArr }) => {

    const [selected, setSelected] = useState("Profile")
    const getCurrentPage = (page) => {
        setSelected(page);
    }


  return (
    <div className="layout">
        <aside className="layout__navBar">
            <NavBarContainer selected={selected} getCurrentPage={getCurrentPage}/>
        </aside>
        <header className="layout__header">
            <HeadingContainer pokeArr={pokeArr}/>
        </header>
        <main className="layout__body">
            {children}
        </main>
    </div>
  )
}

export default Layout