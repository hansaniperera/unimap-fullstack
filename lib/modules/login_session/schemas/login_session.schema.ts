import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
   login_token: {
      type: String,
      unique: true,
      required: true
   },
   
   uuid: { 
      type: Number,
      ref: "users",
      required: true
   },
   login_time: {
      type: Date,
      default: new Date(Date.now())
   },
   logout_time: {
      type: Date,
      default: null
   },
   valid_till: { 
      type: Date, 
      default: new Date(Date.now() + 3600000)
   },
   is_expired: {
      type: Boolean,
      default: false
   }
});

export default mongoose.model('login_session', schema);