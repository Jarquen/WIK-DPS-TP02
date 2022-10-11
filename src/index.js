"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/ping', function (req, res) {
    return res.status(200).json(req.headers);
});
app.get('*', function (req, res) {
    return res.status(404).json({ message: "NOT FOUND" });
});
var port = process.env.PING_LISTEN_PORT || 3000;
app.listen(port, function () {
    console.log('The application is listening on port 3000!');
});
