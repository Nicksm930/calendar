import React from "react";
import "./stickyNote.css";

const ReleaseDate = (props) => {
  return (
    <div>
      {props.type === "Release" ? (
        <div className="release-note">
          <div>
            <h4>
              <b>{props.startTime}</b>
            </h4>
          </div>
          <div>
            <h4>
              <b>
                <u>Release:</u>
              </b>
              {props.release}
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
export default ReleaseDate;
