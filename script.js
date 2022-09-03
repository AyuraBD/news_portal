// Menu load
const getMenu = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => deisplayMenu(data.data.news_category));
}
const deisplayMenu = posts =>{
    console.log(posts);
    const menuContainer = document.getElementById('menu-container');
    posts.forEach(post =>{
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('col');
        menuDiv.innerHTML = `
            <p id="menu-list" onclick="newsPost('${post.category_id}')">${post.category_name}</p>
        `;
        menuContainer.appendChild(menuDiv);
    })
}
// News Post
const newsPost = (category_id) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayPost(data.data));
}
const displayPost = posts =>{
  console.log(posts);
  const displayPostCategory = document.getElementById('display-post');

        displayPostCategory.innerHTML = ``;
    posts.forEach(post =>{
          const newDiv = document.createElement('div');

          const size = Object.keys(newDiv).length;
          
          const countDiv = document.getElementById('count');
          
          
          countDiv.innerHTML = size;

      newDiv.classList.add('col');
      newDiv.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img class="img-fluid" src="${post.image_url}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body mb-4">
            <h5 class="card-title mb-2">${post.title}</h5>
            <p class="card-text mb-4">${post.details.slice(0, 250) +' ...'}</p>
             
          </div>
          <div class=" bottom-cnt">
            <div>
              <div class="author">
                <img class="img-fluid" src="${post.author.img}" alt="">
                <h6>${post.author.name ? post.author.name : 'no data found'}</h6>
              </div>
            </div>
            <div>
              <p>${post.rating.number}</p>
            </div>
            <div>
              <a>Read More</a>
            </div>
          </div>
        </div>
      </div>
      `;
      displayPostCategory.appendChild(newDiv);
        })      
};

getMenu();