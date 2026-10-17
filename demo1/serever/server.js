const app = require("./app");

async function start(params) {
  try {
    await Sequelize.authenticate();
    app.listen(5000, () => {
      console.log("start server");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
