import React, { useContext, useState } from 'react'
import './login.css'
import { authcontext } from '../contextApi/context'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [inputvalue, setinputvalue] = useState("")
  const [password, setpassword] = useState("")
  const [email, setEmail] = useState("")

  const { userdata, setUserdata, signtologin, setSigntologin } = useContext(authcontext)
  // get the id of div which div have to modified byt the function call
  const [type,setType]=useState("password")
  const [istype,setIstype]=useState(true)



  const handlesignup = () => {

    setUserdata([...userdata, { inputvalue: inputvalue, email: email, password: password, id: Date.now() }])
    setSigntologin(!signtologin)
  }

  const changediv = () => {
    setSigntologin(false)
  }

  const showpassword = () => {
      if(type === "password"){
          setType("text")
          setIstype(!istype)
      }
  }

  const hidepassword = () => {
      if(type === "text"){
          setType("password")
          setIstype(!istype)
      }
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
                  <label htmlFor="formGroupExampleInput" className="form-label">UserName</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter userName" value={ inputvalue } onChange={ (e) => setinputvalue(e.target.value) } />
                </div>
                <div className="mb-3 card-bodymainpart1">
                  <label htmlFor="formGroupExampleInput" className="form-label">Emai Id </label>
                  <input type="email" className="form-control" placeholder="Enter Your email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div className="mb-3 card-bodymainpart1 card-bodymainpart3">
                  <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                  <input type={type} className="form-control" placeholder="Enter password" id="password" value={ password } onChange={ (e) => setpassword(e.target.value)} />

              {
                istype ? <img src="https://www.svgrepo.com/show/390427/eye-password-see-view.svg" alt="" onClick={showpassword} /> :   <img src="https://static.thenounproject.com/png/4830332-200.png" alt="" onClick={hidepassword} />
              }
                  

               

                </div>

                <button type="button" className="btn btn-primary btnPrimary" onClick={ handlesignup }>Sign up</button>

                <hr />

                <div className='loginimagediv'>
                  <img src="https://img.icons8.com/?size=512&id=60440&format=png" alt="facebook" />
                  <img src="https://img.icons8.com/?size=512&id=eFPBXQop6V2m&format=png" alt="gmail" />
                  <img src="https://img.icons8.com/?size=512&id=LoL4bFzqmAa0&format=png" alt="github" />

                </div>
                <hr />
                <div className='alreadyAuser' onClick={ changediv }>Already a User ? <Link>log in</Link> </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default SignUp
