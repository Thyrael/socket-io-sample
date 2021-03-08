<script>
import MessageSender from "./MessageSender.svelte"
</script>

<div class="chat">
    <div class="messages"></div>
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
</style>
