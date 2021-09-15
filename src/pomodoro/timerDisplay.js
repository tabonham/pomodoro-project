import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";


function TimerDisplay({focusDuration, breakDuration, session}) {

  function percentElapsed(time){
    const focusTime = focusDuration * 60
    const breakTime = breakDuration * 60
    const breakDiff = breakTime - time
    const focusDiff = focusTime - time
    
    if (session.label === "On Break"){
        return breakDiff/breakTime*100
    } else {
        return focusDiff/focusTime*100  
    }
}
//label for the status of the timer 
  function focusOrBreakDuration(session) {
    return session.label === "Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration);
    
  }

    return(
      session && 
      <>
      <div className="row mb-2">
      <div className="col">
          <h2 data-testid="session-title">
              {session?.label} for {focusOrBreakDuration(session)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
          </p>
      </div>
  </div>
  
  <div className="row mb-2">
      <div className="col">
          <div className="progress" style={{ height: "20px" }}>
              <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={percentElapsed(session?.timeRemaining)}
                  style={{ width: `${percentElapsed(session?.timeRemaining)}%` }}
              />
          </div>
      </div>
  </div>
</>
//progress bar status
    )
 }

 export default TimerDisplay;