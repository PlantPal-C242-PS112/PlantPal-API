const web = require('./application/web');
const dotenv = require('dotenv');

dotenv.config();
const port = 8080;

web.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});