// Select all elements from DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelectorAll('.search_input');
const searchInputButtons = document.querySelectorAll('.search_button');
const clearInputButtons = document.querySelectorAll('.clear_input')
const asideSection = document.querySelector('.aside');
const mobileNav = document.querySelector('.header_mobile_nav');
const currentPlayingContainer = document.querySelector('#now-playing');
const currentMusicPhoto = document.querySelector('#current-music-photo');
const currentPlayPauseButton = document.querySelector('#current-play-pause-button');
const playlist = document.querySelector('#play-list-icon');
const accountDetails = document.querySelector('.account_details');
const logos = Array.from(document.querySelectorAll('.profile_picture_container'));

// Define global variables
let navStyle = window.getComputedStyle(mobileNav).display;

// Clear form default behavior
function clearFormBehavior() {
    searchForm.addEventListener('reset', (e) => {
        e.preventDefault();
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

clearFormBehavior();

// Toggle account details
function showAccountDetails(params) {
    navStyle === 'flex' ? logos.splice(0, 1) : logos.splice(1);
    let logo = logos[0];

    logo.addEventListener('click', (event) => {
        accountDetails.classList.toggle('account_details_active');
        accountDetails.classList.contains('account_details_active')
            ? console.log('Account details active!')
            : console.log('Account details not active');
    });
}

showAccountDetails();

// Close the aside if open
function closeAsideSection() {
    // Check if aside is active on mobile device during search
    if (asideSection.classList.contains('aside_active') && navStyle === 'flex') {
        asideSection.classList.remove('aside_active');
        console.log('Aside closed!');
    } else {
        asideSection.classList.remove('aside_active');
    }
}

function searchMusic() {
    let searchInputArray = Array.from(searchInput);
    let searchInputButtonsArray = Array.from(searchInputButtons);
    let clearInputButtonsArray = Array.from(clearInputButtons);

    // Check when mobile device is active and hide search input dynamically
    navStyle === 'flex' ? searchInputArray.splice(0, 1) : searchInputArray.splice(1);

    const inputOfSearch = searchInputArray[0];

    inputOfSearch.addEventListener('input', (e) => {
        const searchValue = e.target.value.trim().toLowerCase();
        console.log(searchValue);

        // Display the search area
        searchIsActive();

        // close aside if active
        closeAsideSection();
    });

    searchAndClearActions(searchInputButtonsArray, clearInputButtonsArray, inputOfSearch);
}

searchMusic();

// Behavior for search form buttons
function searchAndClearActions(searchInputButtons, clearInputButtons, inputOfSearch) {
    // Check when mobile device is active and hide clear buttons dynamically
    navStyle === 'flex' ? searchInputButtons.splice(0, 1) : searchInputButtons.splice(1);
    navStyle === 'flex' ? clearInputButtons.splice(0, 1) : clearInputButtons.splice(1);

    const searchButton = searchInputButtons[0];
    const clearButton = clearInputButtons[0];

    // Focus search input when clicked and search data when input has value
    searchButton.addEventListener('click', (e) => {
        //
        inputOfSearch.focus();

        if (!inputOfSearch.value.trim()) {
            console.warn('No details found!');
        }

        console.log('Searching...');
    });

    clearButton.addEventListener('click', (e) => {
        console.log('Search input cleared');
        searchInput.value = '';

        // close aside if active
        closeAsideSection();
    });
}

// Get all footer elements
const home = document.querySelector('#home');
const favorite = document.querySelector('#favorite');
const settings = document.querySelector('#settings');
const library = document.querySelector('#library');

const homeSection = document.querySelector('.home_section');
const favoriteSection = document.querySelector('.favorite_section');
const searchSection = document.querySelector('.search_section');
const settingsSection = document.querySelector('.settings_section');
const librarySection = document.querySelector('.library_section');

// Logic to navigate footer
const homeIsActive = () => {
    home.addEventListener('click', (event) => {
        home.classList.add('active_section');
        favorite.classList.remove('active_section');
        settings.classList.remove('active_section');
        library.classList.remove('active_section');

        homeSection.classList.add('home_section_active');
        favoriteSection.classList.remove('favorite_section_active');
        searchSection.classList.remove('search_section_active');
        settingsSection.classList.remove('settings_section_active');
        librarySection.classList.remove('library_section_active');

        console.log('Home screen is active');
        closeAsideSection();
    });
};

homeIsActive();

const favoriteIsActive = () => {
    favorite.addEventListener('click', (event) => {
        favorite.classList.add('active_section');
        home.classList.remove('active_section');
        settings.classList.remove('active_section');
        library.classList.remove('active_section');

        favoriteSection.classList.add('favorite_section_active');
        homeSection.classList.remove('home_section_active');
        searchSection.classList.remove('search_section_active');
        settingsSection.classList.remove('settings_section_active');
        librarySection.classList.remove('library_section_active');

        console.log('favorite screen is active');
        closeAsideSection();
    });
};

favoriteIsActive();

function searchIsActive() {
    favorite.classList.remove('active_section');
    home.classList.remove('active_section');
    settings.classList.remove('active_section');
    library.classList.remove('active_section');

    searchSection.classList.add('search_section_active');
    favoriteSection.classList.remove('favorite_section_active');
    homeSection.classList.remove('home_section_active');
    settingsSection.classList.remove('settings_section_active');
    librarySection.classList.remove('library_section_active');

    console.log('Search screen is active');
    console.log('getting data...');
    closeAsideSection();
}

const settingsIsActive = () => {
    settings.addEventListener('click', (event) => {
        settings.classList.add('active_section');
        favorite.classList.remove('active_section');
        home.classList.remove('active_section');
        library.classList.remove('active_section');

        settingsSection.classList.add('settings_section_active');
        homeSection.classList.remove('home_section_active');
        favoriteSection.classList.remove('favorite_section_active');
        searchSection.classList.remove('search_section_active');
        librarySection.classList.remove('library_section_active');

        console.log('Settings screen is active');
        closeAsideSection();
    });
};

settingsIsActive();

const libraryIsActive = () => {
    library.addEventListener('click', (event) => {
        library.classList.add('active_section');
        settings.classList.remove('active_section');
        favorite.classList.remove('active_section');
        home.classList.remove('active_section');

        librarySection.classList.add('library_section_active');
        homeSection.classList.remove('home_section_active');
        favoriteSection.classList.remove('favorite_section_active');
        searchSection.classList.remove('search_section_active');
        settingsSection.classList.remove('settings_section_active');

        console.log('Library screen is active');
        closeAsideSection();
    });
};

libraryIsActive();

currentPlayingContainer.addEventListener('click', (event) => {
    console.log(event);

    if (event.target !== currentMusicPhoto && event.target !== currentPlayPauseButton && event.target !== playlist) {
        asideSection.classList.add('aside_active');
        console.log('Aside active');
    }
});

function defaultProfilePhoto(imgPath) {
    const profileImgs = document.querySelectorAll('.profile_picture');

    profileImgs.forEach((profileImg) => {
        profileImg.src = ''; // Clear profile image
        profileImg.src = imgPath; // Set default profile image
    });
}

defaultProfilePhoto('./img/default_profile.webp')