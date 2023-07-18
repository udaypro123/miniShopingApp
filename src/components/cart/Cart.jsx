import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeitems, removesingleItem, INcreasecartitem } from '../reddux/showitemSlice'


const Cart = () => {

  const dispatch = useDispatch()
  const { addtocartitem } = useSelector((state) => state.leftedata)
  console.log(addtocartitem)

  const deleteitem = (id) => {
    dispatch(removeitems(id))
  }

  const decreaseItem = (id) => {
    dispatch(removesingleItem(id))
  }

  const IncreaseItem = (id) => {
    dispatch(INcreasecartitem(id))
  }

  return (
    <>
      {
        addtocartitem.length > 0 ? <>
          <div className="container conatinercd">
            {
              addtocartitem && addtocartitem.map((ele) => {
                return (
                  <>
                    <div className="row mt-3 conatinercds" style={ { boxShadow: "0px 0px 2px blue", borderRadius: "1rem" } }>
                      <div className="col-sm-4 d-flex justify-content-center align-items-center">
                        <div className="card">
                          <div className="card-body d-flex justify-content-center align-items-center" >
                            <img src={ ele.image } className="img-fluid rounded-start" height={ 120 } width={ 140 } alt={ ele.title } />


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card" height={ 100 } style={ { backgroundColor: "#fcfdff" } }>
                          <div className="card-body">
                            <div className="card-title cartbtnquality" style={ { color: "black" } }>

                              <button onClick={ () => decreaseItem(ele.id) }>Dec -</button>
                               <span style={{color:"blue"}}>  { ele.cartquantity }</span>
                              <button onClick={ () => IncreaseItem(ele.id) }>Inc +</button>

                            </div>

                            <p className="card-text">Title : <span style={ { color: "#727573" } }>{ ele.title }</span></p>
                            <p className="card-text">Total Price : <span style={ { color: "blue" } }> $ { ele.price*ele.cartquantity } </span>


                            </p>


                            <p className="card-text ">Description:  <span style={{ color: "#727573", fontSize: "1rem" } }>{ ele.description.slice(0, 150) + "....." }</span></p>

                            <button type="button" class="btn btn-danger" onClick={ () => deleteitem(ele.id) }>Delete Item</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })

            }
          </div>
        </> : <>
          <div className='EmpltycartContainer'>
            <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
            <h2>Cart is Empty</h2>
          </div>
        </>
      }

    </>
  )
}

export default Cart
