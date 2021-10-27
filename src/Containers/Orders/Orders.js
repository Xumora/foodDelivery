import React from 'react';
import OrdersWrapper from './OrdersWrapper';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteOrder, setMethod, addOne, delOne } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Orders = () => {

    const chosenMethod = useSelector(state => state.orders.chosenMethod);
    const basket = useSelector(state => state.orders.basket);
    const dispatch = useDispatch();

    const getShortText = (txt) => {
        let newTxt = txt.slice(0, 20) + "...";
        return newTxt;
    }

    let sum = 0;

    basket.map((v, i) => { sum = Number(sum) + Number(v.sum) });

    return (
        <OrdersWrapper className="container">
            <div className="w-100 p-3 border-bottom sticky-top">
                <h5 className="text-white">Orders #34562</h5>
                <div className="w-100 my-3">
                    <button className={`btn fw-bold py-1 ${chosenMethod == "dineIn" && 'methodButtonActive' || 'methodButton'}`}
                        onClick={() => setMethod("dineIn", dispatch)}>Dine In</button>
                    <button className={`btn fw-bold py-1 mx-2 ${chosenMethod == "toGo" && 'methodButtonActive' || 'methodButton'}`}
                        onClick={() => setMethod("toGo", dispatch)}>To Go</button>
                    <button className={`btn fw-bold py-1 ${chosenMethod == "delivery" && 'methodButtonActive' || 'methodButton'}`}
                        onClick={() => setMethod("delivery", dispatch)}>Delivery</button>
                </div>
                <div className="w-100 d-flex text-white justify-content-between align-items-center">
                    <small>Item</small>
                    <div>
                        <small className="me-4">Qty</small>
                        <small>Price</small>
                    </div>
                </div>
            </div>
            <div className="container basket">
                <div className="row">
                    {
                        basket.map((v, i) => {
                            return <div className="col-12 d-flex p-3" key={i}>
                                <div className="">
                                    <div className="d-flex align-items-center">
                                        <img src={v.img} alt="?" style={{ width: "60px" }} />
                                        <div>
                                            <small className="text-white fw-bold">{getShortText(v.name)}</small><br />
                                            <small className="text-muted">{v.price}</small>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Order Note..." className="form-control border-0" style={{ backgroundColor: "#2D303E", borderRadius: "6px", color: "white" }} />
                                </div>
                                <div className="text-center mx-2">
                                    <button className="btn fw-bold text-white" onClick={() => addOne(i, dispatch)}>+</button>
                                    <div className="text-white fw-bold qty">{v.qty}</div>
                                    <button className="btn fw-bold text-white" onClick={() => delOne(i, dispatch)}>-</button>
                                </div>
                                <div className="text-center">
                                    <p className="text-white my-3">{v.sum}</p>
                                    <button className="btn delButton" onClick={() => deleteOrder(i, dispatch)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="w-100 p-3 sticky-bottom border-top">
                <div className="w-100 d-flex justify-content-between">
                    <small className="text-muted">Discount</small>
                    <small className="text-white">$0</small>
                </div>
                <div className="w-100 d-flex justify-content-between">
                    <small className="text-muted">Sub total</small>
                    <small className="text-white">${parseFloat(sum).toFixed(2)}</small>
                </div>
                <button className="btn fw-bold methodButtonActive mt-4 w-100">Continue to Payment</button>
            </div>
        </OrdersWrapper >
    )
}

export default Orders;
