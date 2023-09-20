import { Sequelize } from "sequelize"; 
const db = new Sequelize('latihan_jwt_express', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
});

export default db;