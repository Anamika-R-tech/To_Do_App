const app = require("./src/app");

const PORT = 8000;

const connectDB = require("./src/config/db");

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();