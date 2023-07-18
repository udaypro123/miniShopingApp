import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useRef } from 'react';
import './user.css'
import { getuserdata } from '../reddux/userSlice';
import { useEffect, useState } from 'react';
import { filterddata } from '../reddux/userSlice';

const User = () => {

const inputref=useRef("")
  const dispatch = useDispatch();
  const [person, setperson] = useState("all")
  const { userdata, filtersuserdata } = useSelector((state) => state.usersdata)


  const userFilterdata=()=>{
    dispatch(filterddata(inputref.current.value))
  }

  useEffect(() => {
    dispatch(getuserdata(person))
  }, [person])


  return (
    <div className='container userconatiner'>
      <div className='userMaincard'>
        <div className='Userdiv'>
          <h3> User Details</h3>
          <p> Thank you once again for your unwavering commitment and dedication. Together, we will forge ahead, embrace challenges, and celebrate numerous achievements. Your hard work and passion are the backbone of our success, and we are grateful to have you as part of our team. we understand the importance of maintaining a healthy work-life balance. We encourage you to take care of your well-being, both physically and mentally. Remember to recharge, pursue your passions. </p>
        </div>

        <div className='radioBtn'>

          <div>
            <input type="radio" name='gender' value='all' checked={ person === "all" } onChange={ (e) => setperson(e.target.value) } /> <label htmlFor="">All</label>

            <input type="radio" name='gender' value='male' checked={ person === "male" } onChange={ (e) => setperson(e.target.value) } />
            <label htmlFor="">Male</label>

            <input type="radio" name='gender' value='female' checked={ person === 'female' } onChange={ (e) => setperson(e.target.value) } /> <label htmlFor="">Female</label>
          </div>
          <input type="text" placeholder='search user here...' ref={inputref} onChange={userFilterdata}/>
        </div>

        <div className="container">
          <table className="table table-primary table-striped">
            <thead >
              <tr className='tbodyoftable'>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            {
              userdata && userdata.map((e, i) => {
                return (
                  <Fragment key={ i }>
                    <tbody >
                      <tr>
                        <th scope="row"><img src={ e.picture.medium } alt="" /></th>
                        <td>{ e.name.first }</td>
                        <td>{ e.email }</td>
                        <td>{ e.gender }</td>
                      </tr>
                    </tbody>
                  </Fragment>
                )
              })
            }


          </table>
        </div>




      </div>
    </div>
  )
}

export default User
