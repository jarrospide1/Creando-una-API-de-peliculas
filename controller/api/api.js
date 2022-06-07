const { generateKey } = require("crypto");
const { Movie } = require("../../.database/models")

const controller = {

    show: async (req, res) => {
        const movies = await Movie.findAll({
            include: ['genre']
        })
        return res.status(200).json({
            meta: {
                status: 200,
                total: movies.length,
                url: 'localhost:3000/api/movies'
            },
            
            movies: movies
        });
    },

    detail: async (req, res) => {
        const movieId = req.params.id;
        const movie = await Movie.findByPk(movieId);
        return res.json(movie)
    },

    create: async (req, res) => {
        try {
            const newMovie = await Movie.create(req.body, {
                include: ['genre']
            });
        
        if (newMovie) {
            return res.status(200).json({
                message: 'The movie was created'}) 
        }

        return res.status(504).json({
            message: 'There was a problem creating the movie'
        })
        } catch (err) {
            console.log(err);
        }     
    },

    update: async (req, res) => {
        const movieToUpdate = await Movie.update(req.body, { 
            where: { id: req.params.id }
        });
        const movieUpdated = await Movie.findByPk(req.params.id);
        return res.status(200).json(movieUpdated)
    },

    destroy: async (req, res) => {

        try {
                const movieDeleted = await Movie.destroy({
                where: { id: req.params.id}
            });

            if (movieDeleted) {
                return res.status(200).json({
                    message: 'Movies has been deleted'
                });
            }

            return res.status(500).json({
                message: 'Problems deleting the movie, try again'
            })
        } catch(err) {
            console.log(err);
        }
        
        
        


        
    }


}

module.exports = controller;