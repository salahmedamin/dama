import { store } from "../redux/store"
import Player1 from "./findPlayables/Player1"
import Player2 from "./findPlayables/Player2"
export const findPlayable = (x,y)=>{
    const player = store.getState().Role
    //first we need to get player's playing direction
    //if P1 to bottom, meaning (current Y) - (next Y) == -1 AND (current X) - (next X) is included in [-1,1]
    //if P2 to top, meaning (current Y) - (next Y) == 1 AND (current X) - (next X) is included in [-1,1]
    //AT MAX 2 PLAYABLE POSITIONS
    if(player === "P1"){
        return Player1(x,y)
    }
    else{
        return Player2(x,y)
    }
}