<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import { formatTime } from "$lib/utils";

  type Writing = {
    title: string;
    date: Date;
    summary: string;
    link: string;
    tags?: string[];
    authors?: string;
    image?: string; // New property for image path

  };

  export let data: Writing[];
</script>


<div class="grid gap-y-8">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Image container - shows if image exists -->
        {#if item.image}
          <div class="md:w-40 shrink-0">
            <img 
              src={item.image} 
              alt={`Image for ${item.title}`} 
              class="w-full h-auto rounded-md object-cover"
              loading="lazy"
            />
          </div>
        {/if}
        
        <!-- Content container -->
        <div class="flex-1">
          <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
            <div class="text-lg text-black">
              {item.title}
              <ArrowUpRight size={18} class="inline text-neutral-400" />
            </div>
            <div class="sm:ml-auto mb-0.5 text-neutral-500">
              {formatTime("%B %-d, %Y", item.date)}
            </div>
          </div>
          
          {#if item.authors}
            <div class="mb-4 text-md text-neutral-900">
              {@html item.authors.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </div>
          {/if}
          
          <div class="text-lg leading-snug font-serif italic">
            {item.summary}
          </div>
          
          {#if item.tags && item.tags.length > 0}
            <div class="flex flex-wrap gap-2 mt-2">
              {#each item.tags as tag, index}
                <span class={`px-2 py-1 rounded-full text-sm ${index === 0 ? 'bg-blue-100 text-blue-800' : 'bg-neutral-100'}`}>
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </a>
  {/each}
</div>


<!-- 
<div class="grid gap-y-4">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-lg text-black">
          {item.title}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      {#if item.authors}
        <div class="mb-4 text-md text-neutral-900">
          {@html item.authors.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
        </div>
      {/if}
      <div class="text-lg leading-snug font-serif italic">
        {item.summary}
      </div>
      {#if item.tags && item.tags.length > 0}
        <div class="flex flex-wrap gap-2 mb-2">
          {#each item.tags as tag, index}
            <span class={`px-2 py-1 rounded-full text-sm ${index === 0 ? 'bg-blue-100 text-blue-800' : 'bg-neutral-100'}`}>
              {tag}
            </span>
          {/each}
        </div>
      {/if}
      
  
    </a>
  {/each}
</div>
 -->