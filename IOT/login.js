document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Đọc dữ liệu người dùng giả từ tệp data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                

                if (user.role === 'user') {
                    // Chuyển hướng sang trang giao diện người dùng
                    window.location.href = 'userdevice.html';
                } else if (user.role === 'admin') {
                    // Chuyển hướng sang trang giao diện admin
                    window.location.href = 'index.html';
                }
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
