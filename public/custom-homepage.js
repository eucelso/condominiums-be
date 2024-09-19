
const targetNode = document.getElementById('strapi');
const config = { childList: true, subtree: true };
const callback = function (mutationsList, observer) {
    const currentPath = window.location.pathname;

    if (currentPath === '/admin' || currentPath === '/admin/') {
        for (const mutation of mutationsList) {
            console.log('mutationsList', mutationsList)
            console.log('mutation', mutation)
            if (mutation.type === 'childList') {
                const customContentExists = document.querySelector('#lean-dashboard');
                const mainContainer = document.querySelector('main');
                console.log(mainContainer)
                console.log(customContentExists)
                if (mainContainer) {
                    mainContainer.innerHTML = `
                        <div id="lean-dashboard">
                        <h2>Welcome 👋</h2>
                        <p>Select an option from the left to get started, or choose from one of the shortcuts provided below.</p>
                        <div class="shortcut-cards">
                            CELSO
                        </div>
                        </div>
                        `;
                        const style = document.createElement('style');
                        style.textContent = `
                        #lean-dashboard {
                        padding: 20px;
                        }
                        .shortcut-cards {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        }
                        .card {
                        padding: 10px;
                        background: #f0f0f0;
                        border: 1px solid #ccc;
                        text-decoration: none;
                        color: #333;
                        }
                        .card:hover {
                        background: #e0e0e0;
                        }
                        / Dark mode styles /
                        body[data-theme='dark'] #lean-dashboard {
                        color: #e0e0e0;
                        background-color: #333;
                        }
                        body[data-theme='dark'] .card {
                        background: #444;
                        color: #e0e0e0;
                        }
                        body[data-theme='dark'] .card:hover {
                        background: #555;
                        }
                    `;
                    document.head.appendChild(style);
                    observer.disconnect();
                }
            }
        }
    }
};

const observer = new MutationObserver(callback);

const observeAndReplace = () => {
    observer.observe(targetNode, config);
};
// Initial call
observeAndReplace();
// Handle logo click and other navigations
document.addEventListener('click', function (event) {
    const logoLink = document.querySelector('a[href="/admin/"]');
    if (logoLink && event.target.closest('a[href="/admin/"]')) {
        event.preventDefault();
        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.innerHTML = '';
        }
        window.location.reload();
    }
});