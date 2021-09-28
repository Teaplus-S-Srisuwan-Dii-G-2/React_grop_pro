import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./credit.css";
import { Link } from "react-router-dom";


const Credit = () => {
    return (
        // <div className = "main-footer">
        //     <div className ="container">
        //         <div className="row">
        //             <div className="col">
        //             <h4>Contact us</h4>
        //             </div>
        //         </div>
        //         <div className = "row">
        //             <div className = "col">
        //                 <img 
        //                 src="/image/fb.png"
        //                 className="footer-image1"
        //                 />
        //             </div>
        //             <div className = "col">
        //                 <img 
        //                 src="/image/ig1.png"
        //                 className="footer-image2"
        //                 />
        //             </div>
        //             <div className = "col">
        //                 <img   
        //                 src="/image/tw.png"
        //               className="footer-image3"
        //                 />
        //             </div>
        //         </div>
        //         <hr/>
        //         <div className="row">
        //             <p className="col-sm">
        //                 &copy;{new Date().getFullYear()} Anime RSV | All right reserved | Terms Of Service | Privacy
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="main-footer">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>COMPANY</h4>
                        <ui className="list-unstyled"> 
                         <li>RSV COMPANY</li>
                            <li>Chiang Mai CNX, 50200,TH</li>
                          
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>TOP ANIME</h4>
                        <ui className="list-unstyled">
<li><Link to="https://api.aniapi.com/v1/anime/?mal_id=39486">GITAMA</Link></li>
<li><Link to="https://api.aniapi.com/v1/anime/?mal_id=42938">Fruits Basket: The Final</Link></li>
<li><Link to="https://api.aniapi.com/v1/anime/?mal_id=40028">Shingeki no Kyojin: The Final Season</Link></li>


                           
                         
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>USEFUL LINKS</h4>
                        <ui className="list-unstyled">
<li><Link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                      
<li><Link to="/topanime"><i class="fa fa-list-ul" aria-hidden="true"></i> Anime List</Link></li>
<li><Link to="/search"><i class="fa fa-search" aria-hidden="true"></i> Anime Search</Link></li>

      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
   
  
    
       {/* <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button> */}

       <li><Link to="/user"><i class="fa fa-user-circle-o " aria-hidden="true"></i> Profile</Link></li>
       <li><Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link></li>
       {/* <i class="fa fa-sign-out" aria-hidden="true" onClick={() => firebaseConfig.auth().signOut()}></i>Sign Out */}
                      
                            {/* <li>Anime List</li>
                            <li>Search Anime</li>
                            <li>Login</li> */}


                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>CONTACT</h4>
                        <ui className=" list-unstyled">
                       
                            <li className="footer-iconx"><i class="bi bi-facebook"></i> RSV_ANIME_JP</li>
                            <li className="footer-iconx"><i class="bi bi-instagram"></i> rsv_anime_jp</li>
                            <li className="footer-iconx"><i class="bi bi-twitter"></i> rsv_anime_jp</li>
                            <li className="footer-iconx"> <i class="bi bi-envelope"></i> rsvanimeinfo@gmail.com</li>
                            <li className="footer-iconx"><i class="bi bi-telephone-fill"></i>+66 473 589 7404</li>

                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

// export default Credit;

export default Credit;