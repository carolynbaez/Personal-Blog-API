require('dotenv').config();

export default {
    PORT: process.env.PORT || 4000,
    DATABASE_URL: process.env.DATABASE || 'mongodb://localhost/db'
}