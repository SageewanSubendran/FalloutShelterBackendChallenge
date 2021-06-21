import express from 'express';
import {getDwellers, createDweller, getDwellerInfo, getSearchResult, addYears} from '../controllers/vault-dwellers.js';
import {getDwellersTest, createDwellerTest, getDwellerInfoTest, getSearchResultTest, addYearsTest} from '../test/vaultdwellers.test.js';

const router = express.Router();

//all routes here are starting with '/users', find implementation in controller
//get all vault dwellers
router.get('/', getDwellers);

//create vault dwellers
router.post('/', createDweller);

//get ID ROUTE ( /users/2 => req.params { id: 2})
router.get('/userID/:id', getDwellerInfo);

//search filters
router.get('/search', getSearchResult);

//Move time forward
router.get('/addyears/:years', addYears);

//Testing getDwellers
router.get('/tests/getdwellers', getDwellersTest);

//Testing createDwellers
router.post('/tests/createdwellers', createDwellerTest);

//Testing getDwellerInfo
router.get('/tests/getdwellersinfo/:id', getDwellerInfoTest);

//Testing getSearchResult
router.get('/tests/getsearchresult/search', getSearchResultTest);

//Testing addYears
router.get('/tests/addyears/:years', addYearsTest);

export default router;
