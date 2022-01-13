import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id_user: number;
    username: string;
    last_name: string;
    name: string;
    password: string;
    email: string;
}
