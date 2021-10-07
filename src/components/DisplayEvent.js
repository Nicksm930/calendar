import React from "react";
import './DisplayEvent.css';
import DueDate from "./DueDate";
import PublishDate from "./PublishDate";
import ReleaseDate  from "./ReleaseDate";
const DisplayEvent=(props)=>{

    return(
        <div className="row-display">
            <div className="due-row-display">{props.events.map((e)=>(
            <DueDate 
             entry={e.title}
             date={e.date}
             moveTo={e.moveto}
             assignedBy={e.assignedBy}
             startTime={e.startTime}
             endTime={e.endTime}
             type={e.type}
             />))}
             </div>
            <div>{props.events.map((e)=>(
            <PublishDate 
             entry={e.title}
             date={e.date}
             env={e.env}
             status={e.status}
             startTime={e.startTime}
             endTime={e.endTime}
             type={e.type}

            />))}</div>
            <div>{props.events.map((e)=>(
            <ReleaseDate
             release={e.title} 
            date={e.date}
            status={e.status}
            startTime={e.startTime}
             endTime={e.endTime}
             type={e.type}/>))}</div>
        </div>
    );
}
export default DisplayEvent;