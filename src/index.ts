import app from './app'

(()=>{
    app.listen(app.get("PORT"), ()=>{
        console.log("Server running on port", app.get("PORT"))
    })
})()