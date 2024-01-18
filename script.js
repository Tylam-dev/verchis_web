const body = document.querySelector("body")
const section_news = document.querySelector(".section_news")
const section_products_container_product1 = document.querySelector('.section_products_container_product1')
const section_products_container_product2 = document.querySelector('.section_products_container_product2')
const section_about_us = document.querySelector('.section_about_us')
const section_gallery = document.querySelector('.section_gallery')
const menu = document.querySelector('.menu')
//Nav bar variables
const navbar_lines = document.querySelector('.navbar_lines')
const menu_container_text_container = document.querySelectorAll('.menu_container_text_container')
//News section variables
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

//Products section varibales
//Product 1
const section_products_container_product1_imgcontainer_elemenstcontainer_img1 = document.querySelector('.section_products_container_product1_imgcontainer_elemenstcontainer_img1')
const section_products_container_product1_imgcontainer_elemenstcontainer_img2 = document.querySelector('.section_products_container_product1_imgcontainer_elemenstcontainer_img2')
const section_products_container_product1_imgcontainer_elemenstcontainer_img3 = document.querySelector('.section_products_container_product1_imgcontainer_elemenstcontainer_img3')
const section_products_container_product1_descriptioncontainer1 = document.querySelector('.section_products_container_product1_descriptioncontainer1')
const section_products_container_product1_descriptioncontainer2 = document.querySelector('.section_products_container_product1_descriptioncontainer2')
const section_products_container_product1_descriptioncontainer3 = document.querySelector('.section_products_container_product1_descriptioncontainer3')
const section_products_container_product1_descriptioncontainer1_description = document.querySelector('.section_products_container_product1_descriptioncontainer1_description')
const section_products_container_product1_descriptioncontainer2_description = document.querySelector('.section_products_container_product1_descriptioncontainer2_description')
const section_products_container_product1_descriptioncontainer3_description = document.querySelector('.section_products_container_product1_descriptioncontainer3_description')
const section_products_container_product1_imgcontainer_elemenstcontainer_arrow_left = document.querySelector('.section_products_container_product1_imgcontainer_elemenstcontainer_arrow_left')
const section_products_container_product1_imgcontainer_elemenstcontainer_arrow_right = document.querySelector('.section_products_container_product1_imgcontainer_elemenstcontainer_arrow_right')
const section_products_product1_selection_div_option_1 = document.querySelector('.section_products_product1_selection_div_option_1')
const section_products_product1_selection_div_option_2 = document.querySelector('.section_products_product1_selection_div_option_2')
const section_products_product1_selection_div_option_3 = document.querySelector('.section_products_product1_selection_div_option_3')
//Product 2
const section_products_container_product2_imgcontainer_elemenstcontainer_img1 = document.querySelector('.section_products_container_product2_imgcontainer_elemenstcontainer_img1')
const section_products_container_product2_imgcontainer_elemenstcontainer_img2 = document.querySelector('.section_products_container_product2_imgcontainer_elemenstcontainer_img2')
const section_products_container_product2_imgcontainer_elemenstcontainer_img3 = document.querySelector('.section_products_container_product2_imgcontainer_elemenstcontainer_img3')
const section_products_container_product2_descriptioncontainer1 = document.querySelector('.section_products_container_product2_descriptioncontainer1')
const section_products_container_product2_descriptioncontainer2 = document.querySelector('.section_products_container_product2_descriptioncontainer2')
const section_products_container_product2_descriptioncontainer3 = document.querySelector('.section_products_container_product2_descriptioncontainer3')
const section_products_container_product2_descriptioncontainer1_description = document.querySelector('.section_products_container_product2_descriptioncontainer1_description')
const section_products_container_product2_descriptioncontainer2_description = document.querySelector('.section_products_container_product2_descriptioncontainer2_description')
const section_products_container_product2_descriptioncontainer3_description = document.querySelector('.section_products_container_product2_descriptioncontainer3_description')
const section_products_container_product2_imgcontainer_elemenstcontainer_arrow_left = document.querySelector('.section_products_container_product2_imgcontainer_elemenstcontainer_arrow_left')
const section_products_container_product2_imgcontainer_elemenstcontainer_arrow_right = document.querySelector('.section_products_container_product2_imgcontainer_elemenstcontainer_arrow_right')
const section_products_product2_selection_div_option_1 = document.querySelector('.section_products_product2_selection_div_option_1')
const section_products_product2_selection_div_option_2 = document.querySelector('.section_products_product2_selection_div_option_2')
const section_products_product2_selection_div_option_3 = document.querySelector('.section_products_product2_selection_div_option_3')
//About us section variables 
const section_about_us_container = document.querySelector('.section_about_us_container')
const section_about_us_selection_div_option_1 = document.querySelector('.section_about_us_selection_div_option_1')
const section_about_us_selection_div_option_2 = document.querySelector('.section_about_us_selection_div_option_2')
const section_about_us_selection_div_option_3 = document.querySelector('.section_about_us_selection_div_option_3')
//Gallery section variables
const section_gallery_imgcontainer_img1container_img = document.querySelector('.section_gallery_imgcontainer_img1container_img')
const section_gallery_imgcontainer_img2container_img = document.querySelector('.section_gallery_imgcontainer_img2container_img')
const section_gallery_imgcontainer_img3container_img = document.querySelector('.section_gallery_imgcontainer_img3container_img')
const section_gallery_imgcontainer_img4container_img = document.querySelector('.section_gallery_imgcontainer_img4container_img')
//Visualitation variables
const background_visualization = document.querySelector('.background_visualization')
const background_visualization_img = document.querySelector('.background_visualization_img')
const background_visualization_close = document.querySelector('.background_visualization_close')
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
observerCreator(section_products_container_product1)
observerCreator(section_products_container_product2)
observerCreator(section_about_us)
observerCreator(section_gallery)

navbar_lines.addEventListener('click', function(){
    body.classList.toggle('stick')
    menu.classList.toggle('hide')
})

menu_container_text_container.forEach(element => element.addEventListener('click',function(){
    body.classList.toggle('stick')
    menu.classList.toggle('hide')
    console.log('cambio')
}))


function setLanguage(language){
    //The webpage load in Spanish for default
    section_news_newscontainer_contentcontainer_imgcontainer_img1.src = images.news_images[1]
    section_news_newscontainer_contentcontainer_imgcontainer_img2.src = images.news_images[2]
    section_news_newscontainer_contentcontainer_imgcontainer_img3.src = images.news_images[3]
    section_products_container_product1_imgcontainer_elemenstcontainer_img1.src = images.product1_images[1]
    section_products_container_product1_imgcontainer_elemenstcontainer_img2.src = images.product1_images[2]
    section_products_container_product1_imgcontainer_elemenstcontainer_img3.src = images.product1_images[3]
    section_products_container_product2_imgcontainer_elemenstcontainer_img1.src = images.product2_images[1]
    section_products_container_product2_imgcontainer_elemenstcontainer_img2.src = images.product2_images[2]
    section_products_container_product2_imgcontainer_elemenstcontainer_img3.src = images.product2_images[3]
    section_gallery_imgcontainer_img1container_img.src = images.gallery_images[1]
    section_gallery_imgcontainer_img2container_img.src = images.gallery_images[2]
    section_gallery_imgcontainer_img3container_img.src = images.gallery_images[3]
    section_gallery_imgcontainer_img4container_img.src = images.gallery_images[4]
    section_news_newscontainer_contentcontainer_imgcontainer_description1.textContent = `${language.newsDescription[1]}`
    section_news_newscontainer_contentcontainer_imgcontainer_description2.textContent = `${language.newsDescription[2]}`
    section_news_newscontainer_contentcontainer_imgcontainer_description3.textContent = `${language.newsDescription[3]}`
    section_products_container_product1_descriptioncontainer1_description.textContent = `${language.product1_description[1]}`
    section_products_container_product1_descriptioncontainer2_description.textContent = `${language.product1_description[2]}`
    section_products_container_product1_descriptioncontainer3_description.textContent = `${language.product1_description[3]}`
    section_products_container_product2_descriptioncontainer1_description.textContent = `${language.product2_description[1]}`
    section_products_container_product2_descriptioncontainer2_description.textContent = `${language.product2_description[2]}`
    section_products_container_product2_descriptioncontainer3_description.textContent = `${language.product2_description[3]}`
    
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
        const interval_news = setInterval(newContentChange, 20000)
        function newContentChange(){
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
    }
    newsChange()
    function products1Change(){
        let productNumber = 1
        function setNewProduct(){
            switch(productNumber){
                case 1:
                    section_products_container_product1_imgcontainer_elemenstcontainer_img1.classList.add('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img2.classList.remove('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img3.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer1.classList.add('aparecer')
                    section_products_container_product1_descriptioncontainer2.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer3.classList.remove('aparecer')
                    section_products_product1_selection_div_option_1.classList.add('selection_peach')
                    section_products_product1_selection_div_option_2.classList.remove('selection_peach')
                    section_products_product1_selection_div_option_3.classList.remove('selection_peach')
                    break
                case 2:
                    section_products_container_product1_imgcontainer_elemenstcontainer_img1.classList.remove('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img2.classList.add('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img3.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer1.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer2.classList.add('aparecer')
                    section_products_container_product1_descriptioncontainer3.classList.remove('aparecer')
                    section_products_product1_selection_div_option_1.classList.remove('selection_peach')
                    section_products_product1_selection_div_option_2.classList.add('selection_peach')
                    section_products_product1_selection_div_option_3.classList.remove('selection_peach')
                    break
                case 3:
                    section_products_container_product1_imgcontainer_elemenstcontainer_img1.classList.remove('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img2.classList.remove('aparecer')
                    section_products_container_product1_imgcontainer_elemenstcontainer_img3.classList.add('aparecer')
                    section_products_container_product1_descriptioncontainer1.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer2.classList.remove('aparecer')
                    section_products_container_product1_descriptioncontainer3.classList.add('aparecer')
                    section_products_product1_selection_div_option_1.classList.remove('selection_peach')
                    section_products_product1_selection_div_option_2.classList.remove('selection_peach')
                    section_products_product1_selection_div_option_3.classList.add('selection_peach')
                    break
            }
        }
        setNewProduct()
        const interval_product1 = setInterval(NewContentChange, 10000)
        function NewContentChange(){
            if(productNumber == 3){
                productNumber = 1
            }else{
                productNumber += 1
            }
            setNewProduct()
        }
        section_products_container_product1_imgcontainer_elemenstcontainer_arrow_left.addEventListener('click', function(){
            if(productNumber == 1){
                productNumber = 3
            }else{
                productNumber -= 1
            }
            setNewProduct()
        })
        section_products_container_product1_imgcontainer_elemenstcontainer_arrow_right.addEventListener('click', function(){
            if(productNumber == 3){
                productNumber = 1
            }else{
                productNumber += 1
            }
            setNewProduct()
        })
    }
    products1Change()
    function products2Change(){
        let productNumber = 1
        function setNewProduct(){
            switch(productNumber){
                case 1:
                    section_products_container_product2_imgcontainer_elemenstcontainer_img1.classList.add('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img2.classList.remove('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img3.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer1.classList.add('aparecer')
                    section_products_container_product2_descriptioncontainer2.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer3.classList.remove('aparecer')
                    section_products_product2_selection_div_option_1.classList.add('selection_green')
                    section_products_product2_selection_div_option_2.classList.remove('selection_green')
                    section_products_product2_selection_div_option_3.classList.remove('selection_green')
                    break
                case 2:
                    section_products_container_product2_imgcontainer_elemenstcontainer_img1.classList.remove('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img2.classList.add('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img3.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer1.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer2.classList.add('aparecer')
                    section_products_container_product2_descriptioncontainer3.classList.remove('aparecer')
                    section_products_product2_selection_div_option_1.classList.remove('selection_green')
                    section_products_product2_selection_div_option_2.classList.add('selection_green')
                    section_products_product2_selection_div_option_3.classList.remove('selection_green')
                    break
                case 3:
                    section_products_container_product2_imgcontainer_elemenstcontainer_img1.classList.remove('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img2.classList.remove('aparecer')
                    section_products_container_product2_imgcontainer_elemenstcontainer_img3.classList.add('aparecer')
                    section_products_container_product2_descriptioncontainer1.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer2.classList.remove('aparecer')
                    section_products_container_product2_descriptioncontainer3.classList.add('aparecer')
                    section_products_product2_selection_div_option_1.classList.remove('selection_green')
                    section_products_product2_selection_div_option_2.classList.remove('selection_green')
                    section_products_product2_selection_div_option_3.classList.add('selection_green')
                    break
            }
        }
        setNewProduct()
        const interval_product2 = setInterval(NewContentChange, 10000)
        function NewContentChange(){
            if(productNumber == 3){
                productNumber = 1
            }else{
                productNumber += 1
            }
            setNewProduct()
        }
        section_products_container_product2_imgcontainer_elemenstcontainer_arrow_left.addEventListener('click', function(){
            if(productNumber == 1){
                productNumber = 3
            }else{
                productNumber -= 1
            }
            setNewProduct()
        })
        section_products_container_product2_imgcontainer_elemenstcontainer_arrow_right.addEventListener('click', function(){
            if(productNumber == 3){
                productNumber = 1
            }else{
                productNumber += 1
            }
            setNewProduct()
        })
    }
    products2Change()
    function aboutusChange(){
        let newSection = 1 
        function setSection(){
            if(newSection == 1){
                section_about_us_container.scrollTo({
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
                section_about_us_selection_div_option_1.classList.remove('selection_green')
                section_about_us_selection_div_option_2.classList.add('selection_yellow')
                nextSection()
            }else if(newSection == 2){
                section_about_us_container.scrollTo({
                    left: window.innerWidth * 2,
                    behavior: 'smooth'
                })
                section_about_us_selection_div_option_2.classList.remove('selection_yellow')
                section_about_us_selection_div_option_3.classList.add('selection_peach')
                nextSection()
            } else if(newSection == 3){
                section_about_us_container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
                section_about_us_selection_div_option_1.classList.add('selection_green')
                section_about_us_selection_div_option_3.classList.remove('selection_peach')
                nextSection()
            }
        }
        function nextSection(){
            if(newSection == 1){
                newSection += 1
            }else if(newSection == 2){
                newSection += 1
            } else if(newSection == 3){
                newSection = 1
            }
        }
        setSection()
        const interval_aboutus = setInterval(setSection, 10000)    
    }
    aboutusChange()
    function galleryPicturePreview(picture){
        background_visualization.style.display = 'flex'
        background_visualization_img.src = picture
        body.style.overflowY = 'hidden'
        console.log(picture)
    }
    section_gallery_imgcontainer_img1container_img.addEventListener('click',function(){galleryPicturePreview(images.gallery_images[1])})
    section_gallery_imgcontainer_img2container_img.addEventListener('click',function(){galleryPicturePreview(images.gallery_images[2])})
    section_gallery_imgcontainer_img3container_img.addEventListener('click',function(){galleryPicturePreview(images.gallery_images[3])})
    section_gallery_imgcontainer_img4container_img.addEventListener('click',function(){galleryPicturePreview(images.gallery_images[4])})
    function closePicturePreview(){
        background_visualization.style.display = 'none'
        body.style.overflowY = 'auto'
    }
    background_visualization_close.addEventListener('click',closePicturePreview)
}
setLanguage(languages.espaniol)