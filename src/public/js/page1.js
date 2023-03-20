async function page1() {
    console.log("page1");

    var target = document.getElementById('target');

    let data = await axiosRequest('/test', 'get', '').then((res) => {
        return res;
    });

    target.innerText = data.map((item) => {
        return `아이디 : ${item.name} 나이 : ${item.age} \n`;
    }).join('');
}

page1();