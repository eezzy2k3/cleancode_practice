const bcrypt = require("bcrypt")
class userFunction {
     constructor({entity}){
        this.entity = entity

        this.user = this.user.bind(this)
        this.getUser = this.getUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
       this.updateUser = this.updateUser.bind(this)
     }

   async user (req,res){
        let {password,name,email} = req.body
        
        password = await bcrypt.hash(password,12)

        const payload = {password,name,email}
   
        const createUser = await this.entity.createUser(payload)

    
    res.status(200).json({createUser})
    // console.log(req.body)
   }

   async getUser (req,res) {
    const user = await this.entity.getId(req.params.id)
    if(!user){
        return res.status(404).json({success:false,msg:"no user found"})
    }
    res.json({user})
   }

   async deleteUser (req,res){
    await this.entity.deleteUser(req.params.id)
    res.status(200).json({success:true,data:{}})
   }

   async updateUser (req,res){
    const user = await this.entity.updateUser(req.params.id,req.body)
    if(!user){
        return res.status(404).json({success:false,msg:"no user found"})
    }
    res.status(200).json({user})

   }
}

module.exports = userFunction