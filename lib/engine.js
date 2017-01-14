const fs = require('fs');
const path = require('path');

module.exports = () => {
  const templatePath = path.resolve('./app/template.html');
  return fs.readFileSync(templatePath, 'utf8');
}
