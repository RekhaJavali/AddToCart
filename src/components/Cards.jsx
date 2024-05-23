import react, { useState } from "react";

import Cardsdata from "./CardsData.js";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";
import {ADD} from "../redux/actions/action.js"

import { useDispatch } from "react-redux";

export function Cards() {
    const [data, setData] = useState(Cardsdata);
    // console.log(data);
    
    const dispatch = useDispatch();

    const send = (ele)=>{
        // console.log(ele);
        dispatch(ADD(ele));
    };

    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Add to Cart Project</h2>

                <div className=" d-flex row  justify-content-center align-items-center">
                    {data.map((item, id) => {
                        return (
                            <Card style={{ width: '22rem', border:"none", }} className="mt-4 mx-2 card_style">
                                <Card.Img variant="top" src={item.imgdata}  style={{height:"15rem"}} className="mt-3"/>
                                <Card.Body>
                                    <Card.Title>{item.rname}</Card.Title>
                                    <Card.Text>
                                        Price :  ₹ {item.price}
                                    </Card.Text>
                                    <div className="button_div d-flex justify-content-center">
                                        <Button variant="primary" className="col-lg-12"  onClick={()=>send(item)}>Add to cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}

                </div>
            </div>
        </>
    )
}