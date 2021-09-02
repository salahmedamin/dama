import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Piece } from '../Piece'

export const Spot = ({className,y,x})=>{
    const dispatch = useDispatch()
    const {Selected,Highlighted,Pieces,Role,Endangered} = useSelector(state => state),
    isHighlighted = Highlighted.find(a=>a?.x === x && a?.y === y),
    isSelected = Selected.x === x && Selected.y === y,
    pieceOwner = Pieces?.find(a=>a.x === x && a.y === y)?.owner,
    movableTo = Endangered.find(a=>a.moveTo.x === x && a.moveTo.y === y)
    return (
        <div className={`${className??''} ${pieceOwner??''} ${
            isSelected ? "glow": 
            isHighlighted ? "highlighted":
            movableTo ? "moveToEat":""
        }`}
        onClick={()=>{
            if(isHighlighted||movableTo){
                dispatch({type:"SELECTED_SET"})
                dispatch({type:"ROLE_SWITCH"})
                dispatch({type:"HIGHLIGHTED_SET"})
                dispatch({type:"ENDANGERED_SET"})
                dispatch({type:"PIECES_REMOVE",payload:{x:Selected.x,y:Selected.y}})
            }
            if(isHighlighted){
                dispatch({type:"PIECES_ADD",payload:{x,y,Role}})
            }
            if(movableTo){
                dispatch({type:"PIECES_ADD",payload:{x:movableTo.moveTo.x,y:movableTo.moveTo.y,Role}})
                dispatch({type:"PIECES_REMOVE",payload:{x:movableTo.x,y:movableTo.y}})
            }
        }}
        >
            {
             Pieces?.find(a=>a.x === x && a.y === y) ?
                <Piece x={x} y={y} owner={pieceOwner} />
                :
                null
            }
          </div>
    )
}
