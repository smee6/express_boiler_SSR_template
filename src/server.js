const express = require('express')
const app = express()
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require('path');
const mongoose = require("mongoose");
const { pageRouter, testRouter } = require("./routes");
const dotenv = require("dotenv");
const morgan = require('morgan');
const date = new Date();
const today = date.getFullYear() + '_' + (date.getMonth() + 1) + '_' + date.getDate();
const rfs = require('rotating-file-stream')
const helmet = require('helmet');
const { userAuth } = require("./middlewares/authUserTest");

if (process.env.NODE_ENV == "production") dotenv.config({ path: "./env/.env_production" });
else dotenv.config({ path: "./env/.env_test" });

const { swagger_option } = require("./conf/swagger");

const runServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Succesfully Connected to MongoDB");

        //보안설정
        app.use(helmet.crossOriginEmbedderPolicy());
        app.use(helmet.crossOriginResourcePolicy());
        app.use(helmet.ieNoOpen());
        app.use(helmet.noSniff());
        app.use(helmet.expectCt());
        app.use(helmet.frameguard());
        app.use(helmet.referrerPolicy());
        app.use(helmet.xssFilter());

        //express 설정
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.static(path.join(__dirname, 'public')));

        //로그 셋팅
        const accessLogStream = rfs.createStream(`${today}.log`, {
            path: "./logs",
        })

        app.use(morgan('combined', { stream: accessLogStream }))
        //morgan에 에러 메시지도 같이 전달

        //swagger
        const options = swagger_option;

        const specs = swaggerJsdoc(options);
        app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true })
        );

        //유저 아이피나 그런것들 유효성 검증 (경로를 나중에 유저나 그런쪽으로 바꿔서 특정 라우터에만 태움)
        app.use('/', userAuth, (req, res, next) => {
            next();
        });
        
        //라우터 영역
        app.use("/", pageRouter);
        app.use("/test", testRouter);

        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server listening on port ${process.env.SERVER_PORT}`)
        })

    } catch (err) {
        console.log(err.stack);
    }
}

//서버 실행
runServer();