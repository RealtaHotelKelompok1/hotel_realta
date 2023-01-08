import models, { sequelize } from "../../models/init-models"

const dateTime = new Date();

const findAllRows = async (req, res) => {
    const result = await models.users.findAll();
    return res.send(result);
}


const findAllRowsById = async (req, res) => {
    const result = await models.users.findByPk(req.params.id);
    return res.send(result);
}

const createUsers = async (req, res) => {
    await models.users.create({
        user_full_name: req.body.user_full_name,
        user_type: req.body.user_type,
        user_company_name: req.body.user_company_name,
        user_email: req.body.user_email,
        user_phone_number: req.body.user_phone_number,
        user_modified_date: dateTime
    }).then(result => {
        return res.send("Data berhasil ditambahkan")
    }).catch(err => {
        return res.send("Data gagal ditambahkan\n" + err)
    });
}

const updateUsers = async (req, res) => {
    const result = await models.users.update({
        user_full_name: req.body.user_full_name,
        user_type: req.body.user_type,
        user_company_name: req.body.user_company_name,
        user_email: req.body.user_email,
        user_phone_number: req.body.user_phone_number,
        user_modified_date: dateTime
    }, {
        returning: true,
        where: { user_id: req.params.id }
    })

    return res.send(result)
}

const deleteUsers = async (req, res) => {
    await models.users.destroy({
        where: { user_id: req.params.id }
    }).then(result => {
        return res.send({ message: "Data berhasil dihapus" })
    }).catch(err => {
        return res.send({ message: "Data gagal dihapus\n" + err })
    });

}


export default {
    findAllRows,
    findAllRowsById,
    createUsers,
    updateUsers,
    deleteUsers
}