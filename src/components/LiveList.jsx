import React from "react";
import liveDates from '../data/liveList';

const LiveList = () => (
    <div className="md:pb-8 md:pt-2">
        {liveDates.map(date => (
        <a className="grid grid-cols-12 border-b-4 border-white transform hover:scale-105 hover:duration-300 hover:text-vits-pink hover:border-vits-pink pt-8 pb-4 mx-2" href={date.ticketLink} >
            <div className="col-span-4 md:p-2 md:col-span-3 font-bold">
                <h3 className="liveDateText text-6xl md:text-7xl">{date.day}</h3>
                <h4 className="text-4xl md:text-5xl">{date.month}</h4>
            </div>
            <div className="col-span-8 md:col-span-9 flex flex-col justify-end md:p-2">
                <h4 className="text-lg md:text-xl">{date.venue}, {date.desc}</h4>
                <h3 className="text-2xl md:text-6xl uppercase font-bold">{date.city}</h3>
            </div>
        </a>
        ))}
    </div>
);

export default LiveList;