const express = require('express');
const router = express.Router();
const likedSongs = require('../models/LikedSongs');
const fetchUser = require('../middleware/fetchUser');

//Route 1: Get List of All the Liked Song using GET "/api/likedsongs/fetchlikedsongs" Login required 
router.get('/fetchlikedsongs', fetchUser, async (req,res)=>{
    try {
        const songs = await likedSongs.find({user: req.user.id});
        res.json(songs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})

//Route 2: Add new likedSongs in LikePage using POST "/api/likedsongs/addlikedsongs" Login required 
router.post('/addlikedsongs', fetchUser, async (req,res)=>{
    //try-catch use to protact database from malfunctioning
    try {
        const {poster,title,artists,album,duration} = req.body;

        const songs = new likedSongs({
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
router.delete('/removelikedsong/:id', fetchUser, async (req,res)=>{
    
    //find the song to be delete and delete it
    //check for correct uses with it's own likedSongs only
    let song = await likedSongs.findById(req.params.id);
    if(!song){ return res.status(404).send("Not Found")}
    
    //Allowed deletion only if user own this song
    if(song.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    song = await likedSongs.findByIdAndDelete(req.params.id);
    res.json({"Success" : "song as been deleted"});
})

module.exports = router