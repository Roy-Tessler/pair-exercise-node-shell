const fs = require('fs');

module.exports = (fileName) => {
  console.log(fs.readFileSync(fileName , "utf8"));
  process.stdout.write("\nprompt > ");
}
