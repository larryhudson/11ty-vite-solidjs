window.addEventListener('load', function() {

    function handleToggle(event) {
        const toggleButton = event.target

        const idToToggle = toggleButton.getAttribute('data-toggle')
        const elementToToggle = document.getElementById(idToToggle)

        if (elementToToggle === null) return;

        const toggleIsOpen = toggleButton.getAttribute('aria-expanded') === "true"
        const ariaIsNull = toggleButton.getAttribute('aria-expanded') === null

        if (toggleIsOpen || ariaIsNull) {
            elementToToggle.setAttribute('hidden', '')
            toggleButton.setAttribute('aria-expanded', 'false')
        } else {
            elementToToggle.removeAttribute('hidden')
            toggleButton.setAttribute('aria-expanded', 'true')
        }
    }

    const toggleButton = document.querySelector('[data-toggle]')

    if (toggleButton) {
        toggleButton.addEventListener('click', handleToggle)
    }
})