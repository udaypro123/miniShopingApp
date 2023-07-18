import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
       <div className='container-fluid maincontainerCon'>
        <div className="row conatctrow">
          {/* <div className="col-sm-6">
            <div className="card mainrowcontact">
              <div className="card-body">

              </div>
            </div>
          </div> */}
          <div className="col-sm-4">
            <div className="card  mainrow1contact">
              <div className="card-body card-bodymain">

              
                <div className="mb-3 card-bodymainpart1 conform-label">
                  <label for="formGroupExampleInput" className="form-label">Full Name </label>
                  <input type="email" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="mb-3 card-bodymainpart1 conform-label">
                  <label for="formGroupExampleInput" className="form-label"> Email Adress </label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3 card-bodymainpart1 conform-label">
                  <label for="formGroupExampleInput2" className="form-label">Mobile Number</label>
                  <input type="Number" className="form-control" placeholder="Mob. no."  />
                </div>

                <textarea placeholder='message...' style={{width:'80%',height:'8rem',marginTop:"1rem"}}></textarea>

                <button type="button" className="btn btn-primary btnPrimary" >Submit</button>

                

                
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
