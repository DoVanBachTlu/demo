import Approve from "../../screens/Approve";
import ApproveDetail from "../../screens/ApproveDetail";
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
    },
    approve:{
        name: ScreenName.approve,
        component: Approve
    },
    approveDetail:{
        name: ScreenName.approveDetail,
        component: ApproveDetail
    }
}