import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addOrder, setMethod } from '../../redux/actions';
import DishesWrapper from './DishesWrapper';

const dishes = ["Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert"]

const Dishes = () => {
    const [chosenDish, setchosenDish] = useState(0);

    const dishesMenu = useSelector(state => state.dishes.dishes);
    const chm = useSelector(state => state.orders.chosenMethod);

    const dispatch = useDispatch();

    const chooseDish = (i) => {
        setchosenDish(i);
    }

    const handleChange = (event) => {
        setMethod(event.target.value, dispatch);
    }

    return (
        <DishesWrapper className="w-100">
            <div className="w-100 border-bottom">
                {
                    dishes.map((v, i) => {
                        return <button
                            className={`btn text-white fw-bold px-0 py-3 me-5 ${i == chosenDish && 'dishActive' || ''}`} style={{ fontSize: "14px" }}
                            onClick={() => chooseDish(i)} key={i}
                        >
                            {v}
                        </button>
                    })
                }
            </div>
            <div className="w-100 py-4 d-flex justify-content-between">
                <h5 className="fw-bold text-white">Choose Dishes</h5>

                <select className="form-select text-white p-0 ps-4 py-2" onChange={handleChange} value={chm}>
                    <option selected value="dineIn">Dine In</option>
                    <option value="toGo">To Go</option>
                    <option value="delivery">Delivery</option>
                </select>
            </div>
            <div className="row pt-4">
                {
                    dishesMenu[chosenDish].map((v, i) => {
                        return <div className="col-4 p-5" key={i}>
                            <button className="btn foodCard p-4 pt-5" onClick={() => addOrder(v, dispatch)}>
                                <img src={v.img} alt="?" className="w-75" />
                                <h6 className="text-white mt-5">{v.name}</h6>
                                <p className="text-white">${v.price}</p>
                                <small className="text-muted">{v.available} Bowls available</small>
                            </button>
                        </div>
                    })
                }
            </div>
        </DishesWrapper>
    )
}

export default Dishes;
