import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <div id='footer' style={{ marginBottom: "20px" }}>
                <p style={{ marginTop: " 20px", marginLeft: "15px" }}>6 from 60</p>
                <nav aria-label="Page navigation example" style={{ border: "none", marginRight: "15px" }}>
                    <ul className="pagination "  >
                        <li className="page-item " >
                            <Link id='anchor' className="page-link" to="#" tabindex="-1" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            </Link>
                        </li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/">1</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page2">2</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page3">3</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page4">4</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page5">5</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page6">6</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page7">7</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page8">8</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page9">9</Link></li>
                        <li className="page-item"><Link id='anchor' style={{ border: "none" }} className="page-link" to="/Page10">10</Link></li>

                        <li className="page-item">
                            <Link id='anchor' style={{ border: "none" }} className="page-link" to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>

                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
