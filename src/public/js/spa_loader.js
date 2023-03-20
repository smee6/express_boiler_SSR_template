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

const PageList = [
    "page1",
    "page2",
];

function loadPage(page) {
    if (page === '') {
        history.pushState({ data: `` }, '', `/`);
        return $("#content").load(`pages/index.html`);
    }
    if (!PageList.includes(page)) {
        history.pushState({ data: `` }, '', `/`);
        return $("#content").load(`pages/index.html`);
    }
    if (history.state) {
        if (page === history.state.data) return;
    }
    history.pushState({ data: `${page}` }, '', `/${page}`);
    $("#content").load(`pages/${page}.html`);
}

//history api의 state가 변경 될 때 마다 실행
window.onpopstate = function (event) {
    if (event.state) {
        $("#content").load(`pages/${event.state.data}.html`);
    }
}