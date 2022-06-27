import Advtecbar from "./Advtecbar";
import "./latestbar.css";

export default function Latestbar() {
  return (
    <>
      <div className="allrightbar">
        <div>
          <div className="lastnewbar-title">
            <h2>Latest Article</h2>
            <span className="lasttitleline"></span>
          </div>
          <div className="lastnewbar-body">
            <div className="article-lastest">
              <div className="lastnewimg">
                <img src="./images/technology/robothand.jpg" alt="" />
              </div>
              <div className="lastnewinfo">
                <h4>Where does it come from effective from Exercise ?</h4>
                <div className="lastnewbuttondate">
                  <span className="Technology2 cateTechnology">Technology</span>
                  <h5>32.4.2021</h5>
                </div>
              </div>
            </div>

            <div className="article-lastest">
              <div className="lastnewimg">
                <img src="./images/technology/smarttech.jpg" alt="" />
              </div>
              <div className="lastnewinfo">
                <h4>Where does it come from effective from Exercise ?</h4>
                <div className="lastnewbuttondate">
                  <span className="Technology2 cateTechnology">Technology</span>
                  <h5>32.4.2021</h5>
                </div>
              </div>
            </div>

            <div className="article-lastest">
              <div className="lastnewimg">
                <img src="./images/technology/techvideoimg.png" alt="" />
              </div>
              <div className="lastnewinfo">
                <h4>Where does it come from effective from Exercise ?</h4>
                <div className="lastnewbuttondate">
                  <span className="Technology2 cateTechnology">Technology</span>
                  <h5>32.4.2021</h5>
                </div>
              </div>
            </div>

            <div className="article-lastest">
              <div className="lastnewimg">
                <img src="./images/technology/techcamera.jpg" alt="" />
              </div>
              <div className="lastnewinfo">
                <h4>Where does it come from effective from Exercise ?</h4>
                <div className="lastnewbuttondate">
                  <span className="Technology2 cateTechnology">Technology</span>
                  <h5>32.4.2021</h5>
                </div>
              </div>
            </div>

            <div className="article-lastest">
              <div className="lastnewimg">
                <img src="./images/technology/samsung.jpg" alt="" />
              </div>
              <div className="lastnewinfo">
                <h4>Where does it come from effective from Exercise ?</h4>
                <div className="lastnewbuttondate">
                  <span className="Technology2 cateTechnology">Technology</span>
                  <h5>32.4.2021</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="lastestbottomline"></span>
        <Advtecbar />
      </div>
    </>
  );
}
