# Pixi React Shapes
A collection of basic shapes for [@pixi/react](https://github.com/pixijs/pixi-react)

[<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />](https://www.npmjs.com/package/pixi-react-shapes)

## Example

<img src="https://github.com/user-attachments/assets/8964f371-9dcc-4bfc-b105-5cceb16fbbda" alt="drawing" width="400"/>

Go to `website` directory for a working example



## Usage

Install the package using any package manager you like.
```sh
pnpm install pixi-react-shapes
```

Import the shapes you want to use and pass the draw props to the shape.
```jsx
import { Circle, Rectangle, RoundedRectangle } from 'pixi-react-shapes';

<>
    <Circle drawCircle={[0, 0, 50]} />
    <Rectangle drawRect={[-50, -50, 100, 100]} />
    <RoundedRectangle draw={[-50, -50, 100, 100, 10]} />
</>
```
