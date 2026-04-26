const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:id', authMiddleware, productController.getProductById);

router.post('/', authMiddleware, roleMiddleware('admin', 'vendedor'), productController.createProduct);
router.put('/:id', authMiddleware, roleMiddleware('admin', 'vendedor'), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware('admin', 'vendedor'), productController.deleteProduct);

module.exports = router;
