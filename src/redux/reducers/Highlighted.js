export default (state=[],action)=>{
    switch(action.type){
        case "HIGHLIGHTED_SET":
            return action.payload?.highlightArray??[]
        default:
            return state
    }
}