import React from "react";
import { BaseShape } from "./base";
import { PIXIGraphics } from "../types";

type CircleProps = {
    drawCircle: Parameters<PIXIGraphics['drawCircle']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Circle({ drawCircle, fill = [0xFFFFFF] }: CircleProps) {
    const draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawCircle(...drawCircle)
        g.endFill()
    }

    return <BaseShape draw={draw} />
}