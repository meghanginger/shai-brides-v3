import React from "react";
import liveDates from '../data/liveList';

const LiveList = () => (
    <div className="bioText">
        {liveDates.map(date => (
        <a className="grid grid-cols-12" href={date.ticketLink} >
            <div className="col-span-4 md:col-span-5">
                <h3 className="liveDateText">{date.day}</h3>
                <h4>{date.month}</h4>
            </div>
            <div className="liveInfo col-span-8 md:col-span-7">
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