import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Color } from 'src/entities/color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {

    constructor(
        @InjectRepository(Color) private colorRepo: Repository<Color>,
    ){}

    public getColors(){
        return this.colorRepo.find({
            order: {
                id_color: 'DESC'
            }
        });
    }

    public getColorByType(type: number){
        return this.colorRepo.find({
            where: {
                type: type
            }
        })
    }

    public getColorById(id: number){
        return this.colorRepo.findOne(id);
    }

    public getMultipleColorsById(ids: number[]){
        return this.colorRepo.findByIds(ids)
    }

    public createColor(name: string, code: string, hex: string){
        return this.colorRepo.save({
            code: code,
            name: name,
            hex: hex
        })
    }

    public updateColor(id: number, name: string, code: string, hex: string){
        return this.colorRepo.update(id, {
            name: name,
            code: code,
            hex: hex
        })
    }

    public deleteColor(id){
        return this.colorRepo.delete(id)
    }

}