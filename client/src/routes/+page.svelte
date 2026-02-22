<script>
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<div>
    <h1>Home</h1>
    <p>{count}</p>
    <button onclick={increment}>Increment</button>
</div>
