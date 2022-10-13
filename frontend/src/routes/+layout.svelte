<script>
	import './styles.css';
</script>

<header>
  This is a beautiful header for every page. It lives in the +layout file.
</header>
<main>
  <slot />
</main>
<footer class="footer">
  Also, all pages will have this nice footer. Even that comes from +layout.
</footer>

<style>
  .footer {
    position: absolute;
    bottom: 10px
  }
</style>