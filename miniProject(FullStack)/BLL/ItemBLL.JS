const pathToModel = '../models/CarModelForMOngoDB';

const ItemModel = require(pathToModel);

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
DeleteItemByID
}