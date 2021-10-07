import React from "react";
//import DisplayEvent from "./DisplayEvent";
import DisplayType from "./DisplayType";
const FilterType=(props)=>{

    const filteredEvents=props.allEvents.filter((e)=>{
        // console.log(props.actualDate);
        return e.date.toString() === props.actualDate.toString();

        // return e.date === props.actualDate;
        });
    return (
        <div>
            <DisplayType filterName={props.filterName} events={filteredEvents} />
        </div>
    );
}
export default FilterType;