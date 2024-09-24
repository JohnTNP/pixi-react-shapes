import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type RectangleProps = {
    draw: Parameters<PIXIGraphics['drawRect']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Rectangle({ draw, fill = [0xFFFFFF] }: RectangleProps) {
    const _draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawRect(...draw)
        g.endFill()
    }

    return <BaseShape draw={_draw} />
}