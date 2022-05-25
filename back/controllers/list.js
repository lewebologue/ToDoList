const List = require('../models/listModel');

//Create new list
exports.createList = (req, res, next) => {
    const listObject = req.body;
    delete listObject._id;
    if(!listObject.name) {
        return res.status(400).json({
            error: 'Name is required !'
        });
    }else if(!listObject.description) {
        const list = new List({
            ...listObject,
        });
        list.save()
            .then(() => res.status(201).json(list))
            .catch(error => res.status(400).json({ error }));
    }else{
        const list = new List({
            ...listObject,
        });
        list.save()
            .then(() => res.status(201).json(list))
            .catch(error => res.status(400).json({ error }));
    }
};

//Edit list
exports.editList = (req, res, next) => {
    const listId = req.params.id;
    const listObject = req.body;
    delete listObject._id;
    List.updateOne({ _id: listId }, { $set: listObject })
        .then(() => res.status(200).json({ message: 'List updated !' }))
        .catch(error => res.status(400).json({ error }));
};

//Delete list
exports.deleteList = (req, res, next) => {
    const listId = req.params.id;
    delete listId._id;
    List.deleteOne({ _id: listId })
        .then(() => res.status(200).json({ message: 'List deleted !' }))
        .catch(error => res.status(400).json({ error }));
};

//Get all lists
exports.getLists = (req, res, next) => {
    List.find({}).sort({createdAt:-1})
        .then(lists => res.status(200).json(lists))
        .catch(error => res.status(400).json({ error }));
};

//Get one list
exports.getList = (req, res, next) => {
    const listId = req.params.id;
    List.findOne({ _id: listId })
        .then(list => res.status(200).json(list))
        .catch(error => res.status(400).json({ error }));
};