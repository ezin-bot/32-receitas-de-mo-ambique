document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       FAQ ACCORDION
       ========================================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Fecha outras respostas
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.style.maxHeight = null;
                    q.nextElementSibling.style.paddingTop = '0';
                    q.querySelector('i').classList.remove('fa-chevron-up');
                    q.querySelector('i').classList.add('fa-chevron-down');
                }
            });
            
            // Toggle resposta atual
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.paddingTop = '20px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    /* ==========================================================================
       LIGHTBOX (Galeria Interna)
       ========================================================================== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Abre o lightbox ao clicar na imagem
    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            document.body.style.overflow = "hidden"; // Evita scroll do body
        });
    });

    // Função para fechar
    const closeLightbox = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    };

    // Fecha no botão
    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }

    // Fecha ao clicar fora da imagem
    window.addEventListener("click", function(event) {
        if (event.target == lightbox) {
            closeLightbox();
        }
    });

    /* ==========================================================================
       INTERSECTION OBSERVER (Animações de Scroll)
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));
    
});
