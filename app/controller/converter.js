"use strict";
const fs = require("fs");
const path = require("path");
const Controller = require("egg").Controller;
const BizError = require("../error/biz-error");

class ConverterController extends Controller {
  async convert() {
    try {
      let part;
      const parts = this.ctx.multipart();
      while ((part = await parts()) != null) {
        if (!part.filename) {
          continue;
        }
        const filePath = path.join(
          __dirname,
          `../../temp/${new Date().getTime() + part.filename}`
        );
        let writeStrem = fs.createWriteStream(filePath);
        await part.pipe(writeStrem);
        await this.ctx.service.converter.convertAndUpload(filePath);
      }
      this.ctx.body = { code: 200, message: "success" };
    } catch (error) {
      this.ctx.response.type = "application/json";
      throw new BizError({
        status: 400,
        code: "ZG/INVALID_PARAMS",
        message: "转换失败，文件错误",
      });
    }
  }
}

module.exports = ConverterController;
