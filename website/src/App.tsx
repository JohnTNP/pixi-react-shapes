import { Container, Stage } from "@pixi/react";
import { Circle, Rectangle, RoundedRectangle } from "../../src";
import { useEffect, useState } from "react";

function App() {

  const [ state, setState ] = useState({
    x: 0 
  });

  useEffect(() => {
    setState({
      x: 300
    })
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-screen min-w-[800px]">
      <Stage
        className="border-2 rounded-md"
        width={600}
        height={600}
        options={{ antialias: true, backgroundAlpha: 0 }}
      >
        <Container x={state.x} y={150}>
          <Rectangle drawRect={[-50, -50, 100, 100]} />
        </Container>
        <Container x={state.x} y={300}>
          <RoundedRectangle draw={[-50, -50, 100, 100, 10]} />
        </Container>
        <Container x={state.x} y={450}>
          <Circle drawCircle={[0, 0, 50]} />
        </Container>
      </Stage>
    </div>
  );
}

export default App;
