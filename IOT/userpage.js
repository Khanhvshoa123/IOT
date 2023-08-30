// Dữ liệu giả JSON
const devicesData = [
    { id: 1, name: 'Thiết bị 1', status: 'on' },
    { id: 2, name: 'Thiết bị 2', status: 'off' }
    // Thêm dữ liệu thiết bị từ cơ sở dữ liệu giả vào đây
];

// Thêm dữ liệu thiết bị vào danh sách quản lý thiết bị
const deviceList = document.getElementById('deviceList');
devicesData.forEach(device => {
    const li = document.createElement('li');
    li.textContent = `${device.name} - Trạng thái: ${device.status}`;
    deviceList.appendChild(li);
});

// Thêm giao diện điều khiển thiết bị
const deviceControls = document.querySelector('.device-controls');
devicesData.forEach(device => {
    const button = document.createElement('button');
    button.textContent = `Điều khiển ${device.name}`;
    button.addEventListener('click', () => {
        // Xử lý điều khiển thiết bị ở đây (mã JavaScript tương ứng)
        alert(`Đang điều khiển ${device.name}`);
    });
    deviceControls.appendChild(button);
});

// Thêm dữ liệu trạng thái thiết bị vào danh sách thống kê
const statusList = document.getElementById('statusList');
devicesData.forEach(device => {
    const li = document.createElement('li');
    li.textContent = `${device.name} - Trạng thái: ${device.status}`;
    statusList.appendChild(li);
});

// Xử lý gửi phản hồi
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const feedbackMessage = event.target.feedbackMessage.value;
    // Xử lý gửi phản hồi ở đây (mã JavaScript tương ứng)
    alert('Phản hồi đã được gửi');
});
