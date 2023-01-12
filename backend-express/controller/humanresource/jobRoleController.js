import models, { sequelize } from "../../models/init-models"

const dateTime = new Date()

const findAllRows = async (req, res) => {
    const result = await models.job_role.findAll();
    return res.send(result);
}


const findAllRowsById = async (req, res) => {
    const result = await models.job_role.findByPk(req.params.id);
    return res.send(result);
}

const createJobRole = async (req, res) => {
    await models.job_role.create({
        joro_name: req.body.joro_name,
        joro_modified_date: dateTime,
    }).then(result => {
        return res.send("Data berhasil ditambahkan")
    }).catch(err => {
        return res.send("Data gagal ditambahkan\n" + err)
    });
}

const updateJobRole = async (req, res) => {
    const result = await models.job_role.update({
        joro_name: req.body.joro_name,
        joro_modified_date: dateTime,
    }, {
        returning: true,
        where: { joro_id: req.params.id }
    })

    return res.send(result)
}

const deleteJobRole = async (req, res) => {
    await models.job_role.destroy({
        where: { joro_id: req.params.id }
    }).then(result => {
        return res.send({ message: "Data berhasil dihapus" })
    }).catch(err => {
        return res.send({ message: "Data gagal dihapus\n" + err })
    });

}


export default {
    findAllRows,
    findAllRowsById,
    createJobRole,
    updateJobRole,
    deleteJobRole
}