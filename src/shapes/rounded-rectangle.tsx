import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type RoundedRectangleProps = {
    draw: Parameters<PIXIGraphics['drawRoundedRect']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function RoundedRectangle({ draw, fill = [0xFFFFFF] }: RoundedRectangleProps) {
    const _draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawRoundedRect(...draw)
        g.endFill()
    }

    return <BaseShape draw={_draw} />
}