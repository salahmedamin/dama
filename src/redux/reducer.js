import { combineReducers } from "redux";
import { Pieces } from "./reducers/Pieces"
import Highlighted from "./reducers/Highlighted"
import Role from "./reducers/Role"
import Selected from "./reducers/Selected";
import Structure from "./reducers/Structure";
import Endangered from "./reducers/Endangered";

export const rootReducer = combineReducers({ Pieces, Highlighted, Role, Selected,Structure,Endangered})