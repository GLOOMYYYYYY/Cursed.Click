// Glitch effect for text
document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.querySelector('.glitch');
    
    function createGlitchEffect() {
        const text = glitchText.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchInterval;
        
        function startGlitch() {
            let iterations = 0;
            const maxIterations = 10;
            
            glitchInterval = setInterval(() => {
                glitchText.textContent = text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= maxIterations) {
                    clearInterval(glitchInterval);
                    glitchText.textContent = text;
                }
            }, 30);
        }
        
        glitchText.addEventListener('mouseover', startGlitch);
    }
    
    createGlitchEffect();
});

// Random glitch effect for images
function addGlitchEffectToImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            const originalSrc = img.src;
            const glitchInterval = setInterval(() => {
                img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                img.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            }, 50);
            
            img.addEventListener('mouseout', () => {
                clearInterval(glitchInterval);
                img.style.filter = 'none';
                img.style.transform = 'none';
            });
        });
    });
}

// Add hover effect to merch items
function addMerchHoverEffect() {
    const merchItems = document.querySelectorAll('.merch-item');
    
    merchItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 0 20px #ff0000';
            item.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = 'none';
            item.style.transform = 'scale(1)';
        });
    });
}

// Add random glitch effect to section titles
function addGlitchToTitles() {
    const titles = document.querySelectorAll('.section h2');
    
    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            const originalText = title.textContent;
            let iterations = 0;
            
            const glitchInterval = setInterval(() => {
                title.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(33 + Math.floor(Math.random() * 94));
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= originalText.length) {
                    clearInterval(glitchInterval);
                    title.textContent = originalText;
                }
            }, 30);
        });
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    addGlitchEffectToImages();
    addMerchHoverEffect();
    addGlitchToTitles();
}); 