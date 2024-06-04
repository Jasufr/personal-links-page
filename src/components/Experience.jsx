import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

function Experience() {

  const {viewport} = useThree();
  return (
    <>
      <Environment preset="sunset" />
      <Avatar
          position-y={-1}
          animation={"Talking"}
        />
    </>
  );
}

export default Experience;
