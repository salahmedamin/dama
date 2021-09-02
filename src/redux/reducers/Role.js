export default (state="P1",action)=>{
    switch(action.type){
        case "ROLE_SWITCH":
            return state === "P1" ? "P2": "P1"
        default:
            return state
    }
}