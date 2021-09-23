const db = require('../data/dbConfig')

const getPlants = () => {
    return db("plants");
};

const getPlantsById = (plant_id) => {
    return db("plants").where("plant_id", plant_id).first();
};

const createPlant = (plant) => {
    return db("plants").insert(plant, [
        "plant_id",
        "nickname",
        "species",
        "h2oFrequency",
        "image",
    ]);
};

const updatePlant = async (plant_id, plant) => {
    return db("plants")
    .where("plant_id", plant_id)
    .update(plant, [
        "plant_id",
        "nickname",
        "species",
        "h2oFrequency",
        "image",
    ]);
};

const deletePlant = async (plant_id) => {
    return db("plants").where("plant_id", plant_id).del();
};

module.exports = {
    getPlants,
    getPlantsById,
    createPlant,
    updatePlant,
    deletePlant,

};