const Project = require('../Models/dataProjectModel');


exports.updateData = async (req, res) => {
    try {
        const filter = req.params.projectTitle; 
        const update = req.body; 
        const project = await Project.findOneAndUpdate(
            { projectTitle: filter },
            update, 
            { new: true } 
        );

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteData = async (req, res) => {
    try {
        const filter = req.params.projectTitle;
        console.log(filter);
        const project = await Project.deleteOne({ projectTitle: filter });
        if (project.deletedCount === 0) {
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
        if (req.file) {
            data.projectImage = req.file.filename; 
        }
        const project = await Project.create(data);
        res.status(201).json(project);
    }
    catch(err){res.status(500).send(err.message);}
}

exports.getData = async (req,res)=>{
    try{
        const project = await Project.find();
        res.status(201).json(project);
    }
    catch(err){res.status(500).send(err.message);}
}