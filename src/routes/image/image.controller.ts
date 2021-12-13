import { JwtAuthGuard } from './../../guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ImageService,  } from './image.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('image')
export class ImageController {

    constructor(
        private readonly imageService: ImageService,
    ) {}

    @Get()
    public getImages(): Promise<APIResponse>{
        return this.imageService.getImages().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':imgpath')
    seeUploadedFile(
        @Param('imgpath') image, 
        @Res() res
    ) {
        return res.sendFile(image, { root: './assets/article' }, );
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './assets/article/',
                filename: (req: any, file: Express.Multer.File, cb: any) => {
                    cb(null, `${file.originalname.split(' ').join('-')}`)
                }
              }),
            }
        )
    )
    @Post()
    public uploadImage(
        @UploadedFile() image: Express.Multer.File,
        @Body('text') text: string
    ): Promise<APIResponse> | APIResponse{
        // return this.imageService.createImage(title, "", articleId).then((res) => {
        //     return new APIResponse().success("", res)
        // }, (err) => {
        //     return new APIResponse().success(err.sqlMessage)
        // })
        console.log(image)
        console.log(text)
        if (image) {
            
            return new APIResponse().success("ROUTE WOKS", image);
        } else {
            return new APIResponse().error("No mages around")
        }
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // public updateImage(
    //     @Param('id') id: number,
    //     @Body('title') title: string, 
    //     @Body('url') url: string
    // ){
    //     return this.imageService.updateImage(id, title, url).then((res) => {
    //         return this.getImageById(id)
    //     }, (err) => {
    //         return new APIResponse().error(err.sqlMessage)
    //     })
    // }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteImage(
        @Param('id') id: number
    ){
        return this.imageService.deleteImage(id).then(() => {
            return new APIResponse().success("Image succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}

const storage = diskStorage({
    destination: "./assets/articles",
    filename: (req, file, callback) => {
      callback(null, generateFilename(file));
    }
  });
  
  function generateFilename(file) {
    let str: string = file.originalname;
    while (str.indexOf(' ') > -1) {
        str.replace(' ', '-')
    }
    return str;
  }