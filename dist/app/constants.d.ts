/// <reference types="multer" />
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare const jwtConstants: {
    secret: string;
};
export declare const typeOrmConfig: TypeOrmModuleOptions;
export declare const storage: import("multer").StorageEngine;
