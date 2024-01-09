import data from "../data.json";
import { IoLocationSharp } from "react-icons/io5";
export default function Card(props) {
  return (
    <div className="card-body">
      <div className="card--img--box">
        <img className="card--img" src={`./images/${props.info.img}`} alt="" />
      </div>
      <div className="descriptions-box">
        <div className="location">
          <IoLocationSharp className="loc-icon" />
          <span className="country">{props.info.country}</span>
          <a
            className="maps"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="loc-name-box">
          <span class="loc-name">{props.info.location}</span>
        </div>
        <div className="date-box">
          <span className="date">{props.info.date}</span>
        </div>
        <div className="description">
          <span class="des-text">{props.info.description}</span>
        </div>
      </div>
    </div>
  );
}
