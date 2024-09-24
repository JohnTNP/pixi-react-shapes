import React from "react"
import { PIXIGraphics } from "../types"
import { BaseShape } from "./base"

type PolygonProps = {
    draw: Parameters<PIXIGraphics['drawPolygon']>
    fill?: Parameters<PIXIGraphics['beginFill']>
}

export function Polygon({ draw, fill = [0xFFFFFF] }: PolygonProps) {
    const _draw = (g: PIXIGraphics) => {
        g.beginFill(...fill)
        g.drawPolygon(...draw)
        g.endFill()
    }

    return <BaseShape draw={_draw} />
}