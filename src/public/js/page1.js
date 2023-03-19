async function page1() {
    console.log("page1");

    var target = document.getElementById('target');

    let data = await axiosGet('/test').then((res) => {
        return res;
    });
    target.innerText = data.map((item) => {
        return item.name;
    }).join(', ');
}

page1();