import { useContext } from "react";
import { PacmanLoader } from "react-spinners";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Loader() {
    const {isDark} = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",   
        width: "100vw",   
      }}
    >
      <PacmanLoader color={isDark ? '#ffffff' : '#000000'} size={50} />
    </div>
  );
}
