export class APIResponse{

    constructor(){};

    private statusCode: number = null;
    private message: string = null;
    private status: string = null;
    private data: any = null;

    success(message: string = "Petición Exitosa", data: any = null){
        this.statusCode = 200;
        this.message = message;
        this.data = data;
        this.status = "success"
        return this;
    }

    error(message: string = "Petición Fallida"){
        this.statusCode = 400;
        this.message = message;
        this.data = null;
        this.status = "failure";
        return this;
    }

}