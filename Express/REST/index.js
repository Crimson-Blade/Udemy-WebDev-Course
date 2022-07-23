import { v4 as uuid } from 'uuid';
import methodOverride from 'method-override'
// Setting up Express
import express from 'express'
const app = express()
app.set('view engine','ejs')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

app.listen('3000',()=>{
    console.log('listening on port 3000');
})

let sampleData = [
    {
        username:'Lance',
        comment:'You fat',
        id: uuid()
    },
    {
        username:'DH',
        comment:'You smol',
        id: uuid()
    },
    {
        username:'Louis',
        comment:'Firebol is me passion',
        id: uuid()
    },
    {
        username:'Turtle',
        comment:'Kill your self',
        id: uuid()
    },
    {
        username:'Apotik',
        comment:'woof woof woof',
        id: uuid()
    }
]

//Index
app.get('/',(req,res)=>{
    res.redirect('/comments');
})
app.get('/comments', (req,res)=>{
    res.render('comments/index',{ comments: sampleData })
})
//New
app.get('/comments/new', (req,res)=>{
    res.render('comments/new')
})
app.post('/comments', (req,res)=>{
    const {username, comment } = req.body;
    if(username && comment) sampleData.push({username,comment, id: uuid()})
    res.redirect("/comments")
})
//Show
app.get('/comments/:id', (req,res)=>{
    const {id} = req.params
    const comment = sampleData.find(c => c.id === id)
    if(comment){
        res.render('comments/show', { ...comment });
    }
    else res.render('pageNotFound')

})
//Edit
app.get('/comments/:id/edit', (req,res)=>{
    const {id} = req.params
    const comment = sampleData.find(c => c.id === id)
    if(comment)
    res.render("comments/edit", { ...comment })
    else res.status(404).render('pageNotFound')
})
app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params
    const comment = sampleData.find(c => c.id === id)
    console.log(comment);
    if(comment){
        const newComment = req.body.comment
        comment.comment = newComment;
        res.redirect(`/comments/${id}`)
    }
    else res.render('pageNotFound')
})
//delete
app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params
    sampleData = sampleData.filter(c => c.id !== id)
    res.redirect('/comments');
})