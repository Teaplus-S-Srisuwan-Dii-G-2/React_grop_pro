import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./credit.css";

const Credit = () => {
    return(
        <div className = "main-footer">
            <div className ="container">
                <div className="row">
                    <div className="col">
                    <h4>Contact us</h4>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col">
                        <img 
                        src="/image/fb.png"
                        className="footer-image1"
                        />
                    </div>
                    <div className = "col">
                        <img 
                        src="/image/ig1.png"
                        className="footer-image2"
                        />
                    </div>
                    <div className = "col">
                        <img   
                        src="/image/tw.png"
                      className="footer-image3"
                        />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Anime RSV | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

// export default Credit;

export default Credit;