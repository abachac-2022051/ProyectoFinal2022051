'use strict'

import categoryModel from './category.model.js'
export const test = (req,res)=>{
    return res.send('Hello Word')
}
 
export const createCreate = async(req,res)=>{
    try {
        let datos = req.body
        let categoria = new categoryModel(datos)
        await categoria.save()
        return res.send({message: 'created ',categoria})
       
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'dont create category'})
    }
}
export const listCategory = async(req,res)=>{
    try {
        let categoria  = await categoryModel.find()
        if(categoria.length === 0) return res.status(400).send({message: 'did not work'})
        return res.send({categoria})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'no existing categories'})
    }
}
 
export const updateCategory = async(req,res)=>{
    try {
        let {id} = req.params
        let datos = req.body
        let actulizarCategoria = await categoryModel.findOneAndUpdate(
            {_id: id},
            datos,
            {new: true}
 
        )
        if(!actulizarCategoria)return res.status(401).send({message: 'Data could not be updated'})
        return res.send({message:'Updated',actulizarCategoria})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error while updating'})
    }
}
 
export const deletedCategory = async (req, res) => {
    try {
        let { id } = req.params
        let eliminarCategoria = await categoryModel.findOneAndDelete({ _id: id })
        if (!eliminarCategoria) return res.status(404).send({ message: 'Category was not found and was not deleted.' })
        return res.send({ message: `the category ${eliminarCategoria.categoria} was eliminated` })
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error when deleting' })
    }
}
