const fs = require("fs");

var utils = {

    addServerLog: (log) => utilsPrivate.addLog("SERVER", log),

    addErrorLog: (log) => utilsPrivate.addLog("ERROR", log)

};

var utilsPrivate = {

    addLog: (type, log) => {

        var date = new Date().toDateString();

        if(type === undefined || type === null || typeof type !== "string") {
            utils.addErrorLog("Missing or invalid input parameter: type");
            throw new Error("Missing or invalid input parameter: type");
        }

        if(log === undefined || log === null || typeof log !== "string") {
            utils.addErrorLog("Missing or invalid input parameter: log");
            throw new Error("Missing or invalid input parameter: log");
        }

        var fileName = "";

        switch(type) {
            case "SERVER":
                fileName = `logs/server-log-${date}.log`;
                break;

            case "ERROR":
                fileName = `logs/error-log-${date}.log`;
                break;

            default:
                utils.addErrorLog("Invalid input parameter: type");
                throw new Error("Invalid input parameter: type");
        }

        fs.appendFileSync(fileName, `${date}: ${log}\n`);

    }

};

module.exports = utils;