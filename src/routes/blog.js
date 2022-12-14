const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })



//--------------------------GET------------------------------
router.get("/blog", async (req, res) => {
    const recordsToSkip = (req.query.page - 1) * 5
    try {
        //Write the code to fetch the data
        const searchList = await Blog.find({
            $text: { $search: req.query.search } // $text created in schema
        }).skip(recordsToSkip).limit(5)

        res.status(200).json({
            status: "Success",
            result: searchList
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message
        })
    }
});

//---------------------------POST-------------------------------
router.post("/blog", async (req, res) => {
    try {
        const posted_blog = await Blog.create(req.body);
        res.json({
            status: "success",
            result: posted_blog
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})


//----------------------------PUT-----------------------------
router.put("/blog/:id", async (req, res) => {
    try {
        const posted_blog = await Blog.updateOne({ _id: req.params.id }, req.body);
        res.json({
            status: "success",
            result: posted_blog
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

//----------------------------DELETE-----------------------------
router.delete("/blog/:id", async (req, res) => {
    try {
        const postToDelete = await Blog.deleteOne({ _id: req.params.id });
        res.json({
            status: "success",
            result: postToDelete
        })
    } catch (err) {
        res.status(403).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports = router;