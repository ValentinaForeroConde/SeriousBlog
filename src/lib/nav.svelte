<script>
	export let pages;
</script>

<div class="navbar bg-base-300">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">Serious Blog</a>
	</div>
	<div class="navbar-center flex">
		<ul
			tabindex="0"
			class="menu menu-horizontal p-0"
		>
			<li><a href={`/`}>HOME</a></li>
			{#each pages as { title, slug }}
				<li><a href={`/pages/${slug}`}>{title}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/" class="btn">Login</a>
	</div>
</div>
