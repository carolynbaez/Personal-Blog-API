import app from './app';
import startDatabase from './config/database'

(()=>{
    app.listen(app.get("PORT"), ()=>{
        startDatabase()
        console.log("Server running on port", app.get("PORT"));
    })
})()