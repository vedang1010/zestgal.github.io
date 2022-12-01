

const posts = []

const images = [
    './Images/cyclo1.jpeg',
    './Images/cyclo2.jpg',
    './Images/DSC_0003-2.jpg',
    './Images/DSC_0017-2.jpg',
    './Images/DSC_0026-2.jpg',
    './Images/DSC_0357-2.jpg',
    './Images/DSC_0374-2.jpg',
    './Images/DSC_0416-2.jpg',
    './Images/DSC_0479-2.jpg',
]

let imageIndex = 0;

for(let i = 1; i <= 60; i++){
    let item = {
        id: i,
        // title: `Post ${i}`,
        // date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
