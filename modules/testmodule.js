const testmodel = require("../models/testmodel");

exports.gettest = async (req, res, next) => {
  try {
    var data = await testmodel.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"something went wrong"})
  }
};

exports.posttest= async(req,res,next)=>{
    try {
        var testdata = new testmodel({
            name:req.body.name,
            password:req.body.password,
            call:req.body.call
        });
        var response = await testdata.save();
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updatetest=async (req,res,next)=>{
    try {
        var id = req.params.id;
        var response =await testmodel.findByIdAndUpdate(id,{
            name:req.body.name
        },{new:true});
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deletetest=async(req,res,next)=>{
    try {
        var id = req.params.id;
        var response = await testmodel.findByIdAndDelete(id);
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}