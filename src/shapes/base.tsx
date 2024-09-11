import React, { useCallback } from "react";
import { PIXIGraphics } from "../types";
import { Graphics } from "@pixi/react";

type BaseShapeProps = {
    draw: (g: PIXIGraphics) => void;
}

export function BaseShape(props: BaseShapeProps) {
    const draw = useCallback((g: PIXIGraphics) => {
        props.draw(g);
    }, [props.draw]);

    return (
        <Graphics draw={draw} />
    )
}