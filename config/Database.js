import {Sequelize} from "sequelize";

const db = new Sequelize('latihan_express_js', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;