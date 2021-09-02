import { store } from "../../redux/store"

export default (x,y)=>{
    const {Pieces} = store.getState()
    const Piece1 = Pieces?.find(a=>a.x === x+1 && a.y === y+1)
    const Piece2 = Pieces?.find(a=>a.x === x-1 && a.y === y+1)
    const playable1 = !Piece1 ? {x:x+1,y:y+1}: null
    const playable2 = !Piece2 ? {x:x-1,y:y+1}: null
    return [playable1,playable2].filter(a=>a?.x < 8 && a?.x >= 0)
}