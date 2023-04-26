const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true

    },
    logo: {
        type: String,

    },
    logoBackground: {
        type: String,
    },
    position: {
        type: String,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    contract: {
        type: Boolean,
    },
    location: {
        type: String,
    },
    website: {
        type: String,
    },
    apply: {
        type: String,
    },
    description: {
        type: String,
    },
    requirements: {
        content: {
            type: String,
        },
        items: {
            type: [String]
        },
    },
    role: {
        content: {
            type: String,
        },
        items: {
            type: [String]
        },
    }
});

module.exports = mongoose.model("Job", JobSchema);



// role: {
//     content:String,
//     items:Array
// }
