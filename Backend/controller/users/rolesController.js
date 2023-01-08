import models, { sequelize } from "../../models/init-models"

const findAllRows = async (req, res) => {
    const result = await models.roles.findAll();
    return res.send(result);
}


const findAllRowsById = async (req, res) => {
    const result = await models.roles.findByPk(req.params.id);
    return res.send(result);
}

const createRoles = async (req, res) => {
    await models.roles.create({
        role_name: req.body.role_name
    }).then(result => {
        return res.send("Data berhasil ditambahkan")
    }).catch(err => {
        return res.send("Data gagal ditambahkan\n" + err)
    });
}

const updateRoles = async (req, res) => {
    const result = await models.roles.update({
        role_name: req.body.role_name
    }, {
        returning: true,
        where: { role_id: req.params.id }
    })

    return res.send(result)
}

const deleteRoles = async (req, res) => {
    await models.roles.destroy({
        where: { role_id: req.params.id }
    }).then(result => {
        return res.send({ message: "Data berhasil dihapus" })
    }).catch(err => {
        return res.send({ message: "Data gagal dihapus\n" + err })
    });

}


export default {
    findAllRows,
    findAllRowsById,
    createRoles,
    updateRoles,
    deleteRoles
}