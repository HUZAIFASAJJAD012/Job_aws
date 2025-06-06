import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
    },
    residentId: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    country: {
      type: String,
    },
    area: {
      type: String,
    },
    organization: {
      type: String,
    },
    backgroundChecks: {
      type: Map,
      of: Boolean,
      default: {
        DBS: false,
        PGCE: false,
        Masters: false,
        'Police Check': false,
      },
    },
    isUser: {
      type: Boolean,
      default: true,
    },

  },
  { timestamps: true }
);
userSchema.virtual('name').get(function () {
  return `${this.firstName} ${this.lastName || ''}`.trim();
});

// ✅ Include virtuals in JSON and Object outputs
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });
const userModel = mongoose.model('User', userSchema);
export default userModel;
