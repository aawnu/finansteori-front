<script lang="ts">
	let main: undefined | string = $state(undefined);
	let sub: undefined | string = $state(undefined);

	interface Props {
		class?: undefined | string;
		original?: boolean;
	}

	let { class: className = undefined, original = false }: Props = $props();

	if (original) {
		main = 'fill-foreground';
		sub = 'fill-primary';
	}
</script>

<svg class={className} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 224">
	<title>Finansteori</title>
	<path
		class={main}
		d="m32.2 111h-18.8v-92.5h62.9v15.6h-44.1v23.2h38.2v15.3h-38.2zm74.1 0h-18.6v-92.5h18.6zm35.1 0h-18.6v-92.6h18.5l42.2 61.3v-61.3h18.7v92.6h-16.8l-44-63.7zm89.2 0h-18.8l33.1-92.6h19.8l33.1 92.6h-18.6l-7.6-21.5h-33.3zm24.2-74.5l-12.3 36.8h24.5zm71.3 74.5h-18.6v-92.5h18.4l42.3 61.2v-61.2h18.7v92.5h-16.9l-43.9-63.6zm111.9 1.2q-6.9 0-13.5-1.7-6.6-1.7-12-5.2-5.5-3.4-9-8.6-3.4-5.2-4.1-12.2h19.1q1 4.2 3.6 7.1 2.8 2.9 7.1 4.4 4.3 1.6 9.9 1.6 4.4 0 8.4-1.3 4-1.3 6.4-3.9 2.5-2.6 2.5-6.6 0-4.7-3.4-7.1-3.5-2.4-9.4-3.8l-17.4-3.8q-7.3-1.6-12.8-4.8-5.5-3.2-8.4-8.4-3-5.2-3-12.7 0-8.7 4.8-14.9 4.8-6.3 13-9.6 8.2-3.4 18.5-3.4 11.6 0 19.5 3.7 8 3.7 12.2 10.1 4.2 6.4 4.3 14.2h-18.7q-0.5-4.8-2.9-7.7-2.5-2.9-6.3-4.2-3.8-1.4-8.6-1.4-8.4 0-12.3 3.4-3.8 3.4-3.8 7.9 0 4.2 2.9 6.9 2.9 2.5 9.4 3.9l16 3.4q9 1.7 14.6 5.5 5.5 3.7 8.1 9 2.6 5.4 2.6 11.9 0 8.4-4.8 14.8-4.8 6.4-13.2 10-8.3 3.5-19.3 3.5zm-385.8 98.8h-18.8v-75.9h-28v-16.7h74.1v16.7h-27.3zm100 0h-64.2v-92.6h63.5v15.8h-44.8v22.4h38.9v15.4h-39v23l45.6 0.1zm50.8 1.3q-13.1 0-22.7-5.7-9.6-5.8-14.8-16.4-5.2-10.6-5.2-25.3 0-14.8 5.3-25.5 5.3-10.7 14.9-16.4 9.6-5.8 22.5-5.8 12.9 0 22.4 5.7 9.5 5.8 14.7 16.5 5.3 10.7 5.3 25.5 0 14.7-5.2 25.3-5.1 10.6-14.7 16.4-9.5 5.7-22.5 5.7zm0-15.4q6.8 0 11.7-3.2 5-3.3 7.7-10.2 2.7-7.1 2.7-18.3 0-11.6-2.8-18.8-2.7-7.2-7.6-10.5-5-3.4-11.7-3.4-6.7 0-11.7 3.4-5 3.3-7.8 10.6-2.7 7.1-2.7 18.7 0 11.3 2.7 18.3 2.8 6.9 7.8 10.2 5 3.2 11.7 3.2zm73.3 14.1h-18.6v-92.6h39q11.1 0 18.1 3.6 7.1 3.5 10.4 9.7 3.3 6.3 3.3 14.4 0 7.3-2.3 12.3-2.2 5-5.9 8.4-3.7 3.3-8 5.4l17.2 38.8h-19.4l-15.1-35.7h-18.7zm0-78.2v28.2h17.1q7.5 0 11.8-4 4.4-4.1 4.4-10.4 0-6.4-4.2-10.1-4.2-3.7-10.7-3.7z"
	/>
	<path
		class={main}
		fill-rule="evenodd"
		d="m427.7 118.4c-6.1 0.8-8.9 1.5-9.2 2.6-0.3 0.8 0.1 2.4 0.8 3.5 0.8 1.1 5.7 6.1 11.1 11 5.3 4.9 10 9.1 10.4 9.2 0.4 0.2 1.4-0.2 2.2-0.7 1.1-0.7 1.6-3.7 2.1-11.7 0.4-8 0.2-11.4-0.8-13.1-1-1.6-2.1-2.2-4.5-2.1-1.8 0.1-7.2 0.7-12.1 1.3zm-26.5 34.9l-15.2 15.2c-16.5-16.7-19.1-18.7-21.4-18.7-2.3 0-5.1 2.2-15.7 12.8-7.5 7.6-12.9 13.7-12.9 14.9-0.1 1.1 0.7 3.1 1.7 4.4 1.2 1.5 2.8 2.3 4.7 2.3 2.4 0 4.7-1.8 12.5-9.5l9.6-9.6c15.1 14.6 20.3 18.9 21.3 18.9 0.9 0 10.2-8.5 20.5-18.8l18.8-18.7-8.7-8.5zm33-4.6"
	/>
	<path
		class={sub}
		fill-rule="evenodd"
		d="m385.8 184m39.3-27.6l-8.1 8.2 0.5 46c13.6 0.4 16.2 0.1 16.7-0.8 0.4-0.7 0.8-14.6 0.9-30.9 0.1-18.5-0.3-29.9-0.9-30.2-0.5-0.3-4.6 3.2-9.1 7.7zm-24.6 24.2l-9 9c0.4 15.5 0.9 19.4 1.7 20.2 0.8 0.8 4 1.3 8.6 1.3q7.2 0 7.7-1.3c0.3-0.7 0.4-9.5 0.2-19.7l-0.2-18.5zm-45.6 2.8c-3 3.1-6.9 6.3-8.7 7l-3.3 1.2c0 14 0.5 17.4 1.3 18.2 0.8 0.8 4 1.3 8.5 1.3q7.3 0 7.8-1.3c0.3-0.7 0.4-8.2 0.2-16.7l-0.3-15.5zm13.6-3.2c-0.2 0.8-0.4 8-0.3 16l0.2 14.4c12.5 0.4 15.5 0.1 16.3-0.7 0.9-0.9 1.3-4.1 1.3-10l-0.1-8.8c-5.8-2.4-9.6-5.2-12.2-7.8-3.5-3.5-4.8-4.3-5.2-3.1z"
	/>
</svg>
