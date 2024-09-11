# Pixi React Shapes
A collection of basic shapes for @pixi/react

## Example

<img src="https://github.com/user-attachments/assets/8964f371-9dcc-4bfc-b105-5cceb16fbbda" alt="drawing" width="400"/>

Go to `website` directory for a working example



## Usage
Import the shapes you want to use and pass the draw props to the shape.

```jsx
import { Circle, Rectangle, RoundedRectangle } from 'pixi-react-shapes';

<>
    <Circle drawCircle={[0, 0, 50]} />
    <Rectangle drawRect={[-50, -50, 100, 100]} />
    <RoundedRectangle draw={[-50, -50, 100, 100, 10]} />
</>
```
