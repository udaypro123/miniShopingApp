import React, { Fragment, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './product.css'


const Products = () => {


  const [category, setcategory] = useState()
  const [loadingstate, setLoadingstate] = useState(false)

  const categorydata = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json();
    setcategory(data)
    setLoadingstate(true)
  }
  useEffect(() => {
    categorydata();
  }, [])
  console.log(category)

  // console.log(category)

  return (
    <>

    {
      loadingstate ? <>
      
      </>:<>

      </>
    }
      <div className="container productconatiner">

        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body d-flex flex-column gap-5 text-center links">

                {
                  category && category.map((ele, i) => {
                    return (
                      <Fragment key={ i }>
                        <Link to={ `${ele}` }>{ ele }</Link>
                      </Fragment>
                    )
                  })
                }

              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Products
