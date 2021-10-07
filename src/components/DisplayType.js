import React from "react";
import DueDate from "./DueDate";
import PublishDate from "./PublishDate";
import ReleaseDate from "./ReleaseDate";
const DisplayType = (props) => {
  return (
    <div>
      {props.filterName === "DueDate"
        ? props.events.map((e) => (
            <DueDate
              entry={e.title}
              date={e.date}
              moveTo={e.moveto}
              assignedBy={e.assignedBy}
              startTime={e.startTime}
              endTime={e.endTime}
              type={e.type}
            />
          ))
        : null}
      {props.filterName === "ContentPublish"
        ? props.events.map((e) => (
            <PublishDate
              entry={e.title}
              date={e.date}
              env={e.env}
              status={e.status}
              startTime={e.startTime}
              endTime={e.endTime}
              type={e.type}
            />
          ))
        : null}
        {
            props.filterName ==="Release" ?
            props.events.map((e)=>(
                <ReleaseDate
                 release={e.title} 
                date={e.date}
                status={e.status}
                startTime={e.startTime}
                 endTime={e.endTime}
                 type={e.type}/>)):null
        }
    </div>
  );
};
export default DisplayType;
