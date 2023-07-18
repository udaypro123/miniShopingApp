import React, { useContext,useState } from 'react'
import './login.css'
import { authcontext } from '../contextApi/context'
import {Link} from 'react-router-dom'
const Login = () => {

  const [logpassword, setLogpassword] = useState("")
  const [logemail, setLogmail] = useState("")
  const {setIslogin, userdata ,setSigntologin} = useContext(authcontext)
 
  const handlelogin = () => {
        if(userdata[0].email === logemail && userdata[0].password === logpassword){
          setIslogin(true)
        }
  }

  const changediv = () => {
    setSigntologin(true)
  }

  return (
    <>
      <div className='container-fluid maincontainer'>
        <div className="row">
          <div className="col-sm-8">
            <div className="card mainrow">
              <div className="card-body">

              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card  mainrow1">
              <div className="card-body card-bodymain">

              
                <div className="mb-3 card-bodymainpart1">
                  <label for="formGroupExampleInput" className="form-label">Email </label>
                  <input type="email" className="form-control" placeholder="Enter Your email" value={logemail} onChange={ (e) => setLogmail(e.target.value) } />
                </div>

                <div className="mb-3 card-bodymainpart1">
                  <label for="formGroupExampleInput2" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" value={logpassword } onChange={ (e) => setLogpassword(
                     e.target.value) } />
                </div>

                <button type="button" className="btn btn-primary btnPrimary" onClick={ handlelogin }>Log in</button>

                <hr />


                <div className='loginimagediv'>
                  <img src="https://img.icons8.com/?size=512&id=60440&format=png" alt="facebook" />
                  <img src="https://img.icons8.com/?size=512&id=eFPBXQop6V2m&format=png" alt="gmail" />
                  <img src="https://img.icons8.com/?size=512&id=LoL4bFzqmAa0&format=png" alt="github" />

                </div>

                <hr />
                <div className='alreadyAuser' onClick={ changediv }>Register here  ? <Link>Sign up</Link> </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login;
