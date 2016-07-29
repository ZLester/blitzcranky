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
      result.title = tinycolor(hex).complement().lighten(40).toHexString();
    } else {
      result.title = tinycolor(hex).complement().darken(40).toHexString();
    }
    result.subtitle = result.titleShadow;
    result.role = tinycolor(result.title).lighten().toHexString();
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
          const quarterWidth = Math.floor(0.25 * image.bitmap.width);
          const quarterHeight = Math.floor(0.25 * image.bitmap.height);
          image.scan(0, 0, quarterWidth, quarterHeight, (x, y, idx) => {
            red += image.bitmap.data[idx + 0];
            green += image.bitmap.data[idx + 1];
            blue += image.bitmap.data[idx + 2];
            count++;
            if (x === quarterWidth - 1 && y === quarterHeight - 1) {
              const averageRed = Math.floor(red / count);
              const averageGreen = Math.floor(green / count);
              const averageBlue = Math.floor(blue / count);
              const averageHex = this.convertRGBtoHex(averageRed, averageGreen, averageBlue);
              console.log('done!', averageHex);
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
