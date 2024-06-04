import { Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

function Experience() {

  const { viewport } = useThree();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sunPosition, setSunPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();
    let newSunPosition;

    if (hours >= 0 && hours < 4) {
      newSunPosition = [10, -1, 10];
    } else if (hours >= 4 && hours < 6) {
      newSunPosition = [10, 0, 10];
    } else if (hours >= 6 && hours < 8) {
      newSunPosition = [10, 1, 10];
    } else if (hours >= 8 && hours < 10) {
      newSunPosition = [10, 2, 10];
    } else if (hours >= 10 && hours < 15) {
      newSunPosition = [10, 3, 10];
    } else if (hours >= 15 && hours < 17) {
      newSunPosition = [10, 2, 10];
    } else if (hours >= 17 && hours < 18) {
      newSunPosition = [10, 1, 10];
    } else if (hours >= 18 && hours < 21) {
      newSunPosition = [10, 0, 10];
    } else if (hours >= 21 && hours <= 24) {
      newSunPosition = [10, -1, 10];
    }

    setSunPosition(newSunPosition);
  }, [currentTime]);
  return (
    <>
      <Environment preset="sunset" />
      <Sky sunPosition={sunPosition} />
      <Avatar
        position-y={-1}
        animation={"Falling"}
      />
    </>
  );
}

export default Experience;
