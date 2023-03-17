const userAuth = (req, res, next) => {
    //여기에 뭔가 로직을 넣어서 유저를 인증한다.
    //인증이 완료되면 next() 반환하고 그 전에 안되면 res.status(401).send({ err: "인증되지 않은 유저입니다." }) 반환
    next();
};

module.exports = { userAuth };