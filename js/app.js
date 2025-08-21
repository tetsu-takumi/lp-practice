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
/*typing*/
        const typingEl = document.getElementById("typing");
    if (typingEl) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = typingEl.textContent;
                    typingEl.textContent = "";
                    let i = 0;
                    function typingEffect() {
                        if (i < text.length) {
                            typingEl.textContent += text.charAt(i);
                            i++;
                            setTimeout(typingEffect, 300); 
                        }
                    }
                    typingEffect();
                }
            });
        }, { threshold: 0.5 });
        observer.observe(typingEl);
    }
});




