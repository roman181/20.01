// Socket.io Client Implementation for Multiplayer Synchronization

const socket = io('http://localhost:3000'); // Ensure the URL is correct for your server

// Event listener for connection
socket.on('connect', () => {
    console.log('Connected to server as ' + socket.id);
});

// Example: Sync player movement
socket.on('playerMoved', (data) => {
    // Handle player movement synchronization
    console.log('Player moved:', data);
});

// Sending player movement to the server
function movePlayer(position) {
    socket.emit('playerMove', { id: socket.id, position });
}

// Example usage of movePlayer
// movePlayer({ x: 10, y: 20 });
