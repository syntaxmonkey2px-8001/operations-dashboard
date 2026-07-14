import { useState } from "react";

export default function Sidebar({ activeFilter, setActiveFilter }) {

    // filter buttons
    const filters = ['All', 'To-Do', 'In Progress', 'Done', 'Blocked'];

    function handleButtonClick(filter){
    setActiveFilter(filter);
}

console.log(activeFilter)

    return (

        <aside>
            <h3>Filter</h3>
            <div className="button-wrapper">

                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={()=>handleButtonClick(filter)}
                        className={activeFilter == filter ? 'active' : ''}>
                        {filter}

                    </button>
                ))}
            </div>
        </aside>
    )
}