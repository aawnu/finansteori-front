<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="wp-article-outer container max-w-screen-lg">
    {@render children?.()}
</div>