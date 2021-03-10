<script>
  import MessageSender from './MessageSender.svelte';

  import socket from './socket';
  let arrayMessages = [];
  socket.on('messages', (messages) => {
    return (arrayMessages = messages);
  });
</script>

<div class="chat">
  <div class="messages">
    {#each arrayMessages as msg}
      <p>
        <span class="username">{msg.username} :</span>
        <span>{msg.msg}</span>
      </p>
    {/each}
  </div>
  <MessageSender />
</div>

<style>
  .chat {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 75%;
    padding: 10px 10px 0 10px;
  }

  .username {
    color: rgba(255, 62, 0, 0.69);
  }
</style>
