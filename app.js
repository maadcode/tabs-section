const $btnsTab = document.querySelectorAll('.tab-btn')
const $articles = document.querySelectorAll('.content')

$btnsTab.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.textContent
        
        $btnsTab.forEach(btn => {
            btn.classList.remove('active')
            if(btn === id) {
                btn.classList.add('active')
            }
        })

        $articles.forEach(article => {
            article.classList.remove('active')
        })

        const $content = document.getElementById(id)
        $content.classList.add('active')
    })
})