const PageList = [
    "page1",
    "page2",
    "login",
    "join",
];

addEventListener("load", function () {
    $("#header").load("common/header.html");
    $("#sidebar").load("common/sidebar.html");
    $("#footer").load("common/footer.html");

    if (history.state && history.state.data !== "") {
        $("#content").load(`pages/${history.state.data}.html`);
        return;
    } else {
        const path = window.location.pathname.split("/")[1];
        if (path === "") return;
        loadPage(path);
    }
});

function loadPage(page) {
    if (page === '' || !PageList.includes(page)) {
        history.pushState({ data: `` }, '', `/`);
        return $("#content").load(`pages/index.html`);
    }
    if (history.state) {
        if (page === history.state.data) return;
    }
    history.pushState({ data: `${page}` }, '', `/${page}`);
    $("#content").load(`pages/${page}.html`);


    // document.body.classList.add('loading');
    // setTimeout(function () {
    //     document.body.classList.remove('loading');
    // }, 250);
}

//history api의 state가 변경 될 때 마다 실행
window.onpopstate = function (event) {
    if (event.state) {
        $("#content").load(`pages/${event.state.data}.html`);
    }
}