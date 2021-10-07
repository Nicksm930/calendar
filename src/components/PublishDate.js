import React from "react";
import "./stickyNote.css";
const PublishDate = (props) => {
  return (
    <div>
      {props.type === "ContentPublish" ? (
        <div className="publish-note">
          <div>
            <h4>
              <b>{props.startTime}</b>
            </h4>
          </div>

          <div>
            <h4>
              <u>
                <b>Entry:</b>
              </u>
              {props.entry}
            </h4>
          </div>
          <div>
            <h4>
              <b>
                <u>Environment:</u>
              </b>
              {props.env}
            </h4>
          </div>
          <div>
            <h4>
              <b>
                <u>Status:</u>
              </b>
              {props.status}
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default PublishDate;
