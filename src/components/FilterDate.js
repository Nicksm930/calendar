import React from "react";
import DisplayEvent from "./DisplayEvent";

const FilterDate =(props)=>{

   
    const filteredEvents=props.allEvents.filter((e)=>{
        // console.log(props.actualDate);
        return e.date.toString() === props.actualDate.toString();

        // return e.date === props.actualDate;
        });
        
    return(
        <div>
                <DisplayEvent events={filteredEvents} />
        </div>
    );

}
export default FilterDate;