import models, { sequelize } from "../../models/init-models"

const findAllRows = async (req, res) => {
    await sequelize.query(
        `SELECT * FROM users.user_roles
        ORDER BY usro_role_id DESC`,
        {
            type: sequelize.QueryTypes.SELECT,
            model: models.user_roles,
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
    await models.user_roles.findByPk(req.params.id).then(result => {
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

const createUserRoles = async (req, res) => {
    if (req.body.usro_user_id == "") {
        return res.status(401).send({
            message: "FAILED! usro_user_id cannot be empty"
        });
    } else if (req.body.usro_role_id == "") {
        return res.status(401).send({
            message: "FAILED! usro_role_id cannot be empty"
        });
    } else {
        await models.user_roles.create({
            usro_user_id: req.body.usro_user_id,
            usro_role_id: req.body.usro_role_id
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

const updateUserRoles = async (req, res) => {
    if (req.body.usro_role_id == "") {
        return res.status(401).send({
            message: "FAILED! usro_role_id cannot be empty"
        });
    } else {
        await models.user_roles.update({
            usro_role_id: req.body.usro_role_id
        }, {
            returning: true,
            where: { usro_user_id: req.params.id }
        }).then(result => {
            if (result[1][0].length === 0) {
                return res.status(401)
                    .send({ message: 'FAILED! No data changed' });
            } else {
                return res.status(200).send({
                    message: "SUCCESS! Data updated successfully",
                    role: "Guest",
                    results: result[1][0]
                });
            }
        }).catch(err => {
            return res.status(500).send({
                error: err,
                message: err.message
            });
        });
    }
}

const deleteUserRoles = async (req, res) => {
    const userID = await models.user_roles.findByPk(req.params.id);
    if (userID) {
        await models.user_roles.destroy({
            where: { usro_user_id: req.params.id }
        }).then(() => {
            return res.status(200).send({
                message: "SUCCESS! Data deleted successfully",
                usro_user_id: req.params.id
            });
        }).catch(err => {
            return res.status(500).send({
                error: err.errors[0].message,
                message: err.message
            });
        });
    }
}


export default {
    findAllRows,
    findAllRowsById,
    createUserRoles,
    updateUserRoles,
    deleteUserRoles
}