export const loadPosts = async () => {
    const postsResponse = fetch('https://randomuser.me/api/?results=100');
    const photosResponse = fetch('https://picsum.photos/v2/list?page=1&limit=100');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.results.map((post, index) => {
        return {
            id: index+1,
            title: `${post.name.first} ${post.name.last}`,
            body: post.email,
            //cover: post.picture.large
            cover: photosJson[index].download_url
        }
    });

    postsAndPhotos.sort(() => Math.random() - 0.5);

    return postsAndPhotos;
}

/* export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos;
} */