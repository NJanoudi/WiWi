// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    console.log("WiWi JavaScript Loaded!"); // Confirmation message

    // --- Data ---
    const videosData = [
        {
            id: 'vid001', // Unique ID for each video
            title: 'My Awesome Adventure - Vlog #1',
            channelName: 'TravelExplorer',
            stats: '1.2M views • 2 weeks ago'
        },
        {
            id: 'vid002',
            title: 'Cooking the Perfect Pasta 🍝',
            channelName: 'Chef Masters',
            stats: '500K views • 3 days ago'
        },
        {
            id: 'vid003',
            title: 'JavaScript Basics for Beginners',
            channelName: 'Code Explained',
            stats: '250K views • 1 month ago'
        },
        {
            id: 'vid004',
            title: 'Exploring the Secrets of the Ocean',
            channelName: 'Nature Docs',
            stats: '3M views • 5 days ago'
        },
        {
            id: 'vid005',
            title: 'Unboxing the Latest Gadgets!',
            channelName: 'TechReviewer',
            stats: '75K views • 1 day ago'
        },
        {
            id: 'vid006',
            title: 'Live Acoustic Music Session',
            channelName: 'Indie Musician',
            stats: '10K views • 6 hours ago'
        }
        // Add more video objects as you like
    ];

    // --- Selectors ---
    const sidebarLinks = document.querySelectorAll('aside li');
    const headerMenuIcon = document.querySelector('.header-left .icon'); // Assuming first icon is menu
    const headerRightIcons = document.querySelectorAll('.header-right .icon');
    const searchInput = document.querySelector('.header-center input[type="text"]');
    const searchButton = document.querySelector('.header-center .search-button');
    const mainContentArea = document.querySelector('main');
    const videoGrid = document.querySelector('.video-grid');

    // --- Functions for Dynamic Content ---

    // Function to create HTML for a single video card
    function createVideoCardHTML(video) {
        // Using template literals for cleaner HTML string construction
        return `
            <article class="video-card" data-video-id="${video.id}">
                <div class="thumbnail-placeholder"></div>
                <div class="video-details">
                    <div class="channel-avatar-placeholder"></div>
                    <div class="video-text">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="channel-name">${video.channelName}</p>
                        <p class="video-stats">${video.stats}</p>
                    </div>
                </div>
            </article>
        `;
    }

    // Function to render all video cards into the grid
    function renderVideoCards(videos) {
        if (!videoGrid) { // Check if the videoGrid element exists
            console.error("Video grid element not found!");
            return;
        }

        let allVideoCardsHTML = ''; // Start with an empty string
        videos.forEach(video => {
            allVideoCardsHTML += createVideoCardHTML(video); // Append HTML for each video
        });

        videoGrid.innerHTML = allVideoCardsHTML; // Set the innerHTML of the grid once
    }

    // --- Initial Page Setup ---
    renderVideoCards(videosData); // Render the videos when the page loads

    // --- Event Handler Functions (Interactivity) ---

    // Function for sidebar link clicks
    function handleSidebarClick(event) {
        const sectionName = event.currentTarget.textContent.trim();
        console.log(`Sidebar link clicked: ${sectionName}`);
        // Optional: Change main content placeholder (this will replace the video grid)
        // For a more advanced setup, you'd show/hide sections or load different content.
        mainContentArea.innerHTML = `<h1>Content for ${sectionName} (Placeholder)</h1> <h2>Videos would normally be re-rendered or filtered here.</h2>`;
    }

    // Function for header icon clicks
    function handleHeaderIconClick(event) {
        const iconContent = event.currentTarget.textContent.trim();
        console.log(`Header icon clicked: ${iconContent}`);
        // alert(`Icon clicked: ${iconContent}`); // Example alert
    }

    // Function for search button click
    function handleSearchClick() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log(`Search button clicked. Searching for: "${searchTerm}"`);
            // In a real app, you might filter videosData and re-render, or call an API
            // For now, let's just show a message in the main content area
            mainContentArea.innerHTML = `<h1>Search Results for "${searchTerm}" (Placeholder)</h1>`;
        } else {
            console.log("Search button clicked, but search input is empty.");
            // Optionally, re-render all videos if search is empty
            // renderVideoCards(videosData); // Uncomment to restore video grid
        }
    }

    // --- Attach Event Listeners ---

    // Add listener to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleSidebarClick);
    });

    // Add listener to the header menu icon (left)
    if (headerMenuIcon) {
         headerMenuIcon.addEventListener('click', handleHeaderIconClick);
    }

    // Add listener to each header icon on the right
    headerRightIcons.forEach(icon => {
        icon.addEventListener('click', handleHeaderIconClick);
    });

    // Add listener to the search button
    if (searchButton) {
        searchButton.addEventListener('click', handleSearchClick);
    }

    // Optional: Add listener for pressing Enter in the search input
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSearchClick();
            }
        });
    }

}); // End of DOMContentLoaded listener