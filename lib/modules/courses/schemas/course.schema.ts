import * as mongoose from 'mongoose';


const Schema =  mongoose.Schema;

const schema = new Schema({
    course_id: {
        type: String,
        unique: true,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    lec_incharge: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: 'Enter course year'
    },
    semester: {
        type: String,
        required: true
    }
    
    
    
    
});

export default mongoose.model('courses',schema);