export async function getMarsRoverPhotos() {
    const apiurl =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=reqsfhQsaprMIF7TqfC4GMygRuCQKKRYGVhHfP5n";

    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
}

export default { getMarsRoverPhotos };
