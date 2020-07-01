/**
 * @Using_Local_storage_to_set_dark_theme_on_Document
 */

if (typeof localStorage == 'undefined') {
    console.log('This browser does not support local storage');
}

/**
 * DOM
 */
var darkMode = localStorage.getItem('darkMode');
var btnTheme = document.querySelector('.container__widget--button');

const darkModeEnabled = () => {
    /**
     * change the theme
     */
    document.body.classList.add('theme-dark');
    /**
     * set to local storage
     */
    localStorage.setItem('darkMode', 'enabled');
};

const darkModeDisabled = () => {
    /**
     * change the theme
     */
    document.body.classList.remove('theme-dark');
    /**
     * set to local storage
     */
    localStorage.setItem('darkMode', null);
};

/**
 * check if enabled
 */
if (darkMode === 'enabled') {
    darkModeEnabled();
}

btnTheme.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        darkModeEnabled();
    } else {
        darkModeDisabled();
    }
});
