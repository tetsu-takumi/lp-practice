/*scroll*/
document.addEventListener('DOMContentLoaded',() => {
    const scrollImg = new IntersectionObserver((inImages) => {
        inImages.forEach((inImage) => {
            if (inImage.isIntersecting) {
                inImage.target.classList.add("display");
            }else {
                inImage.target.classList.remove("display");
            }
        });
        }, {
            threshold: 0.5,
        });
        document.querySelectorAll('.scroll').forEach((img) => {
            scrollImg.observe(img);
        });
    });

    /*swiper*/

    