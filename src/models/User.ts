import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  undername?: string;
  gender: string;
  email: string;
  password: string;
  created_at: Date;
  modified_at: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  undername: { type: String, required: false },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
