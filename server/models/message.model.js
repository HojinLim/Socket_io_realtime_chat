"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var messageSchema = new mongoose_1.default.Schema({
    senderId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    // createdAt, updatedAt
}, { timestamps: true });
var Message = mongoose_1.default.model("Message", messageSchema);
exports.default = Message;
