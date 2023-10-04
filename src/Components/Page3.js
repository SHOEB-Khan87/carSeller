import steering from "../assets/steering.png"
import React from 'react'
import * as all from "../CarDat"
export default function Page3() {
    return (
        <div>
            <div>
                <div className="container-fluid" style={{ marginBottom: "50px" }} >
                    <div className="container-fluid" >
                        <div className="row gx-3 justify-content-center'">
                            {all.data3.map((elem, id) => {
                                return <div style={{ marginTop: "30px", }} key={id} className="col-sm-12 col-md-12 col-lg-6 col-xl-4 ">

                                    <div className="card " style={{ width: "100%", }}>
                                        <img id='img' src={elem.image} className="card-img-top" alt="..." />
                                        <div id='card1' className="card-body">
                                            <h5 style={{ marginLeft: "7px" }} className="card-title">{elem.title}</h5>
                                            <div id='year'>
                                                <p className="card-text">{!elem.start_production ? "1999" : elem.start_production}</p>
                                            </div>


                                        </div>
                                        <div id='card2' style={{ marginTop: "-15px" }} className="card-body">
                                            <p id='marg'><svg xmlns="http://www.w3.org/2000/svg" width="25" style={{ color: "#239bf3", marginLeft: "9px" }} height="25" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                            </svg> &nbsp;{elem.sitting}</p>

                                            <p id='marg'><svg xmlns="http://www.w3.org/2000/svg" width="20" style={{ color: "#239bf3", marginLeft: "100px" }} height="20" fill="currentColor" class="bi bi-fuel-pump" viewBox="0 0 16 16">
                                                <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z" />
                                                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z" />
                                            </svg> &nbsp;{elem.fuel_type}</p>

                                        </div>
                                        <div id='card2' style={{ marginTop: "-35px" }} className="card-body">
                                            <p id='marg'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: "#239bf3", marginLeft: "9px" }} fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                            </svg> &nbsp; {elem.kms}</p>

                                            <p id='marg'><img src={steering} style={{ marginLeft: "66px" }} width="20px" height="20px" /> &nbsp; {elem.drive} </p>
                                        </div>
                                        <hr id='hr' />

                                        <div id='card3' className="card-body">
                                            <h4 style={{ marginLeft: "9px", fontWeight: "normal" }}>{elem.price}  <span style={{ fontSize: "14px" }}>/ month</span></h4>
                                            <div id='h' style={{ display: "flex", gap: "15px" }}>
                                                <div id='heart' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "blue ", fontWeight: "bolder", }} width="20" height="20" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <button id='butt'>Rent now</button>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
