import { Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

function Experience() {

  const {viewport} = useThree();
  return (
    <>
      <Environment preset="sunset" />
      <Sky sunPosition={[10, -1, 10]} />
      <Avatar
          position-y={-1}
          animation={"Falling"}
        />
    </>
  );
}

export default Experience;
