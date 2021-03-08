<script>
    import Modal from "./Modal.svelte"

    import { isConnected } from "./store"
    import { username } from "./store"
    import socket from "./socket"

    let showModal = false;

    const connectUser = () => {
        if($username !== '') {
            username.update(n => $username);
            isConnected.update(n => true);
            socket.connect();
            socket.auth = { username: $username };
            showModal = false;
        }
    }

</script>

{#if !$isConnected}
<button on:click="{() => showModal = true}">
	Connect
</button>
{/if}

{#if showModal}
<Modal on:close="{() => showModal = false}">
    <div>
        <span>Enter your username</span>
        <input type="text" placeholder="Username" bind:value={$username} />
        <button on:click={connectUser}>Connect!</button>
    </div>

</Modal>

{/if}
<style>
    button {
        width: 100%;
        height: 50px;
        color: rgba(255, 62, 0, 0.69);
        font-weight: bold;
        font-size: 14px;
        background-color: transparent;
        border: 1px solid rgba(128, 128, 128, 0.2);
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover {
        color: white;
        background-color: rgba(255, 62, 0, 0.69);
    }

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

    span {
        color:  rgba(255, 62, 0, 0.2);
    }

</style>
