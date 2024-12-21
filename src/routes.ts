import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploudConfig from './config/multer';

const router = Router();

const uploud = multer(uploudConfig.upload('./tmp'));

// ROTAS DE USUÁRIO
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// ROTAS DE CATEGORIA
router.post(
  '/category',
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// ROTAS DE PRODUTO
router.post(
  '/product',
  isAuthenticated,
  uploud.single('file'),
  new CreateProductController().handle
);
router.get(
  '/product/category',
  isAuthenticated,
  new ListByCategoryController().handle
);

export { router };
