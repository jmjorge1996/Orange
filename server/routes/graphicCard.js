import express from 'express'
import GraphicCard from '../models/GraphicCard.js'

const router = express.Router()

// GET GRAPHICS CARDS LIST
router.get('/', function(req, res, next) {
    GraphicCard.find({}, function(err, graphicCards) {
        if (err) { return next(err); }

        const query = req.query.s;
        const position = req.query.position || 0;
        const offset = req.query.offset || 10;

        if (query){
            const foundJSONdata = graphicCards.filter((item) => {
                const regex = new RegExp(query, "gim");
                return item.name.match(regex);
            })
            res.send(foundJSONdata.slice(position, Number(offset)+Number(position)));
        } else if (offset >= graphicCards.length) {
            res.send(graphicCards.slice(position, graphicCards.length));
        } else {
            res.send(graphicCards.slice(position, Number(offset)+Number(position)));
        }
    });
});

// GET GRAPHIC CARD
router.get('/:id', (req, res) =>{
    GraphicCard.findById(req.params.id, function(err, graphicCard) {
        if (err) throw new Error(err);

        res.send(graphicCard);
    })
})

export default router