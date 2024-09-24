import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type EllipseProps = {
    draw: Parameters<PIXIGraphics['drawEllipse']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Ellipse({ draw, fill = [0xFFFFFF] }: EllipseProps) {
    const _draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawEllipse(...draw)
        g.endFill()
    }

    return <BaseShape draw={_draw} />
}