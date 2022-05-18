const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getAllPets)

router.get('/:id', controller.getAPet)

router.post('/', controller.addPet)

router.delete('/:id', controller.removePetById)

router.patch('/:id', controller.editPet)

module.exports = router;