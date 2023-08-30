document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = event.target.newUsername.value;
    const email = event.target.email.value;
    const newPassword = event.target.newPassword.value;

    // Đọc dữ liệu người dùng giả từ tệp data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const existingUser = users.find(u => u.username === newUsername);
            if (existingUser) {
                alert('Tên đăng nhập đã tồn tại.');
                return;
            }

            // Thêm người dùng mới vào dữ liệu giả
            users.push({ username: newUsername, password: newPassword, email: email });
           

            // Chuyển hướng sau 1 giây (tùy chỉnh thời gian nếu cần)
           
                window.location.href = 'login.html';
            
        })
        .catch(error => console.error('Error fetching data:', error));
});
