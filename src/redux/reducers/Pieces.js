const init = [...Array.from(Array(3).keys())
.map((line, lineIndex) => {
  return Array.from(Array(8).keys())
    .map((row, rowIndex) => {
      if (lineIndex % 2 === 0) {
        if (rowIndex % 2 === 0) {
          return { y: lineIndex + 5, x: rowIndex, owner:"P2" };
        }
      } else {
        if (rowIndex % 2 !== 0) {
          return { y: lineIndex + 5, x: rowIndex, owner:"P2"  };
        }
      }
      return null;
    })
    .filter((a) => a !== null);
})
.reduce((t, a) => (t = [...t, ...a]), []),
...Array.from(Array(3).keys())
.map((line, lineIndex) => {
  return Array.from(Array(8).keys())
    .map((row, rowIndex) => {
      if (lineIndex % 2 === 0) {
        if (rowIndex % 2 !== 0) {
          return { y: lineIndex, x: rowIndex, owner:"P1" };
        }
      } else {
        if (rowIndex % 2 === 0) {
          return { y: lineIndex, x: rowIndex, owner:"P1" };
        }
      }
      return null;
    })
    .filter((a) => a !== null);
})
.reduce((t, a) => (t = [...t, ...a]), [])
]


export const Pieces = (state=init,action)=>{
    switch(action.type){
        case "PIECES_ADD":
            return [
                ...state,
                {
                    x: action.payload.x,
                    y: action.payload.y,
                    owner: action.payload.Role
                }
            ]
        case "PIECES_REMOVE":
            return state.filter(a=>!(a.x === action.payload.x && a.y === action.payload.y))
        default:
          return state
    }
}