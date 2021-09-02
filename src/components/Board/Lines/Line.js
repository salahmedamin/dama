import React from 'react'
import { Spot } from "../Rows/Spot";

export const Line = ({y,data})=>{
    return (
        <div className="line">
            {data.map((place, j) => (
            <Spot className={place} y={y} x={j} key={j} />
          ))}
        </div>
    )
}
