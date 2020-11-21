import React from 'react'
import Selfie from '../Images/Selfie.jpg'
function Contact() {
    return (
       
        <div className="card justify-content-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <h5 className="card-title">Contact</h5>
                            <hr></hr>
                            <div className="form-group">
                                <label for="FormControlTextarea1">Name</label>
                                <textarea className="form-control" id="FormControlTextarea1" rows="1"></textarea>
                            </div>
                            <label for="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"></input>
                        
                        </div>
                        
                        <div className="form-group">
                            <label for="FormControlTextarea1">Message</label>
                            <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        

    );
}

export default Contact
