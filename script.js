const section_news = document.querySelector(".section_news")
const section_products = document.querySelector('.section_products')
const section_about_us = document.querySelector('.section_about_us')
const section_gallery = document.querySelector('.section_gallery')
const section_news_newscontainer_contentcontainer_imgcontainer_img1 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_img1')
const section_news_newscontainer_contentcontainer_imgcontainer_img2 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_img2')
const section_news_newscontainer_contentcontainer_imgcontainer_img3 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_img3')
const section_news_newscontainer_contentcontainer_imgcontainer_description1 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_description1')
const section_news_newscontainer_contentcontainer_imgcontainer_description2 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_description2')
const section_news_newscontainer_contentcontainer_imgcontainer_description3 = document.querySelector('.section_news_newscontainer_contentcontainer_imgcontainer_description3')
const section_news_newscontainer_arrow_left = document.querySelector('.section_news_newscontainer_arrow_left')
const section_news_newscontainer_arrow_right = document.querySelector('.section_news_newscontainer_arrow_right')
const section_news_selection_div_option_1 = document.querySelector('.section_news_selection_div_option_1')
const section_news_selection_div_option_2 = document.querySelector('.section_news_selection_div_option_2')
const section_news_selection_div_option_3 = document.querySelector('.section_news_selection_div_option_3')
//Observers function
function observerCreator (section){
    const section_news_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                section.classList.add('aparecer')
            }else{
                section.classList.remove('aparecer')
            }
        });
    }, { threshold: 0.2 })
    section_news_observer.observe(section)
}
observerCreator(section_news)
observerCreator(section_products)
observerCreator(section_about_us)
observerCreator(section_gallery)

function setLanguage(language){
    section_news_newscontainer_contentcontainer_imgcontainer_description1.textContent = `${language.newsDescription[1]}`
    section_news_newscontainer_contentcontainer_imgcontainer_description2.textContent = `${language.newsDescription[2]}`
    section_news_newscontainer_contentcontainer_imgcontainer_description3.textContent = `${language.newsDescription[3]}`
    function newsChange(){
        let newsNumber = 1
        function setNewContent(){
            switch(newsNumber){
                case 1:
                    section_news_newscontainer_contentcontainer_imgcontainer_img1.classList.add('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img2.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img3.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description1.classList.add('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description2.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description3.classList.remove('aparecer')
                    section_news_selection_div_option_1.classList.add('selection_green')
                    section_news_selection_div_option_2.classList.remove('selection_peach')
                    section_news_selection_div_option_3.classList.remove('selection_yellow')

                    break
                case 2:
                    section_news_newscontainer_contentcontainer_imgcontainer_img1.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img2.classList.add('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img3.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description1.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description2.classList.add('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description3.classList.remove('aparecer')
                    section_news_selection_div_option_1.classList.remove('selection_green')
                    section_news_selection_div_option_2.classList.add('selection_peach')
                    section_news_selection_div_option_3.classList.remove('selection_yellow')
                    break
                case 3:
                    section_news_newscontainer_contentcontainer_imgcontainer_img1.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img2.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_img3.classList.add('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description1.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description2.classList.remove('aparecer')
                    section_news_newscontainer_contentcontainer_imgcontainer_description3.classList.add('aparecer')
                    section_news_selection_div_option_1.classList.remove('selection_green')
                    section_news_selection_div_option_2.classList.remove('selection_peach')
                    section_news_selection_div_option_3.classList.add('selection_yellow')
                    break
            }
        }
        setNewContent()
        const interval_news = setInterval(NewContentChange, 10000)
        function NewContentChange(){
            if(newsNumber == 3){
                newsNumber = 1
            }else{
                newsNumber += 1
            }
            setNewContent()
        }
        section_news_newscontainer_arrow_left.addEventListener('click', function(){
            if(newsNumber == 1){
                newsNumber = 3
            }else{
                newsNumber -= 1
            }
            setNewContent()
        })
        section_news_newscontainer_arrow_right.addEventListener('click', function(){
            if(newsNumber == 3){
                newsNumber = 1
            }else{
                newsNumber += 1
            }
            setNewContent()
        })
        NewContentChange
    }
    newsChange()
}
setLanguage(languages.espaniol)