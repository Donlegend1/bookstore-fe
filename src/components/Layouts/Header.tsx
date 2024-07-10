import React, {useContext} from 'react';
import { Context } from '../../auth/Context';
// import {User} from "../../types"

const Header = () => {
   const { user } = useContext(Context)
     const TodayDate = new Date();

function formatDate(a:any) {
    const year = a.getFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[a.getMonth()];
    const day = a.getDate();

    // Function to get the appropriate suffix for the day
    function getDaySuffix(day:any) {
        if (day > 3 && day < 21) return 'th'; // Handles 11th to 20th
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const daySuffix = getDaySuffix(day);

    return `${day}${daySuffix} ${month} ${year}`;
}
    return (
        <div className="col-md-12 rt_subheader">
                <div className="rt_subheader_main">
                    <h3 className="rt_subheader_title mb-mob-2">Hello {user?.fullname}</h3>
                    <div className="rt_breadcrumb mb-mob-2">
                    <a href="#" className="rt_breadcrumb_home_icon"><i className="fa fa-home" /></a>
                    <span className="rt_breadcrumb_separator"><i className="fa fa-chevron-right" /></span>
                    <a href="" className="breadcrumb_link"> Home </a>
                    <span className="rt_breadcrumb_separator"><i className="fa fa-chevron-right" aria-hidden="true" /></span>
                    <a href="" className="breadcrumb_link"> Main Dashboard </a>
                    </div>
                </div>
                <div className="subheader_btns">
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary"><i className="feather ft-edit mr-0" /></a>
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary"><i className="feather ft-watch mr-0" /></a>
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary">
                    <span>Today:</span>&nbsp;
                                <span>{ formatDate(TodayDate)}</span>
                    <i className="fa fa-calendar ml-2" />
                    </a>
                </div>
                </div>
    );
}

export default Header;
