// Wait until the DOM is fully loaded before running the script
// Note: While 'defer' handles this, DOMContentLoaded is belt-and-suspenders
// and good practice if you weren't using defer or had complex dependencies.
document.addEventListener('DOMContentLoaded', () => {

    console.log("WiWi JavaScript Loaded!"); // Confirmation message

    // --- Selectors ---
    const sidebarLinks = document.querySelectorAll('aside li');
    const headerMenuIcon = document.querySelector('.header-left .icon'); // Assuming first icon is menu
    const headerRightIcons = document.querySelectorAll('.header-right .icon');
    const searchInput = document.querySelector('.header-center input[type="text"]');
    const searchButton = document.querySelector('.header-center .search-button');
    const mainContentArea = document.querySelector('main'); // To potentially change content

    // --- Event Handlers ---

    // Function for sidebar link clicks
    function handleSidebarClick(event) {
        // 'currentTarget' refers to the element the listener was attached to (the <li>)
        const sectionName = event.currentTarget.textContent.trim(); // Get text content, remove extra whitespace
        console.log(`Sidebar link clicked: ${sectionName}`);

        // Optional: Change main content placeholder
        mainContentArea.innerHTML = `<h1>Content for ${sectionName} (Placeholder)</h1>`;
    }

    // Function for header icon clicks
    function handleHeaderIconClick(event) {
        const iconContent = event.currentTarget.textContent.trim();
        console.log(`Header icon clicked: ${iconContent}`);
        // You could show alerts or implement dropdowns later
        // alert(`Icon clicked: ${iconContent}`); // Example alert
    }

    // Function for search button click
    function handleSearchClick() {
        const searchTerm = searchInput.value.trim(); // Get value from input, remove extra whitespace
        if (searchTerm) {
            console.log(`Search button clicked. Searching for: "${searchTerm}"`);
            // Later, you would trigger an API call or filter content here
        } else {
            console.log("Search button clicked, but search input is empty.");
        }
        // Optional: Clear the search input after clicking
        // searchInput.value = "";
    }

    // --- Attach Event Listeners ---

    // Add listener to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleSidebarClick);
    });

    // Add listener to the header menu icon (left)
    if (headerMenuIcon) { // Check if it exists
         headerMenuIcon.addEventListener('click', handleHeaderIconClick);
    }

    // Add listener to each header icon on the right
    headerRightIcons.forEach(icon => {
        icon.addEventListener('click', handleHeaderIconClick);
    });

    // Add listener to the search button
    if (searchButton) { // Check if it exists
        searchButton.addEventListener('click', handleSearchClick);
    }

    // Optional: Add listener for pressing Enter in the search input
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            // Check if the key pressed was 'Enter'
            if (event.key === 'Enter') {
                // Prevent default action, if any (like form submission if it was in a form)
                event.preventDefault();
                // Trigger the same action as clicking the search button
                handleSearchClick();
            }
        });
    }

}); // End of DOMContentLoaded listener