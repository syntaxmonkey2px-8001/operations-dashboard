import { useState } from "react";


export default function Sidebar() {

    const [activeFilter, setActiveFilter] = useState('All');

    // filter buttons
    const filter = ['All', 'To-do', 'In Progress', 'Done', 'Blocked'];

    function handleButtonClick(filter){

    setActiveFilter(filter)
}


    return (

        <aside>
            <h3>Filter</h3>
            <div className="button-wrapper">

                {filter.map((filter) => (
                    <button
                        key={filter}
                        onClick={()=>handleButtonClick({filter})}
                        className={activeFilter == filter ? 'active' : ''}>
                        {filter}

                    </button>
                ))}
            </div>
        </aside>
    )
}