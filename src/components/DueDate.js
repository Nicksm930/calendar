import React from "react";
import "./stickyNote.css";
const DueDate = (props) => {
  return (
    <div>
      {props.type === "DueDate" ? (
        <div className="due-note">
          <div>
            <b>
              <h5>{props.startTime}</h5>
            </b>
          </div>
          <div>
            <h4>
              <u><b>Entry:</b></u>{props.entry}
            </h4>
            
          </div>

          <div>
            <h4>
              <u><b>MoveTo:</b></u>{props.moveTo}
            </h4>
            
          </div>

          <div>
            <h4>
              <u><b>AssignedBy:</b></u>{props.assignedBy}
            </h4>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default DueDate;
