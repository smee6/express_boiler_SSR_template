async function axiosGet(url) {
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    return await axios.get(url)
    .then((res) => {
        spinner.style.display = 'none';
        return res.data;
    })
    .catch((err) => {
        spinner.style.display = 'none';
        console.log(err);
    });
}