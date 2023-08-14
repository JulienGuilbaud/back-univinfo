import { Sequelize } from "sequelize";
//const sequelize = new Sequelize('database', 'username', 'password', {....
const sequelize = new Sequelize('????', '????', '????', {
    host: 'postgresql-?????',
    port:'5432',
    dialect:'postgres',
    define: {
        underscored: true,
      }
  });

  export default sequelize;