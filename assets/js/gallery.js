
function template(shoe) {
	return (
		`<div class="gallery-item">
			<div><img src="${shoe.img}"></div>
			<h1>${shoe.title}</h1>
			<p>${shoe.summary}</p>
			<p>${shoe.price}</p>
		</div>`
	)
}
var shoes = [
	{img:'sdfdsfsd',
		title:'asdfads',
		summary: 'sdasdsdf',
		price: 123
	},
	{img:'sdfdsfsd',
		title:'asdfads',
		summary: 'sdasdsdf',
		price: 123
	},
	{img:'sdfdsfsd',
		title:'asdfads',
		summary: 'sdasdsdf',
		price: 123
	},
	{img:'sdfdsfsd',
		title:'asdfads',
		summary: 'sdasdsdf',
		price: 123
	}
]

for (var i = 10; i >= 0; i--) {
	shoes = shoes.concat(shoes);

}

let gallery = document.querySelector('.gallery');
let galleryItems = ''
for (var i = shoes.length - 1; i >= 0; i--) {
	galleryItems += template(shoes[i]);
}
gallery.innerHTML = galleryItems;
