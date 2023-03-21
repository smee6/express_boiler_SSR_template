exports.userAuth = (req, res, next) => {
    //여기에 뭔가 로직을 넣어서 유저를 인증한다.

    //ipBlackList에 있는 ip는 접근을 막는다.
    const ipBlackList = [""];
    if (ipBlackList.includes(req.ip)) {
        return res.status(401).send({ err: "인증되지 않은 유저입니다." });
    }
    next();
};

exports.isLoggedIn = (req, res, next) => {
    // isAuthenticated()로 검사해 로그인이 되어있으면
    if (req.isAuthenticated()) {
        next(); // 다음 미들웨어
    } else {
        return res.status(403).send({ err: '로그인 필요' });
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next(); // 로그인 안되어있으면 다음 미들웨어
    } else {
        res.redirect('/'); // 로그인 되어있으면 메인페이지로
    }
};