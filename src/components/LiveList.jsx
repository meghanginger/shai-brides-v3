import React from "react";
import liveDates from '../data/liveList';

const LiveList = () => (
    <div className="bioText">
        {liveDates.map(date => (
        <a className="row liveDiv is-white" href={date.ticketLink} >
            <div className="liveDate col-xs-4 col-lg-5">
                <h3 className="liveDateText">{date.day}</h3>
                <h4>{date.month}</h4>
            </div>
            <div className="liveInfo col-xs-8 col-lg-7">
                <div className="div-ception">
                    <h4>{date.venue}, {date.desc}</h4>
                    <h3>{date.city}</h3>
                </div>
            </div>
        </a>
        ))}
    </div>
);

export default LiveList;