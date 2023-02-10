import mongoose from 'mongoose'
const { Schema } = mongoose;

var GraphicCardSchema = new Schema({
	name: String,
    manufacturer: String,
    brand: String,
    price: Number,
    vram: String,
    image: String,
});

export default mongoose.model('GraphicCard', GraphicCardSchema);
