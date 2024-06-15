//@ts-nocheck
import mongoose from "mongoose";


 const emp=mongoose.Schema({
    name:String,
    salary:String
})


export const concollection=mongoose.modules.emps || mongoose.model("emps",emp)

