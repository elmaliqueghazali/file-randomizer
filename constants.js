const FILE_SIZE_LIMIT_IN_MB = 1000;
const ERROR_MESSSAGES = {
  MISSING_FILE: "Please specify a file type",
  MISSING_SIZE: "Please specify a file size greater than 0MB",
  NOT_AN_INTEGER: "Please specify a number",
  FILE_SIZE_UNSUPPORTED: `File size should be more than 0MB and lesser than ${FILE_SIZE_LIMIT_IN_MB +
    1}`,
  SUPPORTED_FILE_TYPES:
    "Please specify one of these - txt, docx, pptx, xlsx, pdf"
};

module.exports = {
  FILE_SIZE_LIMIT_IN_MB,
  ERROR_MESSSAGES
};
