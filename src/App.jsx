import './App.css'
import profilePicture from "./images/image-jeremy.png";
import workSvg from "./images/icon-work.svg";
import studySvg from "./images/icon-study.svg";
import socialSvg from "./images/icon-social.svg"
import selfCareSvg from "./images/icon-self-care.svg";
import exerciseSvg from "./images/icon-exercise.svg";
import playSvg from "./images/icon-play.svg";
import ellipsisSvg from "./images/icon-ellipsis.svg"

export default function App() {
  return (
    <>
      <div className="wrapper">
        <div>
          <div className="profile">
            <img src={profilePicture} width={50} height={50} />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="dwm">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
        <div className="time-cards">
          <div className="work-card">
            <div class="bg-work img-alignment">
              <img src={workSvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Work <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
          <div className="play-card">
            <div class="bg-play img-alignment">
              <img src={playSvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Play <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
          <div className="work-card">
            <div class="bg-study img-alignment">
              <img src={studySvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Study <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
          <div className="work-card">
            <div class="bg-exercise img-alignment">
              <img src={exerciseSvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Exercise <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
          <div className="work-card">
            <div class="bg-social img-alignment">
              <img src={socialSvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Social <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
          <div className="work-card">
            <div class="bg-self-care img-alignment">
              <img src={selfCareSvg} width={50} height={50} />
            </div>
            <div className="card-data">
              <p className="card-title">Self Care <img src={ellipsisSvg} /></p>
              <p className="hrs">32hrs</p>
              <p className="l-week">Last Week - 36hrs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
