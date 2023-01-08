import models, { sequelize } from "../../models/init-models"

const findAllRows = async (req, res) => {
    const result = await models.user_roles.findAll();
    return res.send(result);
}


const findAllRowsById = async (req, res) => {
    const result = await models.user_roles.findByPk(req.params.id1 && req.params.id2);
    return res.send(result);
}

const createUserRoles = async (req, res) => {
    await models.user_roles.create({
        usro_user_id: req.body.usro_user_id,
        usro_role_id: req.body.usro_role_id
    }).then(result => {
        return res.send("Data berhasil ditambahkan")
    }).catch(err => {
        return res.send("Data gagal ditambahkan\n" + err)
    });
}

const updateUserRoles = async (req, res) => {
    const result = await models.user_roles.update({
        usro_user_id: req.body.usro_user_id,
        usro_role_id: req.body.usro_role_id
    }, {
        returning: true,
        where: { usro_user_id: req.params.id1 },
        where: { usro_role_id: req.params.id2 }
    })

    return res.send(result)
}

const deleteUserRoles = async (req, res) => {
    await models.user_roles.destroy({
        where: { usro_user_id: req.params.id1 },
        where: { usro_role_id: req.params.id2 }
    }).then(result => {
        return res.send({ message: "Data berhasil dihapus" })
    }).catch(err => {
        return res.send({ message: "Data gagal dihapus\n" + err })
    });

}


export default {
    findAllRows,
    findAllRowsById,
    createUserRoles,
    updateUserRoles,
    deleteUserRoles
}