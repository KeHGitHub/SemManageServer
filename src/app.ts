import Koa from "koa"
import bodyParser from "koa-bodyparser"
import koaLogger from "koa-logger"
import koaStatic from "koa-static"
import {Server} from "http"
import {sem} from "./router/sem"


console.log("hello world!")
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
        this.addMidware()
        this.addRouter()
        return new Promise((resolve,reject)=>{
            this.server = this.app.listen(this.PORT)
            resolve()
        })
    }

    public stop():void {
        this.server.close()
        console.log(`Server stop listening on port ${this.IP}:${this.PORT}`)
    }
    /*
    private async prepare(){

    }
    */
    private addRouter(){
        this.app.use(sem.routes())
    }

    private addMidware(){
        //body parser
        this.app.use(bodyParser({ formLimit: "20mb", jsonLimit: "20mb" }))
    }
    
}
