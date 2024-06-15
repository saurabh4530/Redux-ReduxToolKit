import mongoose from "mongoose";
import { conectionString } from "./db";

export const GET=async(req,res)=>{
    await mongoose.connect(conectionString)
    let data= await req.json()
    console.log(data);
}