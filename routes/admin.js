const Router = require('express')

const adminRouter = Router()

app.use(adminMiddleware)

adminRouter.post('/login', (req, res) => {
    res.json({ message: "login endpoint" })
})
adminRouter.post('/signup', (req, res) => {
    res.json({ message: "signup endpoint" })
})
adminRouter.post('/createcourse', (req, res) => {
    res.json({ message: "create course endpoint" })
})
adminRouter.delete('/deletecourse', (req, res) => {
    res.json({ message: "delete course endpoint" })
})
adminRouter.post('/addcoursecontent', (req, res) => {
    res.json({ message: "add course content endpoint" })
})

module.exports = adminRouter;