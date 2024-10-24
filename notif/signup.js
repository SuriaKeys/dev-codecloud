async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const hashedPassword = await hashPassword(password);

    
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', hashedPassword); 

    console.log('User registered:', { name, email });
    
    
    window.location.href = 'index.html'; 
});