import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { ScreenName } from "./ScreenName";

export const Routers ={
    home: {
        name: ScreenName.home,
        commponent: Home
    },
    login:{
        name: ScreenName.login,
        component: Login
    }
}