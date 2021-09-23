const router = require('express').Router()
const Plants = require('./plants-model')
const { checkPlantPayload, checkPlantId} = require('./plants-middleware')
//An authenticated user can view a list of created plants
router.get('/', (req, res, next)=>{
    Plants.getPlants()
        .then( plants =>{
            res.json(plants)
        })
        .catch(err =>{
            res.status(500).json(err.message)
        })
})

//an authenticated user can create a new plant object
router.post('/', checkPlantPayload, async(req, res, next)=>{
    try{
        const { nickname, species, h2oFrequency, image, user_id} = req.body
        const plant = await Plants.createPlant({ nickname: nickname, species: species, h2oFrequency: h2oFrequency, image: image, user_id: user_id})

        if(plant){
            res.status(201).json(plant)
        }
    }catch(err){
        res.status(500).json(err.message)
    }
})

//an authenticated user can update a current plant object
router.put('/:plant_id', checkPlantPayload, checkPlantId, (req, res, next) =>{
    const { plant_id} = req.params
    const revisedPlant = req.body

    Plants.updatePlant(plant_id, revisedPlant)
    .then(plantObj =>{
        res.status(200).json(plantObj)
    })
    .catch(err =>{
        res.status(500).json(err.message)
    })
})


//an authenticated user can delete  a plant object

router.delete('/:plant_id', (req, res, next )=>{
    const { plant_id } = req.params
    Plants.deletePlant(plant_id)
    .then( success =>{
        res.status(200).json(success)
    })
    .catch(err=>{
        res.status(500).json(err.message)
    })
})


module.exports = router