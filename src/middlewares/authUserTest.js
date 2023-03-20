const userAuth = (req, res, next) => {
    //여기에 뭔가 로직을 넣어서 유저를 인증한다.

    //ipBlackList에 있는 ip는 접근을 막는다.
    const ipBlackList = [""];
    if (ipBlackList.includes(req.ip)) {
        return res.status(401).send({ err: "인증되지 않은 유저입니다." });
    }
    next();
};

module.exports = { userAuth };