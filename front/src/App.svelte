<script>
	import Header from "./Header.svelte"
	import Sidebar from "./Sidebar.svelte"
	import Chat from "./Chat.svelte"

	import { isConnected } from "./store"
    import { username } from "./store"
    import socket from "./socket"

	socket.on("connect_error", (err) => {
		if (err.message === "invalid username") {
			username.update(n => '');
			isConnected.update(n => false);
		}
	});
</script>

<main>
	<Header />
	<div class="container">
		<Sidebar />
		<Chat />
	</div>
</main>

<style>
.container {
	display: flex;
	flex-flow: row;
}
</style>
