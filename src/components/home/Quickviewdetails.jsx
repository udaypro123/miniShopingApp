import React from 'react'
import './home.css'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Quickviewdetails() {


    const Navigate = useNavigate()
    const { quickviewdatalist } = useSelector((state) => state.leftedata)


    function backtoplace() {
        Navigate("/");
    }


    return (
        <>
            <div className="container quickviewconainer">
                <div className="row quickviewrow">
                    <div className="col-sm-4">
                        <div className="card imgcard">

                            <div className="card-body">

                                <img src={ quickviewdatalist.image } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 mt-3">
                        <div className="card">
                            <div onClick={ backtoplace } className='backbuttonss'>
                                <h5 className="card-title mt-3">Title : { quickviewdatalist.title }</h5>
                                <img src="https://img.icons8.com/emoji/256/back-arrow-emoji.png" alt="" />
                            </div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Title : {quickviewdatalist.title}</h5> */ }
                                <p className="card-text">Description :
                                    { quickviewdatalist.description }</p>
                                <a href="/" className="btn btn-primary">Price : { quickviewdatalist.price }</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Quickviewdetails
