export interface ILoginSession {
   login_token: String,
   uuid: Number,
   login_time: Date,
   logout_time: Date,
   valid_till:Date, 
   is_expired: Boolean,
     
}