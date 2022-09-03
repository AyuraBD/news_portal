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
            <p onclick="newsPost(${post.category_id})">${post.category_name}</p>
        `;
        menuContainer.appendChild(menuDiv);
    })
}
// News Post
const newsPost = (category_id) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayPost(data));
}
const displayPost = posts =>{
  console.log(posts);
  const displayPostCategory = document.getElementById('display-post');
      const newDiv = document.createElement('div');
      newDiv.classList.add('col');
      newDiv.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img class="img-fluid" src="${posts.image_url}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body mb-4">
            <h5 class="card-title mb-2">${posts.title}</h5>
            <p class="card-text mb-4">${posts.details}</p>
             
          </div>
          <div class=" bottom-cnt">
            <div>
              <div class="author">
                <img class="img-fluid" src="" alt="">
                <h6></h6>
              </div>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <a>Read More</a>
            </div>
          </div>
        </div>
      </div>
      `;
      displayPostCategory.appendChild(newDiv);
};











// Experiments
// const newsPosts = (category_id) =>{
//   const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
//   fetch(url)
//   .then(res => res.json())
//   .then(data => displayPosts(data.data._id));
// }
// const displayPosts = posts =>{
//   console.log(posts);
//   const displayPostCategory = document.getElementById('display-post');
//   posts.forEach(post =>{
//       const newDiv = document.createElement('div');
//       newDiv.classList.add('col');
//       newDiv.innerHTML = `
//       <div class="row">
//         <div class="col-md-4">
//           <img class="img-fluid" src="${post.category_id}" class="card-img-top" alt="...">
//         </div>
//         <div class="col-md-8">
//           <div class="card-body mb-4">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text mb-1">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           </div>
//           <div class=" bottom-cnt">
//             <div>
//               <div class="author">
//                 <img class="img-fluid" src="" alt="">
//                 <p>Jane Cooper</p>
//               </div>
//             </div>
//             <div>
//               <p>Million</p>
//             </div>
//             <div>
//               <button>Read More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       `;
//       displayPostCategory.appendChild(newDiv);
//   })
// }
getMenu();










