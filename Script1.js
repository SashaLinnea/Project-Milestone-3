function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
    
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
    
       
        alert('Thank you for your message!');
    });
    
}


