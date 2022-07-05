import Advtecbar from "../../../catepagerightbar/Advtecbar";
import LatestArticle from "../../../catepagerightbar/LatestArticle";
import StaySocial from "../../../catepagerightbar/StaySocial";
import Subscribeform from "../../../catepagerightbar/Subscribeform";
import Travlast from "../../../travelling/Travlast";



export default function LuxuryRightbar() {
  return (
    <>
      <div className="allrightbar">
        <Travlast />
        <span className="lastestbottomline "></span>
        <Advtecbar />
        <LatestArticle />
        <span className="lastestbottomline "></span>
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
}
