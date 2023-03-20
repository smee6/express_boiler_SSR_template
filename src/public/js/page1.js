async function page1() {
    console.log("page1");

    var target = document.getElementById('target');

    let data = await axiosRequest('/user', 'get', '').then((res) => {
        return res;
    });

    target.innerText = data.map((e) => {
        return `${e.id} - ${e.name} - ${e.email} - ${e.uuid} \n`;
    }).join('');
}

page1();