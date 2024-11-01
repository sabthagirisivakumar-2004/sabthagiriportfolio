import React, { useEffect } from "react";
import { useState } from "react";

function Creative() {
  const roles = ["Designer", "Developer", "Problem Solver"];
  const [role, setRole] = useState(roles[0]);
  const [i, setI] = useState(0);
  const [c, setC] = useState(0);
  const [back, setBack] = useState(true);
  const [speed, setspeed] = useState(200);
  const n = roles.length;
  function changeRole() {
    if (back) {
      setRole((prev) => prev.slice(0, prev.length - 1));
      setspeed(200);
      if (role.length === 1) {
        setBack(false);
        setC((prev) => prev + 1);
      }
    } else {
      setRole((prev) => prev + roles[c % n][i]);
      setI((prev) => prev + 1);
      if (i === roles[c % n].length - 1) {
        setspeed((Math.floor(Math.random() * 4) + 2) * 1000);
        setBack(true);
        setI(0);
      }
    }
  }
  useEffect(()=>{
    const intervalId = setInterval(changeRole, speed);
    return ()=>{clearInterval(intervalId);}
  },[role])
  return <>{role}</>;
}

export default Creative;
