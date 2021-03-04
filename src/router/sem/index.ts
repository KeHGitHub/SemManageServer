import Router from "koa-router"
import {baiduRouter} from "./baiduRouter"
const router = new Router()
router.use("/sem", baiduRouter.routes())

export {router as sem}
