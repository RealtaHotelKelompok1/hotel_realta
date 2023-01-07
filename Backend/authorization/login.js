import usersController from "../controller/usersController";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const login = (req, res) => {

    let data = req.body

    usersController.findOneRowByUsername((item, req) => {

        console.log(item)

        if(item){
            if (bcrypt.compareSync(data.password, item.password)){
                
                delete item.password //password jangan dimasukin ke token
                let token = jwt.sign(item, process.env.SECRET_KEY, {
                    expiresIn: '2m' //expired in 2 minutes
                })

                return res.status(200).send({message: "Berhasil login", token: token})


            }else{
                return res.status(401).send({ message: "Password salah" })
            }
        }else{
            return res.status(401).send({ message: "Username tidak ada" })
        }
    }, data.username);
}

const checkToken = (req, res, next) => {  // fungsinya next untuk melanjutkan perintah setelah method pertama di routes
    if(!req.headers.authorization){
        res.status(403).send("")
    }else{
        let token = req.headers.authorization

        try{
            jwt.verify(token, process.env.SECRET_KEY)
            return next()
        }catch(err){
            return res.status(401).send("Invalid token")
        }
    }
}



export default {login,checkToken}


