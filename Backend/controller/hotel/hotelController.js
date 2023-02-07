import models, { sequelize } from "../../models/init-models"
const dateTime = new Date()

// view tabel hotel
const findAllHotels = async (req, res)=>{
   const result = await models.hotels.findAll()
   return res.send(result)
}

// update tabel hotels(
const updateHotels = async (req, res)=>{
    const result = await models.hotels.update({
        hotel_name:req.body.hotel_name,
        hotel_description:req.body.hotel_description,
        hotel_rating_star:req.body.hotel_rating_star,
        hotel_phonenumber:req.body.hotel_phonenumber,
        hotel_modified_date:req.body.hotel_modified_date,
        hotel_addr_id:req.body.hotel_addr_id
    },{
        returning: true,
        where :{hotel_id:req.params.id}
    })
    return res.send(result)
}

// export
export default{
    findAllHotels,
    updateHotels
}