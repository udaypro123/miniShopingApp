import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Showproductdetails = () => {

    const Navigate = useNavigate()
    const { showdataoflink } = useSelector((state) => state.leftedata)


    //   var item = showdataoflink[showdataoflink.length - 1]

    function backtoplace() {
        Navigate("/products/electronics");
    }

    return (
        <>
            <div className="container">
                <div className="row showprodductrow">
                    <div className="col-sm-4 imgcards">
                        <div className="card imgcard">

                            <div className="card-body">

                                <img src={ showdataoflink.image } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div onClick={ backtoplace } className='backbuttons'>
                                <img src="https://img.icons8.com/emoji/256/back-arrow-emoji.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title : { showdataoflink.title }</h5>
                                <p className="card-text"><span><h4>Description :</h4></span>
                                    { showdataoflink.description }</p>
                                <a href="/" className="btn btn-primary">Price : { showdataoflink.price }</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Showproductdetails
