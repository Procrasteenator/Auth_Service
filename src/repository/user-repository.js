const{User} = require('../models/index')

class UserRepo {
   async create(data){
    try {
        const user = await User.create(data);
        return user ;
    } catch (error) {
        console.log('something went wrong on repo layer');
        throw error;
    }
   }
   async destory(UserId){
    try {
        await User.destory({
            where :{
                id:UserId
            }
        });
        return true ;
    } catch (error) {
        console.log('something went wrong on repo layer');
        throw error;
    }
   }
   async getById(userId){
    try {
        const user = await User.findByPk(userId , {
            attributes : ['email' , 'id']   
        });
        return user ;
    } catch (error) {
        console.log('something went wrong on repo layer');
        throw error;
    }
   }
}
module.exports= UserRepo