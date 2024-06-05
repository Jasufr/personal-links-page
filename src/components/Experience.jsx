import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useEffect, useState } from "react";

function Experience() {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [sunPosition, setSunPosition] = useState([0, 0, 0]);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(-2);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

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

  const getRandomInterval = () => {
    return Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
  };

  useEffect(() => {
    const changeSpeed = () => {
      setAutoRotateSpeed((prevSpeed) => (prevSpeed === 2 ? -2 : 2));
    };

    const intervalTime = getRandomInterval();
    const speedInterval = setInterval(changeSpeed, intervalTime);

    return () => clearInterval(speedInterval);
  }, [autoRotateSpeed]);

  return (
    <>
      <Environment preset="sunset" />
      <Sky sunPosition={sunPosition} />
      <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={autoRotateSpeed} />
      <Avatar position-y={-1} />
    </>
  );
}

export default Experience;
