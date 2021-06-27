import {Deck} from './../../../lib/deck.js'

const deck = new Deck();
const table = deck.dispatchCards(5)

export default function handler(req, res){
    res.status(200).send(table)
}