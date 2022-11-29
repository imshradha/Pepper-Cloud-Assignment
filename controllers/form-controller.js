import formModel from '../models/form-schema.js';

export const createForm = async (req,res) => {
    try{
        const form = req.body;
        const newForm = formModel(form);
        await newForm.save();
        return res.status(201).send({status:true, message: "Form created Successfully", data:newForm});
    }catch(error){
        return res.status(500).send({message: error.message});
    }
}

export const editForm = async (req, res) => {
    const form = req.body;
    const id = req.params.formId;
    const editForm = new formModel(form);
    try{
        const newForm = await formModel.updateOne({_id:id}, editForm);
        return res.status(201).send({status:true, message: "Form upadted Successfully", data:form});
    }catch(error){
        return res.status(500).send({message : error.message});
    }
}

export const viewForm = async (req, res) => {
    try{
        const form = await formModel.find({_id : req.params.id});
        //const forms = await fromModel.findById(req.params.id);

        return res.status(200).send({status:true, message: "Form fetched Successfully", data:form});
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

export const viewAllForms = async (req, res) => {
    try{
        const form = await formModel.find();
        return res.status(200).send({status:true, message: "All Forms", data:form});
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}

