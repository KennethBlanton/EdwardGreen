// console.log(shoes);
function template(shoe) {
	return (
		`<div class="gallery-item">
			<div class="item-image"><img src="${shoe.link}"></div>
			<h1>${shoe.name}</h1>
			<p>${shoe.description}</p>
			<p>${shoe.price}</p>
			<button type="button">SELECT</button>
		</div>`
	)
}

let gallery = document.querySelector('.gallery');
let galleryItems = ''
for (var i = shoes.length - 1; i >= 0; i--) {
	console.log(shoes[i].name);
	galleryItems += template(shoes[i]);
}
gallery.innerHTML = galleryItems;
