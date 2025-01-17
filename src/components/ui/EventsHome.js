
import { useState } from "react";
import event1pic from "./ui-styles/EventHomepics/event1pic.jpg";
import event2pic from "./ui-styles/EventHomepics/event2pic.jpg";
import event3pic from "./ui-styles/EventHomepics/event3pic.jpg";
import "./ui-styles/EventsHome.css";
function EventsHome() {
  const [event1, setEvent1] = useState(true);
  const [event2, setEvent2] = useState(false);
  const [event3, setEvent3] = useState(false);

  function handleClick1() {
    setEvent1(true);
    setEvent2(false);
    setEvent3(false);
  }

  function handleClick2() {
    setEvent1(false);
    setEvent2(true);
    setEvent3(false);
  }

  function handleClick3() {
    setEvent1(false);
    setEvent2(false);
    setEvent3(true);
  }

  return (
    <>
      <h1 id="heading">OUR EVENTS</h1>
      <div id="head">
        <div id="sidebar">
          {/* Apply classes based on which box is selected */}
          <div
            id={event1 ? "div1" : event2 ? "div11" : event3 ? "div111" : ""}
            className={event1 ? "selected" : "reduced"}
            onClick={handleClick1} // Add onClick handler to the div
          >
            <button>EVENT 1</button>
          </div>

          <div
            id={event1 ? "div2" : event2 ? "div22" : event3 ? "div222" : ""}
            className={event2 ? "selected" : "reduced"}
            onClick={handleClick2} // Add onClick handler to the div
          >
            <button>EVENT 2</button>
          </div>

          <div
            id={event1 ? "div3" : event2 ? "div33" : event3 ? "div333" : ""}
            className={event3 ? "selected" : "reduced"}
            onClick={handleClick3} 
          >
            <button>EVENT 3</button>
          </div>
        </div>

        
        <div id="name">
          <div id="div4">
            <img id="mainImage" src={event1 ? event1pic : event2 ? event2pic : event3 ? event3pic : ""} alt="Event" />
            <p id="mainText">{
            event1 ? "m aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo" : 
            event2 ? "a sunt explicabo. Nemo enim ipsam a sunt explicabo. Nemo enim ipsam a sunt explicabo. Nemo enim ipsam a sunt explicabo. Nemo enim ipsam " : 
            event3 ? "m aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectm aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectm aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architect" : ""
            }</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsHome;