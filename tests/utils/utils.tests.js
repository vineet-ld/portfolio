const expect = require("expect");
const rewire = require("rewire");

var utils = rewire("../../utils/utils");

describe("utils", () => {

    var fs = {
        appendFileSync: expect.createSpy()
    };

    utils.__set__("fs", fs);

    describe("1. add server logs", () => {

        it("should write to the correct log file", () => {

            var log = `${new Date()}: Testing server logs\n`;
            var date = new Date().toDateString();
            var fileName = `logs/server-log-${date}.log`;

            utils.addServerLog(log);
            expect(fs.appendFileSync).toHaveBeenCalled();

        });

        it("should throw error when log message is absent", () => {

            expect(() => {
                utils.addServerLog();
            }).toThrow("Missing or invalid input parameter: log");

            expect(() => {
                utils.addServerLog(null);
            }).toThrow("Missing or invalid input parameter: log");

            expect(() => {
                utils.addServerLog(123);
            }).toThrow("Missing or invalid input parameter: log");

        })

    });

    describe("2. add error logs", () => {

        it("should write to the correct log file", () => {

            var log = `${new Date()}: Testing server logs\n`;
            var date = new Date().toDateString();
            var fileName = `logs/server-log-${date}.log`;

            utils.addErrorLog(log);
            expect(fs.appendFileSync).toHaveBeenCalled();

        });

        it("should throw error when log message is absent", () => {

            expect(() => {
                utils.addServerLog();
            }).toThrow("Missing or invalid input parameter: log");

            expect(() => {
                utils.addServerLog(null);
            }).toThrow("Missing or invalid input parameter: log");

            expect(() => {
                utils.addServerLog(123);
            }).toThrow("Missing or invalid input parameter: log");

        })

    });

});