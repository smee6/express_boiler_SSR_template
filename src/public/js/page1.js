async function page1() {
    console.log("page1");

    var target = document.getElementById('target');

    let data = await axios.get('/test').then((res) => {
        return res.data;
    });
    console.log(data);
    target.innerText = data[0]._id;

}

page1();