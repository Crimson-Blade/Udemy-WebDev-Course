import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/methodDemo')
.then(()=>{
    console.log("CONNECTION SUCCESS");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log(err);
})

//creating schema
const todoSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        doDate: {
            type: Date,
            default: Date.now()
        },
        isDone: {
            type: Boolean,
            default: false
        }
    },
    {
        methods: {
            getDoDate: function(){
                return this.doDate.toString();
            },
            toggleIsDone: function(){
                this.isDone = !this.isDone;
            }
        }
    }
    
)
todoSchema.statics.setAllAsCompleted = function(){
    return this.updateMany({},{isDone: true});
}

//creating model
const Task = new mongoose.model('Task',todoSchema);

// creating instance of model
Task.create({name: "Boi"})
.then(data=>{
    console.log("IT WORKED");
    console.log(data);
    findTask();
})
.catch(err=>{
    console.log("OH NO ERROR");
    console.log(err);
})



// find task and display time
const taskName = "Boi";
async function findTask(){
    const task = await Task.findOne({name: taskName});
    console.log(task.getDoDate());
    await task.toggleIsDone();
    console.log(task)
    await Task.setAllAsCompleted().then(data=>{
        console.log(data);
        console.log("Ran");
    })
}