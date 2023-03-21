const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.GetAttribute('data-target')
        const c = +counter.innerText
        const increment = 1

        if (c < target) {
            counter.innerText = `${Math}`
        }
    }

    updateCounter()
})