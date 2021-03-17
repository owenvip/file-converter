class BizError extends Error {
  constructor({ code, message, status = 400, detail }) {
    super(message);
    this.name = "BizError";
    this.code = code;
    this.status = status;
    if (detail) {
      this.detail = detail;
    }
  }
}

module.exports = BizError;
