import {useState} from "react";


export const Search = (props) => {
    const [searchText, setSearchText] = useState('');
    
    return (
        <>
            <div>
                <form className="search" style={{
                    position: "absolute",
                    top: 12,
                    right: 90
                }}>
                    <input style={{
                        order: "none",
                        paddingTop: 8,
                        paddingRight: 14,
                        paddingBottom: 8,
                        paddingLeft: 14,
                        color: "grey",
                        width: 230,
                        fontSize: 14,
                        backgroundColor: "white",
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4
                    }} type={"text"} placeholder={"Search.."} onChange={(a) => setSearchText(a.target.value)}/>
                    
                    <input type={"submit"} value={"SEARCH"} onClick={(e) => {
                        props.changesQuery(searchText)
                        e.preventDefault()
                    }}/>
                </form>
            </div>
        </>
    )
}

export default Search;