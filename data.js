let newsItems = [
  {
    id: 1,
    title: "Live Coverage: Gaza Under Fire",
    description: "Real-time updates and footage from Gaza. Stay informed with field reports, testimonies, and ongoing coverage.",
   fullContent: "...",
   media: {
      type: "live",
      url: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1&mute=1"
    },
    important: true,
    author: "Live Reporter",
    publishedAt: "2025-07-16T12:00:00Z"
  },
  {
    id: 2,
    title: "Important Political Update in the Middle East",
    description: "Intensive meetings between leaders to discuss recent developments in the region.",
    fullContent: "...",
    media:null,
    views: 2300,
    important: true,
    category: "Politics",
    author: "Sarah Ahmed",
    source: "Al Jazeera",
    publishedAt: "2025-07-16T09:30:00Z"
  },{
    id: 11,
    title: "Annual Arts Festival Opens Doors",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
    },
    views: 800,
    important: false,
    category: "Arts",
    author: "Layla Morgan",
    source: "ArtNet",
    publishedAt: "2025-07-14T14:00:00Z"
  },
  {
    id: 3,
    title: "New Peace Talks Announced",
    description: "...",
    fullContent: "...",
    media: null,
    views: 1800,
    important: false,
    category: "Politics",
    author: "Mohammed Khalil",
    source: "Reuters",
    publishedAt: "2025-07-15T15:00:00Z"
  },
  {
    id: 4,
    title: "Election Results Surprise Analysts",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1581092127564-4c4f50d263de?auto=format&fit=crop&w=600&q=80"
    },
    views: 2700,
    important: true,
    category: "Politics",
    author: "Nour Hasan",
    source: "BBC News",
    publishedAt: "2025-07-15T19:45:00Z"
  },
  {
    id: 5,
    title: "Global Technology Conference Launches",
    description: "...",
    fullContent: "...",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ"
    },
    views: 1100,
    important: false,
    category: "Tech",
    author: "John Miller",
    source: "TechCrunch",
    publishedAt: "2025-07-14T10:30:00Z"
  },
  {
    id: 6,
    title: "Breakthrough in Quantum Computing",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1535378917043-10a22c95931a?auto=format&fit=crop&w=600&q=80"
    },
    views: 1600,
    important: true,
    category: "Tech",
    author: "Lina Xu",
    source: "MIT News",
    publishedAt: "2025-07-15T12:15:00Z"
  },
  {
    id: 7,
    title: "Cybersecurity Threats Increase Globally",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
    },
    views: 950,
    important: true,
    category: "Tech",
    author: "Rami Saeed",
    source: "Wired",
    publishedAt: "2025-07-14T18:50:00Z"
  },
  {
    id: 8,
    title: "Severe Weather Warning Issued",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=600&q=80"
    },
    views: 1800,
    important: true,
    category: "Economy",
    author: "Fatima Saleh",
    source: "CNN Weather",
    publishedAt: "2025-07-15T16:20:00Z"
  },
  {
    id: 9,
    title: "Global Market Economic Analysis",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1569025692344-675f8e0d76b9?auto=format&fit=crop&w=600&q=80"
    },
    views: 900,
    important: true,
    category: "Economy",
    author: "James Lin",
    source: "Bloomberg",
    publishedAt: "2025-07-14T09:10:00Z"
  },
  {
    id: 10,
    title: "Stock Markets Rally Amid Positive News",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1581091870620-1e7b0c6d60b8?auto=format&fit=crop&w=600&q=80"
    },
    views: 1400,
    important: false,
    category: "Economy",
    author: "Amal Darwish",
    source: "Financial Times",
    publishedAt: "2025-07-15T11:40:00Z"
  },
  
  {
    id: 12,
    title: "New Exhibition Highlights Modern Sculpture",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1608553314146-d9228c9aa2c4?auto=format&fit=crop&w=600&q=80"
    },
    views: 700,
    important: false,
    category: "Arts",
    author: "Kareem Dabbas",
    source: "NY Times Arts",
    publishedAt: "2025-07-15T09:25:00Z"
  },
  {
    id: 13,
    title: "Local Theater Premieres Original Play",
    description: "...",
    fullContent: "...",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    views: 600,
    important: false,
    category: "Arts",
    author: "Nadia Faraj",
    source: "The Guardian",
    publishedAt: "2025-07-14T20:10:00Z"
  },
  {
    id: 14,
    title: "Comprehensive Sports Report on the League",
    description: "...",
    fullContent: "...",
    media: {
      type: "live",
      url: "https://www.youtube.com/live/YY1B0zue_cI?si=BA5Mv7PyAdoL3u2Q"
    },
    views: 1500,
    important: false,
    category: "Sport",
    author: "Omar Jaber",
    source: "ESPN",
    publishedAt: "2025-07-15T10:00:00Z"
  },
  {
    id: 15,
    title: "Champion Wins Historic Victory",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1600172454520-327f9620c86f?auto=format&fit=crop&w=600&q=80"
    },
    views: 2000,
    important: true,
    category: "Sport",
    author: "Sami Qasim",
    source: "Sky Sports",
    publishedAt: "2025-07-16T06:45:00Z"
  },
  {
    id: 16,
    title: "Champion Wins Historic Victory",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80"
    },
    views: 2000,
    important: true,
    category: "Culture",
    author: "Sami Qasim",
    source: "Sky Sports",
    publishedAt: "2025-07-16T06:45:00Z"
  },
  {
    id: 17,
    title: "Champion Wins Historic Victory",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1608126886827-45f3435c7ee2?auto=format&fit=crop&w=600&q=80"
    },
    views: 2000,
    important: true,
    category: "Travel",
    author: "Sami Qasim",
    source: "Sky Sports",
    publishedAt: "2025-07-16T06:45:00Z"
  },
  {
    id: 18,
    title: "Champion Wins Historic Victory",
    description: "...",
    fullContent: "...",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=600&q=80"
    },
    views: 2000,
    important: true,
    category: "Business",
    author: "Sami Qasim",
    source: "Sky Sports",
    publishedAt: "2025-07-16T06:45:00Z"
  }
];




const lstlinks = ['Home', 'Sport', 'Politics', 'Economy', 'Tech', 'Business', 'Culture', 'Arts', 'Travel'];
const elemLinks = document.getElementById('lstlnks');

    lstlinks.forEach((link, index) => {
      elemLinks.innerHTML += `
        <li key="${index}" class="elemLst" onclick="getElement(${index})">
          <a href="#" class=" block py-2 md:py-0 text-gray-300 hover:text-blue-400 transition duration-300">
            ${link}
          </a>
        </li>
      `;
    });

    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => {
      elemLinks.classList.toggle('hidden');
    });


    window.onload=()=>{
      getElement(0);

    }

    let item
    function getElement(index){

      // let li= document.querySelector(`.elemLst[key="${index}"]`);
         let sectionNews = document.getElementById("sectionNews");
         
         sectionNews.innerHTML = "";
          item = lstlinks[index];
  
         if(item === "Home"){
          const importantNews = newsItems.filter(n=> n.important).sort((a,b)=> new Date(b.publishedAt) - new Date(a.publishedAt));

          sectionNews.innerHTML +=`
           <h2 class="text-2xl font-bold text-gray-800 mb-3">Important News</h2>
           <div class="space-y-3"> ${importantNews.map(SimpleCard).join("")} </div>
          `;

          const mostViewed = newsItems.slice().sort((a,b) => b.views - a.views).slice(0,5);
          
          sectionNews.innerHTML += `
           <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-3">Most Viewed</h2>
          <div class="space-y-3"> ${mostViewed.map(MediaCard).join("")} </div>
          `;

  }else{

         const filtered = newsItems.filter(n => n.category === item);

         const importantInCategory = filtered.filter(n=> n.important).sort((a,b)=> new Date(b.publishedAt) - new Date(a.publishedAt));

         if(importantInCategory.length > 0){

          sectionNews.innerHTML +=`
           <h2 class="text-2xl font-bold text-gray-800 mb-3">${item} - Important</h2>
          <div class="space-y-3"> ${importantInCategory.map(SimpleCard).join("")} </div>
          `;
         }

         const mostViewed = newsItems.filter(n=> n.category === item).slice().sort((a,b)=> b.views - a.views).slice(0,5);


         if(mostViewed.length > 0){

          sectionNews.innerHTML += `
            <h2 class="text-2xl font-bold text-gray-800 mt-10 mb-3">Most Viewed</h2>
            <div class="space-y-3"> ${mostViewed.map(MediaCard).join("")} </div>
          `;
         }
  }
          renderNewsList();

}    



     
function SimpleCard(news) {
  return `
    <div  onclick="openModalById(${news.id})" data-id="${news.id}" class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded shadow-sm">
      <h4 class="font-semibold text-gray-800">${news.title}</h4>
      <p class="text-sm text-gray-600">${news.description}</p>
      <p class="text-xs text-gray-500 mt-1">
        ${new Date(news.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  `;
}

function MediaCard(news) {

  return `
    <div onclick="openModalById(${news.id})" data-id="${news.id}"  class="bg-white shadow-md rounded p-4 border border-gray-100">
      <h4 class="font-bold text-lg text-gray-800 mb-1">${news.title}</h4>
      <p class="text-sm text-gray-600 mb-2">${news.description}</p>
      ${news.media ? renderMedia(news.media) : ""}
       <p class="text-xs text-gray-500 mt-1">
        ${new Date(news.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  | | views: ${news.views}
      </p>
    </div>
  `;
}

function renderMedia(media) {
  if (media.type === "image") {
    return `<img src="${media.url}" class="mt-2 w-full max-h-48 object-cover rounded" alt="">`;
  } else if (media.type === "video") {
    return `<iframe src="${media.url}" class="mt-2 w-full aspect-video rounded" frameborder="0" allowfullscreen></iframe>`;
  }
  return "";
}


function renderNewsList() {

  if(item === "Home"){
    renderListItems(newsItems);
  }else{

    let lstFilterd = newsItems.filter(n=>n.category === item);
    renderListItems(lstFilterd);
  }
  console.log(newsItems);
}


function renderListItems(lstItems){
  const container = document.getElementById("mainNewsSection");

   const html = `
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-auto">
      ${lstItems.map(news => {
         if(news.media?.type === "live"){

          return `
            <div onclick="openModalById(${news.id})" data-id="${news.id}" class="md:col-span-3  bg-white rounded overflow-hidden shadow">
              <div class="relative">
                <iframe
                  class="w-full aspect-video"
                  src="${news.media.url}"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen>
                </iframe>
              </div>
              <div class="flex items-center justify-between mt-3 px-4 pb-4">
                <div>
                  <h2 class="text-xl font-bold text-gray-900">${news.title}</h2>
                  <p class="mt-1 text-sm text-gray-700">${news.description}</p>
                </div>
                <div class="flex items-center ml-4">
                  <span class="relative flex h-4 w-4">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                  </span>
                </div>
              </div>
            </div>
          `;
        }
       else if (news.media?.type === "image") {
          return `
            <div onclick="openModalById(${news.id})" data-id="${news.id}" class="bg-white shadow rounded overflow-hidden">
              <img src="${news.media.url}" class="w-full h-40 object-cover" />
              <div class="p-4">
                <h3 class="font-bold text-md">${news.title}</h3>
                <p class="text-sm text-gray-600 mt-1">${news.description}</p>
              </div>
            </div>
          `;
        } else if (news.media?.type === "video") {
          return `
            <div onclick="openModalById(${news.id})" data-id="${news.id}" class="bg-white rounded overflow-hidden shadow">
              <iframe class="w-full h-40" src="${news.media.url}" frameborder="0" allowfullscreen></iframe>
              <div class="p-4">
                <h3 class="font-bold text-md">${news.title}</h3>
                <p class="text-sm text-gray-600 mt-1">${news.description}</p>
              </div>
            </div>
          `;
        } else {
          return `
            <div onclick="openModalById(${news.id})" data-id="${news.id}" class="bg-gray-100  p-4 shadow rounded">
              <h3 class="font-bold text-md">${news.title}</h3>
              <p class="text-sm text-gray-600 mt-1">${news.description}</p>
            </div>
          `;
        }
      }).join("")}
    </div>
  `;

  container.innerHTML = html;
}


let selectedNews = null;
let comments = {};

function openModalById(id) {
  
  selectedNews = newsItems.find(n=> n.id === id);

  document.getElementById("modalTitle").textContent = selectedNews.title;

  document.getElementById("modalMeta").innerHTML = `
    <span>By <strong>${selectedNews.author}</strong></span> |
    <span> ${(selectedNews.source) ? 'Source : ' + selectedNews.source : ''}</span> |
    <span>${new Date(selectedNews.publishedAt).toLocaleString([],{ weeekday:'long',year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute :'2-digit'})}</span>
  `;

  document.getElementById('modalDescription').textContent = selectedNews.description || "";
  document.getElementById("modalContent").textContent = selectedNews.fullContent || "";
  document.getElementById("modalViews").textContent = ( selectedNews.views) ? "Views : " + selectedNews.views : "";

  const mediaEl = document.getElementById("modalMedia");
  mediaEl.innerHTML = "";
  if (selectedNews.media) {
    if (selectedNews.media.type === "image") {
      mediaEl.innerHTML = `<img src="${selectedNews.media.url}" class="w-full max-h-96 object-cover rounded" alt="">`;
    } else if (selectedNews.media.type === "video" || selectedNews.media.type === "live") {
      mediaEl.innerHTML = `<iframe class="w-full aspect-video rounded" src="${selectedNews.media.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  }

  document.getElementById("commentInput").value = "";
  renderComments();

  document.getElementById("newsModal").classList.remove("hidden");
  document.getElementById("newsModal").classList.add("flex");

}

function closeModal() {
  document.getElementById("newsModal").classList.add("hidden");
  document.getElementById("newsModal").classList.remove("flex");
}
function submitComment() {

  const input = document.getElementById("commentInput");
  const commentText = input.value.trim();
  const newsKey = selectedNews.id;

   if (!commentText) return;
  
   if (!comments[newsKey]) comments[newsKey] = [];
  
  comments[newsKey].push({
    text: commentText,
    date: new Date().toLocaleTimeString(),
    user: "You"
  });

  input.value = "";
  renderComments();
}

function renderComments() {
  const container = document.getElementById("commentsContainer");
  container.innerHTML = "";

  const newsKey = selectedNews.id;
  const newsComments = comments[newsKey] || [];

  newsComments.forEach(c => {
    container.innerHTML += `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-gray-300"></div>
        <div>
          <p class="text-sm text-gray-800"><strong>${c.user}</strong> ${c.text}</p>
          <p class="text-xs text-gray-500">${c.date}</p>
        </div>
      </div>
    `;
  });

  if (newsComments.length === 0) {
    container.innerHTML = `<p class="text-sm text-gray-500 italic">No comments yet. Be the first to comment.</p>`;
  }
}

