const { FILE_SIZE_LIMIT_IN_MB, ERROR_MESSSAGES } = require("./constants");
const VALID_TYPES = ["txt", "docx", "pptx", "xlsx", "pdf"];

const validType = type => {
  if (!type) {
    throw new Error(ERROR_MESSSAGES.MISSING_FILE);
  }
  if (!VALID_TYPES.includes(type)) {
    throw new Error(
      `${type} is not a supported file type. ${ERROR_MESSSAGES.SUPPORTED_FILE_TYPES}`
    );
  }
  return true;
};

const validSizeInMB = size => {
  if (!size) {
    throw new Error(ERROR_MESSSAGES.MISSING_SIZE);
  }
  if (!Number.isInteger(size)) {
    throw new Error(ERROR_MESSSAGES.NOT_AN_INTEGER);
  }
  if (size < 1 && size > FILE_SIZE_LIMIT_IN_MB) {
    throw new Error(ERROR_MESSSAGES.FILE_SIZE_UNSUPPORTED);
  }
  return true;
};

module.exports = {
  validType,
  validSizeInMB
};
