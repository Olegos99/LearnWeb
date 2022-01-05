const ItemBLLPath = '../BLL/ItemBLL';

const expess = require('express');
const ItemBLL = require(ItemBLLPath);

const Router = expess.Router();

//Gett all items
Router.get('/',async (req,res) => {
    try {
        const Items = await ItemBLL.GetAllItems();
        res.send(Items);
    } catch (error) {
        res.send(error);
    }
});

//Get item by ID
Router.get('/:id',async (req,res) => {
    try {
        const Item = await ItemBLL.GetItemById(req.params.id);
        res.send(Item);
    } catch (error) {
        res.send(error);
    }
});

//Post new Item
Router.post('/', async (req, res) => 
{
    try {
        const Item = req.body;  
        const result = await ItemBLL.PostNewItem(Item);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

// Update an existing Item
Router.put('/:id', async (req, res) => {
    try {
        const response = await ItemBLL.UpdateItemById(req.params.id, req.body);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

// Delete an existing Item
Router.delete('/:id', async (req, res) => {
    try {
        const response = await ItemBLL.DeleteItemByID(req.params.id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})


module.exports = Router;