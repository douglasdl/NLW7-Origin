const socialMediaLinks = {
    github: 'douglasdl',
    youtube: 'channel/UCTk77LQyQ2HT-WzXKK8aPBw',
    facebook: 'LojaoShop',
    instagram: 'douglasdl87',
    twitter: 'douglasdiasleal'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        // Change a href link address
        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`;

        //alert(li.children[0].href)
    }
}
changeSocialMediaLinks()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${socialMediaLinks.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        username.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userLogin.textContent = data.login;
        userImage.src = data.avatar_url;

    });
}

getGithubProfileInfo();
