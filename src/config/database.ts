import mongoose, {connect} from 'mongoose';
import config from './env.config'

export default ()=>{

    connect(config.DATABASE_URL.toString());

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error: '));

    db.once('open', ()=>{
        console.log('Connected to MongoDB');
    })
}