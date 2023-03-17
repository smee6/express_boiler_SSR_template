const { Router } = require("express");
const testRouter = Router();
/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test API
 */
const testController = require("../controllers/testController");

/**
*  @swagger
*  paths:
*   /test:
*     get:
*       summary: 조회함
*       tags: [Test]
*       responses:
*         200:
*           description: 유저 전부 다 조회함
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/Test'
*         500:
*           description: 실패
*/
testRouter.get("/", testController.getTest);

/**
*  @swagger
*  paths:
*   /test:
*     post:
*       summary: 만들어냄
*       tags: [Test]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Test'
*       responses:
*         200:
*           description: 성공
*         500:
*           description: 실패
*/
testRouter.post("/", testController.postTest);


module.exports = { testRouter };


