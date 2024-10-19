const Info = require('../Models/dataInfoModel')

exports.addData = async (req,res)=>{
    try{
        const data = req.body;
        const info = await Info.create(data);
        res.status(201).json(info);
    }
    catch(err){res.status(500).send(err.message);}
}

exports.updateData = async (req, res) => {
    try {
        const ID = "6710d0a008a6f727efc55b4b"; 
        const update = req.body; 
        
        const info = await Info.findOneAndUpdate(
            { _id: ID }, 
            update, 
            { new: true }
        );

        if (!info) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(info); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getData = async (req,res)=>{
    try{
        const info = await Info.find();
        res.status(201).json(info);
    }
    catch(err){res.status(500).send(err.message);}
}