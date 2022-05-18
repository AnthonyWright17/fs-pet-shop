const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getAllPets);

router.post('/', controller.addPet);

router.get('/:id', controller.getPetById);

router.delete('/:id', controller.removePet);

router.put('/:id', controller.updatePet)



module.exports = router;