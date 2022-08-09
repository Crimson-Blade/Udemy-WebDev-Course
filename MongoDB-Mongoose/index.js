import { ObjectId } from 'bson';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("CONNECTION SUCCESS");

    //creating schema for BIOs
    const bioSchema = new mongoose.Schema({

        _id: ObjectId,
        name: { first: String, last: String },
        birth: Date ,
        death: Date,
        contribs: [ String ],
        awards: [
            {
            award: String,
            year: Number,
            by: String
            }
        ]
    }
    )
    //creating model
    const Bio = new mongoose.model('Bio',bioSchema);

    // const LanceBio = new Bio({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: { first: 'Lance', last: 'Barreto' },
    //     birth: new Date('2003-05-05T00:00:00') ,
    //     death: new Date('2103-05-05T00:00:00'),
    //     contribs: [ 'JS','Cpp','Linux' ],
    //     awards: [
    //         {
    //         award: 'Biggest Failure Award',
    //         year: 2010,
    //         by: 'MIT'
    //         }
    //     ]
    // })
    // LanceBio.save();

    //creating schema for anime collection
    const animeSchema = new mongoose.Schema({
        id: Number,
        title: String,
        main_picture: {
        medium: String,
        large: String
        }
    })
    //creating model for anime
    const Anime = new mongoose.model('Anime',animeSchema);
    
    //adding multiple entries into anime
    // Anime.insertMany([
    //     {
    //         id: 32281,
    //         title: "Kimi no Na wa.",
    //         main_picture: {
    //         medium: "https://myanimelist.cdn-dena.com/images/anime/5/87048.jpg",
    //         large: "https://myanimelist.cdn-dena.com/images/anime/5/87048l.jpg"
    //         }
    //     },
    //     {
    //         id: 30484,
    //         title: "Steins;Gate 0",
    //         main_picture: {
    //         medium: "https://myanimelist.cdn-dena.com/images/anime/1031/90444.jpg",
    //         large: "https://myanimelist.cdn-dena.com/images/anime/1031/90444l.jpg"
    //         }
    //     },
    //     {
    //             title: "Gintama°",
    //             main_picture: {
    //             medium: "https://myanimelist.cdn-dena.com/images/anime/3/72078.jpg",
    //             large: "https://myanimelist.cdn-dena.com/images/anime/3/72078l.jpg"    
    //         }
    //     }
    // ])
})
.catch(err => console.log(err))

