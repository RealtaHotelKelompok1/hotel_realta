import models, { sequelize } from "../../models/init-models"

const dateTime = new Date();

const findAllRows = async (req, res) => {
    await sequelize.query(
        `SELECT * FROM users.users
        ORDER BY user_id DESC`,
        {
            type: sequelize.QueryTypes.SELECT,
            model: models.users,
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
    await models.users.findByPk(req.params.id)
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

const createUsers = async (req, res) => {
    if (req.body.user_full_name == "") {
        return res.status(401).send({
            message: "FAILED! user_full_name cannot be empty"
        });
    } else if (req.body.user_type == "") {
        return res.status(401).send({
            message: "FAILED! user_type cannot be empty"
        });
    }
    else if (req.body.user_company_name == "") {
        return res.status(401).send({
            message: "FAILED! user_company_name cannot be empty"
        });
    } else if (req.body.user_email == "") {
        return res.status(401).send({
            message: "FAILED! user_email cannot be empty"
        });
    } else if (req.body.user_phone_number == "") {
        return res.status(401).send({
            message: "FAILED! user_phone_number cannot be empty"
        });
    } else {
        if (req.body.user_type == "T" || req.body.user_type == "I" || req.body.user_type == "C") {
            await models.users.create({
                user_full_name: req.body.user_full_name,
                user_type: req.body.user_type,
                user_company_name: req.body.user_company_name,
                user_email: req.body.user_email,
                user_phone_number: req.body.user_phone_number,
                user_modified_date: dateTime
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
        } else {
            return res.status(401).send({
                message: "FAILED! user_type use : T / I / C => T is Travel Agent / I is Individual / C is Corporate"
            });
        }
    }

}

const updateUsers = async (req, res) => {
    if (req.body.user_full_name == "") {
        return res.status(401).send({
            message: "FAILED! user_full_name cannot be empty"
        });
    } else if (req.body.user_type == "") {
        return res.status(401).send({
            message: "FAILED! user_type cannot be empty"
        });
    }
    else if (req.body.user_company_name == "") {
        return res.status(401).send({
            message: "FAILED! user_company_name cannot be empty"
        });
    } else if (req.body.user_email == "") {
        return res.status(401).send({
            message: "FAILED! user_email cannot be empty"
        });
    } else if (req.body.user_phone_number == "") {
        return res.status(401).send({
            message: "FAILED! user_phone_number cannot be empty"
        });
    } else {
        if (req.body.user_type == "T" || req.body.user_type == "I" || req.body.user_type == "C") {
            await models.users.update({
                user_full_name: req.body.user_full_name,
                user_type: req.body.user_type,
                user_company_name: req.body.user_company_name,
                user_email: req.body.user_email,
                user_phone_number: req.body.user_phone_number,
                user_modified_date: dateTime
            }, {
                returning: true,
                where: { user_id: req.params.id }
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
                return res.status(500)
                    .send({
                        error: err.name,
                        message: err.message
                    });
            });
        } else {
            return res.status(401).send({
                message: "FAILED! user_type use : T / I / C => T is Travel Agent / I is Individual / C is Corporate"
            });
        }
    }
}

const deleteUsers = async (req, res) => {
    const userID = await models.users.findByPk(req.params.id);
    if (userID) {
        await models.users.destroy({
            where: { user_id: req.params.id }
        }).then(() => {
            return res.status(200).send({
                message: "SUCCESS! Data deleted successfully",
                user_id: req.params.id
            });
        }).catch(err => {
            return res.status(500)
                .send({
                    error: err.name,
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
    createUsers,
    updateUsers,
    deleteUsers
}