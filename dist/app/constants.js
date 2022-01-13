"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.typeOrmConfig = exports.jwtConstants = void 0;
const multer_1 = require("multer");
const department_entity_1 = require("../entities/department.entity");
const user_entity_1 = require("../entities/user.entity");
exports.jwtConstants = {
    secret: "TheLongerTheTextTheBetterItBecomesYaKnowSoKeepItGoingEvenFurtherBeyond"
};
exports.typeOrmConfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    entities: [],
    username: "pruebada_pinturas_benavides",
    password: "#RQJWwW&eroM",
    database: "pruebada_pinturas_benavides_db",
    synchronize: true,
    autoLoadEntities: true
};
exports.storage = (0, multer_1.diskStorage)({
    destination: "./assets/articles",
    filename: (req, file, callback) => {
        callback(null, generateFilename(file));
    }
});
function generateFilename(file) {
    let str = file.originalname;
    while (str.indexOf(' ') > -1) {
        str.replace(' ', '-');
    }
    return str;
}
//# sourceMappingURL=constants.js.map