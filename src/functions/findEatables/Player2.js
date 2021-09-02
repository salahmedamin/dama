import { store } from "../../redux/store"

export default ({x,y})=>{
    const {Pieces,Role} = store.getState()
    const Piece1 = Pieces?.find(a=>a.x === x+1 && a.y === y-1 && a.owner !== Role)
    const Piece2 = Pieces?.find(a=>a.x === x-1 && a.y === y-1 && a.owner !== Role)
    const playable1 = {...Piece1,type:"plus"} ?? null
    const playable2 = {...Piece2,type:"minus"} ?? null
    // console.log([playable1,playable2])
    return [playable1,playable2].filter(
        z=>
            z.x && z.y && z.owner
            && 
            (z?.type === "plus" ? (z?.x+1 < 8) : z?.x-1 >=0)
            &&
            //trying to get a piece that doesnt have another behind it
            !(Pieces?.find(a=>a.x === (z?.type === "plus"? (z?.x +1) : z?.x -1 ) && a.y === z?.y-1))
    ).map(a=>({
        ...a,
        moveTo:{
            x:a.type === "plus" ? a.x+1 : a.x-1,
            y:a.y-1
        },
        type:null
    }))

}