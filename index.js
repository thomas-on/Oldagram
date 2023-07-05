const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const mainEl = document.querySelector("main");

function renderEachPost(postObject,id) {
    const post = `
                <section class="post">
                    <section class="header-post">
                        <img src="${postObject.avatar}" class="portrait-avatar">
                        <section class="post-info">
                            <h4>${postObject.name}</h4>
                            <p>${postObject.location}</p>
                        </section>
                    </section>
                    
                    <section>
                        <img src="${postObject.post}" class="post-image">
                    </section>
                    
                    <section class="footer-post">
                        <section class="icons">
                            <img src="images/icon-heart.png" class="icon heart-icon" onclick="likeThePost(${id})">
                            <img src="images/icon-comment.png" class="icon comment-icon">
                            <img src="images/icon-dm.png" class="icon share-icon">
                        </section>
                        <h4>${postObject.likes} likes</h4>
                        <p>${postObject.username}<span class="user-text"> ${postObject.comment}</span></p>
                    </section>
                </section>
                `
    mainEl.innerHTML += post;
}

// renderEachPost(posts[0],1)

function renderPosts(allPosts) {
    // for (i = 0; i < allPosts.length; i++) {
    //     renderEachPost(allPosts[i],i);
    
    let count = 0;
    allPosts.forEach(post => {
        renderEachPost(post, count);
        count ++;
    })
}

function likeThePost(index) {
    // Create a likeEl that points to the likes count
    const likeEl = document.querySelectorAll(".footer-post h4")[index];
    // Create a likeIconEl that points to the like icon
    const likeIconEl = document.querySelectorAll(".heart-icon")[index];
    // Grab and convert the number of likes 
    const previousLikes = Number(likeEl.textContent.split(" ")[0]);
    
    // Check if likes exists in class
    // At initial run, it will always be not true 
    if (likeIconEl.classList.contains("liked")) {
        likeIconEl.classList.remove("liked"); // Removes it if it exists
        likeIconEl.src = "images/icon-heart.png"; // Reverts back to normal heart icon
        
        likeEl.textContent = `${previousLikes - 1} likes`; // Reduce the number of likes
    } else {
        likeIconEl.classList.add("liked"); // Add it if it exists
        likeIconEl.src = "images/icon-heart-hover.png"; // Changed to hover heart icon
        
        likeEl.textContent = `${previousLikes + 1} likes`; // Add to the number of likes
    }
}

renderPosts(posts);

