// Sample articles data
const articles = [
    {
        id: 1,
        title: "The Future of Web Development",
        summary: "Exploring emerging trends and technologies that will shape the web development landscape in the coming years.",
        content: `
            <p>Web development continues to evolve at a rapid pace, with new technologies and frameworks emerging regularly. In this article, we'll explore some of the most significant trends that are shaping the future of web development.</p>
            
            <h3>Progressive Web Applications (PWAs)</h3>
            <p>PWAs represent a fundamental shift in how we think about web applications. By combining the best features of web and mobile apps, PWAs offer users a native app-like experience while maintaining the accessibility and reach of the web.</p>
            
            <h3>WebAssembly and Performance</h3>
            <p>WebAssembly (WASM) is revolutionizing web performance by allowing developers to run high-performance code written in languages like C++, Rust, and Go directly in the browser. This opens up new possibilities for complex applications that were previously limited to native development.</p>
            
            <h3>AI Integration</h3>
            <p>The integration of artificial intelligence into web development tools and frameworks is becoming increasingly common. From automated code generation to intelligent debugging and optimization, AI is helping developers work more efficiently and create better user experiences.</p>
        `,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
        date: "2025-10-01"
    },
    {
        id: 2,
        title: "Sustainable Design Practices",
        summary: "How to create environmentally conscious digital products that reduce carbon footprint while maintaining excellent user experience.",
        content: `
            <p>As digital products consume more energy than ever before, it's crucial for developers and designers to consider the environmental impact of their work. Sustainable design practices not only help reduce carbon footprint but often result in better performance and user experience.</p>
            
            <h3>Optimizing for Performance</h3>
            <p>Performance optimization is one of the most effective ways to create sustainable digital products. Faster websites use less energy, both on the server side and on user devices. This includes optimizing images, minimizing JavaScript bundles, and using efficient CSS.</p>
            
            <h3>Green Hosting Solutions</h3>
            <p>Choosing hosting providers that use renewable energy sources can significantly reduce the environmental impact of web applications. Many hosting companies now offer carbon-neutral or even carbon-negative hosting options.</p>
            
            <h3>Mindful Feature Development</h3>
            <p>Before adding new features, consider their environmental cost. Does this feature provide enough value to justify the additional energy consumption? Sometimes, simpler solutions are both more sustainable and more user-friendly.</p>
        `,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
        date: "2025-09-28"
    },
    {
        id: 3,
        title: "The Art of Minimalist UI Design",
        summary: "Discovering the power of simplicity in user interface design and how less can often mean more in digital experiences.",
        content: `
            <p>Minimalist UI design has become increasingly popular in recent years, and for good reason. By focusing on essential elements and removing unnecessary clutter, minimalist interfaces can provide clearer communication and better user experiences.</p>
            
            <h3>Principles of Minimalist Design</h3>
            <p>The core principles of minimalist design include simplicity, clarity, and functionality. Every element should serve a purpose, and unnecessary decorative elements should be eliminated. This doesn't mean the design should be boring – rather, it should be intentional and focused.</p>
            
            <h3>White Space as a Design Element</h3>
            <p>White space (or negative space) is not empty space – it's a powerful design tool that helps create hierarchy, improve readability, and guide user attention. Effective use of white space can make interfaces feel more spacious and easier to navigate.</p>
            
            <h3>Typography and Color in Minimalism</h3>
            <p>In minimalist design, typography and color choices become even more important. With fewer elements to work with, each choice carries more weight. Clean, readable fonts and carefully chosen color palettes can convey personality while maintaining simplicity.</p>
        `,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
        date: "2025-09-25"
    },
    {
        id: 4,
        title: "Building Accessible Web Applications",
        summary: "A comprehensive guide to creating web applications that are usable by everyone, including people with disabilities.",
        content: `
            <p>Web accessibility is not just a legal requirement in many jurisdictions – it's a moral imperative and good business practice. Building accessible web applications ensures that your content and functionality are available to all users, regardless of their abilities.</p>
            
            <h3>Understanding WCAG Guidelines</h3>
            <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for creating accessible web content. The guidelines are organized around four principles: perceivable, operable, understandable, and robust (POUR).</p>
            
            <h3>Semantic HTML and ARIA</h3>
            <p>Using semantic HTML elements and ARIA (Accessible Rich Internet Applications) attributes correctly is fundamental to web accessibility. These technologies help screen readers and other assistive technologies understand and navigate your content.</p>
            
            <h3>Testing for Accessibility</h3>
            <p>Regular accessibility testing should be part of your development process. This includes automated testing tools, manual testing with screen readers, and ideally, testing with real users who have disabilities.</p>
        `,
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
        date: "2025-09-20"
    },
    {
        id: 5,
        title: "Modern CSS Techniques",
        summary: "Exploring advanced CSS features like Grid, Flexbox, and custom properties to create modern, responsive layouts.",
        content: `
            <p>CSS has evolved tremendously in recent years, with new features and capabilities that make it easier than ever to create sophisticated, responsive layouts. Modern CSS techniques allow developers to create complex designs with cleaner, more maintainable code.</p>
            
            <h3>CSS Grid for Complex Layouts</h3>
            <p>CSS Grid revolutionizes how we approach layout design. Unlike Flexbox, which is primarily one-dimensional, Grid allows for true two-dimensional layouts, making it perfect for complex page structures and responsive designs.</p>
            
            <h3>Custom Properties (CSS Variables)</h3>
            <p>CSS custom properties provide a way to store and reuse values throughout your stylesheets. They're particularly useful for theming, maintaining consistency, and creating dynamic styles that can be modified with JavaScript.</p>
            
            <h3>Modern Responsive Design</h3>
            <p>Modern responsive design goes beyond simple media queries. Techniques like container queries, intrinsic web design, and fluid typography help create layouts that adapt not just to screen size, but to content and context.</p>
        `,
        image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&h=200&fit=crop",
        date: "2025-09-15"
    }
];

// Comments data (in a real application, this would come from a backend)
let comments = JSON.parse(localStorage.getItem('comments')) || {
    1: [
        {
            id: 1,
            author: "Sarah Chen",
            text: "Great article! I'm particularly excited about WebAssembly and its potential for bringing desktop-class applications to the web.",
            date: "2025-10-02"
        },
        {
            id: 2,
            author: "Mike Johnson",
            text: "The section on AI integration is fascinating. Do you think we'll see AI replacing developers entirely in the future?",
            date: "2025-10-03"
        }
    ],
    2: [
        {
            id: 3,
            author: "Emma Rodriguez",
            text: "This is such an important topic! I've started implementing sustainable practices in my projects and the performance improvements are noticeable.",
            date: "2025-09-29"
        }
    ],
    3: [
        {
            id: 4,
            author: "Alex Kim",
            text: "Minimalism is definitely the way forward. Users appreciate clean, focused interfaces that don't overwhelm them.",
            date: "2025-09-26"
        }
    ]
};

// User session management
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// DOM elements
let articlesGrid, sortSelect, searchInput, modal, modalContent, userInfo, loginLink;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    updateUserInterface();
    
    if (document.getElementById('articles-grid')) {
        displayArticles(articles);
        setupEventListeners();
    }
    
    if (document.getElementById('login-form')) {
        setupLoginForm();
    }
});

function initializeElements() {
    articlesGrid = document.getElementById('articles-grid');
    sortSelect = document.getElementById('sort-select');
    searchInput = document.getElementById('search-input');
    modal = document.getElementById('article-modal');
    modalContent = document.getElementById('modal-article-content');
    userInfo = document.getElementById('user-info');
    loginLink = document.getElementById('login-link');
}

function updateUserInterface() {
    const usernameSpan = document.getElementById('username');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (currentUser) {
        if (userInfo) userInfo.style.display = 'flex';
        if (loginLink) loginLink.style.display = 'none';
        if (usernameSpan) usernameSpan.textContent = currentUser.username;
        
        // Show comment form and hide login prompt
        const commentForm = document.getElementById('comment-form');
        const loginPrompt = document.getElementById('login-prompt');
        if (commentForm) commentForm.style.display = 'block';
        if (loginPrompt) loginPrompt.style.display = 'none';
    } else {
        if (userInfo) userInfo.style.display = 'none';
        if (loginLink) loginLink.style.display = 'block';
        
        // Hide comment form and show login prompt
        const commentForm = document.getElementById('comment-form');
        const loginPrompt = document.getElementById('login-prompt');
        if (commentForm) commentForm.style.display = 'none';
        if (loginPrompt) loginPrompt.style.display = 'block';
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
}

function setupEventListeners() {
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            let sortedArticles = [...articles];
            
            if (sortValue === 'new-old') {
                sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else {
                sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
            
            displayArticles(sortedArticles);
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredArticles = articles.filter(article => 
                article.title.toLowerCase().includes(searchTerm) ||
                article.summary.toLowerCase().includes(searchTerm)
            );
            displayArticles(filteredArticles);
        });
    }
    
    // Modal functionality
    if (modal) {
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', closeModal);
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    
    // Comment form
    const submitCommentBtn = document.getElementById('submit-comment');
    if (submitCommentBtn) {
        submitCommentBtn.addEventListener('click', submitComment);
    }
}

function displayArticles(articlesToShow) {
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    articlesToShow.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image" onerror="this.style.display='none'">
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-summary">${article.summary}</p>
                <div class="article-meta">
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
            </div>
        `;
        
        articleCard.addEventListener('click', () => openArticle(article));
        articlesGrid.appendChild(articleCard);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function openArticle(article) {
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
        <div class="content-wrapper">
            <h1>${article.title}</h1>
            <div class="modal-meta">
                <span>Published on ${formatDate(article.date)}</span>
            </div>
            <img src="${article.image}" alt="${article.title}" class="modal-image" onerror="this.style.display='none'">
            <div class="modal-body">
                ${article.content}
            </div>
            
            <!-- Comments Section -->
            <div id="comments-section">
                <div class="comments-container">
                    <h3>Comments</h3>
                    <div id="comments-list">
                        <!-- Comments will be loaded here -->
                    </div>
                    <div id="comment-form" style="display: none;">
                        <textarea id="comment-text" placeholder="Write your comment here..." rows="3"></textarea>
                        <button id="submit-comment">Post Comment</button>
                    </div>
                    <div id="login-prompt" class="login-prompt">
                        <p>Please <a href="login.html">login</a> to leave a comment.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Re-setup comment form event listener since we recreated the DOM
    const submitCommentBtn = document.getElementById('submit-comment');
    if (submitCommentBtn) {
        submitCommentBtn.addEventListener('click', submitComment);
    }
    
    loadComments(article.id);
    updateUserInterface(); // Update login/logout state for comment form
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function loadComments(articleId) {
    const commentsSection = document.getElementById('comments-list');
    if (!commentsSection) return;
    
    const articleComments = comments[articleId] || [];
    
    if (articleComments.length === 0) {
        commentsSection.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
        return;
    }
    
    commentsSection.innerHTML = articleComments.map(comment => `
        <div class="comment">
            <div class="comment-author">${comment.author}</div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-date">${formatDate(comment.date)}</div>
        </div>
    `).join('');
    
    // Store current article ID for comment submission
    commentsSection.dataset.articleId = articleId;
}

function submitComment() {
    if (!currentUser) {
        alert('Please log in to comment.');
        return;
    }
    
    const commentText = document.getElementById('comment-text');
    const commentsSection = document.getElementById('comments-list');
    
    if (!commentText || !commentsSection) return;
    
    const text = commentText.value.trim();
    if (!text) {
        alert('Please enter a comment.');
        return;
    }
    
    const articleId = parseInt(commentsSection.dataset.articleId);
    const newComment = {
        id: Date.now(),
        author: currentUser.username,
        text: text,
        date: new Date().toISOString().split('T')[0]
    };
    
    if (!comments[articleId]) {
        comments[articleId] = [];
    }
    
    comments[articleId].push(newComment);
    
    // Save comments to localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
    
    commentText.value = '';
    loadComments(articleId);
}

function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const registerModal = document.getElementById('register-modal');
    const registerClose = document.getElementById('register-close');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const username = document.getElementById('username-input').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (in a real app, this would be handled by a backend)
            const user = users.find(u => 
                (u.email === email || u.username === username) && u.password === password
            );
            
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
    
    if (registerLink && registerModal) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'block';
        });
    }
    
    if (registerClose) {
        registerClose.addEventListener('click', function() {
            registerModal.style.display = 'none';
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('reg-email').value;
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            if (users.find(u => u.email === email || u.username === username)) {
                alert('A user with this email or username already exists.');
                return;
            }
            
            const newUser = { email, username, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Account created successfully! You can now log in.');
            registerModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserInterface();
    
    // Refresh comments display if on article page
    const commentsSection = document.getElementById('comments-list');
    if (commentsSection && commentsSection.dataset.articleId) {
        loadComments(parseInt(commentsSection.dataset.articleId));
    }
    
    alert('You have been logged out.');
}
