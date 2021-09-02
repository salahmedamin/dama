export default (state=[],action)=>{
    switch(action.type){
        case "ENDANGERED_SET":
            return action.payload?.endangeredArray??[]
        default:
            return state
    }
}