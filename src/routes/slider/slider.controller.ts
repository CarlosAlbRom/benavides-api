import { JwtAuthGuard } from './../../guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { SliderService,  } from './slider.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('slider')
export class SliderController {

    constructor(
        private readonly sliderService: SliderService,
    ) {}

    @Get()
    public getSliders(): Promise<APIResponse>{
        return this.sliderService.getSliders().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':imgpath')
    seeUploadedFile(
        @Param('imgpath') Slider, 
        @Res() res
    ) {
        return res.sendFile(Slider, { root: './assets/slider' }, );
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(
        FileInterceptor('Slider', {
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
    public uploadSlider(
        @UploadedFile() Slider: Express.Multer.File,
        @Body('text') text: string
    ): Promise<APIResponse> | APIResponse{
        // return this.sliderService.createSlider(title, "", articleId).then((res) => {
        //     return new APIResponse().success("", res)
        // }, (err) => {
        //     return new APIResponse().success(err.sqlMessage)
        // })
        console.log(Slider)
        console.log(text)
        if (Slider) {
            
            return new APIResponse().success("ROUTE WOKS", Slider);
        } else {
            return new APIResponse().error("No mages around")
        }
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // public updateSlider(
    //     @Param('id') id: number,
    //     @Body('title') title: string, 
    //     @Body('url') url: string
    // ){
    //     return this.sliderService.updateSlider(id, title, url).then((res) => {
    //         return this.getSliderById(id)
    //     }, (err) => {
    //         return new APIResponse().error(err.sqlMessage)
    //     })
    // }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteSlider(
        @Param('id') id: number
    ){
        return this.sliderService.deleteSlider(id).then(() => {
            return new APIResponse().success("Slider succesfully deleted")
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