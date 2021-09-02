import React from "react"
import { Lines } from "./Board/Lines"
import { findEatables } from "../functions/findEatables";
import { findPlayable } from "../functions/findPiecePlayables";

export const Board = () => {
  window.feat = findEatables
  window.fpla = findPlayable
  return (
    <div className="board col-10 col-md-7 col-lg-6 p-0">
      <Lines />
    </div>
  );
};
