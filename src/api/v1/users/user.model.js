import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: false,
  },
  lastName: {
    type: String,
    require: false,
  },
  username: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  verification_token: {
    type: String,
    unique: true,
    default: null,
    require: false,
  },
  verified: {
    type: Boolean,
    require: true,
    default: false,
  },
  isMember: {
    type: false,
    require: false,
  },
  isAdmin: {
    type: false,
    require: false,
  },
  aboutMe: {
    type: String,
    require: false,
  },
  profilePictureUrl: {
    type: String,
    require: false,
  },
  socialMediaLinks: {
    type: Array,
    require: false,
  },
  verified_at: {
    type: Date,
    default: null,
    require: false,
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
    require: false,
  },
});

export default mongoose.model('User', UserSchema);
