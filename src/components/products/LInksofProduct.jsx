import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getproductdatalink } from '../reddux/productSlice';
import { Link } from 'react-router-dom';
import { additem } from '../reddux/showitemSlice';

const LInksofProduct = () => {

  const dispatch = useDispatch()
  const { datalinks } = useSelector((state) => state.productslink)
  
  const { id } = useParams()
  const { idd } = useParams()


  const showitem=(ele)=>{
      dispatch(additem(ele))
  }

  useEffect(() => {
    dispatch(getproductdatalink(id))
  }, [id])

  return (
    <>
      {
        datalinks && datalinks.map((ele) => {
          return (
            <Fragment key={ ele.id }>

              <ul className="list-group">
                <li className="list-group-item" onClick={()=>showitem(ele)}> <Link to={ `/products/${idd}/${ele.id}` }>{ ele.title }</Link></li>
              </ul>
            </Fragment>

          )
        })
      }
    </>
  )
}

export default LInksofProduct;
