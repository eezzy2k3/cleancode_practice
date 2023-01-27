class entity {
  constructor({User}){
    this.User = User
}
async createUser(payload){
    
    const user = await this.User.create(payload)

    return user
}

async getId(id){
    const user = await this.User.findById(id)
    return user
}

async deleteUser(id){
    const user = await this.User.findByIdAndDelete(id)
    return user
}

async updateUser(id,payload){
    const user = await this.User.findByIdAndUpdate(
        id,
        payload,
        {new:true})
         return user

}
}
module.exports = entity