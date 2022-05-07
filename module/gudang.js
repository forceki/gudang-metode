import DBConnection from "../db/DBConnection,js";



export const insertToInventory=(req,res)=>{
    const data = req.body

    const query = `
        INSERT INTO inventory(name,gudang_id) VALUES ?
    `
    const dataQuery = [
        data.name,
        data.gudang_id
    ]

    DBConnection.query(query,[[dataQuery]],(err,result)=>{
        if(err) throw err;
        res.status(201).send({
            status:1,
            data:result
        })
    })
}