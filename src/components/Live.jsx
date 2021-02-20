import React from 'react';
import LiveList from "./LiveList";

const Live = () => (
    <div className="bg-vits-blue font-dramatic text-white text-shadow flexColCenter">
      <div className="container my-4 lg:px-16">
        <h2 className="is-white text-2xl md:text-5xl pt-4 -mb-4 pl-4 font-bold">UPCOMING SHOWS</h2>
        <LiveList />
      </div>
      
    </div>
);
//  w-screen md:px-8 lg:px-20 xl:px-28
export default Live;