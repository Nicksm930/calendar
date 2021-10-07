import React,{useState} from "react";
//import FilterDate from "./FilterDate";
import FilterType from "./FilterType";
const OnFilter =(props)=>{

    const [filterName,setFilter]=useState('');
    const FilterHandler =(event)=>{
        setFilter(event.target.value);
    }
    return(
        <div>
            <div>
                <label>Filters</label>
                <select onChange={FilterHandler}>
                    <option value="DueDate">DueDate</option>
                    <option value="ContentPublish">ContentPublish</option>
                    <option value="Release">Release</option>
                </select>
            </div>
            <div>
                <FilterType filterName={filterName} actualDate={props.actualDate} allEvents={props.allEvents}></FilterType>
            </div>
        </div>
    );
}
export default OnFilter;