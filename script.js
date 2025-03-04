
function showInvitation() {
    const guestName = document.getElementById('guestName').value.trim();
    if (guestName === '') {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }
            
    document.getElementById('displayName').textContent = guestName;
    document.getElementById('nameForm').style.display = 'none';
    document.getElementById('invitation').style.display = 'block';
    ocument.body.style.backgroundColor = '#ffebee';
}
