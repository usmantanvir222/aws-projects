async function fetchUserData() {
    const userId = document.getElementById('userId').value;
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }

    try {
        const response = await fetch(`https://8s4d9ef2o5.execute-api.us-west-2.amazonaws.com/prod/users?userId=${userId}`);
        const data = await response.json();
        const userDetails = document.getElementById('userDetails');
        
        if (response.ok) {
            userDetails.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            userDetails.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}
