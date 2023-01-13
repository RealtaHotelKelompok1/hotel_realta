import models, { sequelize } from "../../models/init-models"

const findAllRows = async (req, res) => {
    await sequelize.query(
        `SELECT * FROM users.roles
        ORDER BY role_id DESC`,
        {
            type: sequelize.QueryTypes.SELECT,
            model: models.roles,
            mapToModel: true
        }).then(result => {
            if (result == 0 || result == null) {
                return res.status(404).send({
                    message: "Data not found"
                });
            } else {
                return res.status(200).send({
                    message: "Data displayed successfully",
                    results: result
                });
            }
        }).catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
}


const findAllRowsById = async (req, res) => {
    await models.roles.findByPk(req.params.id)
        .then(result => {
            if (result == 0 || result == null) {
                return res.status(404).send({
                    message: "Data not found"
                });
            } else {
                return res.status(200).send({
                    message: "Data displayed successfully",
                    results: result
                });
            }
        })
        .catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
}

const createRoles = async (req, res) => {
    if (req.body.role_name == "") {
        return res.status(401).send({
            message: "FAILED! role_name cannot be empty"
        });
    } else {
        await models.roles.create({
            role_name: req.body.role_name
        }).then(result => {
            return res.status(200).send({
                message: "SUCCESS! Data inserted successfully",
                results: result
            });
        }).catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
    }
}

const updateRoles = async (req, res) => {
    if (req.body.role_name == "") {
        return res.status(401).send({
            message: "FAILED! role_name cannot be empty"
        });
    } else {
        await models.roles.update({
            role_name: req.body.role_name
        }, {
            returning: true,
            where: { role_id: req.params.id }
        }).then(result => {
            if (result[1][0].length === 0) {
                return res.status(401)
                    .send({ message: 'FAILED! No data changed' });
            } else {
                return res.status(200).send({
                    message: "SUCCESS! Data updated successfully",
                    results: result[1][0]
                });
            }
        }).catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
    }
}

const deleteRoles = async (req, res) => {
    const roleID = await models.roles.findByPk(req.params.id);
    if (roleID) {
        await models.roles.destroy({
            where: { role_id: req.params.id }
        }).then(() => {
            return res.status(200).send({
                message: "SUCCESS! Data deleted successfully",
                role_id: req.params.id
            });
        }).catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
    } else {
        return res.status(404).send({
            message: "FAILED! Data not found"
        });
    }
}


export default {
    findAllRows,
    findAllRowsById,
    createRoles,
    updateRoles,
    deleteRoles
}