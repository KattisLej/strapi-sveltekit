<script lang="ts">
  export let data: any;
  console.log(data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte & Strapi demo" />
</svelte:head>

<div>
  <h1>Welcome to Svelte & Strapi</h1>
  <p>This is our home page. The user lands here when visiting our website.</p>
</div>
<div>
  {#each data.data as post}
      <div>
          <h4 >{post.attributes.title}</h4>
          <p >{post.attributes.description}</p>
          <p >{post.attributes.content}</p>
      </div>
  {/each}
</div>