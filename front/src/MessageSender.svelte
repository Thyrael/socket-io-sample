<script>
  import { isConnected } from './store';
  import { username } from './store';
  import socket from './socket';

  let msg = '';

  const sendMsg = (e) => {
    if (e.keyCode == 13) {
      socket.emit('message', {
        msg,
        username: $username,
      });
      msg = '';
    }
  };
</script>

<div>
  <input
    type="text"
    placeholder="Type your message..."
    disabled="{!$isConnected}"
    bind:value="{msg}"
    on:keypress="{sendMsg}"
  />
</div>

<style>
  input {
    width: 100%;
    height: 40px;
    padding: 0 0 0 15px;
    color: rgba(255, 62, 0, 0.69);
    border-radius: 20px;
  }

  input:focus {
    outline: none;
  }

  input:disabled {
    cursor: not-allowed;
  }
</style>
