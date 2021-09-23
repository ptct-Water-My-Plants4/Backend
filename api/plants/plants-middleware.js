const { getPlantsById } = require("./plants-model");

const checkPlantId = async (req, res, next) => {
    try {
        const plant = await getPlantsById(req.params.plant_id);
        if (!plant) {
            res.status(404).json({ message: `plant with id ${req.params.plant_id} not found` });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

const checkPlantPayload = (req, res, next) => {
    if (!req.body.nickname || !req.body.species || !req.body.h2oFrequency) {
        res.status(400).json({ message: "all fields except for image are required" });
    } else {
        next();
    }
};

module.exports = { checkPlantId, checkPlantPayload };