export default (state={},action)=>{
    switch(action.type){
        case "SELECTED_SET":
            return action.payload?.coordinates??{}
        default:
            return state
    }
}