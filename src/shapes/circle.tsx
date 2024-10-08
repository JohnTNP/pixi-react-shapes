import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type CircleProps = {
    draw: Parameters<PIXIGraphics['drawCircle']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Circle({ draw, fill = [0xFFFFFF] }: CircleProps) {
    const _draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawCircle(...draw)
        g.endFill()
    }

    return <BaseShape draw={_draw} />
}