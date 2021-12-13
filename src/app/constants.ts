import { diskStorage } from 'multer';
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Department } from "src/entities/department.entity"
import { User } from "src/entities/user.entity"

export const jwtConstants = {
    secret: "TheLongerTheTextTheBetterItBecomesYaKnowSoKeepItGoingEvenFurtherBeyond"
}

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "pinturas_benavides_db",
    entities: [
        User,
        Department
    ],
    synchronize: true,
    autoLoadEntities: true
}

export const storage = diskStorage({
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