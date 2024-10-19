const CV = require('../Models/dataCVModel')

exports.addData = async (req,res)=>{
    try{
        const data = req.body;
        const cv = await CV.create(data);
        res.status(201).json(cv);
    }
    catch(err){res.status(500).send(err.message);}
}

exports.updateData = async (req, res) => {
    try {
        const ID = "6710d14bdb69f4b1ca960139";
        const update = req.body; 

        const cv = await CV.findOneAndUpdate(
            { _id: ID }, 
            update, 
            { new: true }
        );

        if (!cv) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(info); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getData = async (req,res)=>{
    try{
        const cv = await CV.find();
        res.status(201).json(cv);
    }
    catch(err){res.status(500).send(err.message);}
}