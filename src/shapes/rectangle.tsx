import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type RectangleProps = {
    drawRect: Parameters<PIXIGraphics['drawRect']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Rectangle({ drawRect, fill = [0xFFFFFF] }: RectangleProps) {
    const draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawRect(...drawRect)
        g.endFill()
    }

    return <BaseShape draw={draw} />
}