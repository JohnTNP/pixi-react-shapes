import { Container, Stage } from "@pixi/react";
import { Circle, Ellipse, Polygon, Rectangle, RoundedRectangle } from "../../src";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen min-w-[800px]">
      <Stage
        className="border-2 rounded-md"
        width={600}
        height={600}
        options={{ antialias: true, backgroundAlpha: 0 }}
      >
        <Container x={200} y={150}>
          <Rectangle draw={[-50, -50, 100, 100]} />
        </Container>
        <Container x={200} y={300}>
          <RoundedRectangle draw={[-50, -50, 100, 100, 10]} />
        </Container>
        <Container x={200} y={450}>
          <Circle draw={[0, 0, 50]} />
        </Container>
        <Container x={400} y={150}>
          <Ellipse draw={[0, 0, 80, 50]} />
        </Container>
        <Container x={400} y={300}>
          <Polygon draw={[[0, -50, 47, -15, 29, 40, -29, 40, -47, -15]]} />
        </Container>
      </Stage>
    </div>
  );
}

export default App;
