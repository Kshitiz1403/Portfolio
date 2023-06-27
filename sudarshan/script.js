const getInfo = async () => {
    const data = await fetch("https://api.github.com/search/repositories?q=user%3AKshitiz1403+repo%3ASudarshan+Sudarshan");
    const data_1 = await data.json();
    const item = data_1['items'][0];
    const forks = item['forks_count'];
    const stars = item['stargazers_count'];
    document.getElementById("github-stars").innerText(stars);
    document.getElementById("github-forks").innerText(forks);
    console.log({ stars, forks })
    return { forks, stars };
}

getInfo()