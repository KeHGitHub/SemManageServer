import Koa from "koa"
import bodyParser from "koa-bodyparser"
import koaLogger from "koa-logger"
import koaStatic from "koa-static"
import {Server} from "http"

export class App{
    public app: Koa
    private server!: Server
    //private config: Config
    private IP: string;
    private PORT: number
    public constructor(){
        this.app = new Koa()
        this.IP = process.env.IP? process.env.IP :"127.0.0.1"
        this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080
    }
    public async start():Promise<void>{
        
    }

}
