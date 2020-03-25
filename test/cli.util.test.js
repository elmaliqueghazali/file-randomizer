const { validType, validSizeInMB } = require("../cli.util");
const { FILE_SIZE_LIMIT_IN_MB, ERROR_MESSSAGES } = require("../constants");

describe("CLI Test", () => {
  describe("validType", () => {
    it("should return true if type is a valid type (pdf)", async () => {
      expect(validType("pdf")).toBeTruthy();
    });

    it("should return true if type is a valid type (txt)", async () => {
      expect(validType("txt")).toBeTruthy();
    });

    it("should return true if type is a valid type (docx)", async () => {
      expect(validType("docx")).toBeTruthy();
    });

    it("should return true if type is a valid type (xlsx)", async () => {
      expect(validType("xlsx")).toBeTruthy();
    });

    it("should return true if type is a valid type (pptx)", async () => {
      expect(validType("pptx")).toBeTruthy();
    });

    it("should return a MISSING_FILE error message if type is undefined", async () => {
      try {
        validType(undefined);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.MISSING_FILE);
      }
    });

    it("should return a MISSING_FILE error message if type is an empty string", async () => {
      try {
        validType("");
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.MISSING_FILE);
      }
    });

    it("should return a SUPPORTED_FILE_TYPES error message if type is an unsupported type", async () => {
      try {
        validType("sh");
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(
          `sh is not a supported file type. ${ERROR_MESSSAGES.SUPPORTED_FILE_TYPES}`
        );
      }
    });
  });

  describe("validSizeInMB", () => {
    it(`should return true if size is a valid integer lesser than or equal to ${FILE_SIZE_LIMIT_IN_MB}MB and more than 0MB`, async () => {
      expect(validSizeInMB(FILE_SIZE_LIMIT_IN_MB)).toBeTruthy();
    });

    it(`should return true if size is a valid integer more than ${FILE_SIZE_LIMIT_IN_MB}MB and more than 0MB`, async () => {
      try {
        validSizeInMB(FILE_SIZE_LIMIT_IN_MB + 1);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.FILE_SIZE_UNSUPPORTED);
      }
    });

    it("should return true if size is a valid integer less than 0MB", async () => {
      try {
        validSizeInMB(-1);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.FILE_SIZE_UNSUPPORTED);
      }
    });

    it("should return true if size is a valid integer is equal to 0MB", async () => {
      try {
        validSizeInMB(0);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.MISSING_SIZE);
      }
    });

    it("should return false if size is undefined", async () => {
      try {
        validSizeInMB(undefined);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.MISSING_SIZE);
      }
    });

    it("should return false if size is an empty integer", async () => {
      try {
        validSizeInMB();
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.MISSING_SIZE);
      }
    });

    it("should return false if size is a string", async () => {
      try {
        validSizeInMB("1");
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.NOT_AN_INTEGER);
      }
    });

    it("should return false if size is a decimal", async () => {
      try {
        validSizeInMB(0.5);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(ERROR_MESSSAGES.NOT_AN_INTEGER);
      }
    });

    // it("should return false if type is not within a valid range of types", async () => {
    //   expect(validType(".sh")).toBeFalsy();
    // });
  });
});
