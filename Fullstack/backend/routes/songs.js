const express = require('express');
const router = express.Router();
const Songs = require('../models/Songs');
const fetchuser = require('../middleware/fetchuser');

//Route 1: Get List of All the Liked Song using GET "/api/likedsongs/fetchlikedsongs" Login required 
router.get('/fetchlikedsongs', fetchuser, async (req,res)=>{
    try {
        const songs = await Songs.find({user: req.user.id});
        res.json(songs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})

//Route 2: Add new Songs in LikePage using POST "/api/likedsongs/addlikedsongs" Login required 
router.post('/addlikedsongs', fetchuser, async (req,res)=>{
    //try-catch use to protact database from malfunctioning
    try {
        const {poster,title,artists,album,duration} = req.body;

        const songs = new Songs({
            poster,title, artists, album, duration, user: req.user.id
        })
        const savedSong = await songs.save();
        res.json(savedSong);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})

//Route 4: Deleting an exiting song from list of likedSong using DELETE "/api/likedsongs/removelikedsong" Login required 
router.delete('/removelikedsong/:id', fetchuser, async (req,res)=>{
    
    //find the song to be delete and delete it
    //check for correct uses with it's own Songs only
    let song = await Songs.findById(req.params.id);
    if(!song){ return res.status(404).send("Not Found")}
    
    //Allowed deletion only if user own this song
    if(song.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    song = await Songs.findByIdAndDelete(req.params.id);
    res.json({"Success" : "song as been deleted"});
})

module.exports = router