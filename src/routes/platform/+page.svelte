<script lang="ts">
	const FormatExchange = (pct: number, min: number, symbol: string): string => {
		const pctS = pct
			.toFixed(2)
			.replace('.', ',')
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		const minS = min
			.toFixed(0)
			.replace('.', ',')
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		const cross = (min / (pct / 100)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return `${pctS}% &gt; ${minS} ${symbol} &ge; ${cross} ${symbol}`;
	};

	const schema: string = JSON.stringify([
		{
			'@context': 'https://schema.org/',
			'@type': 'Article',
			author: [
				{
					'@type': 'Person',
					name: 'Alex Ahlgreen Westergaard'
				}
			],
			headline: 'Aktiemægler platforme i danmark',
			publisher: {
				'@type': 'Organization',
				name: 'Finansteori'
			},
			mainEntityOfPage: `http://finansteori.dk/platform`
		},
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
					name: 'Aktiemægler platforme i danmark',
					item: `http://finansteori.dk/platform`
				}
			]
		}
	]);
</script>

<svelte:head>
	<link rel="canonical" href="http://finansteori.dk/platform" />

	<title>Aktiemægler platforme i danmark | Finansteori</title>
	<meta
		name="description"
		content="Hvilken aktiemægler skal man vælge, hvis man gerne vil investere sin formue i aktier?"
	/>
	<meta property="og:site_name" content="Finansteori" />
	<meta property="og:url" content="http://finansteori.dk/platform" />
	<meta property="og:title" content="Aktiemægler platforme i danmark" />
	<meta property="og:type" content="article" />

	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<div class="wp-article-outer container">
	<h1 class="mb-2 font-lora text-4xl font-black leading-relaxed">
		Aktiemægler platforme i danmark
	</h1>
	<div class="wp-article">
		<p class="my-2 leading-relaxed">
			I danmark har vi ikke nogen lovgivning der forbyder dig at bruge en udlandsk aktiemægler, men
			det kommer med en hvis kompleksitet, da du så selv skal opgøre dine handler og stå inde for
			eventuelle gevinster og tab.
		</p>
		<p class="my-2 leading-relaxed">
			Ved at bruge en aktiemægler allerede etableret på det danske markedet, forsimpler du din
			process, da de vil sørge for at indrapportere din oplysninger til Skat direkte. Her bliver din
			opgave væsentligt nemmere, da du blot skal tjekke op på korrektheden heraf.
		</p>
		<p class="my-2 leading-relaxed">
			I danmark er vores mest anvendte aktiemæglere Saxo Bank og Nordnet, men de fleste større
			banker tilbyder også aktiehandel internt for deres kunder. Som udgangspunkt forholder vi os
			til disse 2 mæglere, da deres primære forretning er børshandel.
		</p>

		<h2 class="mb-2 mt-6 font-lora text-2xl font-bold leading-relaxed">
			Handelsgebyr (Standardpriser)
		</h2>
		<p class="my-2 leading-relaxed">
			Nedenfor ser du de respektive priser fra hver platform, som de står skrevet den 17 maj 2024.
			Formatet er opstilt som "Kurtage &gt; Mindstepris &ge; Udligning". Det vil sige, at hvis
			kurtagen er 0,05% og mindsteprisen er 5 kroner, så vil udligningen være 5/0,0005= 10.000
			kroner, altså du skal investere minimum 10.000 kroner for at opnå mindstekurtagen.
		</p>
		<p class="my-2 leading-relaxed">
			Der er en enkelt aktie, som ikke følger dette format. Saxo Bank har en prisgivning på TSX
			Venture Exchange hvor hver aktie har en fast pris, mens hver handel har en mindste og en
			højeste kurtage per handel.
		</p>
	</div>
</div>
<div class="px-4 py-8">
	<div class="container mx-auto max-w-screen-lg">
		<table class="w-full table-fixed">
			<thead>
				<tr>
					<th></th>
					<th class="text-center font-lora text-2xl">SAXO BANK</th>
					<th class="text-center font-lora text-2xl">NORDNET</th>
				</tr>
			</thead>
			<!--- NORDIC -->
			<tbody>
				<tr>
					<th class="pb-2 pt-4 text-left font-lora text-lg font-bold">SKANDINAVIEN</th>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th class="text-left font-normal">NASDAQ OMX Copenhagen</th>
					<td class="text-center">{@html FormatExchange(0.08, 10, 'DKK')}</td>
					<td class="text-center">{@html FormatExchange(0.1, 29, 'DKK')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">NASDAQ OMX Helsinki</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'EUR')}</td>
					<td class="text-center">{@html FormatExchange(0.1, 10, 'EUR')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">NASDAQ OMX Stockholm</th>
					<td class="text-center">{@html FormatExchange(0.08, 10, 'SEK')}</td>
					<td class="text-center">{@html FormatExchange(0.1, 59, 'SEK')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Oslo Børs/Oslo Stock Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 10, 'NOK')}</td>
					<td class="text-center">{@html FormatExchange(0.1, 59, 'NOK')}</td>
				</tr>
				<!--- USA / Canada -->
				<tr>
					<th class="pb-2 pt-4 text-left font-lora text-lg font-bold">AMERIKA / CANADA</th>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th class="text-left font-normal">NASDAQ</th>
					<td class="text-center">{@html FormatExchange(0.08, 1, 'USD')}</td>
					<td class="text-center">{@html FormatExchange(0.15, 13, 'USD')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">New York Stock Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 1, 'USD')}</td>
					<td class="text-center">{@html FormatExchange(0.15, 13, 'USD')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Toronto Stock Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 5, 'CAD')}</td>
					<td class="text-center">{@html FormatExchange(0.15, 19, 'CAD')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">TSX Venture Exchange</th>
					<td class="text-center">0,015 &gt; 5 CAD &le; 25 CAD</td>
					<td class="text-center">{@html FormatExchange(0.15, 19, 'CAD')}</td>
				</tr>
				<!--- EUROPA -->
				<tr>
					<th class="pb-2 pt-4 text-left font-lora text-lg font-bold">EUROPA</th>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th class="text-left font-normal">Deutsche Börse (XETRA)</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'EUR')}</td>
					<td class="text-center">{@html FormatExchange(0.15, 12, 'EUR')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">London Stock Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'GBP')}</td>
					<td class="text-center">{@html FormatExchange(0.15, 12, 'GBP')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Euronext</th>
					<td class="text-center">{@html FormatExchange(0.08, 2, 'EUR')}</td>
					<td class="text-center">{@html FormatExchange(0.3, 25, 'GBP')}</td>
				</tr>
				<tr>
					<th class="text-left font-normal">SIX Swiss Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'CHF')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
				<!--- ASIA -->
				<tr>
					<th class="pb-2 pt-4 text-left font-lora text-lg font-bold">ASIEN</th>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th class="text-left font-normal">Australian Securities Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'AUD')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Hong Kong Exchanges</th>
					<td class="text-center">{@html FormatExchange(0.08, 15, 'HKD')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Shanghai-Hong Kong Stock Connect</th>
					<td class="text-center">{@html FormatExchange(0.08, 15, 'CNH')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Singapore Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 3, 'SGD')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
				<tr>
					<th class="text-left font-normal">Tokyo Stock Exchange</th>
					<td class="text-center">{@html FormatExchange(0.08, 800, 'JPY')}</td>
					<td class="text-center">&mdash;</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
