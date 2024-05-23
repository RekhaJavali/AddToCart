import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {DLT, ADD, REMOVE} from "../redux/actions/action"



export function CardsDetails() {

    const [data, setData] = useState([]);
    // console.log(data);

    const { id } = useParams();
    // console.log(id);

    const getData = useSelector((state) => state.cartreducer.carts);
    // console.log(getData);

    const compare = () => {
        let compareData = getData.filter((e) => e.id == id);
        // console.log(compareData);
        setData(compareData)
    }

    // compare();
    useEffect(() => {
        compare();
    }, [id]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dlt = (id) => {
        dispatch(DLT(id));
        navigate("/");
    }

    //add item +
    const send = (ele)=>{
        // console.log(ele);
        dispatch(ADD(ele));
    };
    //remove one -
    const removeitem = (it)=>{
        dispatch(REMOVE(it));
    }


    return (
        <>
            <div className="container mt-2">
                <h2 className="text-center">Item Details Page</h2>

                <section className="container mt-3">
                    <div className="itemsdetails">
                        {
                            data.map((ele) => {
                                return (
                                    <>
                                    <div className="items_img" >
                                        <img src={ele.imgdata} alt="" />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant </strong>: {ele.rname} </p>
                                                    <p><strong>Price </strong>: ₹{ele.price} </p>
                                                    <p><strong>Dishes </strong>: {ele.address} </p>
                                                    <p><strong>Total </strong>: ₹ {ele.price * ele.qnty} </p>
                                                    <div className='mt-5 d-flex justify-content-between align-items-center' style= {{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                                                        <span style={{fontSize:24}} onClick={ele.qnty <=1? ()=>dlt(ele.id) : ()=>removeitem(ele)}>-</span>
                                                        <span style={{fontSize:22}}>{ele.qnty}</span>
                                                        <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                                                    </div>
                                                </td>

                                                <td>
                                                    <p><strong>Rating :</strong> <span style= {{backgroundColor:"green", color:"#fff",padding:"1px 3px",borderRadius:"3px"}}> {ele.rating} ★ </span> </p>
                                                    <p><strong>Order Review :</strong> <span>{ele.somedata}</span></p>
                                                    <p><strong>Remove :</strong> <span><i className="fa-solid fa-trash" style={{color:"red",fontSize:18,cursor:"pointer"}} onClick={()=>dlt(ele.id)}></i></span></p>
                                                </td>
                                            </tr>
                                      </Table>
                                    </div>
                                    </>
                                )
                            })
                        }
    
                    </div>


                </section>

            </div>
        </>
    )

}