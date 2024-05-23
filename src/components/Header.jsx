import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Badge from '@mui/material/Badge';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link, NavLink } from 'react-router-dom';



import { useSelector, useDispatch} from 'react-redux';

import Table from 'react-bootstrap/Table'

import {DLT} from "../redux/actions/action.js"


export function Header() {

    const[price, setPrice]= useState(0);

    // console.log(price);

    const getData = useSelector((state) => state.cartreducer.carts);
    // console.log(getData);


    const dispatch = useDispatch();

  


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (ele)=>{
        // console.log(ele);
        dispatch(DLT(ele));
    };

    const total = () => {
       let cost = 0;
       getData.map((ele,k)=>{
            // console.log(ele);
            cost = (ele.price* ele.qnty)+cost;
            // console.log(cost);
       });
       setPrice(cost);
    }

    useEffect(()=>{
        total();
    },[total] );

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-5  fw-bold">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {/* <Link to="/cart"> */}
                        <i className="fa-solid fa-cart-shopping text-white w-10 h-10" style={{ fontSize: 25, cursor: "pointer" }}></i>
                        {/* </Link> */}
                    </Badge>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        {getData.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getData.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose} >
                                                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="cartitem" />
                                                            </NavLink>
                                                        </td>
                                                        <td className='lh-1'>
                                                            <p>{e.rname}</p>
                                                            <p>Price: ₹{e.price}</p>
                                                            <p>Quantity: {e.qnty}</p>
                                                            <p>Item Total : <span className='fw-bold fs-6'>₹{e.qnty*e.price}</span></p>
                                                            <p>
                                                                <i className="fa-solid fa-trash smalltrash" style={{ color: "red", fontSize: 18, cursor: "pointer" }}
                                                                onClick={()=>dlt(e.id)}></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                            <i className="fa-solid fa-trash" style={{ color: "red", fontSize: 18, cursor: "pointer" }}
                                                            ></i>

                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                        }
                                        <p className='text-center fw-bold'> Total: ₹{price}</p>
                                    </tbody>
                                </Table>

                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ position: "relative", width: "24rem" }}>
                                <i class="fa-solid fa-xmark" style={{ position: "absolute", top: "2px", right: "20px", cursor: "pointer", fontSize: "20px" }}
                                    onClick={handleClose}></i>
                                <p fontSize="22px">Your cart is empty</p>
                                <img src="./cart.gif" alt="empty cart" className='emptycart_img' style={{ width: "5rem", padding: 10 }}></img>
                            </div>

                        }



                    </Menu>

                </Container>
            </Navbar>

        </>
    )
}