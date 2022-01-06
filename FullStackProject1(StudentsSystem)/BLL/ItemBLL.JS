const pathToModel = '../models/StudentModel';
const pathToModel2 = '../models/GradeModel';

const ItemModel = require(pathToModel);
const GradeModel = require(pathToModel2);

//Get All Items
const GetAllItems = () => {
    return new Promise ((resolve,reject) =>
    {
        ItemModel.find({}, (error, items) =>
        {
            if(error)
             reject(error)
            else 
            resolve(items)
        });
    });
}

//GetItemByID
const GetItemById = (id) =>
{
    return new Promise ((resolve,reject) =>
    {
        ItemModel.findById(id,(error, item) =>
        {
            if(error)
            reject(error);
            else
            resolve(item);
        });
    });
}

//get all students grades byID
const GetAllStudentGradesByID = (id) =>
{
    return new Promise (async (resolve,reject) =>
    {
        try {
            const student = await GetItemById(id);
            resolve(student.grades);
        } catch (error) {
            reject(error);
        }
    });


}

//Post Item (Add new Item)
const PostNewItem = (RecivedItem) =>
{
    return new Promise((resolve,reject) =>
    {
        const NewItem = new ItemModel(RecivedItem);
        NewItem.save((error) => 
        {
            if(error)
            reject(error)
            else
            resolve(`${NewItem} item was succsesfuly saved`);
        });
    });
}

//Put Item by ID (Update existing)
const UpdateItemById = (id, item) =>
{
    return new Promise((resolve,reject) =>
    {
        ItemModel.findByIdAndUpdate(id, item,(error) => 
        {
            if(error)
            reject(error)
            else
            resolve(`Item with id ${id} was succsesfuly updated`);
        });
    });
}

//update grade by id
const UpdateGradeById = (id, grade) =>
{
    return new Promise((resolve,reject) =>
    {

    });
}

//Delete Item by ID
const DeleteItemByID = async (id) => {
    return new Promise((resolve, reject) => {
        ItemModel.findByIdAndDelete(id, (err) => {
            if(err)
            reject(err);
            else
            resolve(`Item with id:${id} was delited`);
        })
    })
}

module.exports ={
GetAllItems,
GetItemById,
PostNewItem,
UpdateItemById,
DeleteItemByID,
GetAllStudentGradesByID,
UpdateGradeById
}