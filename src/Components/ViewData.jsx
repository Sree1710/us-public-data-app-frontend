import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewData = () => {
    const [publicData,setData]=useState(
        {"data":[]}
    )

    const getData=()=>{
     axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
        (Response)=>{
            setData(Response.data)

        }
     )
    }
    useEffect(()=>{
        getData()
    })
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Data</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID Nation</th>
                                            <th scope="col">Nation</th>
                                            <th scope="col">Year</th>
                                            <th scope="col">ID Year</th>
                                            <th scope="col">Population</th>
                                            <th scope="col">Slug Nation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {publicData.data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value['ID Nation']}</th>
                                            <td>{value.Nation}</td>
                                            <td>{value.Year}</td>
                                            <td>{value['ID Year']}</td>
                                            <td>{value.Population}</td>
                                            <td>{value['Slug Nation']}</td>

                                        </tr>
                                        }
                                    )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewData