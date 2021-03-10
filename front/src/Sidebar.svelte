<script>
  import UserConnect from './UserConnect.svelte';
  import socket from './socket';
  import { isConnected } from './store';

  let title = 'Connected users';
  let usersArray = [];
  socket.on('users', (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
    });
    users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    usersArray = users;
  });

  socket.on('user connected', (user) => {
    usersArray = [...usersArray, user];
  });

  socket.on('connect', () => {
    usersArray.forEach((user) => {
      if (user.self) {
        user.connected = true;
      }
    });
  });

  socket.on('logout', (user) => {
    usersArray = usersArray.filter((u) => u.userID !== user.userID);
  });
</script>

<div class="sidebar">
  <h4>{title}</h4>
  <div class="connected_users">
    {#if $isConnected}
      {#each usersArray as user}
        <span>{user.username}</span>
      {/each}
    {/if}
  </div>
  <div>
    <UserConnect />
  </div>
</div>

<style>
  .sidebar {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 25%;
    height: calc(100vh - 100px);
    border-right: 2px solid rgba(128, 128, 128, 0.2);
  }

  .connected_users {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 25%;
    padding: 20px;
  }

  h4 {
    margin-top: 0;
    color: rgba(255, 62, 0, 0.69);
    text-decoration: underline;
  }

  span {
    width: 100px;
    height: 25px;
    text-align: center;
    border: 1px solid rgba(255, 62, 0, 0.69);
    border-radius: 10px;
  }
</style>
