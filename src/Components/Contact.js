import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className='pt-5' style={{ backgroundColor: `#2f2f2f` }}>
            <div id="footwrap">
                <div className="container pb-5">
                    <div className="row text-light">

                        <div className="col-lg-2 col-lg-offset-1">
                            <h5>CONTACT</h5>
                        </div>
                        <div className="col-lg-6">
                            <p><t>Email</t><br />
                                KhangHNCE171827@fpt.edu.vn <br />
                            </p>
                            <p><t>Adress</t><br />
                                Some Ave. 987 <br />
                                Postal 23892 <br />
                                London, England. <br />
                            </p>
                            <p><t>Phone</t><br />
                                +55 8933-2383 <br />
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p><sm>SOCIAL LINKS</sm></p>
                            <p>
                                <a className='me-2 text-success' href="#"><Icon.Dribbble /></a>
                                <a className='me-2 text-success' href="#"><Icon.Twitter /></a>
                                <a className='me-2 text-success' href="#"><Icon.Facebook /></a>
                                <a className='me-2 text-success' href="#"><Icon.Linkedin /></a>
                                <a className='me-2 text-success' href="#"><Icon.Apple /></a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black '>
                <div className="container d-flex justify-content-end pt-2">
                    <p className='text-light'>Created by <a className='text-danger' href="http://www.blacktie.co">BLACKTIE.CO</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact
