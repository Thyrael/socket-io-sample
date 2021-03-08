<script>
    import { isConnected } from "./store"
</script>
<div>
    <input type="text" placeholder="Type your message..." disabled={!$isConnected} />
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
