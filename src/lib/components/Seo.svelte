<script lang="ts">
  export let title: string;
  export let ogTitle: string | null = null;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={description} />
  <meta
    property="og:image"
    content="https://cdn-imgix.headout.com/tour/29564/TOUR-IMAGE/ec208e5b-88d3-4b3d-b2eb-19b5e3839aea-15800-berlin-berlin-tv-tower-fast-view-ticket---breakfast-01-4-.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
