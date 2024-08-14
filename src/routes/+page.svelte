<script lang="ts">
	import Scales from 'phosphor-svelte/lib/Scales';
	import NewspaperClipping from 'phosphor-svelte/lib/NewspaperClipping';
	import Scroll from 'phosphor-svelte/lib/Scroll';
	import MoneyWavy from 'phosphor-svelte/lib/MoneyWavy';
	import Buildings from 'phosphor-svelte/lib/Buildings';
	import Robot from 'phosphor-svelte/lib/Robot';
	import AlignBottom from 'phosphor-svelte/lib/AlignBottom';
	import EscalatorDown from 'phosphor-svelte/lib/EscalatorDown';
	import CallBell from 'phosphor-svelte/lib/CallBell';
	import Cow from 'phosphor-svelte/lib/Cow';
	import Fire from 'phosphor-svelte/lib/Fire';
	import PresentationChart from 'phosphor-svelte/lib/PresentationChart';
	import PokerChip from 'phosphor-svelte/lib/PokerChip';
	import Percent from 'phosphor-svelte/lib/Percent';
	import SplitHorizontal from 'phosphor-svelte/lib/SplitHorizontal';
	import Baby from 'phosphor-svelte/lib/Baby';
	import ChartPieSlice from 'phosphor-svelte/lib/ChartPieSlice';
	import Bandaids from 'phosphor-svelte/lib/Bandaids';
	import AirTrafficControl from 'phosphor-svelte/lib/AirTrafficControl';
</script>

<svelte:head>
	<title>Finansteori</title>
	<meta
		name="description"
		content="Tag kontrol over din økonomi, før den tager kontrol over dig."
	/>
</svelte:head>

<div class="container flex items-center py-12">
	<div>
		<h1 class="max-w-screen-md font-lora text-6xl font-bold leading-tight">
			Kontroller din økonomi, før den kontrollere dig.
		</h1>
		<p class="max-w-screen-sm text-2xl font-light leading-relaxed">
			22% af unge danskere mellem 18 og 35 har problemer med deres økonomi ifølge Finans Danmark i
			2023.
		</p>
		<p class="mt-4 max-w-screen-sm font-medium italic leading-relaxed text-red-400">
			* Artiklerne på denne hjemmeside er en genskabelse af en kopi fra 2022, være opmærksom på at
			nogle informationer kan være udløbet. Alt investering bære risikoen for at miste sine penge,
			invester kun de penge du kan undvære.
		</p>
	</div>
</div>

<div class="container space-y-4 py-4">
	<a href="/platform" class="block text-2xl leading-snug text-blue-600">
		<Scales class="align-icon inline-block" weight="bold" />
		<b>Sammenlign:</b>
		Aktiemægler platforme i danmark
	</a>
	<a href="/aktieinvestering" class="block text-2xl leading-snug text-blue-600">
		<NewspaperClipping class="align-icon inline-block" weight="bold" />
		<b>Hvad er Aktieinvestering?</b> Alt om aktier for begyndere, start din portefølje i dag!
	</a>
	<a href="/aktiesparekonto" class="block text-2xl leading-snug text-blue-600">
		<Scroll class="align-icon inline-block" weight="bold" />
		<b>Aktiesparekontoen</b> - Kun 17% skat af dine investeringer
	</a>
	<a href="/candlesticks" class="block text-2xl leading-snug text-blue-600">
		<PresentationChart class="align-icon inline-block" weight="bold" />
		<b>Candlesticks</b> - Det fulde overblik over en periode
	</a>
	<a href="/etf" class="block text-2xl leading-snug text-blue-600">
		<AirTrafficControl class="align-icon inline-block" weight="bold" />
		<b>ETF'er</b> - Investering i lukkede og børsnoterede fonde
	</a>
	<a href="/investeringsforeninger" class="block text-2xl leading-snug text-blue-600">
		<Buildings class="align-icon inline-block" weight="bold" />
		<b>Investeringsforeninger</b>, fonde og ETF'er giver stor spredning til få penge
	</a>
	<a href="/investeringsrobotter" class="block text-2xl leading-snug text-blue-600">
		<Robot class="align-icon inline-block" weight="bold" />
		<b>Investeringsrobotter</b>, månedsopsparing med automatiske investeringer
	</a>
	<a href="/udbytteinvestering" class="block text-2xl leading-snug text-blue-600">
		<AlignBottom class="align-icon inline-block" weight="bold" />
		<b>Udbytteinvestering</b> - Modtag penge for at eje aktier, fonde og ETF'er
	</a>
	<a href="/beskatning" class="block text-2xl leading-snug text-blue-600">
		<Percent class="align-icon inline-block" weight="bold" />
		<b>Beskatning</b> - Sådan beregner du skat af kapital indkomst
	</a>
	<a href="/fradrag" class="block text-2xl leading-snug text-blue-600">
		<Bandaids class="align-icon inline-block" weight="bold" />
		<b>Skattefradrag</b> - Sådan fungere det fradrag i skatten
	</a>
	<a href="/holdingselskab" class="block text-2xl leading-snug text-blue-600">
		<MoneyWavy class="align-icon inline-block" weight="bold" />
		<b>Holdingselskab</b> - 22% selskabsskat - Invester gennem egen virksomhed
	</a>
	<a href="/fire" class="block text-2xl leading-snug text-blue-600">
		<Fire class="align-icon inline-block" weight="bold" />
		<b>FIRE:</b> Økonomisk uafhængig som tidligt pensioneret
	</a>
	<a href="/borneopsparing" class="block text-2xl leading-snug text-blue-600">
		<Baby class="align-icon inline-block" weight="bold" />
		<b>Børneopsparingen:</b> Sådan får du pengene til at yngle
	</a>
	<a href="/fivo-budget" class="block text-2xl leading-snug text-blue-600">
		<ChartPieSlice class="align-icon inline-block" weight="bold" />
		<b>FIVO Budget</b> - Reserver dine penge og undgå livsstils-inflation ved at investere
	</a>
	<a href="/obligationer" class="block text-2xl leading-snug text-blue-600">
		<MoneyWavy class="align-icon inline-block" weight="bold" />
		<b>Obligationer</b> - Tjen penge på andres gæld - En sikker investering?
	</a>
	<a href="/shorting" class="block text-2xl leading-snug text-blue-600">
		<EscalatorDown class="align-icon inline-block" weight="bold" />
		<b>Aktie Shorting</b> - Tjen penge når markedet falder i værdi
	</a>
	<a href="/optioner" class="block text-2xl leading-snug text-blue-600">
		<CallBell class="align-icon inline-block" weight="bold" />
		<b>Call og Put Optioner</b> - Rettighederne til at købe og sælge aktier til forudbestemte priser
	</a>
	<a href="/certifikater" class="block text-2xl leading-snug text-blue-600">
		<Cow class="align-icon inline-block" weight="bold" />
		<b>Bull og Bear Certifikater</b> - Tjen penge på aktier uden af eje dem
	</a>
	<a href="/aktiesplit" class="block text-2xl leading-snug text-blue-600">
		<SplitHorizontal class="align-icon inline-block" weight="bold" />
		<b>Aktiesplit</b> - Udvandet ejerskab og lavere priser, er det en god ting?
	</a>
	<a href="/eurojackpot" class="block text-2xl leading-snug text-blue-600">
		<PokerChip class="align-icon inline-block" weight="bold" />
		<b>Vind +60 millioner i Eurojackpot</b>, er det en investering eller gambling?
	</a>
</div>
