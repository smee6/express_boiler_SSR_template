exports.swagger_option =
{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "스웨거 테스트용 API",
            version: "0.1.0",
            description:
                "스웨거 테스트용 API입니다.",
        },
        servers: [
            {
                url: `http://localhost:${process.env.SERVER_PORT}`,
            },
        ],
    },
    apis: ["./src/routes/*.js", "./src/models/*.js"],
};

