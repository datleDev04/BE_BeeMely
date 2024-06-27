import mongoose, { Schema } from "mongoose";

// schema User variables
const DOCUMENT_NAME = "Role";
const COLLECTION_NAME = "Roles";

const tokenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Permission"
        }
    ]
},
{
    timestamps: true,
    versionKey: false,
    collection: COLLECTION_NAME,
})


export default mongoose.model(DOCUMENT_NAME, tokenSchema)