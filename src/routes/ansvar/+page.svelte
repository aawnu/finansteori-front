<script lang="ts">
	const schema: string = JSON.stringify([
		{
			'@context': 'https://schema.org/',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: '1',
					name: 'Finansteori',
					item: 'http://finansteori.dk/'
				},
				{
					'@type': 'ListItem',
					position: '2',
					name: 'Ansvarsfraskrivelse',
					item: `http://finansteori.dk/ansvar`
				}
			]
		}
	]);
</script>

<svelte:head>
	<link rel="canonical" href="http://finansteori.dk/ansvar" />

	<title>Ansvarsfraskrivelse - Finansteori</title>
	<meta
		name="description"
		content="Alt investering indebære risikoen for at tabe de investerede penge."
	/>
	<meta property="og:site_name" content="Finansteori" />
	<meta property="og:url" content="http://finansteori.dk/ansvar" />
	<meta property="og:title" content="Ansvarsfraskrivelse" />
	<meta property="og:type" content="website" />

	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<div class="container max-w-screen-md space-y-4">
	<h1 class="text-2xl font-bold leading-none">Ansvarsfraskrivelse</h1>
	<p class="leading-relaxed">
		Der er altid risiko involveret når du investere dine penge, uanset om det er i børsmarkedet,
		fast ejendom, egen virksomhed, eller andre former for kapital involvering. Du bør altid
		undersøge dine investerings-mål på forhånd og lave dine egne risiko-vurderinger inden du
		investere dine penge.
	</p>
	<p class="leading-relaxed">
		Finansteori påtager sig intet ansvar for eventuelle tab eller skader som følge af indholdet på
		denne hjemmeside, hvad enten det skyldes fejl eller uhensigtsmæssigheder i indholdet på
		hjemmesiden eller andre årsager. Finansteori forsøger altid at udgive korrekte informationer og
		kilder, men garantere ikke at indholdet er uden fejl eller mangler. Finansteori påtager sig ikke
		ansvar for fejl eller mangler.
	</p>
	<p class="leading-relaxed">
		Udgivet informationer på finansteori.dk er vejledende og er ikke konkret finansiel vejledning.
		Hvis du er i tvivl, bør du altid opsøge kontakt til en professionel rådgiver, som kan sætte sig
		ind i din situation.
	</p>
	<h2 class="!mt-6 text-lg font-bold leading-snug">Rapportering af fejl og mangler</h2>
	<p class="leading-relaxed">
		Målet med hjemmesiden er at udgive god vejledning, så vores læsere kan blive klogere på at
		investere. Nogle gange kan love, regler eller anden information ændre sig. Det kan gøre sidens
		indhold ukorrekt eller misvisende. Hvis du finder fejl eller mangler, er du velkommen til at
		kontakte os, så kigger vi på det!
	</p>
	<p class="leading-relaxed">
		<a class="font-bold text-primary" href="mailto:aaw@proxyseed.com">aaw@proxyseed.com</a>
	</p>
</div>
