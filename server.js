const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const helloRoute = require('./routes/hello');

app.use(express.json());
app.use('/api', helloRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
