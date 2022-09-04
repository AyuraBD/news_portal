// Menu load
const getMenu = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMenu(data.data.news_category))
    .catch(error => displayMenu(error))
}
const displayMenu = posts =>{
    // console.log(posts);
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
  spinner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayPost(data.data))
  .catch(error => displayPost(error));
}
const displayPost = posts =>{
  // console.log(posts);
  const displayPostCategory = document.getElementById('display-post');

  const size = Object.keys(displayPostCategory).length; 
  const countDiv = document.getElementById('count');
  const countDivString = parseInt(countDiv);
  const sum = size + countDivString;  
  countDiv.innerText = sum;
  // console.log(typeof size)

        displayPostCategory.innerHTML = ``;
    posts.forEach(post =>{
    const newDiv = document.createElement('div');
          

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
              <a onclick="newsDetails('${post._id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor:pointer;">Read More</a>
            </div>
          </div>
        </div>
      </div>
      `;
      displayPostCategory.appendChild(newDiv);
    })
    spinner(false);     
};
getMenu();

// Click to show details of posts
const newsDetails = (_id) =>{
  
  const url = `https://openapi.programming-hero.com/api/news/${_id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data))
  .catch(error => displayDetails(error));
}
const displayDetails = posts =>{
  console.log(posts);
  const modalImg = document.getElementById('modal-img');
    modalImg.src = posts.data[0].image_url;
  const staticBackdropLabel = document.getElementById('staticBackdropLabel');
   staticBackdropLabel.innerText = posts.data[0].title;
   const postDetails = document.getElementById('post-details');
   postDetails.innerText = posts.data[0].details;
}

// Default Posts
const newsPosts = () =>{
  const url = `https://openapi.programming-hero.com/api/news/category/08`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayPosts(data.data))
  .catch(error => displayPosts(error));
}
const displayPosts = posts =>{
  // console.log(posts);
  const displayPostCategory = document.getElementById('display-post');

        displayPostCategory.innerHTML = ``;
    posts.forEach(post =>{
          const newDiv = document.createElement('div');

          const size = Object.keys(displayPostCategory).length; 
          const countDiv = document.getElementById('count');
          const countDivString = parseInt(countDiv);
          const sum = size + countDivString;  
          countDiv.innerText = sum;
          // console.log(typeof size)

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
              <a onclick="newsDetails('${post._id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor:pointer;">Read More</a>
            </div>
          </div>
        </div>
      </div>
      `;
      displayPostCategory.appendChild(newDiv);
        })
  spinner(false);    
};
newsPosts();
const spinner = loading =>{
  const spinner = document.getElementById('spinner');
  if(loading){
    spinner.classList.remove('d-none');
  } else{
    spinner.classList.add('d-none');
  }
}


