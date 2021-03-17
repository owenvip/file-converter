const Service = require("egg").Service;
const path = require("path");
const fs = require("fs");
const libre = require("libreoffice-convert");
const BizError = require("../error/biz-error");

class convertService extends Service {
  async convertAndUpload(filePath) {
    const file = fs.readFileSync(filePath);
    libre.convert(file, ".pdf", undefined, (err, done) => {
      if (err) {
        console.log(111, err);
        throw new BizError({
          status: 400,
          code: "ZG/CONVERT_FAILED",
          message: "pdf文件转换失败",
        });
      }
      fs.writeFileSync(path.join(__dirname, `../../temp/test.pdf`), done);
    });
  }
}

module.exports = convertService;
