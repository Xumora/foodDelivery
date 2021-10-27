import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const today = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <HeaderWrapper>
            <div className="row justify-content-between align-items-center">
                <div className="col-3">
                    <h4 className="text-white">Jaegar Resto</h4>
                    <small className="m-0 text-muted">{weekDays[today.getDay()]}, {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</small>
                </div>
                <div className="col-3">
                    <div className="input-group">
                        <button className="btn text-white" style={{ backgroundColor: "#2D303E" }}><FontAwesomeIcon icon={faSearch} /></button>
                        <input type="text" className="form-control border-0 text-white" style={{ backgroundColor: "#2D303E", fontSize: "12px" }} placeholder="Search for food, coffe, etc.."></input>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header
