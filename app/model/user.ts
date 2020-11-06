import { Application } from 'egg'
// import { Document, Schema } from 'mongoose';
// const bcrypt = require('bcryptjs')

// export interface IUser extends mongoose.Document {}

module.exports = (app: Application) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  // interface IUserAtt {
  //   name: String;
  //   password: String;
  //   age: Number;
  //   address: String;
  //   phone: String;
  // }

  // interface IAdInst extends Instance<IUserAtt>, IAdAttr {
  // }

  const User = new Schema({
    name: String,
    password: String,
    age: Number,
    address: String,
    phone: String
  }, {
    timestamps: {}
  })

  // User.pre<IUser>('save', function (next) {
  //   this.password = bcrypt.hashSync(this.password, 10)
  //   next()
  // })

  return mongoose.model('User', User)
}

// export default (app: Application) => {
//   const mongoose = app.mongoose
//   const Schema = mongoose.Schema
// }
