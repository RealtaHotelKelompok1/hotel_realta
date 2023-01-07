## LIBRARIES
#  npm install @babel/core @babel/node @babel/plugin-transform-runtime @babel/preset-env @babel/runtime dotenv express nodemon pg bcrypt jsonwebtoken

#  npm i -D sequelize-auto
#  npm run reverse:db => Generate database ke dalam models



## EDIT INIT-MODEL YANG ADA DI MODELS
# Simpan paling atas
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

# Simpan paling bawah

const models = initModels(sequelize);
export default models;
export { sequelize }