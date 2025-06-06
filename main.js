// Select all elements from DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelectorAll('.search_input');
const searchInputButtons = document.querySelectorAll('.search_button');
const clearInputButtons = document.querySelectorAll('.clear_input')
const asideSection = document.querySelector('.aside');
const mobileNav = document.querySelector('.header_mobile_nav');
const curentPlayingContainer = document.querySelector('#now-playing');

// Define global variables


// Clrear form default behaviour 
function clearFormBehaviour() {
    searchForm.addEventListener('reset', (e) => {
        e.preventDefault();
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

clearFormBehaviour();

// Close the aside if open 
function closeAsideSection() {
    let navStyle = window.getComputedStyle(mobileNav).display;

    // Check if aside is active on mobile device during search
    if (asideSection.classList.contains('aside_active')  && navStyle === 'flex') {
        asideSection.classList.remove('aside_active');
        console.log('Aside closed!');
    } else {
        asideSection.classList.remove('aside_active');
    }
}

closeAsideSection()

function searchMusic() {
    let searchInputArray = Array.from(searchInput);
    let searchInputButtonsArray = Array.from(searchInputButtons);
    let clearInputButtonsArray = Array.from(clearInputButtons);

    let inputs = searchInputArray.map(input => input);
    
    console.log(inputs);
    console.log(searchInputButtonsArray);
    console.log(clearInputButtonsArray);
    
    inputs.forEach((inputOfSearch) => {

        inputOfSearch.addEventListener('input', (e) => {searchInputArray
            const searchValue = e.target.value.trim().toLowerCase();
            console.log(searchValue);

            // Display the search area 
            searchIsActive();

            // close aside if active
            closeAsideSection();
        });
    });

    searchInputButtonsArray.forEach((searchButton) => {
        searchButton.addEventListener('click', (e) => {
            inputs.forEach((inputOfSearch) => {
                inputOfSearch.focus();
                console.log('Serch button clicked');
                closeAsideSection();
            });
        });
    });

    clearInputButtonsArray.forEach((inputOfSearch) => {
        inputOfSearch.addEventListener('keyup', (e) => {
            const searchValue = e.target.value.trim().toLowerCase();
            console.log(searchValue);
        });
    });
}

searchMusic();

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

        console.log('Favouritea screen is active');
        closeAsideSection();
    });
};

favoriteIsActive();

const searchIsActive = () => {
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
    closeAsideSection();
};

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

curentPlayingContainer.addEventListener('click', (event) => {

    asideSection.classList.add('aside_active')
})


function defaultProfilePhoto(imgPath) {
    const profileImgs = document.querySelectorAll('.profile_picture');

    profileImgs.forEach(profileImg => {
        // Clear image src
        if (profileImg !== '') {
            profileImg.src = "";
        }

        // Set default profile image
        profileImg.src = imgPath;
    })
}

defaultProfilePhoto('./img/default_profile.webp')