import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findEatables } from '../../functions/findEatables'
import { findPlayable } from '../../functions/findPiecePlayables'

export const Piece = ({ y, x, owner }) => {
  const { Selected, Role, Endangered } = useSelector(state => state)
  const dispatch = useDispatch()
  const isEndangered = Endangered?.find(a=>a.x === x && a.y === y),
  isSelected = Selected.x === x && Selected.y === y
  return (
    <div className={`piece${isEndangered ? " endangered":""}`} onClick={() => {
      if (isSelected) {
        dispatch({ type: "SELECTED_SET" })
        dispatch({ type: "HIGHLIGHTED_SET" })
        dispatch({ type: "ENDANGERED_SET" })
      }
      else {
        const playable = findPlayable(x, y),
        eatables = findEatables({x,y})
        if ((playable.length > 0 || eatables.length > 0) && Role === owner) {
          dispatch({ type: "SELECTED_SET", payload: { coordinates: { x, y } } })
          dispatch({ type: "HIGHLIGHTED_SET", payload: { highlightArray: playable } })
          dispatch({
          type: "ENDANGERED_SET",
          payload:{
            endangeredArray:eatables
          }
        })
        }
      }
    }} />
  )
}
