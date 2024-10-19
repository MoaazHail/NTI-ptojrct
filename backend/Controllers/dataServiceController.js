const Service = require('../Models/dataServiceModel');


exports.updateData = async (req, res) => {
    try {
        const filter = req.params.projectTitle; 
        const update = req.body; 
        const service = await Service.findOneAndUpdate(
            { serviceTitle: filter },
            update, 
            { new: true } 
        );

        if (!service) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(service); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteData = async (req, res) => {
    try {
        const filter = req.params.projectTitle;

        const service = await Service.deleteOne({ projectTitle: filter });
        if (service.deletedCount === 0) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};


exports.addData = async (req,res)=>{
    try{
        const data = req.body;
        const service = await Service.create(data);
        res.status(201).json(service);
    }
    catch(err){res.status(500).send(err.message);}
}

exports.getData = async (req,res)=>{
    try{
        const service = await Service.find();
        res.status(201).json(service);
    }
    catch(err){res.status(500).send(err.message);}
}