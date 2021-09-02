import { store } from "../redux/store"
import Player1 from "./findEatables/Player1"
import Player2 from "./findEatables/Player2"
export const findEatables = (piece)=>{
    const player = store.getState().Role
    //first we need to get player's playing direction
    //there are two conditions
    //1: exists a piece in (FOR PLAYER 1 : ((x+1&&y+1) or (x-1&&y+1))) OR (FOR PLAYER 2 : ((x+1&&y-1) or (x-1&&y-1)))
    //2: (x+2 and y+2) or (x-2 and y+2) for p 1 is empty, else for p2, (x+2 and y-2) or (x-2 and y-2) is empty 
    //AT MAX 2 EATABLES
    if(player === "P1"){
        return Player1(piece)
    }
    else{
        return Player2(piece)
    }
}