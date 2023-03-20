async function axiosRequest(url, method, data) {
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    return await axios({
        method: method,
        url: url,
        data: data
    })
        .then((res) => {
            spinner.style.display = 'none';
            return res.data;
        })

        .catch((err) => {
            spinner.style.display = 'none';
            console.log(err);
        });
};