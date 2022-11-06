import {useState} from "react";
import Search from "../search/Search";

export function Header(props) {
    return (
        <>
        <div style={{
            position: "relative",
            backgroundColor: "darkseagreen",
            height: 56,
            boxSizing: "border-box",
            paddingTop: 10,
            paddingRight: 80,
            paddingBottom: 10,
            paddingLeft: 80
        }}>
            {props.title}
            <Search changesQuery={props.changeQuery}/>
        </div>

</>
)
}

export default Header;