<script>
  let headerMsg = 'Socket IO exercice';
  import { isConnected } from './store';
  import { username } from './store';
  import socket from './socket';

  const logout = () => {
    socket.disconnect();
    username.update((n) => '');
    isConnected.update((n) => false);
  };
</script>

<div class="header">
  <span>Made with <img src="svelte-logo-horizontal.svg" alt="svelte logo" /> </span>
  <h1>{headerMsg}</h1>
  <button on:click="{logout}">Log out</button>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 54px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.2);
  }

  h1 {
    color: rgba(255, 62, 0, 0.69);
    font-weight: bold;
    font-size: 24px;
  }

  img {
    width: 80px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 9px;
  }

  button {
    width: 95px;
    height: 30px;
    color: rgba(255, 62, 0, 0.69);
    font-weight: bold;
    font-size: 11px;
    background-color: transparent;
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-radius: 20px;
    cursor: pointer;
  }

  button:hover {
    color: white;
    background-color: rgba(255, 62, 0, 0.69);
  }
</style>
