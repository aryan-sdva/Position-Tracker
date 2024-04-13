import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);
  return render({mousePosition});
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p className="Row">Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
          />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition })=> (
    <p className="lessgo">
      ({mousePosition.x}, {mousePosition.y})
        </p>
)}
    />
  )
};

function App() {
  return (

    <div className="App">
      <header className="Header">Cursor Position Tracker:</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>

  );
}

export default App;
