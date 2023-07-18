import './home.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gethomedattaformapi } from '../reddux/homeSlice'
import { Fragment, useEffect } from 'react'
import { quickviewdata } from '../reddux/showitemSlice';
import { addtocart } from '../reddux/showitemSlice'


const Home = () => {

  const dispatch = useDispatch()
  const { homedatalist,filterhomedatalist } = useSelector((state) => state.homedata)
  // console.log(homedatalist)

  useEffect(() => {
    dispatch(gethomedattaformapi())
  }, [])

  const quickviewdetails = (ele) => {
    dispatch(quickviewdata(ele))
  }
  const addtocartitems = (ele) => {
    dispatch(addtocart(ele))
  }


  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          {
            
            homedatalist && homedatalist.map((ele,index) => {
              return (
                <Fragment key={index}>
                  <div className="card mt-5 homeimgdiv" style={ { width: "22rem", margin: "1rem", height: "35rem" } } >
                    <img src={ ele.image } className="card-img-top" alt={ ele.title } />
                    <div className="card-body">
                      <h5 className="card-title">{ ele.title.slice(0,15)+"..." }</h5>
                      <p className="card-text para">{ ele.description.slice(0, 40) + "...." }</p>
                    </div>

                    <ul className="list-group list-group-flush mb-5">

                      <li className="list-group-item">Price : <span style={ { color: "blue" } }> $ { ele.price } </span></li>

                      <li className="list-group-item">Category:  <span style={ { color: "blue" } }> { ele.category } </span> </li>

                      <li className="list-group-item">Rating :  <span style={ { color: "blue" } }> { ele.rating.rate } </span></li>

                      <li className="list-group-item">

                        <div className='btndiv'>

                          <NavLink to='/quickviewdata'><button type="button" className="btn btn-primary" onClick={ () => { quickviewdetails(ele) } }>Quick View</button></NavLink>

                          <button type="button" className="btn btn-warning" onClick={ () => addtocartitems(ele) }>Add to Cart</button>

                        </div>

                      </li>

                    </ul>
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;
