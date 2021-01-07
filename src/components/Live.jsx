import React from 'react';
import LiveList from "./LiveList";

const Live = () => (
    <div className="bg-vits-blue-900 flexColCenter font-dramatic text-white text-shadow md:px-4">
      <h2 className="is-white text-2xl md:text-5xl p-4 pt-8 font-bold">UPCOMING SHOWS</h2>
      <LiveList />
    </div>
);

export default Live;