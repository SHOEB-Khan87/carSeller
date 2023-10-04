import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import data from "../CarsData.json"
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
    let dispatch = useDispatch()
    let state = useSelector(state => state.carReducer)
    let [val, setVal] = useState("")
    let change = (e) => {


        setVal(e.target.value)

    }

    let search = () => {
        if (val === "") {

        } else {
            data.filter((elem, id) => {
                let store = val.split(" ").map((elem) => {
                    return elem.charAt(0).toUpperCase() + elem.slice(1)

                })


                let ch = elem.title.split(" ")

                if (ch[0].toLocaleLowerCase() === val.toLocaleLowerCase()) {
                    let store = elem
                    console.log(store)

                    setVal("")
                }



            })

        }




        console.log(state)
    }

    return (
        <>


            <div >
                <nav id='nav' className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >


                        <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex">
                                <input id='search' onChange={change} value={val} className="form-control me-2" type="search..." placeholder="Search..." aria-label="Search" />
                                <FontAwesomeIcon id='icon' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={search} icon={faMagnifyingGlass} />
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={{ marginLeft: "15px" }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Relevance
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={{ marginLeft: "15px" }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All brands
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>


                        </div>
                    </div>
                </nav></div>
        </>
    )
}


