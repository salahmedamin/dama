import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from './Lines/Line'

export const Lines = ()=>{
    const {Structure} = useSelector(state => state)
    return Structure?.map((row, i) => (
        <Line key={i} y={i} data={row} />
    ))
}