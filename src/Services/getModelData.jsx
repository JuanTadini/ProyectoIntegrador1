const getModelData = async (url) => {
    return await fetch(url)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}

export default getModelData;