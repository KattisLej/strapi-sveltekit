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
 <section class="body-wrapper">
<div class="cardContainer">
  {#each data.data as post}
          <a href="" class="serviceCard">
                              <div class="serviceCardHeader">

                                  <div class="serviceCardImage">

                                  </div>
                                  <div><h2>{post.attributes.title}</h2></div>
                              </div>
                              <div class="serviceCardBody">
                                  <p >{post.attributes.description}</p>
                                  <p >{post.attributes.content}</p>
                              </div>
             </a>
  {/each}
</div>
 </section>
