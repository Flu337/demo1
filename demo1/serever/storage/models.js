const sequelize = require("./database");

const user = sequelize.define("users", {
  id: { type: INTEGER, primeryKey: true, autoIncement: true },
  login: { type: CHAR },
  password: { type: CHAR },
  fio: { type: CHAR },
  phone: { type: CHAR },
  email: { type: CHAR },
  role: { type: CHAR },
});

const Orders = sequelize.define("users", {
  id: { type: INTEGER, primeryKey: true, autoIncement: true },
  type: { type: CHAR },
  course: { type: CHAR },
  comment: { type: CHAR },
  time: { type: CHAR },
  user_id: { type: CHAR },
});

//связь

Users.hasMany(orderas);
Orders.belonsTo(Users);
