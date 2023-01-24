const UserService = require('../services/user-service');
const userService = new UserService();
const create = async (req, res) =>{
    try {
        const respone =  await userService.create({
            email:req.body.email,
            password : req.body.password
        });
        return res.status(200).json({
            message :'successfully created a new user',
            success:true,
            data:respone,
            err:{}
           
        })
    } catch (error) {
       
        console.log(error);
        res.status(500).json({
            message:'something went wrong',
            success:false ,
            data:{},
            err:error
        })
    }
}
module.exports = {create}