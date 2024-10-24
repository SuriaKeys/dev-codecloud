async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const hashedPassword = await hashPassword(password);

    
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    
    if (email === storedEmail && hashedPassword === storedPassword) {
        console.log('Successful login:', email);
        
        window.location.href = 'index.html';
    } else {
        console.error('Invalid login details');
        alert('Incorrect email address or password');
    }
});