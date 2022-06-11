import React from "react";
import ReactPlayer from "react-player";
import "./vedio.css";
const Vedionew = () => {
  return (
    <section>
      <div className="Viedosec">
        <div className="NewViedo">
          <ReactPlayer
            width="800px"
            height="500px"
            url="https://youtu.be/7sDY4m8KNLc"
          />
        </div>
        <div className="RecentViedo">
          <h4>Recently Video</h4>
          <div className="Video">
            <ReactPlayer
              width="200px"
              height="100px"
              url="https://youtu.be/7sDY4m8KNLc"
            />
            <div className="VideoTitle">
              <h5>Hwang In Youp's fan metting in Asia</h5>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
              <span>12:38</span>
            </div>
          </div>
          <span className="underline"></span>
          <div className="Video">
            <ReactPlayer
              width="200px"
              height="100px"
              url="https://youtu.be/7sDY4m8KNLc"
            />
            <div className="VideoTitle">
              <h5>Hwang In Youp's fan metting in Asia</h5>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
              <span>12:38</span>
            </div>
          </div>
          <span className="underline"></span>
          <div className="Video">
            <ReactPlayer
              width="200px"
              height="100px"
              url="https://youtu.be/7sDY4m8KNLc"
            />
            <div className="VideoTitle">
              <h5>Hwang In Youp's fan metting in Asia</h5>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
              <span>12:38</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vedionew;
