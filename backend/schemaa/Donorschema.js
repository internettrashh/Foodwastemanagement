import mongoose from 'mongoose';
const  DonorSchema =  new mongoose.Schema(
    {
          shopname:{
            type: String,
            required: true
        },
        contactno:{
            type: Number,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required: true
        }
        
     }
    
);

export const Donor = mongoose.model('Donor',DonorSchema);