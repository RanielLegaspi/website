const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innertext = '0'

    const updateCounter = () => {
        const target = counter.GetAttribute('data-target')
        console.log(target)
    }

    updateCounter()
})