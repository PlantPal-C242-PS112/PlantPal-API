const web = require('./application/web');
const dotenv = require('dotenv');

dotenv.config();
const port = 3000;

web.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});