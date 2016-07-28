const Jimp = require('jimp');
const tinycolor = require('tinycolor2');

class Image {
  convertRGBtoHex(r, g, b) {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }
  readImageByPath(path) {
    return Jimp.read(path);
  }
  getTextColorsByHex(hex) {
    const result = {};
    const isDark = tinycolor(hex).isDark();
    if (isDark) {
      result.title = tinycolor(hex).lighten(20).complement().toHexString();
      result.titleShadow = tinycolor(result.title).darken().toString();
    } else {
      result.title = tinycolor(hex).darken(20).toString();
      result.titleShadow = tinycolor(result.title).darken().toString();
    }
    result.subtitle = tinycolor(result.titleShadow).darken().toString();
    result.subtitleShadow = tinycolor(result.subtitle).darken().toString();
    result.role = tinycolor(result.title).complement().toHexString();
    result.roleShadow = tinycolor(result.role).darken().toString();
    return result;
  }
  getTextColorsByPath(path) {
    return this.getAverageColorByPath(path)
      .then(hex => this.getTextColorsByHex(hex));
  }
  getAverageColorByPath(path) {
    return new Promise((resolve, reject) => {
      let red = 0;
      let green = 0;
      let blue = 0;
      let count = 0;
      this.readImageByPath(path)
        .then(image => {
          image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
            red += image.bitmap.data[idx + 0];
            green += image.bitmap.data[idx + 1];
            blue += image.bitmap.data[idx + 2];
            count++;
            if (x === image.bitmap.width - 1 && y === image.bitmap.height - 1) {
              const averageRed = Math.floor(red / count);
              const averageGreen = Math.floor(green / count);
              const averageBlue = Math.floor(blue / count);
              const averageHex = this.convertRGBtoHex(averageRed, averageGreen, averageBlue);
              resolve(averageHex);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = new Image();
