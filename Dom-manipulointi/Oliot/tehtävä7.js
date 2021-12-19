let phones = []
fetch("https://api-mobilespecs.azharimm.site/v2/brands/honor-phones-121")
        .then(response => response.json())
        .then(rest_data => phones=rest_data.data.phones)
        .catch(e => console.log(e))