export interface archive {
	rss: Rss;
}

interface Rss {
	channel: Channel;
	'_xmlns:excerpt': string;
	'_xmlns:content': string;
	'_xmlns:wfw': string;
	'_xmlns:dc': string;
	'_xmlns:wp': string;
	_version: string;
}

interface Channel {
	title: string;
	link: string;
	description: string;
	pubDate: string;
	language: string;
	wxr_version: WxrVersion;
	base_site_url: BaseSiteUrl;
	base_blog_url: BaseBlogUrl;
	author: Author[];
	generator: string;
	image: Image;
	item: Item[];
}

interface WxrVersion {
	__prefix: string;
	__text: string;
}

interface BaseSiteUrl {
	__prefix: string;
	__text: string;
}

interface BaseBlogUrl {
	__prefix: string;
	__text: string;
}

interface Author {
	author_id: AuthorId;
	author_login: AuthorLogin;
	author_email: AuthorEmail;
	author_display_name: AuthorDisplayName;
	author_first_name: AuthorFirstName;
	author_last_name: AuthorLastName;
	__prefix: string;
}

interface AuthorId {
	__prefix: string;
	__text: string;
}

interface AuthorLogin {
	__prefix: string;
	__cdata: string;
}

interface AuthorEmail {
	__prefix: string;
	__cdata: string;
}

interface AuthorDisplayName {
	__prefix: string;
	__cdata: string;
}

interface AuthorFirstName {
	__prefix: string;
	__cdata: string;
}

interface AuthorLastName {
	__prefix: string;
	__cdata: string;
}

interface Image {
	url: string;
	title: string;
	link: string;
	width: string;
	height: string;
}

interface Item {
	title: string;
	link: string;
	pubDate: string;
	creator: Creator;
	guid: Guid;
	description: string;
	encoded: Encoded[];
	post_id: PostId;
	post_date: PostDate;
	post_date_gmt: PostDateGmt;
	post_modified: PostModified;
	post_modified_gmt: PostModifiedGmt;
	comment_status: CommentStatus;
	ping_status: PingStatus;
	post_name: PostName;
	status: Status;
	post_parent: PostParent;
	menu_order: MenuOrder;
	post_type: PostType;
	post_password: PostPassword;
	is_sticky: IsSticky;
	category: any;
	postmeta: Postmeum[];
}

interface Creator {
	__prefix: string;
	__cdata: string;
}

interface Guid {
	_isPermaLink: string;
	__text: string;
}

interface Encoded {
	__prefix: string;
	__cdata: string;
}

interface PostId {
	__prefix: string;
	__text: string;
}

interface PostDate {
	__prefix: string;
	__cdata: string;
}

interface PostDateGmt {
	__prefix: string;
	__cdata: string;
}

interface PostModified {
	__prefix: string;
	__cdata: string;
}

interface PostModifiedGmt {
	__prefix: string;
	__cdata: string;
}

interface CommentStatus {
	__prefix: string;
	__cdata: string;
}

interface PingStatus {
	__prefix: string;
	__cdata: string;
}

interface PostName {
	__prefix: string;
	__cdata: string;
}

interface Status {
	__prefix: string;
	__cdata: string;
}

interface PostParent {
	__prefix: string;
	__text: string;
}

interface MenuOrder {
	__prefix: string;
	__text: string;
}

interface PostType {
	__prefix: string;
	__cdata: string;
}

interface PostPassword {
	__prefix: string;
	__cdata: string;
}

interface IsSticky {
	__prefix: string;
	__text: string;
}

interface Postmeum {
	meta_key: MetaKey;
	meta_value: MetaValue;
	__prefix: string;
}

interface MetaKey {
	__prefix: string;
	__cdata: string;
}

interface MetaValue {
	__prefix: string;
	__cdata: string;
}

export const archive: archive = {
	rss: {
		channel: {
			title: 'Finansteori',
			link: 'https://finansteori.dk',
			description: 'Kontroller din økonomi før den kontrollere dig!',
			pubDate: 'Thu, 15 Sep 2022 17:45:10 +0000',
			language: 'da-DK',
			wxr_version: {
				__prefix: 'wp',
				__text: '1.2'
			},
			base_site_url: {
				__prefix: 'wp',
				__text: 'https://finansteori.dk'
			},
			base_blog_url: {
				__prefix: 'wp',
				__text: 'https://finansteori.dk'
			},
			author: [
				{
					author_id: {
						__prefix: 'wp',
						__text: '1'
					},
					author_login: {
						__prefix: 'wp',
						__cdata: 'alexwestergaard'
					},
					author_email: {
						__prefix: 'wp',
						__cdata: 'aw.freelancer@gmail.com'
					},
					author_display_name: {
						__prefix: 'wp',
						__cdata: 'Alex Ahlgreen Westergaard'
					},
					author_first_name: {
						__prefix: 'wp',
						__cdata: 'Alex Ahlgreen'
					},
					author_last_name: {
						__prefix: 'wp',
						__cdata: 'Westergaard'
					},
					__prefix: 'wp'
				},
				{
					author_id: {
						__prefix: 'wp',
						__text: '5'
					},
					author_login: {
						__prefix: 'wp',
						__cdata: 'carolinejohansen'
					},
					author_email: {
						__prefix: 'wp',
						__cdata: 'hello@carolinejohansen.dk'
					},
					author_display_name: {
						__prefix: 'wp',
						__cdata: 'Caroline Johansen'
					},
					author_first_name: {
						__prefix: 'wp',
						__cdata: 'Caroline'
					},
					author_last_name: {
						__prefix: 'wp',
						__cdata: 'Johansen'
					},
					__prefix: 'wp'
				}
			],
			generator: 'https://wordpress.org/?v=6.0.2',
			image: {
				url: 'https://finansteori.dk/wp-content/uploads/2020/08/logo-square-96x96.png',
				title: 'Finansteori',
				link: 'https://finansteori.dk',
				width: '32',
				height: '32'
			},
			item: [
				{
					title:
						'Hvad er Aktieinvestering? Alt om aktier for begyndere, start din portefølje i 2020!',
					link: 'https://finansteori.dk/borshandel/bors-starter/aktieinvestering-alt-for-begyndere-2020',
					pubDate: 'Fri, 08 May 2020 14:07:07 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=9'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Aktieinvestering er en god måde at akkumulere en formue eller opsparing over tid. På den måde sætter du dine penge i arbejde, istedet for at inflation formindsker din formue på en bank konto uden positiv indlånsrente. Der er flere måder at investere i aktier på, ud over at købe dem direkte, kan du også investere i investeringsforeninger eller ETF\'er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="hvad-er-aktier">Hvad er aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktier er et værdipapirer, der giver ejerskab over en andel af en virksomhed, forening, fond eller gæld. Når du køber aktier i en virksomhed, betyder det at du køber en andel af virksomheden, og bliver medejer. Dit ejerskab er svarende til antal aktier du ejer, ud af det totale antal aktier på markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="hvor-kommer-aktier-fra">Hvor kommer aktier fra?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I Danmark er det kun aktieselskaber, som kan blive listet på en aktiebørs. Et aktieselskab går med forkortelsen A/S, og er en selvstændig juridisk enhed. Det betyder at selskabet fungere med sin egen "person", ligesom du har dit CPR-nummer, så har virksomheden et CVR-nummer. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man stifter et aktieselskab, så bliver det oprettet i aktier, som bliver fordelt mellem ejerne. Det er igennem disse aktier, at du beviser ejerskab over den del af selskabet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I 2020 koster det 400.000 kroner at stifte et aktieselskab, så for at fordele økonomien ud, opretter man typisk 400.000, 800.000 eller 1.200.000 aktier, så det er nemt at fordele ejerskabet ud på indskudt kapital. Hvis selskabet stiftes med 800.000 aktier, og du indskyder 160.000 kroners egenkapital, svarende til 40% af 400.000 kroner, så modtager du 320.000 aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Man kan senere vælge at søge investorer, som vil skyde penge ind i virksomheden, tage et lån, eller opsøge kapital ved at børsnotere virksomheden. Herunder ser du 2 typiske grunde til, at en virksomhed bliver børsnoteret.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>1) Kapitalfremskaffelse</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Virksomheden når et punkt i sin udvikling, hvor de har brug for penge til at fortsætte. Det kan f.eks. være til at udvide forretningen. Det giver mening for virksomheden, at oprette nye andele, med formål at sælge ejerskab i virksomheden på en aktiebørs.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det betyder at når du køber de nye andele, så modtager virksomheden dine penge som brugbar kapital. Som første køber af aktien, er du virksomhedens investor, der skyder kapital ind i virksomhed. Du kan efterfølgende sælge aktierne videre, hvor gevinsten eller tabet er dit.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>2) EXIT-Strategi</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis der kommer en investor, som skyder kapital ind i virksomheden, så køber han ikke andele fra stifterne. I stedet for, så opretter man nye andele, baseret på værdisættelsen, så pengene havner i selskabet selv. Hvis investoren vil indskyde 200.000 for 25% af virksomheden, så beregner man hvor mange andele der skal oprettes.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har set tv-programmet Løvens Hule, så er du bekendt med værdiansættelser af virksomheder. Processen hvor de forhandler overtagelses andel af virksomheden de køber, og hvor meget virksomheden skal være værd til den investering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når virksomheden er blevet moden og forhåbentligt mange flere penge værd, vil investoren realisere sin investering i virksomheden. Det kan ske ved at børsnotere selskabet, hvor løven (ref. investoren) sælger sine andele til dig og mig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>En eksempel på en velkendt exit-strategi i Danmark, er da Jesper Buch solgte sine andele af Just-Eat.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er forskellen på A og B aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed lader sig børsnotere, kan det vælge at have flere aktieklasser. Typisk ser man A-aktier og B-aktier, men der kan også forekomme C-aktier i særtilfælde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du køber aktier i et selskab, så opkøber du en andel af selskabet, uanset om det er A-aktier eller B-aktier. Hvis der totalt er 150.000 aktier, og du køber 10.000 aktier, så opkøber du 6.67% af virksomheden, uanset om du har A, B eller blandede aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Forskellen på de 2 aktietyper er hvor stor stemmeret du har. Normalt er A-aktien hovedaktien, som har stemmeret, men i nogle tilfælde har det også været B-aktien. Den modsvarende aktie vil derved typisk have lavere eller ingen stemmeret.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>FAKTA:</strong><em>I aktieselskabsloven §67 var det bestemt, at forskellen på aktieklasser højest måtte udgøre 10:1, hvilket betød at B-aktier som minimum havde 10% stemmeret i forhold til A-aktier. Denne lov blev udfaset i 2010, da vi overgik til selskabsloven. Danske virksomheder kan derfor også have stemmeløse aktieklasser i dag.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="hvordan-handler-jeg-med-aktier">Hvordan handler jeg med aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at komme i gang med at handle aktier, skal du først have et aktiedepot, hvor alle dine investeringer bliver opbevaret. Du kan typisk oprette et aktiedepot ved din bank. Hvis din bank ikke tilbyder adgang til aktiehandel, kan du oprette dig igennem en investeringsbank, hvor du kun kan investere i aktier og optage lån imod din portefølje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har det depot, giver banken dig adgang til de markeder, hvor de handler med aktier. I skandinavien er vi en del af NASDAQ OMX (Også kaldet NASDAQ Nordic), hvor hvert land har sin egen børs:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Copenhagen Stock Exchange (Danmark)</li><li>Stockholm Stock Exchange (Sverige)</li><li>Helsinki Stock Exchange (Finland)</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil købe danske virksomheder, skal du have adgang til markedet i København eller Stockholm. Danske virksomheder lader sig oftest børsnotere på disse 2 børser.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Alt efter din udbyder (ref. bank), kræver det ikke meget mere end kapital, at investere i aktier. Nogle udbydere har også en APP til mobilen, så du kan investere og holde dig opdateret, uanset hvor du befinder dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark bruger man primært Nordnet og Saxobank til at investerer gennem, da de oplyser dine handler til skat. <a href="https://finansteori.dk/borshandel/aktieinvestering-nordnet-eller-saxo-bank" class="rank-math-link">Læs mere om forskellene på Nordnet og Saxo Bank her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er også folk som anvender eToro, fordi de ikke har kurtage på handler, men de tager 5% når du trækker penge ud af platformen. Du skal dog være opmærksom på at eToro ikke oplyser til skat, og du skal derfor selv holde styr på fortjenester, tab, fradrag og ligende.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår er markedet åben så kan jeg handle aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du vil handle med aktier fra forskellige lande, så skal du være opmærksom på børsens åbningstider. Du kan kun realisere en transaktion når markedet er åbent. Mange udbydere tillader dog at lave systematiske køb og salg, hvor den udgiver din handel ved åbning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan altid tjekke om din udbyder har en liste med åbningstider. Her får du dog for de mere generelle markeder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td>Danmark</td><td class="has-text-align-right" data-align="right">9:00-17:00</td></tr><tr><td>Sverige</td><td class="has-text-align-right" data-align="right">9:00-17:00</td></tr><tr><td>Finland</td><td class="has-text-align-right" data-align="right">9:00-17:30</td></tr><tr><td>Tyskland</td><td class="has-text-align-right" data-align="right">9:00-17:30</td></tr><tr><td>USA</td><td class="has-text-align-right" data-align="right">15:30-22:00</td></tr><tr><td>Canada</td><td class="has-text-align-right" data-align="right">15:30-22:00</td></tr><tr><td>England</td><td class="has-text-align-right" data-align="right">9:00-17:30</td></tr><tr><td>Norge</td><td class="has-text-align-right" data-align="right">9:00-16:25</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="hvad-koster-det-at-handle-aktier">Hvad koster det at handle aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har fundet de virksomheder du vil investere  i, er det tid til at handle deres aktier. Her kan du vælge at købe aktien til nuværende salgspris. Du kan også lave et tidsbegrænset købstilbud, hvor den automatisk køber aktien til dit tilbud, hvis muligt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når handlen bliver gennemført, bliver der pålagt et handels-gebyr af banken, som i investeringsverdenen bliver kaldt for Kurtage. Kurtagen er typisk en procent af handlens værdi, som bliver lagt oven på handelsbeløbet. Hvis du køber eller sælger aktier for 5.000 kroner, og kurtagen er 0.10%, så betaler du 5.000 + 0.10% for at udføre handlen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at undersøge dine kurtage-priser, så du har et indblik i hvad det koster dig at handle. For at give et eksempel, så tager Nordnet 0.10% minimum 29 kroner per handel, hvis du har en standardaftale.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Udlandske aktier og dens valuta</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at investerer i udlandske aktier, så investerer du også i deres møntfod. Køber du svenske aktie, så veksler du først til svenske kroner og så køber du aktien til dens svenske pris. Det betyder at du kan miste penge, selv om aktien stiger i værdi, ved at valutaen bliver mindre værd. Omvendt kan vi også udligne et tab i aktien, hvis valutaen bliver mere værd.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Valutaveksling fungere ved at man først kigger på købs og salgsprisen, hvor hovedvalutaen er opgjort som index 100. Det betyder at hvis vi vil købe svenske kroner, så vil opgøre vi hvor meget 100 svenske kroner er værd i danske kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan f.eks set ud sådan her: SEK/DKK 71.32, som betyder at 100 SEK bliver lavet om til 71.32 DKK. Her kan vi bruge det som en procent-sats. Hvis vi skal bruge 5.000 SEK, så kan vi beregne vores danske pris uden vekslingsgebyr: 5.000*0,7132= 3.566 DKK.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Stiger kursen på den svenske kroner, altså bliver mere værd i forhold til den danske kroner, imens vores penge står i svenske aktier. Så vil vores investering falde tilsvarende i værdi, når vi sælger aktierne og får danske kroner retur.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad bestemmer kursen på aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktier er den reneste version af udbud og efterspørgsel, med en reference til virksomhedens indre værdi og fremtidige udsigter og forventninger. Det vil sige at aktiekursen (ref. handelsværdien) er udelukkende baseret på hvad folk er villig til at købe og sælge sine aktier for.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiekursen vil stige og falde i takt med hvad den generelle befolkning værdisætter virksomheden. Hvis folk vil af med deres aktier, men der ikke er nogen købere, vil det ofte drive kursen ned i pris. Omvendt, hvis mange er interesseret i at købe, men folk ikke vil sælge, så vil kursen stige.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Prisen kan også blive påvirket af eksterne faktorer, som f.eks Covid-19, hvor folk er bange for om virksomheden kan overleve. Så vil det for nogle være vigtigt at formindske tabet, ved at sælge aktierne lidt billigere, for at komme af med dem hurtigt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er værdihandel?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du kigger på investeringsselskaber, så er der typisk 2 hovedstrategier. Den ene kalder man værdi handel, fordi man handler aktier i speculation om at aktien stiger eller falder i værdi. Formålet er altså at finde aktier der sælges under deres fremtidig værdi, så de kan sælge dem når de er mere værd.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Omvendt kan man også spekulere i at aktien vil falde, og derved \'Short\' aktien. I det her opslag kommer vi ikke mere ind på shorting, da man kan tabe flere penge end man har "investeret", i modsætning til at købe en aktie der falder i værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er udbyttehandel?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed er moden nok til at finansiere sig selv og fremtidige udvidelser, så vil der typisk begynde at komme udbytter. Det betyder at virksomheden tager en del af sit overskud, efter skat, og udbetaler det til virksomhedens ejere (ref. investorer).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan tage et kig på Danske Bank, som ikke længere har vokseværk, men derimod er modnet og kan holde sig selv kørende med stabilt overskud hvert år. De bestræber at udbetale 40-60% af sit overskud til sine investorer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kilde: <a rel="noreferrer noopener" href="https://danskebank.com/da/investor-relations/aktien/udbytte" target="_blank" class="rank-math-link">Danske Bank: Investor Relations: Udbytte</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at investere i udbytteaktier, skal du være opmærksom på hvordan udbytteprocenten fungere. Når du ser på en virksomhed, vil der være en udbytteprocent, som indikere hvor stort udbytte du får årligt. Den indikation er baseret på sidste års udbytte, imod nuværende handelspris.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis en aktie koster 70 kroner, og har en udbytteprocent på 11%, betyder at du kan forvente at modtage 11% af 70 kroner i udbytte om året, før skat. Hvis aktien stiger til 85 kroner, vil udbytteprocenten falde til 9%. Du kan derfor kun bruge udbytteprocenten, som en forventet afkasts-indikation, hvis virksomheden klarer sig mindst lige så godt som sidste år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil vide mere om udbytteinvestering, så <a href="https://finansteori.dk/borshandel/udbytte-investering-sadan-kommer-du-igang" class="rank-math-link">læs hvordan du kommer igang med udbytteinvestering her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>I ovenstående eksempel er sidste års udbytte 7,70 kroner per aktie. Derfor svare udbytteprocenten til 11% af 70 kroner og 9% af 80 kroner.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan fungere "X dagen" for udbytter?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed opgører årets overskud, kan de vælge at udbetale en del af overskuddet i udbytte. Det fungere ved at direktionen har en generalforsamling, hvor de afgøre hvor meget der skal udbetales og hvornår.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når de har valgt en dato for udbetaling, fastsættes der også en X-Dag, som er dagen de fastgøre hvilke ejere der er berettiget til udbyttet. Hvis udbyttet bliver udbetalt den 30 August, vil X-Dagen typisk være 3-5 dage forinden, f.eks. den 26 August. Det betyder at du skal eje aktien den 26 August for at være berettiget til udbetalingen den 30 August.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan derfor købe aktien den 25 August, blive berettiget til udbytte den 26 August, og sælge aktien igen den 27 August, og stadig modtage udbyttet. Det ville dog ikke give mening, da aktiekursen falder i takt med at virksomhedens indre værdi falder tilsvarende udbyttebetalingen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad betyder udtrykkende EPS, P/E og P/B?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er mange fagord og udtryk at forholde sig til, når man handler med aktier. Her får du en kort gennemgang af de 3 mest almindeligt brugte ord, så du kan afgøre om du vil bruge dem i dine investerings analyser. Her kommer vi til at dække EPS, P/E og P/B.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>P/E står for "Price on Earnings"</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed tjener penge, så er der et overskud. Her beregner man årsresultatet imod hvad aktiekursen er lige nu. Der er både en historisk og en spekulativ udgave af P/E værdien. Den historiske viser hvad vi betaler per krones overskud ved sidste årsresultat. Den spekulative viser os hvad vi betaler for den forventede kommende årsresultat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel, kan vi kigge på den historiske formular. Hvis et selskab har 100.000 aktier, og sidste år havde et resultat på 430.000 kroner, så ville vi have en fortjeneste på <em>430.000/100.000=</em> 4,30 kroner per aktie (også kaldet "Earnings per share" <strong>[EPS]</strong>). Hvis aktien koster 28 kroner, så vil vi altså betale <em>28/4,30=</em> 6,51 kroner per tjente krone sidste år, efter skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>P/B står for "Price on Book-value"</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En virksomheds bogføring er bygget op af aktiver og passiver, som viser hvor meget et selskab har i værdier i forhold til udgifter og gæld. Ved at tage selskabets aktiver og trække passiverne fra, så ender du med egenkapitalen. Her fra deler du egenkapitalen ud på alle selskabets udstedte aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis selskabet har en egenkapital på 7.000.000 kroner, fordelt på 1.000.000 aktier, giver 7 kroners egenkapital per aktie. Hvis aktien koster 28 kroner, så betaler du <em>28/7=</em> 4 kroner per indre krones værdi i selskabet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan beskattes mine aktieinvesteringer som privat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Danmark har en progressionsgrænse for private, hvor man i 2020 betaler 27% af de første 55.600 kroner, og 42% af resten derover. Dine aktieinvesteringer har en særskilt beskatning, så din beskatninger og fradrag er kun fordel ud over dine aktieinvesteringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bliver kun beskattet af realiseret gevinst, hvilket betyder at du kun beskattes af udbytter og fortjenesten fra at sælge en aktie. Du kan derimod modregne skatten, via skattefradrag, når du realisere et tab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber en aktie til 100 kroner og senere sælger den for 200 kroner, så har du en realiseret gevinst på 100 kroner, som skal beskattes. Var aktien derimod faldet til 65 kroner, ville du kunne trække dit realiserede tab på 35 kroner fra fremtidige gevinster og udbytter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kilde for progressionsgrænsen: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://www.skat.dk/SKAT.aspx?oId=2035568" target="_blank" class="rank-math-link">Skat: Satser</a><br>Kilde for aktieindkomst: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://skat.dk/skat.aspx?oid=133169" target="_blank" class="rank-math-link">Skat: Aktieindkomst</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er FIFO-Princippet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I Danmark har man valgt at indføre FIFO-Princippet, som betyder "First in - First out". På den måde sælger du dine aktier i samme rækkefølge som du køber dem. Her er et eksempel:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>I Januar køber du 100 aktier (A) for 83 kroner</li><li>I Februar køber du yderligere 50 aktier (B) for 110 kroner</li><li>I Marts vælger du at sælge 50 aktier til 235 kroner</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På grund af FIFO-Princippet, betyder at du sælger dine første 50 (A) aktier. Du har derfor en realiseret gevinst på (235-83=) 152 kroner per aktie før kurtage og beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kilde for FIFO-Princippet: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://skat.dk/skat.aspx?oid=1948967" target="_blank" class="rank-math-link">Skat: C.B.1.7.7 FIFO-princippet</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er risikoen ved aktieinvestering?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer dine penge i aktier, er der altid en risiko for at værdipapiret (ref. aktien) kan gå ned i værdi. Det betyder at hvis du vælger at sælge aktien videre, vil du have et tab. Dertil er der også en risiko for at virksomheden bag aktien kan gå konkurs.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Din største risiko er altså, ved normal aktieinvestering, at du kan miste de penge som er investeret i aktien. Derfor anbefaler man altid ikke at investerer penge, som du kan undvære, i tilfælde at investeringen formindskes eller går tabt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternativt: Invester i fonde</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke er klar til at investere direkte i aktier, kan du vælge at skyde penge ind i en investeringsfond. Her fra vil fonden investere dine penge ud fra forudbestemte kriterier og retningslinjer. På den måde kan du investere i lande, råvarer eller brancher ved at vælge forskellige fonde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investere inde penge i en investeringsfond, er det typisk en åben fond. Det betyder at de opretter nye værdipapirer når du investere penge i dem, så du kan bevise hvor stor andel af fondens økonomi, du ejer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er meget normalt for en fond at have 20-25% likviditet, hvilket betyder at de kun investere 75-80% af dine penge. Det er nødvendigt, for at de hurtigt kan betale dig tilbage, når du en dag vil have pengene ud af fonden igen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Bliv klogere på at <a href="https://finansteori.dk/borshandel/investere-gennem-investeringsinstitutter" class="rank-math-link">investerer gennem investeringsinstitutter her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternativt: Invester i ETF\'er</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan også vælge at investere i ETF\'er, hvilket er kort for "Exchange-Traded Funds". Det betyder at fonden har et begrænset antal andele, som du køber fra andre investorer, ligesom aktier. Fonden modtager derfor ikke dine penge, og anvender kun deres egenkapital til at investerer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal dog være opmærksom på, at ETF\'er ikke er beskattet ud fra realiseret afkast. Du vil istedet for blive beskattet efter lagerbeskatnings-princippet. Skattesatserne er stadig de samme, som ved normal aktieindkomst. Beregningen af skatten er opgjort anderledes.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kilde for lagerbeskatning: <a href="https://skat.dk/skat.aspx?oid=1946253" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.B.2.1.1.14 Forklaring af lagerbeskatning</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Hvorfor burde jeg investere i aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det gør ikke den store forskel om du har en stor formue, eller om du lægger en smule fra hver måned. Formålet med aktieinvestering, er at forbedre sin økonomiske situation gradvist, så man overkomme inflation og forhåbentligt formere sine penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at investere i aktier, så investere du i en virksomhed. Du skal derfor finde en virksomhed, som du tror på, vil klare sig godt i fremtiden. Det er blandt andet derfor, at Warren Buffett klarer sig så godt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p><strong>It\'s far better to buy a wonderful company at a fair price than a fair company at a wonderful price.</strong></p><cite>Warren Buffett</cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du som minimum kan overkomme inflation og fremtidig skat. Så har du ikke tabt penge, som hvis du havde dem stående på en opsparingskonto. Det er de færreste opsparingskonto, som udlodder indlånsrente i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den gennemsnitlige inflation i Danmark, har været 1,71% om året, fra 1999 til 2019. For at modregne hvor meget du skal afkaste om året, kan du modregne 42% skat af de 1,71% inflation, og derefter udregne hvor meget du effektivt skal afkaste. 100/(1-0,0171/0,42)-100 = <strong>~4.25%</strong> for at overgå den årlige gennemsnits-inflation efter skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kilde for inflation: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://www.statistikbanken.dk/10072" target="_blank" class="rank-math-link">Statistikbanken: PRIS112</a></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '9'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-08 16:07:07'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-08 14:07:07'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:21:06'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:21:06'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'aktieinvestering-alt-for-begyndere-2020'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_metadesc'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Du er ikke sikker på at pensionsordningen fra dit arbejde er godt nok. Du gerne lærer om aktieinvestering, i håb om bedre levevilkår.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_is_cornerstone'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '💡 Komplet introduktion: Alt du burde vide om aktieinvestering 💰🤑💰'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-image'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'https://finansteori.dk/wp-content/uploads/2020/05/social_alt-du-burde-vide-om-aktieinvestering.jpg'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-image-id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '69'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '💡 Komplet introduktion: Alt du burde vide om aktieinvestering 💰🤑💰'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-image'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'https://finansteori.dk/wp-content/uploads/2020/05/social_alt-du-burde-vide-om-aktieinvestering.jpg'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-image-id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '69'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '65'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Du har muligheden for at tjene flere penge ved aktieinvestering hvis du starter tidligt. Her lærer du den grundlæggende viden, så du får et overblik.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👨🏻‍🏫 Komplet introduktion: Alt du burde vide om aktieinvestering 💰'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👨🏻‍🏫 Komplet introduktion: Alt du burde vide om aktieinvestering 💰'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_robots'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:1:{i:0;s:5:"index";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_use_facebook'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '89'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'alt-du-burde-vide-om-aktieinvestering-komplet-introduktion'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_rich_snippet'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'article'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_elementor_template_type'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'wp-post'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_elementor_version'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2.9.8'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering-komplet-introduktion'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '561'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering-alt-for-begyndere-2020'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'start-din-aktieinvestering-2020'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_schema_Article'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:7:{s:5:"@type";s:11:"BlogPosting";s:8:"headline";s:11:"%seo_title%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:25:"Alex Ahlgreen Westergaard";}s:11:"description";s:153:"Du har muligheden for at tjene flere penge ved aktieinvestering hvis du starter tidligt. Her lærer du den grundlæggende viden, så du får et overblik.";s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:9:"isPrimary";b:1;s:4:"type";s:8:"template";}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '33'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Aktiesparekontoen - Kun 17% skat af dine investeringer',
					link: 'https://finansteori.dk/borshandel/bors-starter/aktiesparekonto-17-pct-skat',
					pubDate: 'Mon, 11 May 2020 17:46:19 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=84'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Start en aktiesparekonto og betal en fordelagtig lav beskatning på kun 17%. I 2020 kan du indskyde helt op til 100.000 kroner på din aktiesparekonto, og investere dem i både aktier, fonde og ETF\'er. Slip for at betale helt op til 42% af dine afkast!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en aktiesparekonto?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Sverige har et system de kalder Investeringssparkonto ("ISK"), hvor man betaler en lavere skat af sine investeringer, så pengene forbliver i markedet. Det princip har vi lånt i Danmark og udgivet med vores egen regelbog.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I 2018 fik vi nemlig Aktiesparekontoen ("ASK"). Det blev muligt at investere din opsparing i markedet, til en fordelagtig beskatning. Det var planen at kontotypen skulle starte med et lavt loft, og herefter løftes årligt. Desværre kan politikerne ikke blive enige om hvor meget eller hvornår, loftet skal hæves.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvem kan åbne en aktiesparekonto?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er nogle specielle regler for den nye type konto. Du skal være fuldt eller begrænset skattepligtig i Danmark, for at kan åbne en aktiesparekonto. Dertil er der regler for hvor du kan åbne den nye kontoform. Hør din bank eller aktiemægler, om de kan tilbyde dig en aktiesparekonto.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Formålet er at du skal efterlade flere penge i markedet, frem for at have dem til at stå stille på en opsparingskonto. Sådan kan din opsparing nemlig bidrage til den økonomiske vækst og stabilitet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste vælger at oprette en <a href="https://www.home.saxo/da-dk/investor/aktiesparekonto" class="rank-math-link">aktiesparekonto ved Saxo Bank</a>, men du kan åbne dem ved de fleste banker, som tilbyder investeringkontoer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad kan jeg investere i, med en aktiesparekonto?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiesparekontoen har nogle begrænsninger, som du ikke finder på en normal investeringskonto. Hvis du selv vil læse op på dette område, kan du åbne <strong>C.B.5 Aktiesparekontoloven</strong> nede i kilderne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Du må oprette 1 aktiesparekonto, hvorpå du maksimalt må indskyde op til loft beløbet. I 2020 er loftet på 100.000,- kroner.</li><li>Du må investere i børsnoterede aktier og fonder, der er beskattet som aktieindkomst (ref. efter aktieavancebeskatningen). Her under udloddende fonde og ETF\'er.<br><em>Note: Du har kun adgang til investeringsmål, som er tilladt efter lovgivningen, når du investere via din ASK. Hvis du er i tvivl så kontakt din aktiemægler.</em></li><li>Du må ikke investere din pension eller igennem virksomhed.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil have mere frihed til at investere, kan du altid åbne en normal investeringskonto. Her er en <a class="rank-math-link" href="https://finansteori.dk/borshandel/alt-du-burde-vide-om-aktieinvestering-komplet-introduktion/">komplet introduktion til aktieinvestering</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget må jeg indskyde på en aktiesparekonto?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Skat har lavet nogle gode eksempler under <strong>C.B.5 Aktiesparekontoloven</strong>. De beskriver hvornår, hvordan, og hvor meget du må indskyde på kontoen. Hvert år opgøre politikerne et loft for, som afgøre hvor meget du må indskyde på kontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I 2020 blev loftet sat op til 100.000 kroners værdi. Du må indskyde en værdi op til 100.000 kroner, uanset om det er frie midler (penge), aktier, eller investeringsbeviser. Det eneste krav er at midlet må ejes på denne kontotype.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du tidligere har indskudt penge på kontoen, eller har haft et årsopgørelse, så skal det medregnes imod dit indskudsloft. For at give et eksempel, hvis du indskød og investerede 10.000 kroner i 2019. Hvis investeringen er faldet til 7.000 kroner ved årsopgørelsen, så må du i 2020 indskyde 100.000-7.000= 93.000 kroner. Var værdien af din konto opgjort til 16.000 kroner, må du kun indskyde 100.000-16.000= 84.000 kroner i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er det nye skattegrundlag?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du åbner en normal investeringskonto, så bliver du beskattet af aktieindkomst efter en progressionsgrænse. I 2020 er grænsen 27/42, med en overgang på 55.300 kroner. Det vil sige at du betaler 27% skat de første 55.300 kroner, du tjener fra aktieindkomst, og 42% af resten. Det kan både beskattes efter realisationsprincippet, når du sælger din investering, eller lagerprincippet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiesparekontoen har en særskat på kun 17%, og er beskattet efter lagerprincippet. Det vil sige at du hvert år betaler skat af dit positive afkast, uanset om du har solgt din investering. Hertil er aktiesparekontoen isoleret fra alle andre aktieindtægter og tab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dertil er aktiesparekontoen isoleret på dit skattekort, så dine afkast bliver ikke opgjort samme med normale investeringskontoer. Det vil sige at negative afkast på aktiesparekontoen ikke kan trækkes fra normale aktieindtægter eller omvendt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Hvis du er begrænset skattepligtig i Danmark, betaler du 15% i stedet for 17%. Den her artikel tager udgangspunkt i fuld skattepligt, så derfor er alle eksempler oplyst med 17%.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan fungere beskatningen?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investere igennem en aktiesparekonto, er din bank eller udbyder ansvarlig for at oplyse dine afkaster og udbytter til skat. Her bliver du klogere på, hvordan det bliver opgjort. Så ved du hvordan du kan følge med, og cirka-beregne, hvor meget du skal betale i skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ifølge lagerprincippet har man et beskatnings-år fra 1. Januar til 31. December. Alle investeringer bliver opgjort den 31 December, og så får de en ny start-kurs, til næste års beskatnings-opgør.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bliver altså ikke beskattet i løbet af året, når du modtager udbytter, køber, eller sælger dine investeringer. Det bliver du derimod i ved opgørelsen den 31. December. Hvis du køber og sælger dine aktier i løbet af året, bliver gevinsten eller tabet også opgjort og beskattet her.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når skatten er opgjort, skal udbyderen af kontoen trække beløbet, uanset om der er penge nok på kontoen. Det er derfor vigtigt at være forberedt på eventuelle beskatninger, så du ikke ender med et overtræk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Tilladt at dække sine skatter</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du i 2019 har haft et positivt afkast på 3.000,- kroner og fået udloddet 150,- kroner i udbytte. Så skal du betale 17% skat af 3.000+150= 3.150,- kroner. Det vil sige 535,50 kroner, som din udbyder trækker fra din konto i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote -->\r\n<blockquote class="wp-block-quote"><p>Der kan dog uanset beløbsgrænsen foretages indskud på aktiesparekontoen til betaling af skat.&nbsp;Det gælder for både fuldt og begrænset skattepligtige. Indskuddet skal foretages i det kalenderår, hvor skatten forfalder til betaling. Se ASKL (ref. Aktiesparekontoloven) § 9, stk. 2, og § 20.</p><cite>C.B.5 Aktiesparekontoloven</cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at beskatningen er sat til opkrævning i 2020, og du må derfor overføre 535,50 kroner til at dække skatten, uden at det betragtes som indskud i henhold til loftet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Udbytteinvestering med en aktiesparekonto</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at investere i udbytteaktier, så ville platformen normalt trække skatten fra ved modtagelsen. På en aktiesparekonto skal du ikke betale skat før kontoens årlige opgørelse. Det betyder at du får det fulde udbytte udbetalt, som du kan geninvestere i markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan vælge at tilsidesætte 17% af dine udbytter, men du opnår større rentes rente effekt, hvis du geninvestere det fulde beløb. Renters rente ved investering går ud på at geninvestere sine udbytter i flere udbytteaktier. På den måde opbygger man langsomt en forøget udbytteindtægt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Invester billigere i ETF\'er</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>ETF\'er er en betegnelse for børsnoterede investeringsselskaber. Her bliver du beskattet efter lagerprincippet, hvor du årligt betaler skat af afkast og udbytte. Istedet for at betale 27/42% efter de normale aktieskatteregler, så kan du altså nøjes med at betale 17%. Det giver dig en stor skatte fordel, når du alligevel beskattes årligt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Hvorfor burde jeg investere igennem aktiesparekontoen?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiesparekontoen er en fantastisk mulighed, for dig som gerne vil investere i udbytter, ETF\'er og andre lagerbeskattede investeringer. Istedet for at betale en høj skat på afkast og udbytter, kan du drage fordel af den lave beskatning aktiesparekontoen tilbyder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har en månedlig indtægt, som kan dække beskatningen på 17%, så får du fordelen af at kan geninvestere 100% af dine udbytter. Det forøget dine rentes rente helt op til 58%, da du slipper for at betale op til 42% skat bed udbetalingen af udbytten.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vil du investere i indeks ETF\'er eller udbytte-foreninger, som alligevel er lagerbeskattet årligt. Så kan du spare helt op til 40% i skat, hvis din investeringsportefølje overgår 55.300 kroner - altså progressionsgrænsen for aktiebeskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://skat.dk/skat.aspx?oid=2284955" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.B.5 Aktiesparekontoloven</a></li><li><a href="https://www.retsinformation.dk/eli/lta/2018/1429" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Retsinformation: Aktiesparekontolov</a></li><li><a href="https://skat.dk/skat.aspx?oid=10920" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Aktiesparekonto (ASK)</a></li><li><a href="https://skat.dk/skat.aspx?oid=1946308" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.B.2.1.7.2 Realisationsprincippet eller lagerprincippet?</a></li><li><a href="https://skat.dk/skat.aspx?oid=1946265" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">C.B.2.1.3.1 Værdipapirer omfattet af aktieavancebeskatningsloven</a></li><li><a href="https://www.skat.dk/SKAT.aspx?oId=2035568" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Satser</a></li></ul>\r\n<!-- /wp:list -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '84'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-11 19:46:19'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-11 17:46:19'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:22:27'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:22:27'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'aktiesparekonto-17-pct-skat'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktiesparekonto'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '56'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🦸‍♀️ Aktiesparekontoen: Kun 17% Skat 🦸‍♂️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🦸‍♀️ Aktiesparekontoen: Kun 17% lagerbeskatning 🦸‍♂️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktiesparekonto'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🦸‍♀️ Aktiesparekontoen: Kun 17% Skat 🦸‍♂️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🦸‍♀️ Aktiesparekontoen: Kun 17% Skat 🦸‍♂️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_robots'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:1:{i:0;s:5:"index";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_use_facebook'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Kom igang med at investere dine penge med kun 17% beskatning! En aktiesparekonto giver dig fordele til bestemte investerinsmål, som du kan blive klogere på her.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'her-er-formalet-ved-aktiesparekontoen-ask'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '562'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktiesparekonto-17-pct-skat'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'start-med-en-aktiesparekonto'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktiesparekonto-2020-lav-skat'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '31'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Obligationer - Tjen penge på andres gæld - En sikker investering?',
					link: 'https://finansteori.dk/borshandel/bors-starter/obligationer-sikker-investering',
					pubDate: 'Fri, 15 May 2020 19:10:20 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=197'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis du følger med i investeringsverdenen, så har du sikkert hørt at obligationer er det sikre valg. Ved du hvad en obligation er, eller hvorfor den er mere sikker end andre investeringsmål? Målet med den her artikel er at blive klogere på, hvad er obligationer for en størrelse?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er obligationer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En obligation er det danske udtryk for “Bond”, vi kan også kan kalde et børsnoteret gældsbrev. Det kan også være en gruppering af flere gældsbreve, som er omdannet. Obligationer kan komme fra både staten og virksomheder, når de har brug for at optage eller finansiere et lån.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Et eksempel kan være når du optager et boliglån. Her kan realkreditten være udformet som et gældsbrev, der giver dem adgang til kapitalen du skal låne. Investorerne får altså et indestående med realkreditten og de har et indestående med dig. Forholdet mellem låneren og investoren er uafhængigt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Et andet eksempel kan være staten, som har brug for at finansiere en ny motorvej. Desværre har staten ikke råd til at betale forud, men kan finansiere det over 5-10 år via skatter. Her giver det mening for staten, at sælge gæld fra de større banker.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan er obligationer sammensat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en låner har brug for penge, så kontakter de et finansielt institut. Her laver man en risikoberegning, hvor man vurdere om låneren kan tilbagebetale gælden. Her kommer de typiske A og B bedømmelser fra, som man typisk høre om i amerikanske film.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Et gældsbrev indeholder nogle kriterier, som fortæller mulige investorer, om det er et godt investeringsmål. Heriblandt fastsættes hvor meget renten skal være, ud fra risikoen. Hvor lang tid lånet strækker sig over, og om lånet er inkonverterbart.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at udforme et eksempel, så opretter vi et gældsbrev fra staten med følgende egenskaber:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Face value ("Lånet"): 1.500.000.000 kroner</li><li>Løbetid: 5 år</li><li>Kuponrente: 1,8%</li><li>Inkonverterbar: Nej - <em>Kan indfries for samme 1.500.000.000 kroner, og skal ikke købes for gældende kursværdi</em></li><li>Hovedstol: 1.620.000.000 kroner - <em>lån og alle renter</em></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når gældsbrevet er udformet, så omdannes det til obligationer, som sælges på et børsmarked for obligationer. Man forventer ikke at sælge hele gælden til samme investor, så derfor deler vi lånet op i 100 kroners obligationer, svarende til 1.500.000.000 / 100 = 15.000.000 obligationer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hver obligation har altså en indre værdi på 100 kroner, det som bliver kaldet “Face Value”. Dertil skal du være opmærksom på, at <span class="has-inline-color has-luminous-vivid-orange-color">obligationer typisk sælges i stakke fra 50.000 og op</span>. Hvis du ikke vil risikere den kapital, kan du <a href="https://finansteori.dk/borshandel/investeringsforeninger-fonde-spredning" class="rank-math-link">investere i ETF\'er eller investeringsforeninger</a>, som fokusere på obligationer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan afbetales obligationer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Obligationer er et lån, hvor man betaler en halvårlig eller årlig premium. Hvis du køber obligationer med face value til 100 kroner, med en kuponrente på 3%, så vil du modtage 3 kroner om året, per obligation. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis løbetiden er 5 år, så vil du altså modtage 15 kroner i samlet kuponrente for hver obligation du ejer. Når tiden er udløbet, vil ejeren blive tilbagebetalt dens face value på 100 kroner imod at indfri gælden. Gælden bliver altså ikke afbetalt over tid, så man modtager renter af det fulde beløb, fra start til indfrielse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man handler med obligationer, er det desværre ikke helt så simpelt som at bruge et par tusinde kroner. Ofte kræver det at man køber flere hundrede tusinde obligationer ad gangen, </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor er risikoen ved obligationer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis udstederen af obligationen er en virksomhed, er der réel risiko for konkurs. Da obligationerne er et gældsbrev, vil konkursboet prioritere at betale gælden af først. Du mister de resterende kuponrenter og måske en del af indfrielsesværdien.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Investere man derimod i statsobligationer, fra lande som har en stærk økonomi. Er risikoen for konkurs meget lavere. Derimod har statsobligationer en lavere risiko og dertil udbetaler en lavere kuponrente. Risikoen er vurderet fra land til land, f.eks betragter man Danmark som et sikkert land, at købe statsobligationer fra.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad bestemmer værdien af obligationerne?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kursen af en obligation er altid spekulativ. Hvor meget man kan tjene på at eje obligationen, i forhold til hvad man har betalt for den? Derfor er det vigtigt at kigge på dens face value, i forhold til historiske og fremtidige udbetalinger af kuponrente.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har allerede afgjort, at obligationens indre værdi er 10.000 kroner, og udbetaler 300 kroner årligt over 5 års løbetid. Det giver os en total fortjeneste på 1.500 kroner. Efter 2 år, er vi interesseret i at sælge obligationen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har modtaget 600 ud af 1.500 kroner, så køberen af vores obligation, kan altså tjene 1.500 - 600 = 900 kroner på vores obligation. Hvis vi sælger obligationen til dens indre værdi på 10.000 kroner, kan den næste ejer stadig tjene 9% på sin investering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Da vi er mere interesseret i at indfri pengene, er vi villig til at give en rabat på obligationen, og sælger den derfor til 9.700 kroner, så vi stadig har en fortjeneste på 400 kroner. Køberen kan nu tjene 12,4% på sin investering, og der derfor nemmere for os at sælge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På den måde spekulere man hele tiden over en obligations værdi i forhold til salg, fortjeneste og alternative obligationer til salg. Dertil kan der også være nogle spekulationer, om obligationen er sikker imod eventuel konkurs eller udsving.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan beskattes obligationer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Obligationer og deres tilhørende udbytter/kuponrenter, kan både beskattes som aktieindkomst, og som personlig indkomst. Bliver du beskattet som almindelig kapitalindkomst, så bliver beløbet derfor medregnet i din personlige skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Herunder tager vi stilling til beskatning som kapitalindkomst. Hvis du vil vide mere om beskatning af aktieindkomst, kan du læse <a href="https://finansteori.dk/borshandel/alt-du-burde-vide-om-aktieinvestering-komplet-introduktion" class="rank-math-link">vores komplette introduktion til aktieinvestering</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du køber en obligation, så er det for at modtage resterende udbetalinger af kuponrenter, og derefter at indfri obligationen imod dens indre værdi. Når du modtager renterne, skal beløbet oplyses til skat. Hvis renten er udbetalt i anden valuta, skal beløbet oplyses efter dagskursen, i danske kroner, på dagen de udbetales.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du modtager kuponrenter vil din bank eller udbyder oplyse beløbet til skat. Hvis de ikke gør, skal beløbet indberettes på <strong>Rubrik 31</strong>.&nbsp;Hvis renten kommer fra udlandske obligationer, skal de indberettes på <strong>Rubrik 431</strong>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du indfrier din obligation, skal der også betales skat af fortjenesten. Hvis du har et tab, kan du tilsvarende få et fradrag. Ved obligationer er der en bagatelgrænse på 2.000 kroner. Det vil sige at gevinsten eller tabet skal overkomme 2.000 kroner, før du skal beskattes eller opnår fradrag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her bør din bank eller udbyder også oplyse afkastet til skat. Hvis ikke, skal det indberettes på <strong>Rubrik 32</strong> hvis obligationerne er handlet på et reguleret markedet, og ellers <strong>Rubrik 40</strong> hvis de ikke er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong><em>OBS: Dertil er der regler for, hvis obligationerne er blåstemplede eller sortstemplede. I forhold til, om du kan få fradrag for tab.</em></strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Hvorfor investere man i obligationer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed eller staten har brug for kapital, som de ikke kan fremskaffe under normale markeds vilkår. Måske er beløbet for stort til at den kommercielle bank kan godkende lånet, så kan de vælge at sælge gæld på markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du køber deres gæld, så modtager du en årlig rente af obligationernes face value, indtil obligationerne bliver indfriet. Ved at studere virksomheden eller staten bag obligationerne, så kan man afgøre hvor stor risikoen for konkurs er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Obligationer variere ikke særlig meget i pris. Det gør ikke meget forskel, hvis du køber dem for at indfri dem. Du har et fast årligt udkast og en fast sats som bliver udbetalt i slutningen af obligationens levetid.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at handle med obligationer, så kan vi anbefale <a href="https://www.home.saxo/da-dk/platforms/saxoinvestor" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Saxo Bank: Saxo Investor</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://skat.dk/skat.aspx?oId=9377" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Fodringer</a></li><li><a href="https://skat.dk/skat.aspx?oid=2234846" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Skat af obligationer og andre fordringer</a></li><li><a href="https://skat.dk/skat.aspx?oid=1947816" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Sådan beskattes gevinst og tab på fordringer</a></li><li><a href="https://skat.dk/skat.aspx?oid=2047204" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.A.11.1 Renteindtægter</a></li><li><a href="https://skat.dk/skat.aspx?oID=2047206&amp;chk=216701" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.A.11.1.2 Hvordan beskattes renteindtægter?</a></li></ul>\r\n<!-- /wp:list -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '197'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-15 21:10:20'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-15 19:10:20'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:22:50'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:22:50'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'obligationer-sikker-investering'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '⚖️ Obligationer: Modtag renterne fra andres gæld 😱'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '⚖️ Obligationer: Modtag renterne fra andres gæld 😱'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_metadesc'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Er du interesseret i at finde ud af hvorfor obligationer (Bonds) bliver betragtet som en sikker investering?'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Er du interesseret i at finde ud af hvorfor obligationer (Bonds) bliver betragtet som en sikker investering?'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '⚖️ Obligationer: Køb gæld og modtag renterne! 🕵🏻‍♀️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '⚖️ Obligationer: Køb gæld og modtag renterne! 🕵🏻‍♀️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_robots'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:1:{i:0;s:5:"index";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_use_facebook'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '83'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'obligationer'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'hvorfor-betragtes-obligationer-som-en-sikker-investering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '563'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '30'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: "Investeringsforeninger, fonde og ETF'er giver stor spredning til få penge",
					link: 'https://finansteori.dk/borshandel/bors-starter/investeringsforeninger-fonde-etf-spredning',
					pubDate: 'Mon, 18 May 2020 20:51:36 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=280'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Du vil gerne investere dine penge, men har ikke tiden eller overskuddet. Måske foretrækker du bare ikke at stå for det selv, da du ikke ved hvad du burde investere i. Ved at undersøge markedet for investeringsforeninger, så kan du kommer igang med at investere både nemt og billigt. Det giver dig muligheden for at investere i kategoriserede brancher, værdipapirtyper, lande og risiko.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Investeringsforeninger har oftest nogle helt klare retningslinjer, som afgøre hvordan de må investerer sine penge. Det kan for eksempel være en index fond, som investere i 500 store handels- og service virksomheder i Amerika, også kaldet S&amp;P500 Indekset. Måske investerer de i obligationer fra forskellige europæiske lande og virksomheder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du hellere vil investere dine penge i aktier selv, så <a href="https://finansteori.dk/borshandel/alt-du-burde-vide-om-aktieinvestering-komplet-introduktion" class="rank-math-link">læs vores komplette introduktion til aktieinvestering her</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en investeringsforening?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Man anvender normalt begræbet "investeringsforening", men der er faktisk 3 selskabsformer, hvorigennem du kan investere enten aktivt eller passivt. Du kan både investere dine penge i <strong>fonder</strong>, <strong>investeringsselskaber</strong> og <strong>investeringsforeninger</strong>. Det fungere ved at man skyder penge ind i en fælles pulje, som så investeres ud fra nogle forudbestemte retningslinjer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den primære forskel er at et investeringsselskab må geare deres investeringer. De må altså optage et lån udefra, så de kan lave større investeringer, end puljen indeholder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En vigtig note er at investeringsinstitutter ikke producere eller yder andre tjenester, end at investere i værdipapirer, valutaer og obligationer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan investere jeg gennem investeringforeninger?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at andre håndtere dine investeringer, så kan det give god mening at investere gennem et investeringsinstitut, som f.eks en forening eller fond. Hvis du har oprettet en investeringskonto, har du typisk adgang til en kategori der hedder noget i stil med “investeringsforeninger” eller “værdipapirfonde”.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan du finde en lang række investeringsforeninger og selskaber, som er udgivet af f.eks <a rel="noreferrer noopener" class="rank-math-link rank-math-link" href="https://www.danskeinvest.dk/w/show_list.products?p_nId=75&amp;p_nFundGroup=75" target="_blank">Danske Invest/Inv</a>, <a rel="noreferrer noopener" href="https://falconinvest.dk/" target="_blank">Falcon Invest</a>, <a rel="noreferrer noopener" href="https://formuepleje.dk/" target="_blank">Formuepleje</a>, <a rel="noreferrer noopener" href="https://handelsinvest.dk/" target="_blank">Handelsinvest</a>, og mange flere! Når du har fundet dem, som du vil investere dine penge med, så overføre du et beløb til dem. Det fungere ligesom at købe aktier, med den eneste forskel at du ejer en andel af en pulje, og ikke selskabet selv. Når du senere vil have dine penge tilbage, så indfrier du altså din andel af puljen, og sælger ikke dine andele til en anden investor.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan er de forskellige former beskattet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan være lidt rodet at finde rundt i, hvordan du er beskattet, da det kommer an på investeringsinstituttets formål, konstruktion og hvad de investere i. Den nemmeste løsning, ville være at tjekke deres hjemmeside, om de har beskrevet beskatningen nogen steder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du investere hos et af de nævnte steder, så kan du se dine skattevilkår her:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://www.danskeinvest.dk/w/show_pages.skat?p_nId=75" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Danske Invest</a></li><li><a href="https://falconinvest.dk/beskatning-af-aktier-kapitalindkomst-lagerbeskatning/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Falcon Invest</a></li><li><a href="https://formuepleje.dk/raadgivning/skat/frie-midler/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Formuepleje</a></li><li><a href="https://handelsinvest.dk/foer-du-investerer/skat/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Handelsinvest</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Generelle skattevilkår</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er flere forskellige beskatningsgrundlag, ud fra hvordan instituttet er opsat og hvad de investere i. Her får du en oversigt over de generelle skatteforhold.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Investeringsforeninger </strong>er beskattet typisk efter realisationsprincippet, så du er skal betale skatten, når du sælger dine investeringsbeviser i foreningen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Akkumulerende foreninger</strong> er et begræbet, for de foreninger som ikke udbetaler udbytte. Deres formål er at geninvestere udbyttet internt i puljen, så den heletiden gror i værdi. Her bliver du beskattet som personlig indkomst efter lagerprincippet. Afkastet bliver inkluderet i din normale skat, og kan påvirke din beskatning, hvis du rammer top-skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Investeringsselskaber </strong>er beskattet efter lagerbeskatnings-princippet, så du er beskattet årligt, uanset om du sælger dine investeringsbeviser i selskabet. Det betyder at du beskattes af positivt afkast og udbytterne i slutningen af året, og ikke ved salget.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>“Fonde”</strong> henviser typisk til konstruktionen <strong>“Værdipapirfonde”</strong>, og vil beskattes ud fra sit formål og hvad deres primære investeringer er. Der er ikke meget specifik information om, hvordan de beskattes i generelle sammenhæng. Kontakt udbyderen af fonden, hvis det ikke står på deres hjemmeside.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad koster det at investere gennem investeringsforeninger?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Omkostningerne ved at investere i et investeringsinstitut er som regel baseret på, om din portefølje er aktivt eller passivt forvaltet. Altså om der sidder investorer, som aktivt håndtere investeringerne, i håb om at forøge dit afkast.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du investere i et passivt institut, så vil de oftest følge et indeks. Det kan for eksempel være <a href="http://en.xact.se/Our-ETFs/Equity/XACT-OMXC25/#tab=underlying" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">XACT OMXC25 indekset</a>, som indeholde de 25 største virksomheder i danmark. Når de modtager dit indskud, så fordeler de pengene på de 25 virksomheder, som fordelingen giver bedst mening.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vælger du derimod et aktivt institut, så vil der sidde en række investorer. Deres mål er at holde øje med markedet, finde ud af hvor pengene bedst kan investeres imod et positivt afkast. Investorerne vil stadig være underlagt vedtægterne, som afgøre hvordan instituttet investere sin pulje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den normale omkostning ved foreninger ligger typisk under 1% om året, som trækkes fra din investerede formue. Så hvis du skyder 100 kroner ind, som er 200 kroner værd, når gebyret afregnes. Så trækker de op til 2 kroner ud af dine 200 kroner. Du mærker altså ikke gebyret, da puljen (og dertil dit investeringsbevis) falder i værdi, frem for at opkræve gebyret fra dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel. Hvis du investere i <a aria-label="Danske Invest Teknologi Indeks KL (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://www.danskeinvest.dk/w/show_funds.product?p_nId=75&amp;p_nFundgroup=75&amp;p_nFund=1031" target="_blank" class="rank-math-link">Danske Invest Teknologi Indeks KL</a>, så betaler du 0.50% om året i administrationsgebyr. Hvis din investering i foreningen er 200 kroner værd, så falder din investering altså 1 krone i værdi. De kommer ikke og opkræver beløbet fra dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dertil betaler du kurtage, når du indbetaler til og trækker penge ud af en investeringsforening. Hvis investeringsforeningen operere i en anden valuta end DKK, så vær opmærksom på eventuelle vekslings gebyr. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Bonus: Start en månedsopsparing ved Nordnet</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du gerne vil investere løbende, så kan du vælge at oprette en månedsopsparing ved Nordnet. Her opretter du en porteføljefordeling, hvor meget du vil investere hver måned, og hvor stor procentdel skal indskydes hvor. Så skal du kun sørge for at overføre penge til din Nordnet investeringskonto, så de kan investere pengene i de valgte investeringsmål.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du bruger Nordnet\'s månedsopsparing, så betaler du ikke kurtage ved købet af de valgte investeringsmål. Du kan derfor akkumulere din portefølje helt kurtagefrit. Du skal dog betale kurtage når du sælger ud af din beholdning, og vekslings gebyr er stadig aktuelt ved både køb og salg.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=UjQMhekRpmI","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\r\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\r\nhttps://www.youtube.com/watch?v=UjQMhekRpmI\r\n</div><figcaption>Daniel fra Youtube kanalen <a href="https://www.youtube.com/channel/UCunzRLkB0cWbGaWdxfiC_4w" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Daniels Pengetips</a> giver dig her en introduktion.</figcaption></figure>\r\n<!-- /wp:core-embed/youtube -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternative robot-løsninger</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du hellere vil beregne en risiko-profil, som afgøre hvordan dine penge bliver investeret. Så kan du altid vælge en robotrådgiver. Her svarer man på nogle spørgsmål, som beregner hvordan ens penge skal forvaltes. Det afgøres på, hvor stor risiko du vil tage med dine penge. Jo større risiko der godkender, jo større gevinst (eller tilsvarende tab) kan du opnå.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil vide mere, så <a href="https://finansteori.dk/borshandel/invester-gennem-investeringsforeninger" class="rank-math-link">læs alt om investeringsrobotten her</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://skat.dk/skat.aspx?oid=2234847" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: Investeringsforeninger og investeringsselskaber<br></a><a href="https://skat.dk/skat.aspx?oId=1945976" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.B Kapitalgevinstbeskatning<br></a><a href="https://skat.dk/skat.aspx?oid=2047516" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.D.9 Beskatning af fonde og visse foreninger</a></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '280'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-18 22:51:36'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-18 20:51:36'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:24:46'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:24:46'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'investeringsforeninger-fonde-etf-spredning'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_opengraph-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👩‍🎓 Investeringsinstitutter: Lad andre om dine investeringer! 😎'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_twitter-title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👩‍🎓 Investeringsinstitutter: Lad andre om dine investeringer! 😎'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_elementor_template_type'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'wp-post'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_elementor_version'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2.9.8'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👩‍🎓 Investeringsinstitutter: Lad andre om dine investeringer! 😎'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👩‍🎓 Investeringsinstitutter: Lad andre om dine investeringer! 😎'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_robots'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:1:{i:0;s:5:"index";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_use_facebook'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'off'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '83'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investeringsforeninger'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_rich_snippet'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'article'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_image_overlay'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'play'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investere-billigt-gennem-investeringsinstitutter-og-fonder'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Uden tid eller overblik kan du vælge at investere dine penge i investeringsforeninger, som aktivt eller passivt forvalter din formue.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investere-gennem-investeringsinstitutter'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'invester-gennem-investeringforeninger'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '565'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investeringsforeninger-fonde-etf-spredning'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'invester-gennem-investeringsforeninger'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_810ba68fa22d51e54ebe1f2de2b81959'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Sådan starter du en Nordnets Månedsopsparing // Gratis investering i fonde og ETF&#039;er på budget" width="800" height="450" src="https://www.youtube.com/embed/UjQMhekRpmI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_810ba68fa22d51e54ebe1f2de2b81959'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1597543242'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investeringsforeninger-fonde-spredning'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_schema_Article'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:7:{s:5:"@type";s:11:"BlogPosting";s:8:"headline";s:11:"%seo_title%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:25:"Alex Ahlgreen Westergaard";}s:11:"description";s:134:"Uden tid eller overblik kan du vælge at investere dine penge i investeringsforeninger, som aktivt eller passivt forvalter din formue.";s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:9:"isPrimary";b:1;s:4:"type";s:8:"template";}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '29'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Investeringsrobotter, månedsopsparing med automatiske investeringer',
					link: 'https://finansteori.dk/borshandel/bors-starter/investeringsrobot-maneds-opsparing',
					pubDate: 'Fri, 22 May 2020 14:50:45 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=409'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Der bliver kæmpet om at få lov til at investere dine penge. At få dig som kunde, så de kan forvalte din formue for dig. Investeringsrobotten er kommet for at blive dine nye passive forvalter, så du ikke behøver at fokusere på at investerer selv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi skal blive bedre til at investerer vores penge i markedet, istedet for at have penge til at stå stille på en bank konto. Det interessante ved investeringsrobotten er, at den er præsenteret som en opsparingsmulighed.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan fungere investeringsrobotten?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du opretter en konto, bliver du hjulpet igennem en risikovurdering. Her afgøres det hvordan robotten skal investere dine penge, ud fra hvor risikovillig du er med dine penge. Investeringer med højere risiko giver muligheden for større afkast, men dertil også større risiko for at formuen formindskes.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når der er lavet en risikoanalyse, så ryger du i en investeringspulje. Ligesom <a href="https://finansteori.dk/borshandel/invester-gennem-investeringsforeninger" class="rank-math-link">når du investerer i en investeringsforening</a>. Den her pulje er styret af et program, som analysere og handler på børsmarkedet ud fra dine risikokriterier.&nbsp;</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen er at robotten er meget hurtig til at analyserer markedet. Hvis en aktie får pludselig opmærksomhed, kan robotten være hurtig til at købe eller sælger aktien. Ulempen ved robotten er derimod, at den kan ikke analyserer markedets nyheder objektivt. Den kan ikke afgøre om en artikel i børsen sætter en virksomheds aktie i dyk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvilke investeringsrobotter er der på markedet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er et kæmpe markedet for investeringsrobotten. I Danmark har vi indtil nu 5 muligheder, som hver har sine fordele og ulemper. Nogle af dem er fantastiske muligheder for mindre månedlige indsætninger, hvor andre er bedre til større indbetalinger. Læs om de individuelle robotløsninger her:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>June (af Danske Bank) -&gt;<a aria-label=" (opens in a new tab)" href="https://www.june.dk/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link"> june.dk</a></li><li>NORD.investments -&gt;<a aria-label=" (opens in a new tab)" href="https://www.nord.investments/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link"> nord.investments</a></li><li>Nora (af Nordea) -&gt; <a href="https://investor.nordea.dk/nora" target="_blank" aria-label="investor.nordea.dk/nora (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">investor.nordea.dk/nora</a></li><li>SparIndex -&gt;<a aria-label=" (opens in a new tab)" href="https://sparindex.dk/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link"> sparindex.dk</a></li><li>Darwin -&gt;<a aria-label=" (opens in a new tab)" href="https://darwinapp.dk/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link"> darwinapp.dk</a></li><li>Jyske Munnypot -&gt;<a aria-label=" (opens in a new tab)" href="https://www.jyskemunnypot.dk/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link"> jyskemunnypot.dk</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Er der andre investeringsrobotter, som vi ikke har med? Fortæl os hvem vi mangler, og så tager vi et kig!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er fordelen ved investeringsrobotten i forhold til normal aktieinvestering?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at investere gennem en investeringsrobot, så er omkostningerne lave. Du betaler oftest et lavt beløb når du indskyder eller indfrier dine penge, og dertil et årligt forvaltningsgebyr.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi tager udgangspunkt i June, så koster de cirka 0.94% om året, samlet. Det vil sige 94 kroner, per 10.000 kroner du investerer, om året. Det indebære selvfølgelig ikke skatterne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den primære fordel er at du slipper for at betale kurtage ved handlerne. Har du ikke noget imod kurtagen, da det giver dig friheden til selv at handle aktier? <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">Læs vores introduktion til aktieinvestering her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Kilde for udregningen bag June: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.june.dk/docs/June_pricing_structure_costs_and_charges.pdf" target="_blank">June_pricing.pdf</a></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan beskattes investeringsrobotten?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Investeringsrobotten er som regel bygget op omkring investeringsforeninger, som hver holder sin risikogruppe. Under generelle vilkår bliver investeringsforeninger beskattet efter lagerprincippet. Det betyder at du årligt betaler skat, uanset om du indfrier din del af puljen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at du har en indtægt, som kan betale den årlige beskatning. Hvis du indskyder 10.000 kroner til robotten, og de bliver 25.000 kroner værd, så bliver du altså beskattet af 15.000 kroners positiv afkast.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De 15.000 kroner beskattes som aktieindkomst, efter 27/42% progressionsgrænsen. I 2020 er grænsen på 55.300, så du skal kun betale 27% skat af dine 15.000 kroner. Du skal altså betale 4.050 kroner i skat, enten med eksterne midler, eller ved at sælge en del af din investering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi anbefaler altid at du læser udbyderens egen hjemmeside omkring deres beskatning, da det kan variere fra robot til robot, og investeringsforening og investeringsselskab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://skat.dk/skat.aspx?oid=1946253" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Skat: C.B.2.1.1.14 Forklaring af lagerbeskatning</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Er investeringsrobotten for dig?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er altid plads til at investeringsrobotten. Hvis du fortrækker at investere direkte på markedet, så kan du bruge investeringsrobotten som en sikkerhed. Hvis du ikke har tiden til at holde øje med markedet, kan det også være en nem løsning til at investerer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke har maven til at se aktiepriser stige og falder i værdi, kan robotten også være en balanceret mulighed. Her ser du den totale værdi af din formue, og ikke de individuelle investeringers varierende værdier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er nemmere at forholde sig til at ens totale værdi stiger eller falder X kroner, end at se på 15 forskellige investeringer leve sit eget liv. Man skal være i stand til at kan tabe penge, uanset hvordan man investere sine penge. Investeringsforeninger og investeringsrobotter gør det bare mere overskueligt, at se hvor meget men reelt vinder og taber.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '409'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-22 16:50:45'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-22 14:50:45'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:25:49'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:25:49'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'investeringsrobot-maneds-opsparing'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '88'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investeringsrobot'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Overføre din opsparing til investeringsrobotten og får automatisk forvaltet din formue. Det er en nem måde at spare op imens din formue udvikler sig.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'off'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '568'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🤖 Investeringsrobotten: Investering efter din risikoprofil! 🎰'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_twitter_use_facebook'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investeringsrobot-maneds-opsparing'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'opsparing-ved-investeringsrobotten'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '27'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Investering med SU-Lån - Er det risikoen værd? (2020)',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/investering-su-lan-2020',
					pubDate: 'Sun, 24 May 2020 18:41:37 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=425'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Der er mange som spekulere i at investerer med den lave rente fra SU-lån. Det er billigt at optage gæld fra staten imens man studerer, men giver det mening at geare op til 100% af sine investeringer, fordi det er billigt? Lad os tage et tættere kig på matematikken, så vi afgøre om og hvornår det kan være en god investering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph {"textColor":"luminous-vivid-amber"} -->\r\n<p class="has-luminous-vivid-amber-color has-text-color"><strong><em>Den her artikel er baseret på vilkårene ved starten af 2020, så vær opmærksom på om forholdende har ændret sig, hvis du læser den senere!</em></strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er SU og  SU-lån?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du er igang med at tage en SU-berettiget uddannelse, så har du adgang til at modtage offentlig støtte under uddannelsen. Dertil har staten valgt at udbyde et studielån, til dem som ikke kan nøjes med den berettigedet SU.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at du får adgang til at optage et SU-lån fra staten, så længe du er berettiget til at modtage SU under din uddannelse. Kan du derimod nemt leve på den generelle studie-støtte, så kan du altså optage lånet til at spekulerer i at investerer dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du modtager din SU/SU-lån, bliver de udbetalt til den Nem Konto, som er registreret ved staten. Hvis du ikke er sikker på hvilken konto det er, bør du kontakte din bank. <em>Alle offentlige udbetalinger bliver udbetalt til en udvalgt Nem Konto, såfremt andet ikke er beskrevet hos udbetaleren.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":586,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/su_kvartalet-efter.png" alt="Modtag SU Kvartalet efter fødelsdag" class="wp-image-586"/><figcaption><a href="https://www.su.dk/su/om-su-til-ungdomsuddannelser-gymnasium-hhx-mv/" class="rank-math-link">SU: 18 år - kvartalet efter</a></figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget SU kan jeg få?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Så snart du er godkendt eller optaget til studiet, kan du ansøge om at modtage SU under uddannelsen. Det eneste krav er at du er fyldt 18 år, så du ikke længere betragtes som et barn under forsørgelse fra dine forældre.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis <a aria-label=" (opens in a new tab)" href="https://www.su.dk/su/om-su-til-ungdomsuddannelser-gymnasium-hhx-mv/satser-for-su-til-hjemmeboende-paa-ungdomsuddannelser/din-uddannelse-startede-17-2014-eller-derefter/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">du er hjemmeboende</a>, kan du modtage helt op til 2.691 kroner om måneden, alt efter hvad dine forældre tjener. Er du <a aria-label=" (opens in a new tab)" href="https://www.su.dk/su/om-su-til-ungdomsuddannelser-gymnasium-hhx-mv/satser-for-su-til-udeboende-paa-ungdomsuddannelser/du-er-18-19-aar-og-har-dispensation-til-udeboendesats/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">18-19 år og er udeboende</a>, kan du få helt op til 6.243 kroner om måneden. Er du fyldt <a aria-label=" (opens in a new tab)" href="https://www.su.dk/su/om-su-til-ungdomsuddannelser-gymnasium-hhx-mv/satser-for-su-til-udeboende-paa-ungdomsuddannelser/du-er-20-aar-eller-derover/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">20 år og er udeboende</a>, får du altid den fulde sats på 6.243 kroner om måneden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at forholde sig til 2 ting. <strong>Uddannelsesstøtten er altid angivet før skat</strong>, så du vil få mindre udbetalt, hvis dit års fortjeneste overgår personfradraget. <strong>Kan støtten dække dit faste månedlige budget?</strong><em>Hvis du ikke er i stand til at leve på din SU, bør du ikke spekulerer i at optage lån til at investerer, men derimod fokuserer på dine omkostninger.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget kan jeg låne på SU?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er i stand til at leve på din normale SU. efter skat, kan du spekulerer i at optage et SU-lån, som du kan investerer. Du kan starte med at optage lån fra samme måned, som du er berettiget til at modtage SU. Herefter bestemmer du selv i hvilke måneder du låner penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan låne op til 3.194 kroner on måneden, som du får udbetalt. Lån er ikke beregnet som en indtægt, og der derfor ikke beskattet. Hvis du er forsøger med barn, kan du låne yderligere 1.598 kroner, så du samlet får 4.792 kroner udbetalt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":589,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/SU-lån-Satser-2020.png" alt="SU-lån satser 2020" class="wp-image-589"/><figcaption><a href="https://www.su.dk/su-laan/satser-for-su-laan/" class="rank-math-link">Satser for SU-lån</a></figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>BONUS A</strong>: Hvis du er under 20, eller hjemmeboende, så kan du få forhøjet SU-Lån. Her får du adgang til at låne forskellen på din sats og den maksimale sats. Det vil sige, at hvis du er hjemmeboende og modtager 997 kroner om måneden, så kan du låne (2.691-997=) 1.694 kroner ekstra om måneden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>BONUS B</strong>: Når du er færdig med dit studie, kan du optage et slutlån. Slutlånet er normalt beregnet til folk, som har brug for penge under overgangen mellem uddannelser eller over til et nyt job. Her kan du låne 8.241 kroner i op til et år efter end studie. <em>Vi vender tilbage til det her lån senere!</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er mit totale SU-lån?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Loftet for SU-lån ændres årligt, så det er svært at lave en fuldendt beregning. Det bedste vi kan gøre, er at kigge på historiske tal og lave en forventning til fremtidige tal. Her er lofterne for de seneste 3 år:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>2020: 3.194 kr/mdr</li><li>2019: 3.155 kr/mdr (-39 imod 2020)</li><li>2018: 3.116 kr/mdr (-39 imod 2019)</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi skal gå ud fra at tallet stiger med 39 kroner om året, så vil vi få følgende lånemuligheder:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>2020: 3.194 kr/mdr, dvs. 38.328 totalt før renter.</li><li>2021: 3.233 kr/mdr, dvs. 38.796 totalt før renter.</li><li>2022: 3.272 kr/mdr, dvs. 39.264 totalt før renter.</li><li>2023: 3.311 kr/mdr, dvs. 39.732 totalt før renter.</li><li>2023: 3.350 kr/mdr, dvs. 40.200 totalt før renter.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad koster et SU-lån?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>SU-lånet fungerer ligesom normale kommercielle lån, hvor man bliver pålagt en årlig eller månedlig rente. Lånet fra staten til studerende er et lån med hybrid-renter. Du betaler 4% rente imens du studerer, og her efter falder renten til <a aria-label=" (opens in a new tab)" href="http://www.nationalbanken.dk/da/markedsinfo/officiellerentesatser/Sider/Default.aspx" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">diskonto-renten</a> + 1%. Renterne bliver afregnet  på månedlig basis.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal vi have fat på regnestykket R^(1/12)-1 for at omregne den årlige rente til måneds rente. Efter vi har betalt renten, så bliver beløbet til 104%, altså 4% over startbeløbet. I matematisk begreb bliver det til 1,04 og får derfor regnestykket 1,04^(1/12)-1 = 0,327% rente om måneden. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at pålægge renten, så tager vi den totale gæld, og ganger med 1,00327. Hvis vi låner 1.000 kroner, vil gælden stige til 1003.27 kroner. Næste måned låner vi igen 1.000 kroner, så vores samlede gæld er 2003.27. Efter rente stiger gælden til 2009.82 kroner, på grund af rentes rente.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du er færdig med studiet, og falder til 1%, så bliver din månedlige rente altså 1,01^1/12 = 0.083%, eller 0,00083 omregnet til matematisk procent.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget gror gælden over 5 år?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Inden vi begynder at kigge på investeringer, så er det vigtigt at kende den langsigtet risiko først. Derfor vil vi nu lave en beregning på hvor meget vores gæld stiger over de næste 5 år. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Beregningen følger den månedlige rente, men istedet for 1.000 kroner, så tilføjer vi det årlige loft hver måned. Istedet for at give dig <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link rank-math-link" href="https://docs.google.com/spreadsheets/d/1XyOOkVJ7nk_mIbvOt0flmLa_iREEObDgxCtGjMySQ4I/edit?usp=sharing" target="_blank">den fulde beregning</a>, så får du de endelige tal her:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Efter 1 år: 39.153,46 kroner (825,46 kroner er renter)</li><li>Efter 2 år: 80.351,15 kroner (3.227,15 kroner er renter)</li><li>Efter 3 år: 123.674,81 kroner (7.286,81 kroner er renter)</li><li>Efter 4 år: 169.209,51 kroner (13.089,51 kroner er renter)</li><li>Efter 5 år: 217.043,67 kroner (20.723,67 kroner er renter)</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:image {"align":"center","id":584,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/sulan-2020-2025.png" alt="Forventet SU-Lån 2020-2025" class="wp-image-584"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Efter 5 år betaler du altså 20.723,67 kroner i renter for at låne 196.320 kroner (før renter). Dine renter udgør altså 10,56% af dit lånte beløb. Her har du altså ikke betalt de fulde 4% rente af de seneste 11 måneders lån, før du gå over på diskonto+1% renterne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget afkast skal mine aktieinvesteringer mindst give?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at investerer dit SU-lån i børsmarkedet, så er der en risiko for at tabe sine penge. Det er derfor vigtigt at du opgøre med dig selv, hvor mange penge du vil låne og risikere at tabe.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os i første omgang regne ud, hvor meget vores investeringer skal afkaste, for at vi går i nul med renten. Vi har nu fået opgjort at renten er 4% om året eller effektivt 0,327% om måneden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har 2 muligheder for at investerer i aktier. Vi kan vælge en helt <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">normal investerings konto</a>, hvor vi betaler 27/42% i skat af realiseret afkast og udbytte. Vi kan også vælge at <a class="rank-math-link rank-math-link" href="https://finansteori.dk/borshandel/start-med-en-aktiesparekonto">investerer på en aktiesparekonto</a>, til en fast lav beskatning på 17%. Her er det vigtigt at kigge på indskudsloftet, som lige nu er på 51.100 kroner i 2020, og svarer til 1,24 års lån.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at investerer igennem en normal investerings konto, så skal du altså have et månedligt afkast på 0,00327/(1-0,27) = ~0.45%. Hvis du låner 1.000 kroner, udvikler det sig til 1003,27. For at modveje det med 27% beskatning, skal du altså afkaste 4,5 kroner. <em>(4,5 - 27% = 3,285 kroner)</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vælger du derimod aktiesparekontoen, som er årligt lagerbeskattet. Her betaler du 17% af årets positive afkast og udbytter. Det betyder at du enten skal realisere et afkast eller modtage udbytter for at betale den årlige skat. Her skal du have et månedligt afkast på 0,00327/(1-0,17) = ~0,40% (0,394% rundet up, så vi ikke ender med for lidt på kontoen).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Her er det vigtigt at huske, at de 0.40% og 0.45% kun overkomme den månedlige rente, her fra mangler du stadig at afbetale på det lånte beløb.</strong> Da du ikke afbetaler på gælden før Januar 1 år efter stoppet studie, så er det lige nu vigtigere at akkumulerer en indtægt der er højere end renterne, end selve afbetalingerne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Eksempel på en investeringsstrategi med SU Lån</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Målet er at optimere vores situation i forhold til beskatning og afkast. For at sikre at man ikke ender med en masse gæld efter forløbet. For at få de bedste vilkår muligt, er det vigtigt at vi kan udfylde loftet på aktiesparekontoen, så vi ikke bliver lukket ude af positivt afkast imellem 2 år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Første års lån er nød til at gå direkte ind på aktiesparekontoen, da vi må fylde op til 51.100 kroner. Da det er første år, så gør kursændringerne ingen forskel for os, da man bruger sidste års opgørelse, for at se hvor meget man på fylde op i løbet af året. Hvis du allerede har en aktiesparekonto med et årsresultat vil din beregning blive påvirket.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Næste år fylder vi op til loftet, og så skifter vi over til den tungere beskatning på en normal investerings konto. Jo bedre vi kan optimerer vores økonomi, des nemmere er det at opnå målet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi så i regnestykket før at vi skal afkaste minimum 0,40% om måneden, af den totale gæld. Her er vi nød til at kigge på udbytteaktier, der betaler 0,40*12 = 4,80% udbytte om året. Her er det en fordel at finde udbytteaktier med månedsudbetalinger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Investering i Udbytte, Udbytte, Udbytte</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan vi som eksempel tage <strong>Diversified Royalty Corp (DIV)</strong>, som i skrivende stund koster 1,60 CAD (~7,82 DKK) og udbetaler 0,017&nbsp;CAD (~0,08 DKK) om måneden, svarende til 12,50%  af købsprisen om året. For 3.194 kroner kan vi købe (3.194-29)/7,82= 404 aktier, da vi også skal betale kurtage. Derved får vi et totalt månedligt udbytte på 404*0,017= 6.868 CAD om måneden, svarende til 33,55 kroner i skrivende stund <em>(23. Maj 2020)</em>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Status efter første måned er at vi har lån 3.194 kroner, som er forrentet med 10,46 kroner. Via vores investering har vi fået 33,55 kroner ud, som først beskattes i slutningen af året. Ved at geninvesterer de 33,55 kroner i flere udbytte aktier, er vi i stand til at overkomme rentes rente fra lånet, ved at skabe rentes rente af udbyttet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph {"align":"center","textColor":"luminous-vivid-amber"} -->\r\n<p class="has-text-align-center has-luminous-vivid-amber-color has-text-color"><em><strong>33,55 / 3.204,46 * 100 = ~1.05% udbytte imod lånet efter renter.</strong></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at akkumulere vores udbytte, også kaldet rentes rente, så kan vi nøjes med at gemme udbytterne fra November og December til at betale skatten. Skulle skatten være højere end de 2 måneders udbytter, så kan vi altid afbetale med en smule fra Januar lånet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan også vælge at gemme dem fra måned til måned, og og så nøjes med den lavere rentes rente effekt. Hvis du fortrækker en sikker fremgang kan du også afbetale renten før du geninvesterer dine udbytter. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at huske, at så længe aktien ikke falder voldsomt i pris, så er dine lånte penge stadig til rådighed ved at sælge porteføljen. Du betaler kun skat af det positive afkast og udbytter. Falder porteføljen i værdi så får du et skattefradrag på udbytter og fremtidig positivt afkast.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Du skal huske at aktier falder i relation til udbetaling af udbytte. Du skal derfor ikke blive nervøs for at dine aktier falder i værdi, når der bliver udbetalt udbytter. Hvis de falder generelt, skal du gøre op med dig selv, om udbyttet er mere værd end aktiekurs faldet.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Akkumulering af afkast indtil afbetaling</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Imens du studerer og låner penge, er det vigtigt at du kan akkumulerer udbyttet. Når du er færdig med studiet, så afregner 1% rente om året. Det svarer til 0,083% om måneden. Her får du muligheden for enten at spare op til at afbetale gælden hurtigt, eller at akkumulerer viderer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>217.043,67 gror hver måned med de 0,083%. Efter 1 år vil gælden være steget til 219.214,11 kroner (+2.170.44 kroner i renter). Din gæld vil stige med 1% indtil du er færdig med at afbetale gælden, så længe du er i stand til at afbetale.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du investerer i udbytte aktier, og har overgået de 4%, så ville du nu have 3% i overskud, hvor du kan forøge dine investeringer eller sparer op til afbetaling.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvilke risikoer skal jeg forholde mig til?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer dit SU-lån skal du være opmærksom på dine portefølje. Her skal du være ekstra opmærksom på om aktien falder ud over udbytte, så du kan minimerer dine generelle tab. Dertil skal du også holde øje med at dine aktier ikke skære ned på eller fjerner sine udbytter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":549,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/sek-dkk-exchange.jpg" alt="SEK/DKK Exchange" class="wp-image-549"/><figcaption><em>Konverteringen viser hvor mange DKK du får for 100 SEK. <a aria-label=" (opens in a new tab)" href="https://www.xe.com/currencycharts/?from=SEK&amp;to=DKK&amp;view=5Y" target="_blank" rel="noreferrer noopener" class="rank-math-link">XE: SEK to DKK</a></em></figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal også være opmærksom på valutakurser når du investerer i udlandske aktier, da du både investerer i virksomheden og møntfoden som de operer i.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Havde du investeret i svenske aktier i 2016, ville du få mindre retur i 2020, også selv om aktien steg 10%. Det er alene fordi SEK er faldet omkring 12,5% i forhold til DKK. Hvis du lavede en valutaveksling på 100 Svenske kroner den 1 Januar 2020, ville du få udbetalt 71,21 Danske kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Renter er altid variable. Lige nu har vi fordelagtige renter på 4/1%, men det kan ændre sig i fremtiden. Renterne kan både blive fordelagtigt lavere, men det kan også blive højere. Du skal løbende holde dig opdateret med dine forhold til SU-lånet og til markedet. Hvis du mister oversigten, kan du hurtigt ende i en dårlig situation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Investering af SU-lån i aktier</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Først skal du finde ud af hvor meget du kan få i SU, så du ved hvordan dit budget kommer til at se ud. Herefter er det vigtigt at gå i dybden med dine udgifter, så du kan skabe en detaljeret oversigt. Du skal have et økonomisk frirum, så du ikke låser dig selv inde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har styr på din økonomiske situation, skal du finde ud af hvor meget du kan låne. Lav en beregning over hvor meget du regner med at låne om måneden, og hvor meget det kommer til at koste dig i renter. Et detaljeret overblik viser dig hvor meget du kan tjene, eller tabe, alt efter hvor godt du klarer dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her efter skal du dykke dybt ned i hvordan du planlægger dine investeringer. Hvad er målet med investeringen, er det en kort, mellem eller langsigtet investering? Kan du overkomme dine månedlige eller årlige renter <em>(og renters renter)</em> med dine investeringer?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>RÅD</strong>: Pas på med at investerer for mange penge i den samme ting, hvis du har muligheden for at dele investeringerne ud. Ved at investerer i flere ting sikre du dig selv imod konkurs, nedskæring eller stop af udbytter eller hvis en virksomhed falder i pris.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a class="rank-math-link rank-math-link" href="https://www.su.dk/su-laan/">SU-Lån</a></li><li><a class="rank-math-link" href="https://www.su.dk/su-laan/tilbagebetaling-af-dit-su-laan/renter-paa-dit-su-laan/">Renter på dit SU-lån</a></li><li><a class="rank-math-link" href="https://www.su.dk/su-laan/satser-for-su-laan/">Satser for SU-lån</a></li><li><a class="rank-math-link rank-math-link" href="https://www.su.dk/su-laan/tilbagebetaling-af-dit-su-laan/">Når du skal betale lån tilbage</a></li><li><a href="https://www.borger.dk/oekonomi-skat-su/SU-og-oekonomi-under-uddannelse/Studiegaeld-oversigt/Studiegaeld-tilbagebetaling" class="rank-math-link">Tilbagebetaling af studiegæld</a></li></ul>\r\n<!-- /wp:list -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '425'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-24 20:41:37'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-24 18:41:37'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:26:18'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:26:18'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'investering-su-lan-2020'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '94'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_1958997f5e1b176e883919409b304279'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Tjen 267.000kr GRATIS under studie? Investering på SU lån // Lån penge på SU til aktieinvestering" width="800" height="450" src="https://www.youtube.com/embed/vObqxm1dEOM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_1958997f5e1b176e883919409b304279'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1590238672'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_41282d81d6606d77577590ef0e152197'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Invester mens du er på SU - Udnyt DK&#039;s billigste lån" width="800" height="450" src="https://www.youtube.com/embed/z2AQjP6pv4c?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_41282d81d6606d77577590ef0e152197'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1590238672'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'SU-Lån,Investering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Spekulerer du i at investerer i aktiemarkedet med SU-lån? Her tager vi et kig på hvor meget man kan låne, til hvilken rente og hvor meget man skal tjene.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '570'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '📑 SU-Lån, bør du investerer med det? ⏳'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investering-su-lan-2020'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'invester-med-su-lan-2020'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '26'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title:
						"Udbytteinvestering - Modtag penge for at eje aktier, fonde og ETF'er - Start i 2020!",
					link: 'https://finansteori.dk/borshandel/bors-indsigt/udbytteinvestering-aktier-fonde-etf',
					pubDate: 'Wed, 27 May 2020 18:21:18 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=599'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis du vil investerer i aktiemarkedet med formålet at forstørre din formue, så har du sikkert stødt på udtryk som udbytte og renters renter. Men hvad vil det sige at investerer i at få kontante udbetalinger med bestemte intervaller. Hvordan fungerer det i praksis og hvad skal man være opmærksom på?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel er der ikke meget information om aktieinvestering generelt. Hvis du skal have en genopfriskning eller introduktion, så <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">læs om aktieinvestering her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er udbytte?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når en virksomhed er blevet moden nok til at kan finansiere sig selv. Skaber et stabilt årligt overskud, efter at have betale alle regninger og lagt penge til siden til fremtiden. Så kan bestyrelsen vælge at belønne virksomhedens investorer. Det gør de ved at udbetale en del af årets overskud i løbet af næste år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal du være opmærksom på, at en virksomhed skal betale selskabsskat før det kan udbetale udbytter. Derfor er det typisk opgjort ved årsresultatet, når virksomheden opgøre overskuddet fra omsætningen og hvor meget det skal betale i selskabsskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når virksomheden udbetaler en del af sit overskud, så falder aktiekursen tilsvarende udbyttebeløbet. Det vil sige at hvis en aktie koster 80 kroner og udbetaler 6 kroners udbytte, så vil aktiekursen falde til 74 kroner ved udbetalingen. Herefter vil den stige og falde som normalt, ud fra hvad folk værdisætter aktien.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvorfor betales der udbytte?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis en virksomhed har 100.000.000 kroner i overskud efter alle regninger og skat, så kan de vælge at udbetale en del til dets aktionærer. De vil gerne have penge nok i banken til fremtidige gøremål, så derfor udbetaler de kun 10% af overskuddet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os sige at virksomheden har 1.275.947 aktier. Virksomheden betaler 10% af 100.000.000, svarende til 10.000.000, fordel ud på dets aktier. Hver aktie er derfor berettiget til at modtage <em>10.000.000/1.275.947=</em> 7,83731 kroner. I det fleste tilfælde afrunder man udbytte ved 3-5 decimaler.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Udbyttet er altså ikke baseret på aktiekursen. Man kan dog se hvor meget der historisk er blevet udbetalt i forhold til aktiens nuværende kurs. Hvis aktien koster 82 kroner, så vil udbytteprocenten sige <em>7,83731/82*100=</em> 9.56%. Stiger aktien imorgen til 102 kroner, så vil udbytteprocenten tilsvarende falde til <em>7,83731/102*100=</em> 7.68%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når bestyrelsen vælger at udbetale udbytte, vil der kommer 2 vigtige datoer. Der kommer en X-dato og en Udbetalings-dato. X-datoen er den dag, hvor virksomheden opgøre hvem der har ret til udbyttet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=vyrCM7YKjTI","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\r\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\r\nhttps://www.youtube.com/watch?v=vyrCM7YKjTI\r\n</div></figure>\r\n<!-- /wp:core-embed/youtube -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis det for eksempel er den 5 juni, så skal du eje aktien den 5 juni for at modtage udbytte, og her falder aktiekursen tilsvarende udbyttebeløbet. <strong>Det er for sent at købe aktien på dagen, den 5 Juni.</strong> Det gør den for at du ikke både kan få krav på udbyttet og sælge aktien til kursen før udbetalingen. Når udbyttemodtagerne er opgjort, vil beløbet blive sat til udbetaling på den angivet udbyttedato.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Her skal du være opmærksom på, at hvis det er udlandske aktier, så kan der gå 2-5 bank dage, før pengene lander på din investerings konto.</strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan investerer man i udbytte?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er forskellige måder på hvordan du kan opnå udbytte. Du kan vælge at investerer i virksomheder som udbetaler en del af sit årlige overskud. Vil du ikke selv analysere markedet, kan du også investere i udloddende investeringsforeninger eller ETF\'er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Direkte køb af udbytteaktier</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Alt efter hvilken platform du investerer igennem, vil der være mulighed for at filtrere efter udbyttebetalende aktier. Hvis du handler aktier ved Nordnet kan du finde udbytteinspiration her: <a aria-label=" (opens in a new tab)" href="https://www.nordnet.dk/dk/marked/aktier/udbytteguiden" target="_blank" rel="noreferrer noopener" class="rank-math-link">Udbytteguiden</a>. Ved Saxobank kan du også søge efter "udbytte%", men overblikket for antal udbetaler og har jeg ikke kunnet finde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Indirekte køb via foreninger</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er ikke mange udbyttebaseret investeringsforeninger i Danmark, men det er stadig muligt at opnå udbytter. Det kræver lidt mere tid at sætte sig ind i disse foreninger, da de sjældent reklamerer med udbytter. Danske Invest har udformet et <a aria-label=" (opens in a new tab)" href="https://www.danskeinvest.dk/w/show_pages.udbytter_dk?p_nId=75" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">udbytte ark</a>, så du kan se hvilke foreninger der betaler hvor meget.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Investering i udbytte ETF\'er</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ligesom de normale investeringsforeninger, er der også dem som handles via en børs. Det er dem som vi kalder ETF\'er, som handles ligesom aktierne i virksomheder. Der findes udlandske ETF\'er (investeringsforeninger eller fonde) hvis formål er at betale udbytte hver måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som beskrevet så er det sidste års overskud som udbetales i år. Det betyder at disse ETF\'er spreder deres fulde udbytte ud over et helt år, istedet for at betale det fulde beløb på 1 gang. Her kan du også finde en <a aria-label=" (opens in a new tab)" href="https://www.nordnet.dk/markedet/etf-lister?sortField=yield_1y&amp;sortOrder=desc&amp;fundGroupedCategories=DIVIDEND" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">liste over udbytte ETF\'er på Nordnet</a>, men du skal åbne dem individuelt for at se deres udbyttehistorik.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er renters rente effekten?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber 1000 aktier til 80 kroner, af en virksomhed som betaler fast månedlig udbytte, lad os sige 1.35 kroner. For at gøre eksemplet nemt, siger vi at kursen stiger 2% om måneden og vi indberegner <strong>ikke </strong>skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I første måned modtager du 1.350 kroner, og aktien falder til 76,50 kroner per aktie. Du har råd til at købe 17 aktier mere i selskabet. I løbet af måneden stiger aktien til 78,03 kroner. Der udbetales nu udbytte og den falder til 76.68 kroner. Da du ejer 1.017 aktier, modtager du nu 1.372.95 kroner, som du geninvesterer i 18 aktier mere.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu har du samlet 1.035 aktier, som betaler 1,35 kroner om måneden. På den måde kan du opnår du renters rente effekten ved at geninvesterer udbyttet imod flere udbytter i fremtiden. Hvis du dertil selv overføre penge månedligt, så forøger du dit afkast endnu mere fra måned til måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det svarer i bund og grund til at dine aktie stiger x% hver måned, men udbytte giver muligheden for at sprede afkastet ud i flere forskellige aktier. Du kan også vælge at købe varer for pengene, uden at skal sælge dine investeringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Husk regnestykket Y=72/R</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer og geninvesterer udbytter, så er start-målet som regel at indfri sin investering. Det vil sige at man beregner hvor lang tid der går, får man har fået sine penge ud af investeringen, uden at sælge den.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er nogle matematikere, som har beregnet på eksponentielle stigninger. Her er man kommet frem til 2 tal, som bruges på hver sin måde, i forhold til hvor præcist man vil være.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man vil have en cirkaberegning på hvor lang tid renter og renters rente vil tage om at fordoble, så kan man bruge 72-reglen. Det gør man ved at lave regnestykket Y=72/R, hvor Y er resultatet af år og R er renten. Hvis dit årlige afkast er 7%, så vil det fordoble efter 72/7= ~10 år, da man altid afrunder kommatallene på 72-reglen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi vil dobbelt tjekke hvor precise vores tal er, så kan vi sige 1+R/100^Y. I vores tilfælde vil det sige 1,07^10= 1.97, hvilket er ret tæt på en fordobling.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan er udbytter beskattet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Din beskatning er afhængig af hvordan din investering er foretaget. For at gøre det nemt, får du her en liste over den generelle beskatning. Hvis du er i tvivl om du bliver beskattet efter generelle vilkår, så kontakt udbyderen du investerer igennem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan beskattes udbytter på en normal investerings konto?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du modtager udbytter på en <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020">normal investerings konto</a>, vil du blive beskattet 27/42% i forhold til progressionsgrænsen. I 2020 er grænsen på 55.300 kroner, hvor du betaler 27% af udbytter og afkast herunder, og derefter 42% af resten. Vil derfor anbefale at du altid modregner 42% skat, hvis din totale aktieportefølje er større end 100.000 kroner i værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan beskattes udbytter på aktiesparekontoen?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://finansteori.dk/borshandel/start-med-en-aktiesparekonto">Aktiesparekontoen er fast lagerbeskattet med 17%</a>. Lagerbeskatning sker årligt, og du skal derfor ikke betale skat når udbyttet udbetales til din konto. Vær dog opmærksom på at have nok penge sat til side, når skatten skal betales ved årsopgørelsen, så du ikke ender med overtræk på kontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan beskattes udbytter fra foreninger og ETF\'er?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dine beskatnings procent er her afgjort af om du ejer investeringsbeviserne igennem normal investerings- eller aktiesparekonto. Dog er både <a href="https://finansteori.dk/borshandel/invester-gennem-investeringsforeninger">foreninger og ETF\'er</a> lagerbeskattet, ligesom aktiesparekontoen er generelt. Du vil derfor ikke nødvendigvis blive beskattet ved udbetalingen af udbyttet, men ved årsopgørelsen, også selv om du investerer igennem en normal investerings konto.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Udbytte er næsten ligesom modtage husleje fra lejemål</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du investerer i ejendomme eller lejligheder, med formålet at udleje dem. Så får du hver måned en husleje fra lejerne, hvor fra du har et månedligt overskud. På næsten samme måde kan du få månedlige udbytter fra virksomheder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Heldigvis er mange udbytteaktier gode forretninger, som på sigt stiger i værdi på trods af udbetalingerne. Det hjælpe også, at udbytterne typisk er opgjort fra sidste års overskud. Virksomheden skal derfor ikke opgøre hver måneds indtægter imod udbetaling til dets aktionære.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En typisk udbytte aktie kan være en franchise udbyder. De modtager månedligt eller årligt at gebyr for at folk bruger deres franchise. Herfra betaler selskabet en større del af beløbet videre til dets aktionære, da det ikke behøver intern kapital til mere end administrationen, som håndtere de forskellige franchisetagerer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>5 eksempler på udbytteaktier</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her får du en række udbytteaktier, som du kan analyserer og afgøre om er for dig. Ved at klikke på aktierne bliver du sendt over til Nordnet, hvor du kan se mere information om dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vær opmærksom på at historisk data ikke garanterer fremtiden, specielt med udbytter. Der er altid en risiko for at udbytter bliver sat ned eller fjernet. I sådan et tilfælde ejer du stadig aktien, og kan vælge at sælge den eller holde fast i den i håb om at udbyttet kommer tilbage eller stiger igen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/markedet/aktiekurser/16179435-orchid-island-capital" target="_blank">Orchid Island Capital, Inc. (ORC)</a><br><em>Nedsat under corona, så betaler lige nu 0,55 USD per <strong>mdr</strong>.</em></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/markedet/aktiekurser/16118725-gladstone-capital-corporation" target="_blank">Gladstone Capital Corporation (GLAD)</a><br><em>Nedsat 0,5 USD under corona, så betaler lige nu 0,65 USD per <strong>mdr</strong>.</em></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/markedet/aktiekurser/16121130-ellington-financial" target="_blank">Ellington Financial Inc. (EFC)</a><br><em>Nedsat under corona, så betaler lige nu 0,08 USD per <strong>mdr</strong>.</em></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/markedet/aktiekurser/16122558-pepsi-co" target="_blank">PepsiCo, Inc. (PEP)</a><br><em>Steget under corona, så betaler lige nu 1,023 USD per <strong>kvt</strong>.</em></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/markedet/aktiekurser/16122125-altria-group" target="_blank">Altria Group (MO)</a><br><em>Steget under corona, så betaler lige nu 0,84 USD per <strong>kvt</strong>.</em></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>* Lige nu refererer til i skrivende stund. Der er ingen reklame eller kommission på overstående links.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan finder jeg udbytteinvesteringer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er mange virksomheder der betaler udbytte, men mange af dem udbetaler kun årligt eller halvårligt. Du skal derfor afgøre hvor ofte du ønsker at modtage udbetalinger i form af udbytter. I hovedtal modtager 1 aktie den samme mængde udbytte over et år, uanset om de betales månedligt eller årligt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen ved at modtage udbytte hver måned eller kvartal, er at du kan forøge din udbytte hurtigere. Hvis du modtager penge hvert kvartal, kan du måske købe 10, 12, 15 or 17 aktier, hvilket ender ud i 54 ekstra aktier. Havde du fået udbytte 1 gang om året, kunne du måske kun købe 40-45 aktier mere.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at finde disse aktier, er du nød til at søge efter aktier der betaler udbytte. Herefter går du igennem listen og kigger på hvor meget de gennemsnitligt betaler, hvor ofte og hvor længe har de gjort det. Er virksomheden steget i værdi eller står den stille ifølge historiske data. Hvordan er deres risikoprofil imod interne og eksterne forandringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":635,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/healthy-dividend-growth-stock.png" alt="Sund udbytteaktie med vækst" class="wp-image-635"/><figcaption>Eksempel på sund aktie der er stigende i værdi trods løbende udbetalte udbytter. Billedet er ment som visuel repræsentation, og ikke en refleksion af en rigtig aktie.</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Hvor ofte betaler selskabet udbytter?</li><li>Hvor meget betaler de gennemsnitligt i udbytte?</li><li>Er udbytterne stigende, faldende eller flade?</li><li>Hvilken branche er selskabet i?</li><li>Hvilke risikoer indeholder branchen?</li><li>Er kursværdien historisk stigende eller faldende?</li><li>Hvor lang tid tager det at indfri investeringen?</li><li>Hvor mange aktier skal du eje for at kan købe minimum 1 aktie ved uddeling efter skat?</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Eksterne værktøjer og analyser</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan være en god idé at få lidt hjælp udefra, istedet for at lave analyser som allerede findes. Der findes mange gode hjemmesider derude, men oftest er de gode på engelsk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her får du en række hjemmesider, som oftest bliver anbefalet. Tag et kig på dem og dan dig et overblik. Det handler om at finde det værktøj, der giver dig de informationer, som du er tilfreds med. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://www.dividend.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">https://www.dividend.com/</a> *</li><li><a href="https://www.suredividend.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">https://www.suredividend.com/</a> *</li><li><a href="https://www.dividendchannel.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">https://www.dividendchannel.com/</a> *</li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://www.dividendinvestor.com/" target="_blank">https://www.dividendinvestor.com/</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://dividenddetective.com/" target="_blank">https://dividenddetective.com/</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://www.dividendgrowthinvestor.com/" target="_blank">https://www.dividendgrowthinvestor.com/</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://www.dividendstocksonline.com/" target="_blank">https://www.dividendstocksonline.com/</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>*</strong> Markere de hjemmesider jeg har valgt at bruge til egen research.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor er risikoen ved udbytteinvesteringer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer i udbytte, er der samme risikoer som ved normale aktier. Kursen kan falde ved manglende interesse. Virksomheden kan blive ramt af udfordringer eller konkurs. Der kan komme en situation hvor virksomheden ikke må udbetale eller ikke kan finde overskud nok til at udbetale udbytter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan også risikerer at virksomheden har en lavere omsætning et år. Det kan medføre at udbytter bliver mindre eller fjernet. Hvis virksomhed vurderer at pengene skal gemmes til næste regnskabsår, for at sikre dens selv finansiering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er det vigtigt at huske at udbytter og kursværdi ikke går i hånd. Kursen kan være faldende og udbyttet stigende. Det er dog sjældent at virksomheden vækster og nedsætter sine udbytter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dertil ejer du stadig aktien hvis virksomheden nedsætter eller fjerner sin udbytte. Så hvis tabet er minimalt på salget, så har du stadig en generel gevinst fra at have ejet aktien og modtaget udbytter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>FIRE: Ung pension med økonomisk frihed via 4% reglen</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Udbytteinvestering er interessant for mange, da det kan give dem muligheden for <a href="https://finansteori.dk/borshandel/fire-tidlig-pension-okonomisk-uafhaengig" class="rank-math-link">at være mindre afhængig af et fast arbejde</a>. Nogle går så meget op i det, at de sammentid minimerer deres levestandard og udgifter. FIRE går ud på at man skaber stor nok passiv indkomst, til at man kan dække dele eller hele sin levestil.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Brug for et eksempel? Lad os sige at du lever for 18.000 kroner om måneden. Det dækker alle dine udgifter som leje, mad, er par by ture og måske bil og brændstof. Disse udgifter vil vi gerne dække med passive indtægter, så vi har en form for sikkerhed imod fyringer eller ligende.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Først skal vi finde ud af hvor meget vi skal tjene om året, for at have 18.000 kroner om måneden. 18.000*12 er 216.000 kroner efter skat. Her bliver det lidt tricky, fordi vi er progressions-beskattet 27/42%. For at gøre det nemt for os selv, så vælger vi at modregne den højeste skattesats på 42%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at vi skal modtage 216.000/(1-0,42)= 372.413,80 kroner før skat. Her er det vigtigt at man altid runder up til 2 decimaler. Du skal også huske at aktier er aktieavancebeskattet og ikke som indkomst. Du vil derfor ikke komme op på 52% top-skat. Så hvor meget skal vi investerer for at opnå 372.413,80 kroners afkast om året?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er det vigtigt at forholde os til 2 variabler. Gennemsnitlig inflation og gennemsnitligt udbetalt afkast (ref. udbytter). Her er man nået frem til at man gennemsnitligt afkaster 7% om året. Her må man trække 4% ud og de sidste 3% skal geninvesteres imod inflation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det betyder at 4% af vores portefølje skal svare til 372.413,80 kroner. For at modregne det, siger vi 372.413,80/0,04= 9.310.345 kroner. Du skal altså akkumulerer en formue på lige knap 9,5 millioner kroner, for at kan dække 18.000 kroner om måneden.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '599'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-05-27 20:21:18'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-05-27 18:21:18'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:27:32'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:27:32'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'udbytteinvestering-aktier-fonde-etf'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '88'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'udbytte,investering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-disabled'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-insert'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-heading-levels'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'a:0:{}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-alttext'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_ez-toc-exclude'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '601'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_1c50c4278411dd32bb02cc4e2d33d19f'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Alt du skal vide om udbyttedage" width="800" height="450" src="https://www.youtube.com/embed/vyrCM7YKjTI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_1c50c4278411dd32bb02cc4e2d33d19f'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1597098922'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_1bf692551c0d97b9e2cd39fa3ffa373d'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '{{unknown}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_rich_snippet'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'article'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '♻️ Udbytte investering: Få kontante udbetalinger ✔️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'udbytteinvestering-aktier-fonde-etf'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'udbytte-investering-sadan-kommer-du-igang'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_schema_Article'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:6:{s:5:"@type";s:11:"BlogPosting";s:8:"headline";s:11:"%seo_title%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:25:"Alex Ahlgreen Westergaard";}s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:9:"isPrimary";b:1;s:4:"type";s:8:"template";}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '25'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Aktie Shorting - Tjen penge når markedet falder i værdi',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/shorting-tjen-penge-kursfald',
					pubDate: 'Thu, 04 Jun 2020 16:31:14 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=893'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Under normale forhold, hjemme fra sin egen computer, der køber man typisk aktier i håb om at de stiger i værdi. Man tjener penge ved at købe billigt og sælge dyrt. Når man bevæger sig ud i at Shorting af en aktie, så spekulerer man i at aktien falder i værdi. Men hvordan tjener man penge på at aktier falder i værdi?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er shorting?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Markedet boomer derudaf, men du tror at markedet snart vender og styrt dykker. Derfor er du interesseret i at byde imod markedet. Derfor låner du nogle aktier, som du kan sælge. Når aktierne forhåbentligt er faldet tilpas meget, så køber du aktierne tilbage, og returnere dem. Du har altså tjent penge på at sælge dyrt og købe lavt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke er bekendt med almindelig aktieinvestering, så anbefaler vi at du først lærer at handle aktier. <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">Lær alt om aktieinvestering her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan fungere en shorting?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at oprette en shorting position, skal du først have en Margin-konto. Det er en konto hvor på der står et rådighedsbeløb, og er forbundet til en kapital-konto, hvorfra tab kan trækkes fra. Herefter tager du kontakt til din børsmægler med den position du gerne vil short.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Din børsmægler starter internt med at se, om der er nogle aktier som du kan låne. Hvis det ikke er muligt, kontakter de eksterne investeringsselskaber. Hvis de finder nok aktier eller investeringsbeviser til at dække din shorting position, så bliver de solgt på markedet og pengene kommer ind på din margin-konto.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når aktien stiger i pris, så falder beløbet på din margin-konto tilsvarende. Falder aktien, så stiger beløb på din margin konto. Når du beslutter dig for at lukke din shorting position, så køber din børsmægler aktierne eller investeringsbeviserne retur til nuværende markedspris.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis din shorting blev solgt til 100 kroner, og herefter købt til 65 kroner, så har du altså tjent differencen på 35 kroner før eventuel kurtage og beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":919,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/06/stock-shorting-earnings.png" alt="Shorting graf over fortjeneste" class="wp-image-919"/><figcaption>Her ser du reflektionen over fortjeneste i forhold til kursfald.</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Under normale aktieinvesteringer er risikoen forbundet med det investerede beløb. <strong>Når du shorter en aktie, er der ikke nogen begrænsning på hvor meget en virksomhed kan stige i værdi. </strong>Du skal derfor være opmærksom på at have kapitalen til at dække stigningerne. En god måde at begrænse sit tab på, er ved at oprette en <strong>stop-loss</strong> begrænsning på sin shorting position.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er risikoen ved shorting?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du opretter en shorting position, så sælger du lånte aktier til nuværende markedskurs. Her fra kan aktierne falde fra købspris til 0, hvilket ville være en god dag for dig. Desværre er der ikke en begrænsning på hvor meget en aktie kan stige. Du kan derfor komme til at tabe mange penge, hvis aktien stiger meget under din shorting.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":921,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/06/stock-shorting-loss.png" alt="Aktie shorting med tab" class="wp-image-921"/><figcaption>Her ser du reflektionen over tab i forhold til aktiestigning.</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dertil er det også vigtigt at forstå hvordan ens shorting er sammensat, da udlåneren af dine shorting-position kan kræve aktierne tilbage med kort tids varsel. Derfor laver man oftest shorting positioner med aktier fra index fonde eller langtidsinvesterede selskaber.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du låner aktier til at lave en shorting position, skal der i nogle tilfælde udbetales et administrationsgebyrer. Dertil betaler man en løbende rente af de det lånte aktiers værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil short Danske Bank, kan det være at dine aktier kommer fra Handelsbanken, som forvalter <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="http://en.xact.se/Our-ETFs/Equity/XACT-OMXC25/" target="_blank" class="rank-math-link">XACT OMXC25 ETF\'en</a> og er langtidsinvesteret i aktien.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternativt: Køb BEAR certifikater</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke føler dig sikker på en shorting position. <a href="https://finansteori.dk/borshandel/bull-og-bear-certifikater" class="rank-math-link">Du kan vælge at købe BEAR Certifikater</a>. Her køber du et investerings instrument, som har spejlvendt kurs af aktiekursen. Forskellen er at BEAR certifikatet udløber når din margin rammer 0 kroner, så du kan ikke tabe mere end det investerede beløb.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at forøge din mulige indtægt, kan du nogengange købe gearede certifikater med helt op til 16X. Det vil sige at når aktien stiger 1 kroner, så falder din investering med 16 kroner. Omvendt forøges din investering også med 16 kroner per krone som kursen falder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis dit certifikat er købt på 70 kroner og uden gearing. Så vil din investering gå tabt hvis aktien rammer 140 kroner. <a aria-label=" (opens in a new tab)" href="https://www.nordea.dk/privat/produkter/investering/avancerede-produkter/bull-bear.html" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Læs mere om BULL &amp; BEAR certifikater ved Nordea</a>. Nordea er den bagliggende bank af Nordnet certifikaterne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Ligesom man kan købe BEAR certifikater kan du også købe BULL certifikater, hvor du føler kursen. Du køber ikke den underliggende aktie, og har derfor ikke ret til udbytter.</em></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '893'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-06-04 18:31:14'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-06-04 16:31:14'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:28:24'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:28:24'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'shorting-tjen-penge-kursfald'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '91'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'shorting'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Under normale forhold håber man at aktier stiger i værdi, men nogen gange tror man fast på at markedet falder i værdi. Her kan man lave en shorting på markedet.'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '908'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '📉 Shorting: Tjene penge på kursfald 📈'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'shorting-tjen-penge-kursfald'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'hvad-er-shorting-af-aktier'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'shorting-aktier-tjen-penge-kursfald'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '24'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Holdingselskab - 22% selskabsskat - Invester gennem egen virksomhed',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/invester-gennem-holdingselskab',
					pubDate: 'Tue, 09 Jun 2020 17:48:41 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1007'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis du går med en iværksætter i maven, eller gerne vil afskærme dine investeringer fra dig selv, så har du sikkert overvejet at investerer igennem et selskab. For mange giver det mening at investerer privat, da man skal tage stilling til færre ting i løbet af året. Børsmægleren oplyser udbytter og afkast til skat, alt efter om det er lagerbeskattet eller efter realisationsprincippet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel tager vi et kig på at investerer igennem et selskab. Hvis du vil vide mere om aktieinvestering generelt, så <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">læs om aktieinvestering her!</a> Vores eneste mål med selskabet er at investerer i værdipapirer, og ikke at producere eller sælge produkter. Derfor giver det mening at stifte et holdingselskab struktureret som et Anpartsselskab (ref. ApS).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at læse mere omkring, <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link rank-math-link" href="https://www.ditselskab.dk/mere-info/holdingselskab" target="_blank">hvad er et holding selskab</a>, så har advokaten Jacob Tøjner forklaret det godt i den linkede artikel. Her får du også en god forståelse for anvendelsen af et holdingselskab, hvis du vil starte selvstændige projekter i fremtiden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad kræver det at investerer med holdingselskaber?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at vil investerer igennem et selskab, så skal du i første omgang stifte et selskab. Her kan du vælge at stifte et Anpartsselskab (ApS) eller et Aktieselskab (A/S), for at have begrænset hæftelse i tilfælde af konkurs.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vælger at stifte et ApS skal du i 2020 have en start kapitalværdi på 40.000 kroners. Det kan være penge, allerede opkøbte aktier eller maskiner, som skal overdrages og anvendes i selskabet. Vil du derimod have et A/S, skal du have en start kapitalværdi på 400.000 kroner, og dertil have en bestyrelse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når selskabet er stiftet, skal du have fat på en LEI-kode, som identificerer dit selskab på børsmarkedet. Det anvendes til at bekræfte at handlerne kommer fra dit selskab. Det blev indført som lovkrav i starten af 2018.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Flere banker og tjenester henviser dig til <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://www.dansklei.dk/" target="_blank" class="rank-math-link">dansklei.dk</a> når du vil investerer igennem et selskab, men der findes alternative services hvis du Googler "Virksomhed LEI koder". <em>En Lei kode kan koste fra 260 kroner om året og op.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Hertil er det vigtigt at undersøge omkostningerne ved at have en erhvervkonto i banken. Eventuelt hvad en revisor koster, hvis du ikke vil sidde med regnskabet selv.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Bogføring af handler og investeringer</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som virksomhed kan du vælge om du vil beskattes efter realisationsprincippet eller lagerprincippet. Her er det vigtigt at du gør op med dig selv, hvor likvide investeringer du vil foretage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har planer om at lave langsigtede investeringer, kan det give mening at følge realisationsprincippet. Investerer du derimod i likvide og udbyttebetalende investeringer, kan det være en fordel med lagerprincippet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Kort opsummering:</strong><em>Realisationsprincippet</em> betyder at man først betaler skat af det realiserede afkast ved salg af aktien. Herunder definerer man udbytter som direkte afkast, og skal indføres som indkomst til beskatning når de udbetales. <em>Lagerprincippet</em> betyder at man betaler en årlig beskatning af kursændringer, uanset om det er realiseret eller ej.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du køber aktier, så skal du sørge for at dokumenterer købet, antal og dets værdi. Det er vigtigt at vide når du enten sælger aktien eller opgøre kursændringen ved årsopgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Beskatning som selskab</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På et tidspunkt opnår man forhåbentligt et overskud eller positivt afkast eller nogle udbytter fra sine investeringer. Som virksomhed opgøre man sit regnskab i slutningen af sit regnskabsår. <em>Det behøver ikke at følge kaldenderåret, så vær opmærksom på hvilket regnskabsår du stifter selskabet med.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Selskaber betaler kun selskabsskat af årets overskud, det vil sige omsætning minus udgifter. For at give et eksempel: Hvis du tjener 200.000 kroner, hvor af du betaler 25.000 kroner ud i lønninger og 5.000 kroner i kurtager. Så har du et overskud på 200.000 - 25.000 - 5.000 = 170.000 kroner før skat. Af de 25.000 kroners løn har du betalt personlig indkomstskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har positivt afkast og modtager udbytter som selskab, skal indtægten medregnes i selskabets indtægter. Det vil sige at aktieinvestering og beskatningen ikke er adskilt i et selskab, ligesom hvis man investerer privat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>I 2019/2020 er selskabsskatten på 22%</strong>, men der har været snak om at sænke den til 19% på baggrund af Covid-19. Hvis du har investeret under loftet på en aktiesparekonto, så kan <a href="https://finansteori.dk/borshandel/start-med-en-aktiesparekonto" class="rank-math-link">det være en skattemæssig fordel af udfylde aktiesparekonto</a> privat før man omdanner til selskab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Vigtige paragraffer fra aktieavancebeskatningsloven</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er meget lovgivning at tage stilling til, når man begiver sig ud i at drive selskab og dertil investerer i aktier. Her får du et overblik over de væsentlige paragraffer, som får dig igang. <strong>Jeg anbefaler dog at du snakker med en revisor om dine forhold, så du får et mere retvisende indblik.</strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De følgende paragraffer er ikke den fulde lovgivning, da der er forskellige ting at tage stilling til. Disse paragraffer giver dog et godt indblik i, hvilke vilkår man skal forholde sig til, at investerer gennem selskab. <em>Du kan læse den fulde lovgivning her: <a aria-label=" (opens in a new tab)" class="rank-math-link rank-math-link" rel="noreferrer noopener" href="https://www.retsinformation.dk/eli/lta/2016/1148" target="_blank">Aktieavancebeskatningsloven</a></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p><strong>§ 5.</strong>&nbsp;Såfremt en skattepligtig ejer aktier med samme rettigheder, der er erhvervet på forskellige tidspunkter, anses de først erhvervede aktier for de først afståede.</p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man køber aktier og investeringsbeviser, sælger man dem i samme rækkefølge som man køber dem. Hvis du køber 100 aktier til 50 kroner, derefter 100 aktier til 120 kroner. Hvis du sælger 50 aktier til 145 kroner, så sælger du halvdelen af de første 100 aktier til 50 kroner. Du får derved et positivt afkast på 95 kroner, og ikke 25 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p><strong>§ 8.</strong>&nbsp;Gevinst og tab ved afståelse af datterselskabsaktier, koncernselskabsaktier og porteføljeaktier omfattet af § 4 C medregnes ikke ved opgørelsen af den skattepligtige indkomst.</p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man ejer mere end 10% af et selskab, så betegnes man som moderselskab, og skal ikke betale skat af udbytter eller ved frasalg. Hvis du laver et frasalg som får dig under 10% ejerskab, vil efterfølgende frasalg eller udbytter være skattepligtige, indtil du igen er på eller over 10% ejerskab. <em>Der kan dog være udlandske skatter på udbetaling af udbytter, men du beskattes ikke af det modtagne beløb i Danmark.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p><strong>§ 9.</strong>&nbsp;Gevinst på aktier, der ikke er omfattet af § 8, medregnes ved opgørelsen af den skattepligtige indkomst, jf. dog § 10.</p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har valgt at blive beskattet efter lagerprincippet er denne paragraf ikke så vigtig at forholde sig til, da du betaler skat årligt, uanset om du realiserer afkastet. Har du derimod valgt at blive beskattet efter realisationsprincippet, skal dine udbytter og realiserede afkast beregnes ind i samme regnskabsår. Det bliver afgjort at dagen hvor udbytterne bliver annonceret og dagen hvor på aktierne sælges.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p><strong>§ 10.</strong>&nbsp;Gevinst og tab på egne aktier medregnes ikke ved opgørelsen af den skattepligtige indkomst.</p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Køb af aktier er ikke en udgift, kurtage og renter er</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du modtager udbytter eller sælger en aktie med positivt afkast, så er det en indkom i selskabet. Her skal du være opmærksom på, at pengene høre til det tilhørende regnskabsår og skal beskattes <em>(medmindre du ejer 10% af selskabet ved udbyttebetalingen eller frasalget)</em>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her vil mange tænke at de kan geninvesterer pengene uden at skal betale skat. Du skal ikke betale skat når afkastet realiseres eller udbyttet udbetales, ligesom når du investerer privat. Derimod skal fortjenesten bogføres og medregnes ved årsopgørelsen, hvor efter fortjenesten skal beskattes.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer i aktier, så har du ikke en udgift, som kan trækkes fra. Ligesom når man køber et varelager, så laver man blot kapitalen om til en anden værdiform. Du skal derfor sørge for at have likvid kapital (ref. faktiske penge på kontoen) til at betale din selskabsskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan dog trække eventuelle udgifter ved købet fra, som kurtage og valutaveksling. Hvis du investerer i instrumenter med administrationsgebyrer eller renter, kan de også trækkes helt eller delvist fra.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Muligheder for dækning og udbetaling fra selskabet</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at opnå en god økonomisk balance, så anbefales det at man balancere udbetalinger imellem løn og udbytter. Hvis du opstiller selskabet rigtigt, så kan du opnå mange fordele via selskabet. Det kan være fri bil til rådighed med tank kort, hvor du kun skal betale den årlige beskatning af fri benyttelse privat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Måske har du købt en lille lejlighed, hvor du kan bo som hovedaktionær, som også betales via skat som fri benyttelse. Der er mange måder at opstille en fordelagtig situation ved at have et selskab. Du kan afskrive begge ting i selskabets regnskab, så i selskabet opbygger du en portefølje af aktiver imens.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dine private udgifter og hertil skatter skal selvfølgelig dækkes. Her anbefales det at finde en god balance mellem udbytter fra dit selskab til dig, og eventuelle lønninger. Hvis du har udgifter for 16.000 kroner om måneden i beskatning af fri benyttelse af bil og bolig. Så skal du finde ud af hvor meget du skal bruge til mad og andre omkostninger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er der mange måder at opsætte udbetalinger. Det anbefales at finde en sund balance imellem lønninger og udbytter, da man kan optimere sine skatteforhold til ikke at opnå personlig topskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Investering gennem selskab</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at investerer igennem et selskab, så opnår du en fordelagtig adskilning mellem dine investeringer og dine private økonomiske forhold. Du opnår en generel lavere beskatning på de gevinster der ikke udbetales som løn. <em>Husk at der er penge at hente ved at udfylde en privat aktiesparekonto først.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Selve investeringen i aktier eller andre instrumenter er ikke udgifter, og du skal stadig beskattes af pengene. Du betaler ikke skatten ved realisering af afkastet, men ved årsopgørelsen. Du kan derved geninvesterer 100% af pengene, hvis du senere kan skaffe kapitalen til at betale skat. Det kan f.eks. være en <a href="https://finansteori.dk/borshandel/udbytte-investering-sadan-kommer-du-igang" class="rank-math-link">taktik ved udbytteinvestering</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du opnår et ejerskab på 10% eller mere, så er du ikke beskattet af udbytter eller frasalg af din investering. Det kan også gøre en nysgerrig på at investerer i små selskaber eller udvide med venture funding <em>(ref. investerer i mindre og nystartede selskaber, som mangler kapital og eventuel vejledning/ekspertise)</em>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man opstiller tingene rigtigt kan man opnå økonomiske fordele ved at eje ting igennem selskabet og nøjes med beskatning af fri benyttelse, såfremt selskabet er likvid nok til at kan betale lønnen til at dække disse beskatninger og dertil generelt forbrug (Eller har et arbejde som kan dække disse udgifter).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a aria-label=" (opens in a new tab)" href="https://www.retsinformation.dk/eli/lta/2016/1148" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Bekendtgørelse af lov om den skattemæssige behandling af gevinster og tab ved afståelse af aktier m.v. (aktieavancebeskatningsloven)</a></li><li><a aria-label=" (opens in a new tab)" href="https://skat.dk/skat.aspx?oid=1946334&amp;chk=216701" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">C.B.2.3 Selskabers afståelse af aktier</a></li></ul>\r\n<!-- /wp:list -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1007'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-06-09 19:48:41'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-06-09 17:48:41'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:28:11'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:28:11'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'invester-gennem-holdingselskab'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '83'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_rich_snippet'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'article'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'holdingselskab'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1035'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🏛 Investering via Holdingselskab, burde du? ⚖️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_schema_Article'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:6:{s:5:"@type";s:11:"BlogPosting";s:8:"headline";s:11:"%seo_title%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:25:"Alex Ahlgreen Westergaard";}s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:9:"isPrimary";b:1;s:4:"type";s:8:"template";}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '22'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Bull og Bear Certifikater - Tjen penge på aktier uden af eje dem',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/bull-og-bear-certifikater',
					pubDate: 'Sun, 14 Jun 2020 14:36:14 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1097'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>BULL og BEAR certifikater gør det muligt at spekulerer i kursændringer, uden at eje det underlæggende værdipapir. Normalt vil man købe aktier, når man forventer at kursen går op, og dertil short aktierne, hvis man forventer at kursen falder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://finansteori.dk/borshandel/hvad-er-shorting-af-aktier" class="rank-math-link">Det kan være risikabelt at short aktier</a>, da man kan risikerer at miste mange penge. Der er ikke nogen begrænsning for hvor meget aktier kan stige i værdi, og dertil ikke nogen aktuel grænse for hvor dyrt en shorting position kan blive.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er BULL og BEAR certifikater?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>BULL og BEAR certifikater er et udtryk for "Constant Leverage Certificates", også kaldet "Contract for Different" (ref. <strong>CFD</strong>\'er). Det betyder at man spekulerer med eller mod markedet, uden at købe eller short-sell det underliggende værdipapir. Her er det vigtigt at forholde sig til om certifikatet følger BULL eller BEAR markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>BULL certifikater</strong> følger markedets positive afkast. Hvis du køber et BULL Certifikat, så tjener du penge på samme måde, som hvis du købte værdipapiret. Køber du et BULL certifikat med gearing (ref. med indbygget lån), så tjener og taber du X gange kursændringen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>BEAR certifikater</strong> spejler markedets afkast. Hvis du køber et BEAR certifikat, så tjener du penge når værdipapiret falder i værdi. Certifikatet går altså den modsatte vej af det underlæggende værdipapir. Hvis du har gearing på et BEAR certifikat, så tjener du flere penge ved kursfald, og taber hurtigere penge ved kursstigninger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan læser man certifikatets navn?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at komme igang med BULL og BEAR Certifikater, så er det et par ting du skal forstå først. Når du åbner listen over udstedte certifikater, så vil du se en række forskellige navne, som f.eks:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>BEAR DAX X5 NORDNET</li><li>BEAR SPX X15S NORDNET D</li><li>BULL OLIE X8 NORDNET D6</li><li>BULL PANDORA X4S NORDNET D</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Navnet er opstillet som " Market, Underliggende værdipapir, Gearing, Udbyder". Så hvis vi kigger på det første eksempel. <strong>BEAR</strong> betyder at papiret stiger i værdi når kursen falder. <strong>DAX</strong> referer til DAX Indekset. <strong>X5</strong> betyder at du har en gearing på 5 gange. Når du køber 1 værdipapir, så ændres værdien sig, som hvis du havde 5 værdipapirer. Hvis BEAR aktien falder 1 krone, så stiger din værdi 5 kroner eller omvendt. <strong>NORDNET</strong> er udbyderen af BEAR Certifikatet, i det her tilfælde vil det være Nordea, som har udgivet certifikatet for Nordnet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Kort opsummering:</strong><strong>BEAR</strong> stiger når værdipapiret falder og omvendt. <strong>DAX</strong> er indekset, som du spekulerer imod. <strong>X5</strong> er hvor stor gearingen er. <strong>NORDNET</strong> er udbyderen, i det her tilfælde Nordea, som er partnerbanken af disse certifikater.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1107,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/06/bull-bear-certifikate-dax-index-1024x135.png" alt="BULL og BEAR Certifikat - DAX Indeks" class="wp-image-1107"/><figcaption><em><a href="https://www.nordnet.dk/markedet/certifikater?freeTextSearch=DAX" target="_blank" aria-label="https://www.nordnet.dk/markedet/certifikater?freeTextSearch=DAX (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">https://www.nordnet.dk/markedet/certifikater?freeTextSearch=DAX</a></em></figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ser vi derimod på den sidste, kan du se at den hedder <strong>X4S</strong> ved gearingen. Det betyder at papiret er udgivet med en STOP-LOSS funktion. Det betyder at der hver dag sættes en aktiv begrænsning på hvor meget certifikatet på falde i værdi, før det automatisk bliver indløst for at hjælpe med at forhindre tab. <em>Stop-loss er dog ikke en garanti for at du ikke taber din fulde investering.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan fungerer gearing?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber et BULL Certifikat med X5 gearing, så vil du modtage svarende til 5 værdipapirer, når du køber 1 certifikat. Hvis værdipapiret ligger på 100 kroner, så vil du låne 400 kroner og opnå svarende til 5 værdipapirer. Her er det vigtigt at huske at du har lånt 400 kroner, når du skal kigge på gevinst og tab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ligesom alle andre lån, så er der et administrationsgebyr og dertil renter. Her skal du være opmærksom på at renten opgøres dagligt.  Inden du køber certifikaterne, burde du tjekke udstederens renter. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved Nordnet (via Nordea) er renterne hovedsageligt baseret på 3 kriterier. Hvis Gearing er under X5, betaler man 1,0% rente. X5 gearing koster 1,5% rente og derover koster 3% rente. De informerer dog, at renten kan varierer ud fra det underliggende værdipapir.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan indberegnes renterne?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p>Gebyret opkræves ved at reducere produktets værdi med beregningsformlen: <strong>(Gearing - 1) * Renter i % / 365</strong>.</p><cite><a class="rank-math-link" href="https://www.nordnet.dk/dk/marked/nordnet-markets/gebyrer">https://www.nordnet.dk/dk/marked/nordnet-markets/gebyrer</a></cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><span class="has-inline-color has-luminous-vivid-amber-color">Jeg vil først og fremmest gøre dig opmærksom på at Nordnet omregner årlig rente til daglige renter forkert, så du hvis du holder et certifikat i mere end 1 år, så betaler du mere end den anviste rente på grund af den daglige renters rente effekt.</span></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber et certifikat med X10 gearing, så kommer du til at betale 3% i rente. Hvis du bruger Nordnet\'s egen beregning, vil din daglige rente være (10-1)*0,03/365= 0,000739 (0,0739%). Denne rente bliver påregnet hver dag når markedet lukker.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><span class="has-inline-color has-luminous-vivid-amber-color">Vil bare lige vise dig at beregningen giver mere, ved at sige (1,000739^365-1)/9= 0.03438 (3,438% årligt), bare så du er opmærksom på dette!</span></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os sige at du du køber 10 X10 BULL Certifikater i Apple til 1.800 kroner i stykket, altså en samlet investering på 18.000 kroner. Da din gearing er X10, svare din investering til 180.000 kroner, hvor 18.000 af dem er dine egne penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Investering: 180.000 kroner</li><li>Gearing: 162.000 kroner</li><li>Indskud: 18.000 kroner</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dagen hvor du købte certifikatet er der ingen renter, da de første bliver påregnet når markedet lukker. Din investering kan derfor tåle at falde <em>18.000/180.000*100=</em> 10% (ned til 1.620 kroner per aktie) i værdi, før certifikatet udløber. Når dagen er omme pålægger vi renterne af det lånte beløb. Det vil sige 162.000*0,000739= 119,718 kroner, som vi pålægger gearingen og trækker fra vores indskud.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Investering: 180.000 kroner</li><li>Gearing: 162.119,72 kroner</li><li>Indskud: 17.880,28 kroner</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Næste dag er vores certifikater mere skrøbelig overfor nedgang, da vi stadig skal betale lånet tilbage ved udløb. Efter gårsdagens renter, kan vi nu tåle at kursen falde <em>17.880,28/180.000*100=</em> 9,933% (ned til 1621,20 kroner per aktie) i værdi, før certifikatet udløber.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at aktien skal modsvarende stige <em>18.000/17.880,28*10=</em> 10,066% for at udligne renten. Herefter lave du samme beregning ud fra de nye tal, indtil indskuddet rammer eller falder til under 0 kroner og udløber.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvordan tages der højde for udbytter?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du ikke ejer det underliggende værdipapir, så har du ikke retten til at modtage udbytter. Her har man valgt at modregne udbytter på certifikatet, så du ikke kan udnytte kursfaldet fra udbytter til at købe BEAR certifikater. Hvis dit værdipapir på 100 kroner udbetaler 5 kroners udbytte, så modregner man de 5 kroner på certifikatet, så det stadig er 100 kroner værd.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er risikoen ved BULL og BEAR Certifikater?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du køber BULL og BEAR Certifikater, så er din endelige risiko det investerede kapital. Hvis du har investeret 100 kroner, så vil du kun tabe de 100 kroner. Du skal dog være opmærksom på, at jo højere Gearing du bruger, des hurtigere kan du tabe investeringen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har X10 gearing, så mister du din investering hvis det falder 10%, da du også skal betale de lånte 90%. Med andre ord, hvis du har investeret 100 kroner med X10 gearing, så har du en investering på 1.000 kroner. Herudaf er 900 kroner lånt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis investeringen falder 10%, så falder din samlede investering til 900 kroner, svarende til det gearede/lånte beløb, og investeringen er derfor tabt. Hvis du holder på den gearede investering i flere dage, så kommer der renter, og du kan derfor tåle mindre tab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan beskattes BULL og BEAR Certifikater?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investerer igennem disse CLC eller CFD kontrakter (ref. certifikater), så bliver de beskattet efter kursgevinstloven, som er opgjort efter kildeskatteloven. Det vil sige at disse certifikater er beskattet sammen med din normale indkomstbeskatning. Du burde derfor være opmærksom på om du overkommer indkomstgrænsen for topskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote -->\r\n<blockquote class="wp-block-quote"><p><strong>§ 12.</strong>&nbsp;Personer, der er skattepligtige efter kildeskatteloven, og dødsboer, der er skattepligtige efter dødsboskatteloven, skal ved opgørelsen af den skattepligtige indkomst medregne gevinst og tab på fordringer og gæld, som omfattes af § 1, efter de regler, der er angivet i dette kapitel og § 29 samt i kapitel 4, 5 og 7.</p><cite><a href="https://www.retsinformation.dk/eli/lta/2016/1283#Par12">https://www.retsinformation.dk/eli/lta/2016/1283#Par12</a></cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du handler igennem en dansk udbyder, vil de sørge for at informerer skat omkring dine investeringer. Bruger du derimod en udenlandsk udbyder, kræver det at man sætter sig bedre ind i den endelige lovgivning for disse instrumenter. Her anbefaler jeg at du læser følgende artikel: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://www.daytrader.dk/skat-ved-certifikateretn/" target="_blank" class="rank-math-link">Daytrader.dk &gt; Skat – certifikater (ETN)</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Virksomheder</strong> bliver beskattet som kapitalindkomst, og skal derved opgøres ved årsopgørelsen. Det vil sige 22% beskatning efter 2019/2020 reglerne.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1097'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-06-14 16:36:14'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-06-14 14:36:14'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:28:45'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:28:45'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'bull-og-bear-certifikater'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '86'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'BULL og BEAR'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1134'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🐂 BULL &amp; BEAR Certifikater 🐻'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '21'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title:
						'Call og Put Optioner - Rettighederne til at købe og sælge aktier til forudbestemte priser',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/optioner-call-og-put',
					pubDate: 'Tue, 16 Jun 2020 22:44:20 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1143'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis du har en stærk tiltro til at aktier stiger eller falder i værdi, kan det give mening at spekulerer i optioner. Det giver dig rettigheden til at købe eller sælge aktier, til en forudbestemt pris, inden for en forudbestemt periode. Men det er ikke et krav at du køber eller sælger aktierne, derved navnet "option" på engelsk, hvilket på dansk betyder "mulighed" på dansk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er ny til investering, anbefales du først <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">at lære omkring generel aktieinvestering</a> først. Dertil skal du være opmærksom på at optioner er avancerede investerings-instrumenter, som oftest bruges af banker og investeringsselskaber. For at opnå det fulde potentiale af optionhandel, bør du overveje at <a href="https://finansteori.dk/borshandel/invester-gennem-holdingselskab" class="rank-math-link">investerer gennem selskab</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en option?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der findes 2 varianter af optioner, som af hver sin side af en mønt, opnår samme formål. Du kan handle Call Optioner, hvilket giver dig rettigheden til at købe aktier, hvor imod Put Optioner giver dig rettigheden til at sælge aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>CALL Optioner</strong> er en god måde at købe aktier, hvis du forventer at aktiekursen vil stige i pris, inden for en forudbestemt tidsperiode, til en forudbestemt pris. En god måde at huske det på, er ved at CALL referer til "kalde på". <em>På Nordnet kaldes disse også for "Købsoptioner".</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>PUT Optioner</strong> er derimod en god måde at sælge aktier, hvis du forventer at aktiekursen vil falde i pris, inden for en forudbestemt tidsperiode, til en forudbestemt pris. En god måde at huske det på, er ved at PUT referer til at "putte ud". <em>På Nordnet kaldes disse også for "Salgsoptioner".</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Optioner kan have en løbetid på alt fra 1 måned til 3 år. Det er derfor vigtigt at være opmærksom på hvornår optionen udløber, og til hvilken pris. Dertil skal du huske at optionen udløber, så hvis du er interesseret i at købe eller sælger, skal du indløse optionen inden udløbstidspunktet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Begge optioner har 2 sider, både køb og salg</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Uanset om du handler Call optioner eller Put optioner, så er der 2 sider af handlen. Der er dem som er interesseret i at købe rettighederne til at udføre optionen, og dem som sælger muligheden. For at kan købe Call optioner, skal der først være nogen som er interesseret i at sælge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De 2 sider af begge optioner er modsigende. Som investor i Put Optioner spekulerer man typisk i kursfald. Her betaler man en premium for at få rettighederne til at sælge til dagens kurs, så man kan udligne kursfaldet. På den anden side er der en som spekulere i at aktien stiger i værdi, og sælger derfor put optionen imod denne premium indtægt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan være lidt forvirrende i starten, så du får lidt mere information om de 2 individuelle muligheder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Call Optioner, retten til at købe</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du som investor tror at en aktie vil stige i værdi inden for en forudbestemt periode, kan du vælge at købe Call optioner. De giver dig rettigheden til at købe aktier i fremtiden, som markeds værdien er idag. Det koster en premium til sælgeren, som tilbyder at sælge aktierne til dig, hvis du indløser optionen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige, at som køber, har du rettigheden men ikke obligationen til at købe andres aktier. Prisen er forudbestemt sammen med udløbsdatoen. Fordelen ved at købe disse rettigheder er, at du kun kan tabe det investerede beløb i optionen. Du er altså begrænset fra tabet af sælge aktierne, hvis de falder i værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Sælgeren af optionen vil typisk spekulerer i at aktien falder eller ændre sig minimalt. På den måde kan de tjene penge på den betalte premium, når andre køber rettighederne fra dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Sådan tjener man penge på Call optioner</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber call optioner, så får du rettigheden til at købe aktier, til en forudbestemt pris og udløbsdato. Hvis du køber rettigheden til at købe Danske Bank til 80 kroner, for en 5 kroners premium. Så skal aktien altså stige minimum 5 kroner før optionen udløber, før at du tjener penge på handlen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal derfor huske at indberegne prisen af optionen ind i købskursen du køber. Hvis aktien ikke overkomme købskursen + optionens pris, giver det ikke mening at udføre købskravet, så investeringen i optionen går derfor tabt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Put Optioner, retten til at sælge</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du som investor tror at aktien vil falde i værdi inden for en forudbestemt periode, kan du vælge at købe Put optioner. De giver dig rettigheden til at sælge aktier i fremtiden, som markeds værdien er idag. Det koster en premium til sælgeren, som tilbyder at købe dine aktier, hvis du indløser optionen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du tror at en aktie vil falde i pris, giver det muligheden for at kan sælge aktierne til en højere værdi end markedsprisen. Omvendt, hvis aktien er stabil eller stiger i værdi, vil du tabe penge på at sælge aktien, og investeringen går derfor tabt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Sælgeren af optionen spekulerer i at aktierne er stabile eller stiger i værdi. Sælgeren kan også spekulere i at aktien falder og så derefter, så er villig til at tabe en del af kursstigningen imod den premium han tjener på salget af optionen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Sådan tjener man penge på Call optioner</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køber put optioner, så får du rettigheden til at sælge dine aktier, til en forudbestemt pris og udløbsdato. Hvis du køber rettigheden til at sælge dine Danske Bank aktier til 80 kroner, for en 5 kroners premium. Så skal aktien altså falde minimum 5 kroner, før at du tjener penge på handlen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal du altså fjerne prisen af optionen, for at forstå hvor meget aktien skal falde, før slaget giver mening. Hvis Danske Bank er mere værd end <em>(80-7=)</em> 75 kroner ved udløb af din option, giver det ikke mening at udføre salget af aktierne. Din investering i optionen går derfor tabt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Til modsætning fra Call optioner, som har muligheden for ubegrænset fortjeneste. Så har Put optioner kun mellemrummet fra salgsprisen - premium, og til 0. Hvis aktien er 10 kroner, din premium er 2 kroner, så er din maksimale fortjeneste altså 8 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er risikoen ved optioner?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du handler optioner, så køber du et værdipapir med rettigheder. At købe optioner svarer lidt til at købe tegningsretter eller futures. Din reelle risiko er det investerede beløb alene, som kan gå tabt, såfremt investeringen den ikke er geared.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Beskatning af optioner (Privat)</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Optioner har en række forskellige retninger i forhold til beskatning. Hvis du udføre optionen, hvor du enten køber eller sælger aktier, kan du beskattes efter aktieavanceskatten. Hvis du ikke omdanner optionen til køb eller salg af underliggende aktier, så kan du blive beskattet efter ligningsloven af finansielle kontrakter, så ryger gevinsten eller tabet ind under personlig indkomstskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at få et mere præcist indblik i skatte vilkårene, har NASDAQ Nordic udformet en brochure omkring vilkårene. <a aria-label=" (opens in a new tab)" href="https://www.nasdaqomxnordic.com/digitalAssets/74/74893_beskatning.pdf" target="_blank" rel="noreferrer noopener" class="rank-math-link">Beskatning af optioner og futures på aktier</a>. Hvis du stadig er usikker og vil investerer i disse instrumenter, så bør du kontakte en professionel rådgiver.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternativ: Invester i futures</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har en fast beslutning om at vil købe eller sælge aktier i fremtiden, kan du også vælge at købe futures. Den egentlige forskel er, at med optioner har du et valg, om du vil udføre kontrakten. Med futures er du bundet til at købe eller sælge, når kontrakten når udløbsdatoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel på en mulig future kontrakt. Vi har en landmand som malker køer og sælger mælken til Arla. Lige nu er prisen på mælk høj, men på grund af opbygningen af flere malke-farme, er du bange for at prisen vil falde. Du er derfor interesseret i at lave en future på mælkens pris, så du er sikret at få dagens markedspris når mælken skal sælges.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis mælken herefter falder i pris, er det en god handel for landmanden. Derimod er det en dårlig handel for Arla, som kunne have købt mælken billigere. Var mælken derimod steget i pris, ville landmanden tabe på den øgede værdi, hvor imod Arla med et smil får rabat på mælken.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På samme måde kan du vurdere værdipapir imod fremtiden. I nogle investerings banker eller hedge fonde bruges det til at minimere risikoen i en given sektor. Det kan være at du ejer aktier i Arla, men tror at mælken vil stige. Derfor køber du Futures ved landmanden, så du kan tjene på at sælge mælken til Arla for profit.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er fordelen, at hvis mælken falder i pris, så har du muligheden for at tjene tabet hjem igennem Arla, som køber mælken og har en større fortjeneste. Du har altså skabt en situation hvor du har muligheden for at tjene mange penge, men kun at tabe et mindre beløb.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1143'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-06-17 00:44:20'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-06-16 22:44:20'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 22:28:48'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 20:28:48'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'optioner-call-og-put'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '89'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'optioner,Call Optioner,Put Optioner'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1171'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '📑 Optioner: Call &amp; Put 👇 ☝️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '20'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'FIRE: Økonomisk uafhængig som tidligt pensioneret',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/fire-tidlig-pension-okonomisk-uafhaengig',
					pubDate: 'Thu, 09 Jul 2020 18:15:49 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1288'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Har du en drøm om at blive økonomisk uafhængig i en ung alder, så du kan pensionere dig fra arbejdsmarkedet? Så er du sikkert interesseret i at lærer mere om FIRE fællesskabet. Her er målet oftest at holde udgifterne lave, så man kan leve af sine investeringer hurtigere.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Trods udtrykket FIRE står for \'Financial Independence and Retired Early\' (oversat til "Økonomisk uafhængig som tidligt pensioneret"), så er der mange som forbliver på arbejdsmarkedet deltid. Målet er altså at kan betale sine regninger og levestil, uanset om man arbejder eller ej.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Trinity Study: 4-procents reglen</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I Amerika lavede man i 1998 et studie, hvor man analyserede børsmarkedet imellem 1925 og 1995. Målet med studiet var at finde ud af, hvordan man bedst muligt kan pensionere ved at trække penge ud af sin portefølje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Da studiet blev udført, fandt man frem til 3 interessante nøgletal:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><li>Det amerikanske markedet stiger gennemsnitligt 7% om året.</li><li>Den amerikanske inflation udgøre gennemsnitligt 3% om året.</li><li>Hvis man lader inflationen forøge sig selv i markedet, kan man trække 4% ud om året.</li></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Studiet er lavet over forskellige portefølje-opsætninger, lige fra 100% aktier og gradvist over til 100% obligationer. Her er det vigtigt at vide, at studiet er lavet ud fra, at man pensionere sig selv om 60 år gammel, og skal leve af det i 20-25 år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at man skal modregne de 4%, for at finde ud af hvor meget du skal have investeret. Efter som studiet er lavet i USA, hvor man stort set ikke betaler skat af pension, så bør du medregne den forventede skat i danmark.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har brug for 16.000 kroner om måneden efter skat, så skal du regne det om til årligt rådighedsbeløb. Det vil sige at du skal bruge 192.000 kroner om året efter skat. I danmark har vi en 27/42% progressionsskat af aktieindkomst, hvor grænsen er ved 55.300 kroner i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg vil derfor anbefale at du modregner de 42%, så du ikke skal rode med progressionsgrænsen. <em>192.000/(1-0,42)=</em> 331.034,48 kroner om året før aktieskat. Hvis vi så forholder os til de normale 4% om året, så kan du gange tallet med 25. <em>331.034,48*25=</em> 8.275.862 kroner, som du skal have investeret for ca 25 års pension af 4% udtræk om året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis din pension skal være længere end 25 år, så skal du modregne en mindre procentdel, og derved have investeret et større beløb. Du kan finde beregningen af procent ved at sige "X=100/pensionsår" og derefter modregne årlige budget før skat med X i matematisk procent. 30 år vil f.eks være <em>100/30=</em> 3,34% og <em>331.034,48/0,0334=</em> 9.911.211,97 kroners opsparing, hvor du kan trække 3,34% ud årligt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>FIRE på udbytte investeringer</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg har skrevet en artikel omkring <a href="https://finansteori.dk/borshandel/udbytte-investering-sadan-kommer-du-igang" class="rank-math-link">at investerer i udbytter</a>, altså at købe dele af virksomheder, som udbetaler en del af årets resultat til ejerne. Det er også en god måde at kan opnå delvis eller fuld finansiering af dine udgifter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen ved udbytte investering er at du ikke skal sælge ud af din portefølje, men det kræver lidt mere disciplin at holde styr på indtægter og udgifter. Ikke alle virksomheder betaler udbytter på samme sid, dertil er kan de udbetale med forskellige intervaller.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at 3 virksomheder kan betale udbytte i April, 2 i Juni og 5 i August. Her er din opgave at holde styr på disse indtægter og fordele dem ud på 12 måneder. Oftest køre man dem bagud, så det du tjener i 2019, bruger man i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan investerer i udbytte-selskaber som følger samme kalender, hvor man får udbytter månedligt. Det kan du for eksempel bruge til at modregne månedlig rådighedsbudget og aktieskat, så du ikke skal håndtere et helt år af gangen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du stadig skal bruge 16.000 om måneden efter skat, skal du have <em>16.000/(1-0,42)=</em> 27.586,21 kroner før skat. Her skal du kigge på hvor meget en aktie udbetaler, hvor ofte, og hvad den koster. Hvis du skal have ~28.000 kroner fra Danske bank, som gennemsnitligt udbetaler 7 kroner, per aktie, om året. Skal du altså eje 4.000 af deres aktier, og så har du kun dækket 1 måned ud af 12.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi antager at en aktie gennemsnitligt udbetaler 4% om året, kan vi altid modregne hvor meget vores portefølje vil koste os. Udbytte-procenten er altid baseret på nuværende aktiepris. Det vil altså koste <em>28.000/0,04=</em> 700.000 kroner at modtage 28.000 kroner. Hvis du skal have alle 12 måneder, skal du altså investerer <em>331.034,48/0,04=</em> 8.275.862. I det her tilfælde ender det samme sted som Trinity-studiet, bare hvor porteføljen udbetale 4% i udbytte frem for at du sælger 4%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsparing via selskab</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at akkumulere din formue, hvor du kommer til at modtage udbytter, så kan det være en fordel at stifte selskab. Lige nu kræver det 40.000 kroner + advokat gebyr at stifte et ApS (i 2020). De 40.000 mister du ikke, da de bliver overført som kapital til selskabet. Advokat gebyret går dog tabt, da advokaten også skal tjene penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen ved et selskab er den lavere beskatning. Den eneste måde du kan få lavere beskatning under akkumulationen, er via aktiesparekontoen, som lige nu (i 2020) har et loft på 100.000 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td class="has-text-align-center" data-align="center"><strong>Selskab</strong><br>22% skat</td><td class="has-text-align-center" data-align="center"><strong>Aktiesparekonto</strong><br>17% skat</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Selskaber er som oftest lagerbeskattet, hvilket betyder at man betaler skat hvert år, uanset om du realisere gevinsten eller ej. Det vil sige, at hvis du i Januar køber en aktie til 100 kroner, som i slut december er 200 kroner værd, skal selskabet beskattes af de 100 kroners kursstigning, uden at du sælger aktien. På samme måde er aktiesparekontoen også lagerbeskattet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at det er vigtigt at du finder penge hvert år til at betale skatten, enten ved at modtage udbytter, sælge eller skabe en indtægt på anden vis. På aktiesparekontoen kan du dække med private penge, fra løn eller andet. I selskabet kan du også indskyde kapital, eller låne penge til selskabet. Du skal bare være sikker på at gøre det rigtigt, så du ikke ender i problemer med skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil vide mere om at investerer gennem et selskab, kan jeg anbefale at læse <a href="https://finansteori.dk/borshandel/invester-gennem-holdingselskab" class="rank-math-link">artiklen om at investerer gennem holding selskab her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: Hvad er FIRE?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>FIRE er et fællesskab der har til formål at pensionere sig selv fra arbejdsmarkedet, eller som udgangspunkt ikke være afhængig af at skulle arbejde. Mange forsøger at leve så billigt som muligt, så deres levevilkår hurtigt kan dækkes af deres investeringer. På den måde har de et sikkerhedsnet at falde tilbage på, hvis de mister sit arbejde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Er FIRE noget for dig? Det skader aldrig at have en ekstra indkomstkilde, som ikke er baseret på hvor mange timer man arbejder. En indkomst, som kommer uanset hvad du laver eller hvor du befinder dig. Det kræver dog at man sætter sig ind i at investerer, men så er det godt at du kan blive klogere lige her!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">Kom godt igang med at investerer i aktier!</a></li><li><a href="https://finansteori.dk/borshandel/start-med-en-aktiesparekonto" class="rank-math-link">Invester i aktier med en aktiesparekonto og spar penge!</a></li><li><a href="https://finansteori.dk/borshandel/aktieinvestering-nordnet-eller-saxo-bank" class="rank-math-link">Hvor er det bedste af investerer, Nordnet eller Saxobank?</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vil du læse studiet selv, så kan du finde en version her: <a aria-label=" (opens in a new tab)" href="https://www.researchgate.net/publication/228707593_Sustainable_withdrawal_rates_from_your_retirement_portfolio" target="_blank" rel="noreferrer noopener" class="rank-math-link">Læs studiet fra Trinity University</a></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1288'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-07-09 20:15:49'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-07-09 18:15:49'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:29:45'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:29:45'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'fire-tidlig-pension-okonomisk-uafhaengig'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '85'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'FIRE'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_rich_snippet'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'article'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_description'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'Har du en drøm om at pensionere dig selv fra arbejdsmarkedet i en ung alder? Så er FIRE måske interessant for dig at lærer mere om!'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👴 👵 FIRE: Økonomisk uafhængig som tidligt pensioneret'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1320'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'fire-tidlig-pension-som-okonomisk-uafhaengig'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_schema_Article'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:7:{s:5:"@type";s:11:"BlogPosting";s:8:"headline";s:11:"%seo_title%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:25:"Alex Ahlgreen Westergaard";}s:11:"description";s:135:"Har du en drøm om at pensionere dig selv fra arbejdsmarkedet i en ung alder? Så er FIRE måske interessant for dig at lærer mere om!";s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:9:"isPrimary";b:1;s:4:"type";s:8:"template";}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '19'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Day Trader - Invester i det daglige markedet - Samme dags handler',
					link: 'https://finansteori.dk/borshandel/bors-starter/day-trader-invester-daglige-markedet',
					pubDate: 'Sat, 11 Jul 2020 12:53:55 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1326'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Du har ikke tid til at vente på gevinsterne fra at investerer og stræber efter en hverdag som day trader. Du har fundet din indre Bud Fox og følger de gode investorer på facebook, som på magisk vis ved hvilken virksomhed du bør investerer dine penge i. Men har du overhovedet overvejet om du følger den moderne Gordon Gekko ind i risikable insider investeringer?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg håber du fandt Wall Street (Filmen) referencerne sjove, fordi i den her artikel vil jeg give dig et indblik i en verden af at være day trader. Hvad du skal have styr på, hvordan en day trader tjener sine penge, og hvordan du finder ud af om det er noget for dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en day trader?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En day trader er en person som udføre køb og salg af børsmidler inden for samme dag. Det kan for eksempel være at købe en aktie om morgenen med målet at sælge den om eftermiddagen, baseret på markedsinteresse og nyheder om/fra selskabet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel, så kan det være da Tesla annoncerede at deres selvkørende teknologi vil stige til 50.000 kroner i udgangen af 2019. Så køber man deres aktier i starten af kursstigningen og sælger den igen nogle procenter senere. Handlerne er derfor oftest kortsigtede og baseret på dagens markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://finansteori.dk/borshandel/aktieinvestering-nordnet-eller-saxo-bank" class="rank-math-link">De forskellige platforme</a> har forskellige krav til at blive håndteret som en day trader. Ved Nordnet bliver man "Active trader" når man udføre 240 handler - eller omsætter 30 mio dkk - i kvartalet. Saxo Bank har ikke nogen definition af en day trader, da alle har næsten samme vilkår. Under normale omstændigheder bliver det betragtet som et day trade, når man udføre et køb og salg af samme aktie inden for samme handelsdag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1328,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/billions-day-trader-1024x551.png" alt="Billions TV-Show - Day Trader" class="wp-image-1328"/><figcaption>Billedet er fra tv-serien Billions</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan tjener man penge som day trader?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som day trader er man er aktiv på markedet og <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">handler aktivt med aktier</a>. Det er vigtigt at der er stor interesse for både køb og salg af en given aktie, så man hurtigt kan komme ind eller ud af en position. Det handler om at være hurtig til at analysere trends og følge nyhederne på de(t) marked(er) man følger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p>Højt at flyve, dybt at falde</p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man åbner en position (ref. køber aktier), så udregner men skæringspunktet og handler på volume. Det vil sige at man oftest handler +1000 aktier per transaktion, så man har større udsving på kursstigninger. Stiger aktien 0,01 krone, så stiger du altså 10 kroner i værdi. Risikoen er også omvendt, at hvis aktien falder 0,01 krone, så taber du 10 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Sådan beregner du break-even</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du handler aktier, så skal der betales noget kurtage. Hvis du handler udlandske aktier, og ikke har en valuta konto, så kommer der også noget vekslings gebyr. Det betyder at hvis du køber 1.000 aktier til 100 kroner, og sælger dem med det samme til 100 kroner, så har du tabt tilsvarende kurtage og mulig vekslings gebyr.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du day trader danske aktier ved Saxo Bank, så betaler du 0,10% i kurtage af både køb og salg. Din standard valuta er som standard DKK, så du skal ikke betale for veksling. Det er derfor nemt at beregne din break-even.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste planlægger break-even på at købe og sælge samme antal aktier, hvor andre sælger i puljer for at optimerer fortjenesten. For at beregne break-even er vi nød til at modregne kurtage for både køb og salg, så vi ved hvor meget vi aktien skal stige før vi sælger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"align":"center","className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote has-text-align-center is-style-large"><p><strong><span class="has-inline-color has-vivid-purple-color">T</span>=(<span class="has-inline-color has-vivid-cyan-blue-color">A</span>*<span class="has-inline-color has-luminous-vivid-amber-color">P</span>)*(<span class="has-inline-color has-vivid-red-color">K</span>*2/(1-<span class="has-inline-color has-vivid-red-color">K</span>))</strong></p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ovenfor ser du den magiske beregning for hvor meget din handel skal stige totalt, for at du går i 0 ved salg. Formularen indeholder ikke valuta kurser eller vekslings gebyr. Hvis du vil vide hvor meget den enkelte aktie skal stige, for at break-even, dividere du blot med antal <strong>(<span class="has-inline-color has-vivid-green-cyan-color">S</span>=<span class="has-inline-color has-vivid-purple-color">T</span>/<span class="has-inline-color has-vivid-cyan-blue-color">A</span>)</strong>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong><span class="has-inline-color has-vivid-cyan-blue-color">A</span></strong> er antal aktier du køber.</li><li><strong><span class="has-inline-color has-luminous-vivid-amber-color">P</span></strong> er hvor aktiekursen <em>(ref. pris per aktie)</em>.</li><li><strong><span class="has-inline-color has-vivid-red-color">K</span></strong> er variable kurtage, hvis du har fast kurtage skal du bare modregne det faste beløb 2 gange <em>(Her skal du omregne procent til matematisk procent, det vil sige 1% svare ti 0,01 i regnestykket)</em>.</li><li><strong><span class="has-inline-color has-vivid-purple-color">T</span></strong> er den totale stigning du skal opnå for at udligne kurtagen.</li><li><strong><span class="has-inline-color has-vivid-green-cyan-color">S</span></strong> er den individuelle stigning per aktie, som du skal opnå for at udligne kurtagen.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Automatisk salg ved forudbestemt tab og gevinst</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke har muligheden for at holde øje med dine investeringer, så kan det være en fordel at gøre brug af Stop-Loss og Auto-Sell (ref. "Hjemtag gevinst" på billedet). Hvis du lige nu anvender Saxo Investor, så er du nød til at <a href="https://www.saxotrader.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">skifte over til Saxo Trader GO</a>. Det er samme bruger og login oplysninger, selve platformen er bare mere avanceret og har flere værktøjer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1367,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/saxo-trader-day-trader-1024x499.jpg" alt="Saxo Trader GO - Day Trader" class="wp-image-1367"/><figcaption>Billedet er taget fra saxotrader.com, den avancerede storebror til saxoinvestor.dk</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På overstående billede har jeg åbnet en ordre på Danske Bank ud fra markedsprisen. Hvis du kun vil købe til en bestemt pris, kan du også lave en LIMIT ordre. Dertil har jeg aktiveret Stop-Loss på 5 kroner under markedsprisen, så jeg kun kan tabe 5 kroner per aktie. Dertil har jeg sat min Auto-sell på 20 kroner over aktieprisen, så den automatisk sælger hvis kursen får et opsving.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du løbende sidder og følger med, burde du ikke lave en auto-sell abonnent, men derimod løbende ændre din stop-loss som aktien stiger. På den måde følger du aktien så længe den stiger, men sælger så snart aktien falder. Du skal dog være opmærksom på at det kræver en køber, for at komme af med aktien, så du kan stadig risikere et større end din stop-loss grænse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>Note:</strong> Jeg anvender en svensk broker, da jeg flyttede mine investeringer da jeg arbejdede i sverige. Jeg overvejer at flytte mine positioner hjem til danmark og dertil anvende Saxo Bank. Derfor har jeg ingen åbne positioner på billedet.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Forøgede afkast med gearede investeringer</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Alle pointere og analyser viser at du har en sikker sag, aktien kan kun gå opad. Desværre har du kun 50.000 kroner på kontoen, og ville ønske at du havde flere penge at købe for. Derfor låner du penge og gearer din investering. Du har altså åbnet og investeret 250.000 kroner via en margin konto, hvor 50.000 af dem er dine egne penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Margin er når man investerer for flere penge end man selv har indskudt. Det betyder altså, at man investerer for delvist lånte penge. Hvis du selv har 10.000 kroner, kan du potentielt have en margin op 25.000 kroner. Hvis du tjener penge, så er overskuddet minus renten din fortjeneste, omvendt er tabet forøget på grund af tilbagebetaling af lånte penge.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Læs nyheder og hold dig opdateret</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Markedet er altid i bevægelse, så derfor burde du holde dig opdateret på dets tendenser. Hold øje med hvor interessen fra både professionelle og private investorer ligger, så du ved hvilke brancher eller aktier du skal følge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Grunden til at man bør følge markedets tendenser og investorenes interesser, er fordi du tjener penge på volume. Du får mere ud af at købe 1.000 eller 10.000 aktier i en virksomhed med stigende (og positiv) interesse, så du kan sælge med en profit inden for en kortere tidsperiode.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at være kilde kritisk og forholde sig til tidlinjen af en nyheds artikel. Handler artiklen om noget der er sket (ref. historisk), noget der er under 24-48 timer gammelt (ref. opdaterende), eller omhandler det noget kommende i fremtiden (ref. forventning)?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://www.berlingske.dk/business" target="_blank" class="rank-math-link">https://www.berlingske.dk/business</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://finans.dk/" target="_blank" class="rank-math-link">https://finans.dk/</a></li><li><a rel="noreferrer noopener" class="rank-math-link" href="https://www.invested.dk/nyheder" target="_blank">https://invested.dk/nyheder</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://www.euroinvestor.dk/nyheder" target="_blank" class="rank-math-link">https://euroinvestor.dk/nyheder</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://nyheder.tv2.dk/business" target="_blank" class="rank-math-link">https://nyheder.tv2.dk/business</a></li><li><a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://jyllands-posten.dk/" target="_blank" class="rank-math-link">https://jyllands-posten.dk/</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan forholder en day trader sig til skat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når det kommer til skat, så er der næsten ingen veje udenom, hvis man vil gøre det lovligt. Dertil stiller platforme oftest nogle krav til en day trader, i form af  indestående kapital, specielt hvis du vil geare dine investeringer. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som privat person bliver man beskattet hver gang der er overskud ved en handel, det vil sige afstanden mellem købspris plus kurtage og salgspris minus kurtage. Derfor operer den typiske day trader gennem et selskab, hvor de enten acontobeskattes (i kvartalet) eller ved års opgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dertil opnår man også en <a href="https://finansteori.dk/borshandel/invester-gennem-holdingselskab" class="rank-math-link">fordelagtig skatte opgørelse og beskatning ved at investerer gennem selskab</a>. Man betaler kun 22% af overskuddet, det vil sige omsætning (ref. indtægter) minus omkostninger (ref. udgifter). Dertil kan man opnå skattefradrag hvis man ender med underskud på kontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Du skal dog være opmærksom på, at selskabet og dens beskatning er adskilt fra din private økonomi og indkomstskat. Du skal derfor være opmærksom på at betale indkomstskat ved lønninger fra selskabet til dig selv, eller aktieindkomstskat ved udbytte udbetalinger fra selskabet.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Eksempel: regnskab som selskab</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du køber 1.000 aktier A til 100 kroner i stykket, hvilket vil sige du har købe for 100.000 kroner, hvor til du betaler 100 kroner i kurtage. Senere på dagen sælger du samme 1.000 aktier til en forhøjet kurs af 135 kroner, hvilket vil sige du har solgt for 135.000, hvor til du betaler 135 kroner i kurtage. Sammenlagt har du omsat (ref. tjent) 35.000 kroner, hvor af du har betalt 235 kroner i kurtage, har har et endeligt overskud på 34.765 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dagen efter køber du 500 aktier B til 220 kroner i stykket, hvilket svare til 110.000 kroner, hvor til du betaler 110 kroner i kurtage. Aktien falder hurtigt, så du lukker positionen af 500 aktier til 135 kroner, svarende til 67.500 kroner, hvor til du betaler 67,50 kroner i kurtage. Sammenlagt har du tabt (-)42.500 kroner, hvor til du har betalt 202,50 kroner i kurtage, og ender på -42.702,50 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved A havde du en fortjeneste på 34.765 kroner efter kurtage, og ved B havde du tab på (-)42.702,50 kroner efter kurtage. Det betyder at du lige nu har et underskud på (-)7.937,50 kroner. Du skal ikke betale skat af et underskud, og kan tage det med til næste regnskabsår. Det betyder at de første 7.937,50 kroner du har i overskud til næste år, er skattefri.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>I eksemplet ovenfor er selskabet stiftet med 200.000 kroners indskudt egenkapital, hvilket ikke tæller med som overskud eller tab. Derfor er det muligt at have et underskud med penge på kontoen. Når du har opgjort et regnskab og betalt skat, skal du ikke betale skat af de samme penge igen, kun nye omsætninger og indtægter. Hvis du vil have mere konkret information, så kontakt en revisor med speciale i selskabsskat.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering: At blive day trader</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du gerne vil være day trader, enten fordi du ønsker at følge markedet aktivt, eller fordi du er en ung Bud Fox. Så kræver det enten et større start kapital eller gode aftaler for gearing. Day traders tjener typisk penge på volumen og ikke høje kursstigninger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan være nødvendigt at skifte over til en mere avanceret platform, så du får adgang til avancerede funktioner som stop-loss beskyttelse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det giver god mening at stifte selskab at handle igennem, da man ikke skal tænke på skat ved hver handel, men derimod kun ved kvartaltes acontoskat eller års opgørelsen. Dertil er beskatningen lavere i selskab, og giver mening når man akkumulerer og handler. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil læse mere information omkring day trading, anbefaler jeg den designerede side til formålet: <a aria-label=" (opens in a new tab)" href="https://www.daytrader.dk/" target="_blank" rel="noreferrer noopener" class="rank-math-link">daytrader.dk</a> - her kan jeg anbefale at starte med artiklen <a aria-label=" (opens in a new tab)" href="https://www.daytrader.dk/tips-som-gor-dig-til-en-bedre-daytrader/" target="_blank" rel="noreferrer noopener" class="rank-math-link">15 gode tips til daytraderen</a>.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1326'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-07-11 14:53:55'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-07-11 12:53:55'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:30:04'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:30:04'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'day-trader-invester-daglige-markedet'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Day trader'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1355'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '👨‍💻 Day Trader: Hvordan? 🚀'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'day-trader-invester-daglige-markedet'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'sadan-bliver-man-day-trader'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '18'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Candlesticks - Det fulde overblik over en periode',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/candlesticks-fulde-overblik',
					pubDate: 'Sun, 19 Jul 2020 16:46:02 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1397'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>I skolen og på arbejdet laver man typiske normale streg grafer, som en generel visning af om noget stiger eller falder i værdi. Candlestick grafer er derimod når man kigger på aktier, så kan der være flere tusinde handler i minuttet. Derfor bruger man istedet for candlestick grafen til at vise udviklingen inden for et tidsrum.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel er målet at lærer dig at læse og bruge candlestick grafen. Så kan du bedre overskue markedet og dens kortsigtede fremtid. Der er også investorer som bruger candlestick grafen til at finde historiske mønstre, i håb om at historien gentager sig selv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er candlesticks?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det første man skal lærer at at forstå hvilken farve er stigende og hvilken farve er faldende. I de fleste tilfælde er den stigende pind grøn eller blå, hvor den faldende rød eller grå. Her har vi den tykke streg, som definere hvor kursen startede og sluttede, og visuelt viser os den egentlig gevinst eller tab i tidsrummet. Dertil har vi de 2 små streger, som viser hvor høj og lav prisen var i tidsrummet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1399,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/candlestick-chart.jpg" alt="Candlestick graf" class="wp-image-1399"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad viser candlesticks?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi har en minut-graf, så vil 1 søjle altså vise hele minuttet samlet i 1 pind. Lad os sige at 0:00 er kursen 100 kroner, 0:10 er kursen 115 kroner, 0:27 er kursen 92 kroner, 0:32 er kursen 105 kroner, og til sidste 0:52 er kursen 97 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du kigger på grafens udvikling over vores seneste minut, så blev der gennemførst 5 handler. På et aktivt værdipapir, kan der nemt komme flere tusinde handler i minuttet. Så bliver grafen lavet så du kun ser tidsrummet sidste handel. I det her tilfælde vil grafen gå fra 100 til 97, for at spare udsvingende imellem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1401,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/data-til-candlestick-graf.jpg" alt="Dataset til candlestick graf" class="wp-image-1401"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her får man mere ud af candlestick grafen, da den viser tidsperiodens start, højeste, laveste og slut. Jeg har været forudgående at lave streger på alle 4 punkter. Du kan se at punktet på 105 ikke har et højdepunkt, og det er fordi den ikke udgøre et af de 4 nøgletal.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Først så kigger vi på højeste er 115 og laveste er 92, det skaber den lille streg i midten mellem højeste og laveste. Derefter kigger vi på start og slut prisen. Her kan vi afgøre at den sluttede lavere end den startede, så det er en faldende pind, som udgøre den store del af kroppen. Vi kan altså omdanne samme data til følgende pind:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1403,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/data-til-candlestick-graf-med-farve.jpg" alt="Dataset til candlestick med farve" class="wp-image-1403"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er forskellen på en normal graf og en candlestick graf?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er vandt til at kigge på en streg graf, så har du være vandt til at følge markedets lukkepriser. Du går altså glip af udsvingende i de givende perioder. Du skal altså bruge hele grafen til at se, om aktien er stigende eller faldende. Med candlestick grafen kan du se hvert interval, om udsvingende ligger op til en stigning eller et fald.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1413,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/streg-graf-til-candlestick-graf-1024x315.jpg" alt="Saxo Bank - Streg graf til candlestick graf" class="wp-image-1413"/><figcaption>Billederne er taget fra Saxo Trader Go\'s hjemmeside</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På grafen ovenfor ser du Apple\'s aktie i samme tidsperiode. På venstre side kan du kun se lukke-kursen for hvert interval, hvor imod candlestick viser udsvingende ved hver interval. Det kan godt virke lidt overvældende i starten, indtil man lærer at forstå de individuelle udsving.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du kigger i slutningen af begge grafer, så ligner det på streg kursen at aktien dykkede og steg. Ser man derimod på candlestick grafen, så opdager man at der bliver handlet lige meget, tiden har bare været afgørende for, om sidste handel har været høj eller lav.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at du på grønne (stigende) pinde kigger på toppen og de røde (faldende) kigger på bunden. Med candlestick ser man mere generelt på dataens udvikling igennem en periode, og ikke hvad hvert interval sluttede på, medmindre der er store udsving.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår bruger man candlestick grafen?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Grafen giver et godt indblik løbende, da man kan indstille dens tidshorisont. Hvis man kigger på 1 år, så vil hver pind vise 1 dag eller 1 uges handel. Det giver stadig fordelen af at kan se hvordan det generelle markedet udvikler sig på trods af op og nedture.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">tjekker dine investeringer</a> med korte intervaller (dagligt eller ugentligt), så vil candlestick grafen give dig et mere balaneret overblik. Kigger du en gang om måneden eller i kvartalet, så har det ikke den store forskel for dig. Man kan sjældent forudse hvad der sker indtil næste gang du tjekker.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du kigger på din porteføljes udvikling, så giver det heller ikke mening at have candlestick grafen, fordi du ikke kan se hvilke aktier der gjorde hvilke udsving. Der får du altså mere ud af en streg graf, som blot viser den generelle lukningskurs per interval.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Candlestick grafen bliver f.eks også anvendt til Forex kurser, da vekslingskurer oftest er meget volatile. Det er derfor vigtigt at kan forholde sig til trends i kursudsving.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Bonus: Streg vs Candlestick</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Istedet for at have 2 billeder side om side, som vi havde med streg grafen og candlestick grafen, så vil jeg gerne vise dig hvordan de overlapper hinanden. På den måde kan du se hvor meget information du går glip af, når du anvender streg grafen. Læg mærke til hvilke punkter grafen følger på op og nedgående pinde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1431,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/streg-vs-candlestick-graf.jpg" alt="Streg vs Candlestick graf" class="wp-image-1431"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at bruge candlesticks kan vi altså få et bedre billede over den generelle interesse i aktien, men også hvor store udsving der er, i forhold til start og slut pris på hvert interval. På følgende billede kan du se både udsving og dens indre kursændringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal også bemærke at pindene ikke starter og slutter i samme højde, da man tager ud fra første handel i et tidsrum. Det vil sige at hvis det er en minut visning, så kan sidste handel 00:59 være til prisen 100 kroner, men i det nye minut 01:00 er første handel udført til 103 kroner. Det skaber et 3 kroners mellemrum imellem slut og start af de 2 pinde.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1397'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-07-19 18:46:02'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-07-19 16:46:02'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:30:28'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:30:28'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'candlesticks-fulde-overblik'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'artikel',
							__cdata: 'Artikel'
						},
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '87'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'candlestick'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'off'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '📊👁‍🗨 Sådan bruger du candlestick grafen'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1436'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'candlesticks-fulde-overblik'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'sadan-laeser-du-en-candlestick-graf'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'laes-forsta-candlestick-graf'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '17'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: '3 ting nye investorer ikke ved om aktieinvestering - Kurtage, Indeks og X-dagen',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/3-ting-nye-investorer-ikke-ved',
					pubDate: 'Fri, 24 Jul 2020 01:58:58 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1454'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Nye investorer er oftest kun klar over den helt basale investerings viden. Som begynder er man måske klar over aktiekurs, kurtage og måske også udbytter. Måske har man endda sat sig ind i grundlæggende analyse teknikker, så man kan afgøre om et selskab klarer sig godt. I den her artikel fokusere vi på 3 punkter, som nybegyndere oftest ikke bliver fortalt eller ved på forhånd.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>1. Købskurtage er inkluderet i afkast målingen, men ikke salgskurtage</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er naturligt at <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">nye investorer følger sine investeringer</a>, da man oftest har følelserne med. Derfor er man god til at kigge på dagens udvikling og hvilket afkast aktien har givet os. I starten er det nervepirrende fordi den oftest starter med at være negativ, hvis aktien ikke er stigende mens du køber aktien.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det sker fordi din børsmægler oftest vurdere afkastet ud fra den totale købspris af aktierne plus kurtage. Så hvis du køber 100 aktier til 76 kroner, altså 7.600 kroner, hvor kurtagen er 29 kroner. Så vil afkastet beregnes ud fra 7.629 kroner, og derved give et start afkast på -29 kroner (-0,38%).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hertil skal du huske at der også er kurtage på at sælg aktien, som ikke er inkluderet i afkastmålingen. Så når afkastet siger 0%, så har du som regel kun overgået købet af aktien eksklusiv salgskurtage. Hvis du vil lave en aktuel beregning, så kan du bruge break-even formularen, som du finder i <a href="https://finansteori.dk/borshandel/sadan-bliver-man-day-trader" class="rank-math-link">artiklen om at være day trader</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Hvis du oplever at den inkludere både købskurtage og salgskurtage, så må du gerne skrive til os på facebook. Så vil vi gerne rette dette til fremtidigt læsende investorer af siden!</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>2. Aktiekursen vist imod et indeks er procent baseret fra periodens start-kurs</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du har sikkert kigget på en aktie eller din portefølje, og set en ekstra streg der viser udviklingen af et indeks. Hvis du kigger på danske aktier, er det typisk OMXC25 indekset, eller DJ USA Indekset hvis du er på amerikanske aktier. Men hvordan skal man som investorer kigge på denne graf i forhold til udviklingen af aktien eller sin portefølje?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1463,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/portfolio-development-index-1024x334.png" alt="Aktie eller Portefølje imod Indeks udvikling - investorer" class="wp-image-1463"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man kigger på en tidsperiode, og tilføjer et indeks, så starter de begge på samme kurs. Herefter ser du udviklingen af aktien/porteføljen og de(t) valgte indeks(er) i procent. På den måde kan du se om aktien/porteføljen stiger eller falder mere end det valgte indeks. Det giver altså et indblik i om aktien/dine investeringer følger indeksets udvikling (en gruppering af flere selskaber).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Du kan for eksempel bruge denne visning til at se om du opnår bedre afkast end hvis du havde givet dine penge til en passiv indeks-fond. Hvis du derimod smider dine penge i en passiv indeks-fond, kan du ud fra fondens fordeling se hvor godt den følger indekset i helhed.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>3. Man får ikke udbytte hvis man køber på \'x dagen\'</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er oftest en tvivl om hvornår man skal købe en aktie og dertil have retten til at modtage udbytter. "XD", som man kalder det på engelsk, kommer som en forkortelse af "Ex-dividend", altså dagen men ikke længere kan opnå udbytte. I danmark er dagen normalt markeret som \'X dagen\'. Det kan være lidt misvisende, da man altså skal købe aktierne senest dagen inden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis et selskab kun <a href="https://finansteori.dk/borshandel/udbytte-investering-sadan-kommer-du-igang" class="rank-math-link">betaler udbytte 1 gang om året</a>, så opgøres udbyttebeløbet oftest til generalforsamlingen. Her er ex-dagen normalt sat til dagen efter generalforsamlingen. Det var derfor nødvendigt at investorer køber aktierne i slutningen af dagen hvor selskabet holder generalforsamlingen, hvis man ville tage del af udbytterne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Ekstra: <a href="https://finansteori.dk/borshandel/invester-gennem-holdingselskab" class="rank-math-link">Hvis du investerer gennem et selskab</a>, så er det ex-dagen som er afgørende for hvilket år udbyttet skal opgøres. Hvis ex-dagen er 30 december \'19, men udbetalingen er 6 januar \'20, så bogføre man udbyttet i \'19. Det bogføres på det tidspunkt kravet til udbyttet opnås, og ikke når man modtager pengene. Tilsvarende hvis du sender en regning i december, som først betales i januar.</em></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1454'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-07-24 03:58:58'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-07-24 01:58:58'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:33:13'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:33:13'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: '3-ting-nye-investorer-ikke-ved'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '81'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'investorer'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1486'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '😰 3 ting nye investorer typisk ikke ved'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'x-ting-nye-investorer-glemmer'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '3-ting-nye-begyndere-ikke-ved'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '3-ting-nye-investorer-glemmer'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '3-ting-nye-begyndere-ikke-ved'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '16'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Månedsbudget - Hvor meget skal du investere?',
					link: 'https://finansteori.dk/borshandel/bors-starter/manedsbudget-hvor-meget-investering',
					pubDate: 'Tue, 28 Jul 2020 02:18:06 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1521'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Når man kigger rundt på diverse medier omkring at investerer, så ser man ofte spørgsmålene "Hvor meget skal jeg investerer?", "<a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">Hvordan kommer jeg igang?</a>" og "Hvor ofte skal jeg investerer?". I den her artikel lærer du at lave et overflødigt månedsbudget, så du kan finde ud af, hvor meget du kan tåle at investerer - og hvor ofte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du læste rigtigt, for at forstå din økonomi, skal du lave et budget. Det er vigtigt at vide hvor dine penge kommer fra og hvor de skal hen. I den morderne verden er vores indtægter oftest reserverede på forhånd, bare se hvordan skat tager deres del før dine penge udbetales.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kom godt igang med månedsbudget i Google Spreadsheets</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at sikre at alle kan være med, vil vi udføre budgettet i Google Spreadsheet. Hvis du fortrækker Microsoft Excel, eller et andet program, så er du også velkommen til at gøre det. Vi bruger ikke nogen vilde funktioner, så burde være nemt at sætte op i ethvert regneark\'s program.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Alt det kræver for at få adgang er en Google konto, hvilke de fleste får ved at oprette en Gmail. Hvis du har en android telefon, så har du typisk også en Gmail konto. Herefter går du ind på <a href="https://docs.google.com/spreadsheets" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Google Docs (docs.google.com)</a> og derefter ind under Sheets gennem menuen oppe i venstre hjørne. Når du er derinde, så er der et stort plus (+) nede i højre hjørne, hvor du kan oprette et ny regneart.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://taenk.dk/test-og-forbrugerliv/privatoekonomi-og-aftaler/budget/budget-saadan-laegger-du-et" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Budget: Sådan lægger du et - Forbrugerrådet Tænk</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at kan lave et fuldendt regnestykke, så anbefaler jeg at du laver et gennemsnitligt månedsbudget. For at lave en gennemgående overblik, så har vi brug for 2 kolonner af 4 felter. De 4 kolonner er Indtægter/Udgifter, Beløb, Interval, Mdr Gns. Her anbefaler jeg at indtægterne oplyses efter skat, så du har et mere direkte indblik i hvor mange penge du får mellem hænderne, når folk er færdige med at tage deres andele.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1532,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/Månedsbudget-Skabelon-1024x217.png" alt="Månedsbudget Skabelon" class="wp-image-1532"/><figcaption><a aria-label=" (opens in a new tab)" href="https://docs.google.com/spreadsheets/d/1n6WG_GUvH2QZX5VmEOVy6eTnQWKec7xQwPVNLYoFMcQ/edit?usp=sharing" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Åben budgettet i Google Spreadsheet her</a> - så kan du også se brugte funktioner</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan vil du bruge dit månedlige fribeløb?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu kommer der nogle vigtige informationer, som kan være afgørende for din situation. Det er vigtigt at du indsætter både faste og variable værdier, men kun værdier som har stabile intervaller inden for 12 måneder. Hvis du ikke kan fastsætte indtægter eller udgifter, så tag stilling til dem løbende. I mit lyn-budget kan du se at vi har indtægter for 21.000 kroner om måneden, hvor 16.580 kroner er forud reserveret til faste formål. Det giver os et fribeløb på 4.420 kroner, som vi aktivt eller passivt kan tage stilling til, hvordan vi anvender.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Nye investorer eller værdi-investorer vil typisk ikke have udbytteindtægter, som de kan medtage i sit budget. <a href="https://finansteori.dk/borshandel/udbytte-investering-sadan-kommer-du-igang" class="rank-math-link">Personligt investerer jeg efter udbytter</a>, med håbet om at kan dække faste udgifter og senere min generelle levestil. Målet er altså at kan betale mine regninger, uden at være tvunget på arbejde hver dag.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her har du et vigtigt valg at foretage dig, hvordan vil du bruge det fribeløb, som månedsbudgettet viser os. Vil du have en vild bytur med vennerne? Vil du i biografen og se de nyeste film? Eller vil du investerer imod at forbedre dine fremtidige økonomiske forhold? Her er det selvfølgelig vigtigt at kigge på din nærme fremtid, cirka 6-24 måneder frem, om du har planlagte udgifter, som du burde spare op til istedet for.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Sådan fungere opsætningen af månedsbudgettet</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os starte fra starten, i venstre side, og bevæge os imod højre. Først så har vi det blå område, som hedder Overblik. Her har vi taget alle måneders gennemsnit fra indtægts området, og lagt sammen. Hvis du har nogle indtægter der kommer med måneders mellemrum, er det din opgave et sprede dem ud på flere måneder. Derunder har vi alle måneders gennemsnitlige udgifter, som viser os hvor mange penge vi bør lægge til side hver måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan jeg anbefale at have 3 kontoer ved din bank, så du kan adskille dine penge. De 3 kontoer burde henholdvist være Indtægter, Udgifter og Forbrug. Indtæger er hvor alle dine penge kommer ind, og du kun må røre 1 gang om måneden, når du overføre til de 2 andre kontoer. Udgifter er hvor du overføre det månedlige gennemsnit, så du altid er sikker på at have penge til dine udgifter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p>Financial peace isn\'t the acquisition of stuff. It\'s learning to live on less than you make, so you can give money back and have money to invest. You can\'t win until you do this.</p><cite>Dave Ramsey</cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har indsat et madbudget i udgifter, den ene post overføre vi til \'Forbrugskontoen\', her er hvorfor. Forbrug er kontoen hvor vi har vores bank kort forbundet. Hvis du ikke har til vane at holde tjek med din forbrugskonto, så anbefaler jeg at du laver en 4 konto til mad, og dertil anvender begrænsede kort uden muligheden for overtræk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kommer vi til indtægter (grøn) og udgifter (rød). Her har vi først navnet på posten, som forklare os hvor pengene kommer fra eller er reserveret til. Derefter har vi beløb, som skal være det beløb vi skal betale når regningen falder. Intervallet viser os hvor ofte vi betaler den regning, da ikke alting betales hver måned. Til sidst har vi \'Mdr Gns\' (Månedlige Gennemsnit), som er Beløbet divideret med Intervallet, så vi ved hvor meget det opgøre i gennemsnit per måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget af dit fribeløb skal du investerer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har besluttet dig for at vil investerer en del af dit fribeløb, og ikke har nogle planlagt udgifter inden for de næste 24 måneder. Så starter vi med at finde ud af, hvor meget vi har brug for at spare op til overraskende udgifter. Mit bedste råd er først at omregne posterne til procenter, <a href="https://finansteori.dk/artikel/fivo-budget-reserver-dine-penge" class="rank-math-link">ligesom jeg har gjort i FIVO-Budgettet</a>, hvor stor del af dine indtægter er udgifter og fribeløb.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong>Udgifter:</strong> 16.580 / 21.000 * 100 = 78.95%</li><li><strong>Fribeløb:</strong> 4.420 / 21.000 * 100 = 21.05%</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan se at vores udgifter fylder en stor del af vores indtægter. For at sætte ting i perspektiv, så koster det os næsten 79% af vores penge at leve ud fra den standard vi har sat os selv. For at give dig en god start, hvor du ikke føler at du mister for meget sjov fra dine penge. Så anbefaler jeg at du bruger 50% af dit fribeløb, men maksimum 10% af dine indtægter. I vores eksempels tilfælde, vil det altså sige <strong><span class="has-inline-color has-vivid-cyan-blue-color"><em>21.000*0,10=</em> 2.100 kroner om måneden</span></strong>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p>It\'s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.</p><cite>Robert Kiyosaki</cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal du være opmærksom på, at du ikke behøver at investerer pengene i markedet i starten af måneden, når du overføre pengene til din investerings konto. Det vigtige er blot at overføre pengene, med intentionen og selv disciplinen om at de skal investeres i aktier, foreninger, ETF\'er eller andet. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor ofte skal du investere dine penge?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ovenfor har vi opgjort, at vi vil tilsidesætte 10% (2.100 kroner) om måneden, med intentionen og formålet at investere pengene. For at få mest ud af pengene, skal vi nu finde ud af, hvordan og hvor ofte vi skal investere pengene. Hvis du har valgt at investere gennem Nordnet eller Saxobank, så anbefaler jeg at du også læser opstillingen af de 2 platforme: <a aria-label=" (opens in a new tab)" href="https://finansteori.dk/borshandel/aktieinvestering-nordnet-eller-saxo-bank" target="_blank" rel="noreferrer noopener" class="rank-math-link">Nordnet vs Saxo Bank, hvem er bedst?</a><em>(Åbner i nyt vindue)</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at læse artiklen, får du et godt indblik i kurtage, veksling og generelt hvilke omkostninger du skal holde udkig efter. Det er umuligt at give specifik information om hvornår og hvor meget, man skal investere. Det kommer an på dine behov, interesser, risikovilje og hvor stor spredning du vil have.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":1563,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/07/dollar-cost-avarage-1024x405.png" alt="Dollar Cost Avaraging" class="wp-image-1563"/><figcaption>Blå er købskurser og Gul er den gennemsnitlige købspris historisk set.</figcaption></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En strategi du kan bruge, er <strong>Dollar Cost Averaging</strong>. Simpelt sagt, så går det ud på at købe et bestemt beløb, med et bestemt tidsmellemrum. Du vælger en række virksomheder, som du tror vil klare sig godt over de næste 5-15 år. Målet er effektivt at undgå at skal tage stilling til markedet, om prisen er høj eller lav, eller om markedet er stigende eller faldende. Ved at købe med faste tidsrum, så vil du efter 5-15 år have købt for den gennemsnitlige pris over periode, men kan sælge alle aktierne til dagens kurs.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=iMvgq5_fTv0","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\r\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\r\nhttps://www.youtube.com/watch?v=iMvgq5_fTv0\r\n</div><figcaption><a href="https://www.youtube.com/channel/UCD5qWEiR3iQRFj_en38Cz6w" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Åben kanalen Nem Investering her</a></figcaption></figure>\r\n<!-- /wp:core-embed/youtube -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Overordnet vil dine aktier være af højere værdi, over en længere periode, uanset hvor volatil (varierende) markedet er på kortere sigt. Når du sælger aktierne, så sælger du til dagskursen, og vil ud fra hver aktie tjene mellemrummet mellem købsprisen og dagskursen.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1521'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-07-28 04:18:06'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-07-28 02:18:06'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:33:33'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:33:33'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'manedsbudget-hvor-meget-investering'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '86'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Månedsbudget'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1549'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '💰 Månedsbudget: Hvor meget skal du investere? 🧐'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_d43d19200f4b578e04e6684a364e7636'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Købsstrategi - Dollar cost averaging" width="800" height="450" src="https://www.youtube.com/embed/iMvgq5_fTv0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_d43d19200f4b578e04e6684a364e7636'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1595902230'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'manedsbudget-hvor-meget-investering'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'manedsbudget-hvor-meget-skal-du-investere'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '15'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Vind +60 millioner i Eurojackpot, er det en investering eller gambling?',
					link: 'https://finansteori.dk/artikel/eurojackpot-investering-eller-gambling',
					pubDate: 'Sat, 01 Aug 2020 12:46:38 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1605'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Fredag formiddag var jeg nede at hente mad, hvor jeg valgte at købe en eurojackpot. Købte 10 rækker til 150 kroner med en vinder pulje på 373.000.000 kroner. Normalt investerer jeg ikke i noget så risikabelt, men når puljen er +300 millioner, kan jeg nogen gange finde på det, da jeg lige så nemt kan tabe 200 kroner i aktiemarkedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er nok et af de mest risikable investeringer man kan foretage sig, hvis man forholder sig til statistikkerne. Meningen med den her artikel er ikke at tage håbet fra dig, da jeg også selv godt kan lide idéen om at have håbet til at vinde. Jeg ønsker at du har muligheden for at forholde dig til, hvad du egentligt bruger dine penge på, i forhold til dine chancer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad nu hvis jeg vinder?!</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kunne være ualmindeligt fedt at vinde, også selv om det måske kun er 1.000.000 kroner. Når man køber eurojackpot, så bestemmer man selv hvor mange rækker man vil have. Typisk kan der være 20 rækker per printet kupon. Hvis du køber flere end 20 rækker, bør du altid tjekker om du har 2 ens rækker, selv om chancen er meget lille for at det sker.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>Note:</strong> Hvis du har en usund lyst til at gamble, uanset om det er lotto, betting eller på anden vis, som potentielt kan skade dig økonomisk, så tag kontakt til <a href="https://ludomani.dk/" class="rank-math-link">center for ludomani her</a>! (det er gratis!) Har du opbygget en gæld, som du ikke længere selv kan overskue? Så tag kontakt her: <a href="https://gaeld.taenk.dk/raadgivning-om-gaeld" class="rank-math-link">Forbrugerrådet Tænk: Rådgivning om Gæld</a></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er chancen for at vinde i Eurojackpot?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>1 række består af 5 tal uden joker, og 2 tal ekstra hvis med joker. Det vil sige at din kupon har enten 5 eller 7 unikke tal per række. Hvis du klikker ind på deres "<a href="https://danskespil.dk/eurojackpot/eurojackpot-vaelg-selv-lotto" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Vælg selv numre</a>", så kan du se at de første 5 tal udgøres fra 1 til 50, og jokeren udgøre 1 til 10. Her kommer lidt matematik, så hold tungen i munden!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det første tal kan i teorien være alt fra 1-50, nummer 2 alt fra 1-49 og så videre. Det vil sige at vi kan beregne alle kombinationer af tal, ved at sige <em>50*49*48*47*46</em> = 254.251.200 forskellige kombinationer. Herefter har vi jokeren på <em>10*9</em> = 90 kombinationer. Da vi kan have 90 kombinationer af jokere per række, så er der altså <em>254.251.200*90</em> = 22.882.608.000 forskellige kombinationer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"align":"center","className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote has-text-align-center is-style-large"><p>(50*49*48*47*46)*(10*9) = <span class="has-inline-color has-luminous-vivid-orange-color"><strong>22.882.608.000</strong></span></p></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hver række udgøre altså 1 ud af alle disse kombinationer. Det vil sige at hver unik række har 1/22.882.608.000=0,0000000000437 (<strong>~0,00000000437%</strong>) chance for at ramme alle 7 tal. Der er så lav procent change for at vinde i eurojackpot, at Google ikke engang gad forsøge vise det fulde tal:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"id":1610,"sizeSlug":"large"} -->\r\n<figure class="wp-block-image size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/08/google-eurojackpot-percentage-error.png" alt="Google Eurojackpot Vinderchance Lommeregner Fejl" class="wp-image-1610"/><figcaption><em>Rent matematisk betyder "e-11" at du skal rykke kommaet 11 gange frem (til venstre) fra 4,37</em></figcaption></figure>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Gambling er generelt designet til at huset altid vinder, trods eurojackpotten trækker vinderpuljen med over når den ikke vindes. Der er dog et loft på 600.000.000 kroner (Typisk stopper den omkring 586 millioner), før de begynder at dryppe puljen ned på mindre kombinationer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad nu hvis jeg køber alle rækker?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man nu i forvejen var rig, eller gik sammen med en alverdens mennesker, med det rene formål at købe alle mulige rækker. Det er der faktisk nogen som har gjort, hvor efter de interne regler blev ændret, for at undgå dette i fremtiden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>1 række koster 15 kroner, hvilket vil sige at den typiske kupon på 10 rækker koster 150 kroner. Hvis du skulle købe alle kombinationer, ville det altså koste dig <em>22.882.608.000*15</em> = <span class="has-inline-color has-luminous-vivid-orange-color">343.239.120.000 kroner</span>. Det vil koste dig mere end 500 gange mere end hovedpuljen at købe alle rækkerne, hvis puljen udgøre 600 millioner. Eftersom de lavere puljer er mindre, kan vi nemt afgøre at vi ikke kommer til at vinde pengene hjem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Teoretisk studie: Hvad nu hvis man investere pengene istedet for?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os antage at den typiske eurojackpot (eller generelt lotto) gambler køber 10 rækker om ugen, eller måske 20 rækker om måneden, så har vi altså en måneds omkostning på 300-600 kroner om måneden. Hvis vi nu tager gennemsnittet 450 kroner, og <a href="https://finansteori.dk/borshandel/opsparing-ved-investeringsrobotten" class="rank-math-link">investere ved June hver måned</a>. Så ville vi altså investere 450*12 = 5.400 kroner om året, som historisk set kunne stige 7% om året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bliver altså ikke millionær på en nat, men du har en stabil opsparing som vokser løbende. Det kan give dig noget økonomisk frihed imod regninger eller andet, som falder udenfor dit normalt budget.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td>2020</td><td><em>5.400 +7%</em> =5.778,00</td></tr><tr><td>2021</td><td><em>(5.778 + 540) +7%</em> = 11.960,46</td></tr><tr><td>2022</td><td><em>(11.960,46 +5400) +7%</em> =18.575,69</td></tr><tr><td>2023</td><td><em>(18.575,69 +5400) +7%</em> =25.653,99</td></tr><tr><td>2024</td><td><em>(18.575,69 +5400) +7%</em> =33.227,77</td></tr></tbody></table><figcaption><em>Dette eksempel er baseret på 7% årligt fast afkast på porteføljen, hvor meget du potentielt kunne spare op efter 5 år i urealiseret afkast. Du gøres opmærksom på der ikke er nogen garanti for positivt afkast og at eksemplet ikke indeholder administrationsgebyr fra June.</em></figcaption></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen ved June er at man kan bruge dem som en opsparing, hvor man månedligt overføre penge til dem. June er kurtagefrit, hvilket betyder at det kun koster dig et årligt gebyr i administration af tjenesten. For kun 0,69% (🤭) af det investerede beløb om året, kan dine penge komme i arbejde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"id":1629,"sizeSlug":"large"} -->\r\n<figure class="wp-block-image size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/08/june-afkastberegner-lotto.png" alt="June Afkastberegner istedet for Lotto" class="wp-image-1629"/><figcaption><em>Her ser du June\'s afkastberegning ved at investere 450 kroner om måneden, uden startindskud, hvis man vælger deres \'Opportunity\' fond.</em></figcaption></figure>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:buttons -->\r\n<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"vivid-purple","textColor":"very-light-gray"} -->\r\n<div class="wp-block-button"><a class="wp-block-button__link has-very-light-gray-color has-vivid-purple-background-color has-text-color has-background" href="https://www.june.dk/calculator-teaser/" target="_blank" rel="noreferrer noopener"><strong>Prøv June\'s beregner her!</strong></a></div>\r\n<!-- /wp:button -->\r\n\r\n<!-- wp:button {"backgroundColor":"vivid-cyan-blue","textColor":"very-light-gray"} -->\r\n<div class="wp-block-button"><a class="wp-block-button__link has-very-light-gray-color has-vivid-cyan-blue-background-color has-text-color has-background" href="https://finansteori.dk/borshandel/opsparing-ved-investeringsrobotten">Alternativer</a></div>\r\n<!-- /wp:button --></div>\r\n<!-- /wp:buttons -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Dette er ikke en reklame for June eller Danske bank, og vi modtager ingen former for kommission fra at du opretter dig hos dem via knappen ovenfor. Jeg forstår godt spændingen ved at købe en eurojackpot eller en af de andre lotto\'er derude. Bare sørg for at du <strong>kun</strong> bruger penge du kan tåle at tabe, som hvis det var ethvert andet investeringsmål.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>Spiller du Eurojackpot?</strong></em><br><em><span class="has-inline-color has-cyan-bluish-gray-color">- har du vundet noget?</span></em></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1605'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-08-01 14:46:38'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-08-01 12:46:38'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-08-20 03:32:38'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-08-20 01:32:38'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'eurojackpot-investering-eller-gambling'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'artikel',
						__cdata: 'Artikel'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '89'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Eurojackpot'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1637'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'eurojackpot-investering-eller-gambling'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'eurojackpot-betaler-minimum-60000000-kroner-til-vinderen'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'eurojackpot-minimum-60000000-kroner'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '14'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Beskatning - Sådan beregner du skat af kapital indkomst',
					link: 'https://finansteori.dk/artikel/beskatning-minimum-viden',
					pubDate: 'Fri, 07 Aug 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1645'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis du ikke tager en økonomisk uddannelse, så er der stor chance for at skolen mangler at lære dig omkring skat. Hvis du tænker tilbage på folkeskolen og måske også gymnasiet, hvor meget lærte du egentligt omkring skat? </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Du skal betale skat af alle intægtskilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På et tidspunkt kommer du til at have et arbejde, måske allerede imens du er studerende. Når du får et arbejde, så får du en kontrakt hvor på der står hvor meget du kommer til at tjene. Hvis du ikke ved hvad skat er, så får du en overraskelse, når du ikke får udbetalt hvad du har tjent. Hvis du også modtager S.U. risikere du at have endnu færre penge, da du måske betaler B-skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark har var 2 indkomstklasser. Vi har A-skat, som er vores primære (kapital) indtægtskilde, hvor vi modregner vores frikort og skattefradrag. Derefter har vi B-skat, som er alle andre (kapital) indtægtskilder, hvor vi betaler fuld skat af enhver krone. Det betyder ikke at skat snyder dig fra dit frikort og dine fradrag, de bliver dog først opgjort ved årsopgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Jeg gør lige opmærksom på at det her omhandler kapital indtægt, altså når du får løn fra en arbejdsgiver eller ved at udføre freelance arbejde. Dette inkludere ikke <a href="https://finansteori.dk/borshandel/start-din-aktieinvestering-2020" class="rank-math-link">aktieskat</a>, renteskat eller skatter i andre kategorier.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget skal jeg betale i skat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dit skattegrundlag er hovedsageligt opgjort af 8% arbejdsmarkeds bidrag (AM) og derefter statens og kommunens skattegrundlag. Hvis du vil have dit specifikke skattegrundlag, kan du tjekke på <a aria-label=" (opens in a new tab)" href="https://www.skm.dk/skattetal/satser/danmarkskort-over-kommuneskatter/" target="_blank" rel="noreferrer noopener" class="rank-math-link">Danmarkskort over Kommuneskatter</a>. Lad os tage et kig på København, så du kan få en forklaring af hvor pengene forsvinder hen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"id":1646,"sizeSlug":"large"} -->\r\n<figure class="wp-block-image size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/08/kommuneskatter-københavn-2020-1024x170.png" alt="Kommuneskatter København 2020" class="wp-image-1646"/></figure>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>København kommune beskattes altså med 36,71%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>23,80% går til kommunen selv, som de kan bruge på veje, offentlig transport, skoler og andet. Kirken tager 0,80%, som går til at dække deres udgifter og giver dig retten til at blive begravet ved kirken. Du kan frasige den ret og slippe for skatten ved at <a aria-label=" (opens in a new tab)" href="https://afmeldkirkeskat.dk/" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">afmelde kirkeskatten</a>. Til sidst har vi bundskatten på 12,11%. Det er skatten som går til selve staten, som går til at betale nationale udgifter, som ikke er kommune specifikke.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan udregner jeg min A-skat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du kender dine beskatnings vilkår, så mangler du at kende dine skattefradrag. Dit største skattefradrag er som standard dit frikort, som skat kalder Personfradrag. I 2020 er dit personfradrag på 46.500 kroner (36.100 kroner, hvis du er under 18) om året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give en teoretisk udregning, så lad os sige at du tjener 26.000 kroner om måneden, før skat. Det omregner vi til alle 12 måneder, så vi får din årlige indtægt: <em>26.000*12=</em> 312.000 kroner om året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td>Månedsløn</td><td class="has-text-align-right" data-align="right">26.000,00</td></tr><tr><td>Årlige indtægt</td><td class="has-text-align-right" data-align="right">26.000*12= <span class="has-inline-color has-vivid-cyan-blue-color"><strong>312.000,00</strong></span></td></tr><tr><td>Arbejdsmarkeds Bidrag (AM)</td><td class="has-text-align-right" data-align="right">8%= <span class="has-inline-color has-luminous-vivid-orange-color"><strong>24.960,00</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">312.000,00-24.960,00= 287.040,00</td></tr><tr><td>Fradrag</td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-luminous-vivid-amber-color"><strong>46.500,00</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">287.040,00-46.500,00= 240.540,00</td></tr><tr><td>Beskatning</td><td class="has-text-align-right" data-align="right">36,71% = <span class="has-inline-color has-vivid-red-color"><strong>88.302,23</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">240.540,00-88.302,23= 152.237,77</td></tr><tr><td>Indsættelse af skattefradrag<br>&amp; årlige indtægt efter skat</td><td class="has-text-align-right" data-align="right">152.237,77+46.500,00= <span class="has-inline-color has-vivid-green-cyan-color"><strong>198.737,77</strong></span></td></tr><tr><td>Månedlige udbetaling</td><td class="has-text-align-right" data-align="right">198.737,77/12= <span class="has-inline-color has-vivid-green-cyan-color"><strong>16.561,48</strong></span></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ovenfor ser du den typiske udregning af din skat i dens rå form. Det kan være du også betaler indtil pension eller har en kantine ordning som køre over din løn. Du bør altså kun bruge selve beregningen til at finde ud af om din skat er sat nogenlunde rigtigt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>B-skat er mere lige til, da man ikke tager højde for fradrag. Her tager du blot din månedlige (eller årlige) løn, trækker 8% AM-bidrag fra og så 36,71% beskatning fra - eller hvad beskatnings procenten i din kommune er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil vide hvad din effektive beskatning har været, så tager du årlige udbetaling op imod årlige indtægt, og har vi betalt <em>100-(198.737,77/312.000,00*100)=</em><strong>36,301%</strong> i skat efter fradrag. Regnestykket fortæller os hvor meget vi har tilbage efter skat (inde i parantesen), så derfor siger vi 100 minus parantesen, for at se hvor stor del skatten udgjorde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan udregner jeg top-skat?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har fundet dig selv en position, hvor du skal betale topskat. Så kan du finde topskats-procenten på <a aria-label=" (opens in a new tab)" href="https://www.skat.dk/SKAT.aspx?oId=2035568" target="_blank" rel="noreferrer noopener" class="rank-math-link">gældende skattesatser</a>. I 2020 er topskatten på 15%, som du skal ligge oven i din kommune skat, af den del som overstiger topskattens bundgrænse efter AM-bidrag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det betyder at du kun betaler topskat, hvis din løn i 2020 overstiger 531.000 kroner <strong>efter AM-bidrag</strong>. Det vil sige at vi kan modregne bundgrænsen med de 8% AM-bidrag. Det vil sige at vi réelt skal tjene <em>531.000/(1-0,08)=</em> 577.173,91 kroner. Lad os prøve at lave en beregning, hvor du tjener 70.000 kroner om måneden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td>Månedsløn</td><td class="has-text-align-right" data-align="right">70.000,00</td></tr><tr><td>Årlige indtægt</td><td class="has-text-align-right" data-align="right">70.000,00*12 = <span class="has-inline-color has-vivid-cyan-blue-color"><strong>840.000,00</strong></span></td></tr><tr><td>Arbejdsmarkeds Bidrag (AM)</td><td class="has-text-align-right" data-align="right">8%= <span class="has-inline-color has-luminous-vivid-orange-color"><strong>67.200,00</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">840.000,00-67.200,00= 772.800,00</td></tr><tr><td>Fradrag</td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-luminous-vivid-amber-color"><strong>46.500,00</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">772.800,00-46.500,00= 726.300,00</td></tr><tr><td>Topskat</td><td class="has-text-align-right" data-align="right">(36,71+15) af (726.300,00-531.000,00)=<br>51,72% af 195.300,00=<br>101.009,16</td></tr><tr><td>Bundskat</td><td class="has-text-align-right" data-align="right">36,71% af resterende 531.000,00=<br>194.930,10</td></tr><tr><td>Totale Beskatning</td><td class="has-text-align-right" data-align="right">101.009,16+194.930,10= <span class="has-inline-color has-vivid-red-color"><strong>295.939,26</strong></span></td></tr><tr><td></td><td class="has-text-align-right" data-align="right">726.300,00-295.939,26= 430.360,74</td></tr><tr><td>Indsættelse af fradrag<br>&amp; årlige indtægt efter skat</td><td class="has-text-align-right" data-align="right">430.360,74+46.500= <span class="has-inline-color has-vivid-green-cyan-color"><strong>476.869,74</strong></span></td></tr><tr><td>Månedlige udbetaling</td><td class="has-text-align-right" data-align="right">476.869,74/12= <span class="has-inline-color has-vivid-green-cyan-color"><strong>39.738,40</strong></span></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Igen skal du være opmærksom på at dette kun dækker den aktuelle beskatning. Der kan være andre poster som pension, kantine og andet. Her kan du også beregne din effektive beskatning, og har her betalt <em>100-(476.869,74/840.000,00*100)=</em><strong>43,229%</strong> i skat efter fradrag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan udfylder jeg min forskudsopgørelse?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://skat.dk/skat.aspx?oid=2234502" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Hvert år får du et skattekort</a> uddelt elektronisk på skats hjemmeside. Her har du muligheden for at lave en forskudsopgørelse. Her får du en lang række skatte rubrikker, som hver tager forbehold til en bestemt beskatning. Når du åbner din forskudsopgørelse, så anbefaler jeg at du starter fra toppen og langsomt bevæger dig ned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du finder en rubrik der dækker over en indtægt, et fradrag, eller på anden vis passer til din situation. Så er det vigtigt at du laver en beregning over det fulde år, og indsætter tallet her. Hvis du tjener 26.000 kroner om måneden, så er det vigtigt at du skriver 312.000 i rubrikken.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du tjener mindre end personfradraget, er det stadig vigtigt at oplyse det fulde beløb. Selv om skat ikke skal opkræve eller inddrage skatter fra pengene, så er det vigtigt at de kender dine indtægter, så du oplyser at du ikke tjener pengene sort (ulovligt).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis din situation ændre sig, så er det vigtigt at du igen logger ind og ændre din forskudsopgørelse. På den måde kan skat tilpasse hvor meget du skal betale i skat, og fordele dem ud på årets resterende måneder. Så ender du ikke med at skal betale hele din sket når opgørelsen sendes ud. Oftest anbefaler man at skrive 1-2% for meget ind i sin opgørelse, så man istedet for får penge tilbage, eller kan tåle hvis indtægter <strong>afviger forventningerne</strong>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan får jeg mere i skattefradrag?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Skattefradrag er en sjov størrelse, da man nemt kan argumentere at det mest hjælper de rige. For at opnår et skattefradrag, skal man nemlig have noget skat at modregne. Dertil kræver det at du har penge efter skat, som du kan bruge på ting som giver dig et skattefradrag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Så inden vi kan kigge på hvordan vi får mere i skattefradrag, skal vi først vide: Hvad er et skattefradrag? Et skattefradrag er oftest når du bruger penge på noget, som gavner landets økonomi og udvikling.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel på et fradrag, som mange ikke tænker over de får, er for Fagligt kontingent. Du får altså et fradrag af de første 6.000 kroner, du betaler til en fagforening. Hvis du betaler 479 kroner om måneden til din fagforening, altså <em>479*12=</em> 5.748 kroner om året, så kan du modregne dette beløb af din skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her får du et par forslag på fradrag, som kan være relevant for dig:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><thead><tr><th class="has-text-align-left" data-align="left">Område</th><th class="has-text-align-right" data-align="right">Fradrag</th></tr></thead><tbody><tr><td class="has-text-align-left" data-align="left"><a href="https://skat.dk/skat.aspx?oid=2234770" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Fagligt kontingent</a></td><td class="has-text-align-right" data-align="right">6.000 kr</td></tr><tr><td class="has-text-align-left" data-align="left">Befordringsfradrag<br>(<a href="https://www.skat.dk/SKAT.aspx?oId=2035568" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">kørselsfradrag</a>)</td><td class="has-text-align-right" data-align="right">(0-24 km) Intet fradrag<br>(25-120 km) 196 øre/km<br>(120+ km) 98 øre/km</td></tr><tr><td class="has-text-align-left" data-align="left">Håndværkerfradrag<br>(<a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://www.skat.dk/SKAT.aspx?oId=2035568" target="_blank" class="rank-math-link">servicefradrag</a>)</td><td class="has-text-align-right" data-align="right">Serviceydelser<br>6.200 kr. pr. person<br>Håndværksydelser<br>12.500 kr. pr. person</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at finde flere fradrag, så kan du tage Skat\'s egen "<a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://skat.dk/skat.aspx?oid=1417" target="_blank" class="rank-math-link">Find mine fradrag</a>", hvor du svare på en række spørgsmål. Herefter får du en række links, hvor du kan læse mere om mulige fradrag. Hvis det bidrager til landets økonomi eller udvikling, så er der en chance for, at du kan få et fradrag fra at gøre det.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det handler om at være opmærksom på hvor skat giver fradrag, så man kan udnytte det til sin egen fordel. Hvis du ikke har tiden til at vaske dine egne vinduer, og derfor bestille en vinduespudser. Så husk at du kan få fradrag på en del af hans pris i skat. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Jeg er stadig ikke helt med, hvordan er fradrag en fordel for mig?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du har sikkert hørt om folk der har gjort noget, fordi de kan trække det fra i skat. Måske gav du et lille grin, som om du forstod hvad det betød, selv om du ikke gjorde. Hvis du stadig ikke helt forstår hvad fradraget er, eller hvordan det fungere, så lad mig give dig et mere konkret eksempel.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at gøre det nemt, så bruger vi vores udregning ovenfor, hvor vi tjener 26.000 kroner om måneden, betaler en årlig skat på 88.302,23 kroner og har 16.561,48 kroner tilbage til dig selv hver måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du køre til og fra arbejde i din egen bil, så betaler du for brændstof og bilen får noget slidtage. Det er noget du dækker med dine 16.561,48 kroner. Måske tanker du for 1.000 kroner og har en forventet slidtage på 600 kroner om måneden. Da du har 26 kilometer til og fra arbejdet hver vej, altså 52 kilometer om dagen, så kan du få et fradrag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De første 24 kilometer får du ingenting, så har vi 28 kilometer tilbage. Af de 28 kilometer får du 196 øre per kilometer, altså 1,96 kroner, svarende til 54,88 kroner om dagen. Hvis vi går ud fra cirka 23 arbejdsdage på en måned, så har du et månedligt fradrag på 1.262,24 kroner. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det beløb kan du tilføje dit dine fradrag. Det betyder at din beskatning bliver mindre og du enten har flere penge udbetalt hver måned - eller får penge tilbage i skat, når året er omme.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kræver kun at du tjener nok penge, til at betale skat. Man kan kun få fradrag fra den skat, man ellers skulle have betalt. Hvis vi tager udgangspunkt i vores eksempel, ville du maksimalt kunne opnå et fradrag på de 88.302,23 kroner. Det ville næsten aldrig kunne lade sig gøre at opnå 100% fradrag, med mindre du betaler minimalt i skat, på grund af fradragslofter og at de færreste ting giver 1:1 fradrag.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1645'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-08-07 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-08-07 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2021-02-27 20:50:20'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2021-02-27 19:50:20'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'beskatning-minimum-viden'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'artikel',
						__cdata: 'Artikel'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '85'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Skat'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1660'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_permalink'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'beskatning-minimum-viden'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'beskatning-minimum-vide'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '13'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Aktiesplit - Udvandet ejerskab og lavere priser, er det en god ting?',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/aktiesplit-udvander-ejerskab-pris',
					pubDate: 'Tue, 18 Aug 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1845'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Hvis et selskab bliver for dyrt for den generelle investor, så kan de vælge at udføre et aktiesplit. Det vil sige at hver aktie bliver lavet om til flere aktier, så kursen tilsvarende falder. Hvorfor giver det mening at udføre et aktiesplit? I skrivende stund har vi 2 eksempler på aktiesplit, fra både Apple med 4:1 og Tesla med 5:1.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er et aktiesplit?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Et børsnoteret selskab består af aktier, som vi køber for at opnå ejerskab i selskabet. Kursen af aktierne afgøres af udbuddet og efterspørgslen, hvad folk vil købe og sælge deres aktier for. Interessen for et selskab kan blive så stor, at den generelle investor ikke har råd til at købe dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan selskabet vælge at udføre et aktiesplit. Det betyder at hver aktie bliver omstruktureret til flere aktier. For eksempel er <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://investor.apple.com/faq/default.aspx" target="_blank" class="rank-math-link">Apple igang med at udføre et 4:1 aktiesplit</a>, hvilket betyder at hvis du ejer 1 aktie nu, så får du tildelt yderligere 3 aktier. Du vil altså ende med at have 4 aktier, for hver aktie du allerede ejer allerede.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Record Date</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er en smule indviklet, men "record date" er dagen hvor selskabet opgøre hvem der har retten til at modtage de nye aktier og udsteder dem. Det er dog ikke nu de nye aktier træder i kræft, så hvis du sælger aktien efter record date, så sælger du også retten til at modtage de nye udstedte aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Man kan godt sige at det er her aktierne øremærkes til at modtage de nye aktier, så virksomheden (f.eks Tesla) kan holde øje med, hvem der har retten til at modtage de nye aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Split Date</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når markedet lukker på "Split Date", så opgøres det hvem der har rettighederne til at modtage de nye udstede aktier. Det er altså her de gøres effektive og træder i kraft. Det er altså her selskabet (f.eks Apple) sender de nye aktier ud til dem som ejer aktien og har retten til de nye udstede aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er derfor vigtigt at købe aktierne før markedet lukker på Split Date, hvis du vil tage del i det aktuelle split.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Ex Date</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ligesom med udbytter så markere "Ex Date" (eller X-dagen) hvornår den nye kurs træder i kræft. Ved udbytter er det her kursen falder tilsvarende udbyttet, men ved aktiesplit er det her aktiens kurs fordeles ud på de nye aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvorfor deler man aktierne op i flere?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Apple har i skrivende stund en aktiekurs på godt 460 USD (~2.893 DKK) og Tesla er på godt 1.650 USD (~10.376 DKK). Det er de færreste som har råd til at købe mere end et par Apple aktier, eller bare en enkelt Tesla aktie. Det er specielt dyrt, hvis man gerne vil opnå Dollar Cost Average effekten, hvor man opkøber flere aktier løbende. Lad os tage et kig på aktiesplittet:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong>Apple 4:1</strong> &gt; 460/4= 115 USD &gt; ~723 DKK per aktie</li><li><strong>Tesla 5:1</strong> &gt; 1.650/5= 330 USD &gt; ~2.075 DKK per aktie</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er flere som har råd til aktierne efter aktiesplittet, og derved kan efterspørgslen stige markant. Det kan medføre at aktierne handles hurtigere, så det både er nemmere at købe og sælge aktierne. Der er oftest en relation imellem hvor nemt det er at omsætte en aktie, og hvor risikovillige folk er omkring at investere.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis volumen bliver stor nok, så kan det også invitere Day Traders, som <a href="https://finansteori.dk/borshandel/day-trader-invester-daglige-markedet" class="rank-math-link">handler store mængder aktier for korte tidsperioder</a>. Det kan frembringe endnu større handels volume, og måske gøre aktien mere volatil (have større kursændringer).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår skal man opkøbe eller sælge?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er meget spekulation omkring aktiesplit, om hvornår man skal købe eller sælge aktien. Hvis du tror at efterspørgslen bliver så høj, at aktien stiger i pris, så kan det være en fordel at købe aktien før splittet. Tror du omvendt at aktien vil falde i pris, fordi folk sælger en del af deres beholdning, så giver det mening at vente.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a href="https://finansteori.dk/borshandel/udbytteinvestering-aktier-fonde-etf" class="rank-math-link">Hvis du investere imod udbytter</a>, så skal du være opmærksom på 2 ting.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><li>Udbytteprocenten kommer til at stige, fordi den er historisk visende. Du kommer ikke til at få større udbytte, fordi den skal fordeles ud på alle aktier. </li><li>Udbyttet per aktie kommer til at falde tilsvarende, så hvis du ejer 1 aktie før, opnår du samme udbytte som 4 aktier efter.</li></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kort sagt, hvis 1 Apple aktie udbetaler 5 DKK per aktie før splittet, så vil du efterfølgende modtage 1,25 DKK per aktie, hvis selskabet udbetaler samme udbytte. Selskabet annoncere ikke udbytte imod aktien, men som en procentdel af deres overskud, som efterfølgende fordeles ud på alle aktierne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har tænkt dig at købe et antal aktier, som går op i fordelingen, så giver det ikke meget mening at vente til efterfølgende. Du får ikke mere ud af at købe 4 aktier til 250 kroner, end 1 aktie til 1.000 kroner. Hvis du derimod gerne vil købe 2.5 aktier før splittet, altså 6 aktier efter splittet. Så kan det give mening at vente, så du ikke skal betale kurtagen over 2 aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvorfor bruger man ikke bare fraktionelle aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nogle platforme giver dig muligheden for at købe en fraktionelle aktier, altså brøkdele af en aktie. Hvis du ikke har råd til at betale 1.000 kroner for en aktie, så giver platformen dig muligheden for at købe 10% for 100 kroner istedet for. Det vil sige at platformen køber aktien til 1.000 kroner og derefter giver dig et syntetisk værdipapir, som svare til 10% af en aktie.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis aktien stiger til 1.500 kroner, så stiger dit syntetiske papir til 150 kroner. Hvis du nu køber for yderligere 100 kroner, så køber du kun 6.667%. Dit syntetiske ejerskab udgøre altså 16.667% af en aktie nu. Når du opnår 100%, så omdannes dit syntetiske produkt til en aktuel aktie.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du nu ejer 25% af en Apple aktie før splittet, så vil du efterfølgende eje 25% af 4 aktier, eller 100% af 1 aktie. Det giver platformen muligheden for at omdanne din syntetiske aktie til en aktuel aktie og derefter frasælge resterende 3 aktier. På den måde kan platformen minimere sin risiko imod deres del af en aktie. Det har altså ikke nogen større effekt for dig, men kan gøre en kæmpe forskel for investerings platformene.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><span class="has-inline-color has-vivid-cyan-blue-color"><strong>Reklame:</strong></span> Er du interesseret i at købe fraktionelle aktier? Så kan du oprette en konto hos Lunar. Her får du muligheden for at købe fraktionelle aktier helt ned til 1 krone. Du skal dog være opmærksom på, at der er en handels kurtage på minimum 19 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:html -->\r\n<a href="https://track.adtraction.com/t/t?a=1521137548&amp;as=1503747543&amp;t=2&amp;tk=1" target="_blank" rel="nofollow referrer noopener noreferrer"><img src="https://track.adtraction.com/t/t?a=1521137548&amp;as=1503747543&amp;t=1&amp;tk=1&amp;i=1" style="display:block;margin:1rem 0;padding:0;border:0;max-width:100%" alt="Lunar Metal Kort"></a>\r\n<!-- /wp:html -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1845'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-08-18 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-08-18 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:33:56'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:33:56'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'aktiesplit-udvander-ejerskab-pris'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '87'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktiesplit'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1865'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: '15 udbytteaktier du kan købe idag (Inspiration)',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/15-udbytteaktier-du-kan-kobe-idag',
					pubDate: 'Tue, 01 Sep 2020 15:00:54 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2040'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Uanset hvilke investerings strategi du følger, er der altid en fordel ved at inkludere udbytteaktier i sin portefølje. Hvis du følger lagerprincippet, kan det være med til at udligne nogle af dine skatter. Hvis du investere gennem en aktiesparekonto, giver det dig muligheden for at gro over loftet på 100.000 kroner, som kun gælder for indskud.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du mangler en introduktion til udbytteinvestering, så <a href="https://finansteori.dk/borshandel/udbytteinvestering-aktier-fonde-etf" class="rank-math-link">bliv klogere på udbytteinvestering her!</a> Jeg kigger løbende på selskaber, som betaler udbytte, og udformer en personlig "Udbytte liste". Du får ikke adgang til hele listen, men her får du du 15 mulige udbytteaktier, som du kan overveje at indføre i din portefølje idag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>15 Udbytteaktier der fortsatte i 2020</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>* Vær opmærksom på</strong> at nogle af selskaberne betaler lavere udbytte under Covid-19, men de er ikke stoppet. Der er derfor potentiale, men ingen garantier for, at de stiger igen over det kommende år. Jeg kan ikke garantere at disse selskaber fortsat udbetaler penge i de angivne frekvenser eller i det heletaget. Undersøg selskaberne selv og afgøre om de er en god investering for dig og din strategi!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><thead><tr><th>Markedet</th><th>Ticker</th><th>Navn</th><th>Seneste udbytte</th><th>Frekvens</th></tr></thead><tbody><tr><td>NASDAQ</td><td>AGNC</td><td>AGNC Investment Corp</td><td>USD 0,12</td><td>Måned</td></tr><tr><td>TSE</td><td>AD</td><td>Alaris Royalty Corp</td><td>CAD 0,29</td><td>Kvartal</td></tr><tr><td>NYSE</td><td>ARR</td><td>ARMOUR Residential REIT Inc</td><td>USD 0,10</td><td>Måned</td></tr><tr><td>NASDAQ</td><td>BPYU</td><td>Brookfield Property REIT Inc</td><td>USD 0,3325</td><td>Måned</td></tr><tr><td>TSE</td><td>DIV</td><td>Diversified Royalty Corp</td><td>CAD 0,01667</td><td>Måned</td></tr><tr><td>TSE</td><td>FRU</td><td>Freehold Royalties Ltd</td><td>CAD 0,015</td><td>Måned</td></tr><tr><td>NASDAQ</td><td>GLAD</td><td>Gladstone Capital Corp</td><td>USD 0,065</td><td>Måned</td></tr><tr><td>TSE</td><td>NWH.UN</td><td>NorthWest Healthcare Properties REIT</td><td>CAD 0,06667</td><td>Måned</td></tr><tr><td>NYSE</td><td>O</td><td>Realty Income Corp</td><td>USD 0,2335</td><td>Måned</td></tr><tr><td>NYSE</td><td>WSR</td><td>Whitestone REIT</td><td>USD 0,035</td><td>Måned</td></tr><tr><td>NYSE</td><td>TOT</td><td>Total SE</td><td>USD 0,775075</td><td>Kvartal</td></tr><tr><td>*STO</td><td>CIBUS</td><td>Cibus Nordic Real Estate</td><td>SEK 2,268<br><strong>&gt; 0,7216</strong></td><td>Kvartal<br><strong>&gt; Måned</strong></td></tr><tr><td>STO</td><td>3KR</td><td>Tre Kronor Property Investment</td><td>SEK 2,05</td><td>Kvartal</td></tr><tr><td>TSE</td><td>BK</td><td>Canadian Banc Corp</td><td>CAD 0,05342</td><td>Måned</td></tr><tr><td>NYSE</td><td>CRT</td><td>Cross Timbers Royalty Trust</td><td>USD 0,037954</td><td>Måned</td></tr></tbody></table><figcaption>* Virksomheden skiftede fra kvartale til månedlige udbyttebetalinger.</figcaption></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu tænker du sikkert, hvor er de danske virksomheder? Jeg har ikke været heldig at finde solide danske selskaber der betaler månedlige eller kvartal udbytter. De er derfor ikke særlig interessant når man akkumulere sin formue via udbytte geninvestering. Hvis du vil investere i danske udbytter, så kan du kigge på <a href="https://www.nordnet.dk/dk/marked/aktier/udbytteguiden" class="rank-math-link">Nordnets udbytteguide</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Geninvester dine udbytter og opnå renters rente effekt</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du investere i udbytter, så er det en fordel at akkumulere sin formue. Det kan du gøre ved at geninvestere dine udbetaling efter beskatning. Lad os sige at du køber 100 aktier til 7 kroner i stykket, en investering på 700 kroner. Hver aktie udbetaler hver måned 0,37 kroner, svarende til ~0,27 efter 27% aktieskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Måneden efter modtager du 100*0,27 kroner, svarende til 27 kroner efter skat. I mellemtiden er aktien steget i værdi og derefter faldet 0,37 kroner per aktie på ex dagen. Lad os sige at aktien nu er 8,2 kroner værd. Du kan altså købe 3 aktier mere, og har 3 kroner i overskud.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Måneden efter modtager du 103*0,27 kroner, svarende til 27.81 kroner efter skat. I mellemtiden har kursen ændret sig, men er efter ex dagen 7,70 kroner værd. Du har 27,81 kroner + de 3 kroner fra sidste måned. For de 30,81 kroner kan du nu købe 4 aktier mere. På den måde kan du i løbet af året udvikle (akkumulere) din portefølje, så længe selskabet udbetaler en stabil eller stigende udbytte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"id":635,"sizeSlug":"large"} -->\r\n<figure class="wp-block-image size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/05/healthy-dividend-growth-stock.png" alt="Sund udbytteaktie med vækst" class="wp-image-635"/></figure>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan forøge din akkumulation <a href="https://finansteori.dk/borshandel/aktiesparekonto-17-pct-skat" class="rank-math-link">ved at investere gennem en aktiesparekonto</a>, hvor du lagerbeskattes årlig og ikke direkte på udbetalingen. Det giver dig muligheden for at geninvestere 100% af dine udbetalinger tilbage i flere aktier. Det kan du fordi at du må dække skatten med eksterne midler, så du kan dække din 17% beskatning fra lønindtægter eller andre steder, som ikke tages fra dine investeringer direkte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Få mere ud af dine investeringer med lavere kurtager og omkostninger</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Undersøg hvilke selskaber du gerne vil købe dig ind i, så du kan undersøge de forskellige platformers omkostninger. På nuværende tidspunkt vil du få mest ud af en aktiesparekonto. Aktiesparekontoen kan du i skrivende stund ikke oprette ved Nordnet, men der er tale om at de arbejder på kan tilbyde kontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark bruger størstedelen enten Nordnet eller Saxo Bank (SaxoInvestor / SaxoTraderGO) til at investere genne. Jeg har skrevet en dybdegående artikel, hvor jeg sætter de 2 platforme op imod hinanden: <a href="https://finansteori.dk/borshandel/nordnet-vs-saxo-bank" class="rank-math-link">Nordnet vs Saxo Bank - hvilken platform er billigst?</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal dog være opmærksom på, at der er nogle aktier, som ikke kan findes på begge platforme. Derfor anbefaler jeg altid at oprette en investeringskonto ved begge platforme. Så er du dækket ind, hvis du skal investere bredt.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2040'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-09-01 17:00:54'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-09-01 15:00:54'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:34:20'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:34:20'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: '15-udbytteaktier-du-kan-kobe-idag'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '84'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'udbytteaktier'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2044'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '10'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title:
						"Nordnet vs Saxo Bank - Billigste platform at handle Aktier, Fonder og ETF'er i 2020",
					link: 'https://finansteori.dk/borshandel/bors-indsigt/nordnet-vs-saxo-bank',
					pubDate: 'Mon, 05 Oct 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=1199'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Du vil gerne igang med aktieinvestering, men kan ikke helt gennemskue hvor det giver bedst mening. I danmark er det primært Nordnet og Saxo Bank der dækker over de danske investorer, som også indberetter handlerne til skat. Du kan også kontakte din private bank, men der betaler du oftest højere kurtager og dertil depot gebyr.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong><em>Denne artikel er opdateret til Saxo Bank\'s nye minimumkurtager der kommer 2. november 2020.</em></strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Denne artikel er inspireret af, men er ikke relateret til, følgende video:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=QflZ9-Gw7u0","type":"video","providerNameSlug":"youtube","align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\r\n<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\r\nhttps://www.youtube.com/watch?v=QflZ9-Gw7u0\r\n</div><figcaption>Nordnet vs Saxoinvestor / Saxo Bank (Sammenlign priser) | Hvor er det billigst at handle aktier? -- af <a href="https://www.youtube.com/channel/UClCQ5PBTY4ecc6PU5y5ysLA?sub_confirmation=1" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Økonomichefen på YouTube</a></figcaption></figure>\r\n<!-- /wp:core-embed/youtube -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er Nordnet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://www.nordnet.dk/dk/tjenester/kontotyper" target="_blank">Nordnet er en svensk internet bank</a>, som har fokus på de europæiske og amerikanske markeder. De giver dig adgang til en detaljeret oversigt over aktier, investeringsforeninger og diverse instrumenter. Målet er at give private adgang til professionelle værktøjer, så de kan pleje deres formue efter egen vilje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De er også udgiver af både blog og podcast, som kan være interessante at følge som investor. Her får du et indblik i markedet lige nu, hvor fra du kan danne nogle indtryk for en potentiel fremtid. Det er ikke engang nødvendigt at have en bruger, for at få adgang til hverken blog eller podcast.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er Saxo Bank?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link rank-math-link" href="https://www.home.saxo/platforms/traders" target="_blank">Saxo Bank er en dansk investeringsbank</a>, som har fokus på at udbyde og tilbyde investeringsprogrammer til alle type investorer. Deres fokus ligger på at give et overblik til alle fra hobby investors til day traders. De er tilgængelig via mobil, browser og dertil special lavede programmer til folk med flere skærme. Kunder af Saxo Bank kan handle via SaxoInvestor, SaxoTraderGo og SaxoTraderPro.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at være kunde og bruger af deres platforme, får du adgang til detaljerede analyser og anbefalinger fra professionelle investorer. Du får et indtryk af om den generelle holdning er at købe, holde eller sælge. Dertil får du temaer, som giver dig simple grupperinger, som du kan investerer ud fra. Det kan for eksempel være temaer som "sikkerhed", "elbiler", eller "robot teknologi".</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Nordnet\'s månedsopsparing</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nordnet synes at loftet for den danske aktiesparekonto er for lav. De er derfor ikke interesseret i at udbyde denne kontoform. I sverige har det et ligende tiltage, som hedder Investeringsparkonto, hvor der ikke er et loft. Dertil er skatten også lavere ved den svenske udgave.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Derimod har de udgivet en gratis måneds-opsparing, hvor du hver måned investerer et selvvalgt beløb i en række investeringsforeninger eller ETF\'er. Her er det vigtigt at du overføre penge til depotet, som pengene skal trækkes fra, så de kan blive investeret. Med gratis menes der kurtagefrit, du slipper altså ikke for at betale vekslings gebyr, hvis du investerer i udlandske foreninger eller fonde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det vil sige at dine faste månedlige investeringer kun koster 0,50% i valuta veksling, og ikke 0,10% over 29 kroner per køb. Hvis du har en måneds-opsparing på mindstekravet af 500 kroner, så bliver 497,50 af dem brugt på investeringsmålet. Havde du skulle betale kurtage, ville du kun have brugt 471,14 kroner. Altså 29 kroner mindre.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Aktiesparekonto ved Saxo Bank</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiesparekontoen er en dansk udgave af investeringsparkontoen fra sverige. Formålet er at få flere til at investerer ved at få en unik lav beskatning. For at kompenserer for den lave beskatning, så bliver man beskattet årligt efter lagerskats princippet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det betyder at du betaler skat af åres akkumulerede afkast, uanset om du har solgt aktierne. Derimod betaler du også først skat af udbytter ved årsopgørelse, frem for ved udbetaling. Aktiesparekontoens lave beskatning ligger på 17%. I 2020 må du højest indskyde 100.000 kroner på din aktiesparekonto.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Saxo Bank giver dig muligheden for at oprette en aktiesparekonto uden oprettelsesgebyr eller depot omkostninger. Når kontoen er oprettet, kan du nemt komme igang med at investere på både SaxoInvestor og SaxoTraderGo.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil læse mere om aktiesparekontoen, anbefaler jeg artiklen der går mere i dybden: <a class="rank-math-link rank-math-link" href="https://finansteori.dk/borshandel/start-med-en-aktiesparekonto">Start med en aktiesparekonto (2020)</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Månedsopsparing vs aktiesparekonto vs normal investeringskonto</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er ikke et krav at du skal bruge enten månedsopsparingen ved Nordnet eller en aktiesparekonto ved Saxo Bank. Hvis du bare vil investerer normalt, så følg med længere nede, hvor vi kigger på omkostninger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et indblik i hvor du får mest ud af 500 kroner om måneden, har jeg lavet et lille regnestykke. I eksemplet har vi oprettet vores egen danske investeringsforening, som tager 1% ÅOP i administrationsgebyr og forvaltning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hver måned investerer vi 500 kroner igennem (M) Månedsopsparingen, (A) Aktiesparekontoen, (NI) Nordnet Investeringskonto, og ikke mindst (SI) Saxo Bank Investeringskonto. Dertil opgøre vi skatten efter 12 måneder, som hvis vi betalte lagerskat eller solgte porteføljen. På den måde får du et indblik i hvor du får mest ud af pengene på den lange bane.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong>M</strong>: Månedsopsparing ved Nordnet</li><li><strong>NI</strong>: Investeringskonto ved Nordnet</li><li><strong>A</strong>: Aktiesparekonto ved Saxobank</li><li><strong>SI</strong>: Investeringskonto ved Saxobank</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td><strong>500kr/mdr</strong></td><td class="has-text-align-right" data-align="right"><strong>M</strong> (0%)</td><td class="has-text-align-right" data-align="right"><strong>A</strong> (0,1%&gt;14)</td><td class="has-text-align-right" data-align="right"><strong>NI</strong> (0,1%&gt;29)</td><td class="has-text-align-right" data-align="right"><strong>SI</strong> (0,1%&gt;14)</td></tr><tr><td>Januar</td><td class="has-text-align-right" data-align="right">500,00 Kr</td><td class="has-text-align-right" data-align="right">486,00 Kr</td><td class="has-text-align-right" data-align="right">471,00 Kr</td><td class="has-text-align-right" data-align="right">486,00 Kr</td></tr><tr><td>Februar</td><td class="has-text-align-right" data-align="right">1.000,00 Kr</td><td class="has-text-align-right" data-align="right">972,00 Kr</td><td class="has-text-align-right" data-align="right">942,00 Kr</td><td class="has-text-align-right" data-align="right">972,00 Kr</td></tr><tr><td>Marts</td><td class="has-text-align-right" data-align="right">1.500,00 Kr</td><td class="has-text-align-right" data-align="right">1.458,00 Kr</td><td class="has-text-align-right" data-align="right">1.413,00 Kr</td><td class="has-text-align-right" data-align="right">1.458,00 Kr</td></tr><tr><td>April</td><td class="has-text-align-right" data-align="right">2.000,00 Kr</td><td class="has-text-align-right" data-align="right">1.944,00 Kr</td><td class="has-text-align-right" data-align="right">1.884,00 Kr</td><td class="has-text-align-right" data-align="right"> 1.944,00 Kr</td></tr><tr><td>Maj</td><td class="has-text-align-right" data-align="right">2.500,00 Kr</td><td class="has-text-align-right" data-align="right">2.430,00 Kr</td><td class="has-text-align-right" data-align="right">2.355,00 Kr</td><td class="has-text-align-right" data-align="right">2.430,00 Kr</td></tr><tr><td>Juni</td><td class="has-text-align-right" data-align="right">3.000,00 Kr</td><td class="has-text-align-right" data-align="right">2.916,00 Kr</td><td class="has-text-align-right" data-align="right">2.826,00 Kr</td><td class="has-text-align-right" data-align="right">2.916,00 Kr</td></tr><tr><td>Juli</td><td class="has-text-align-right" data-align="right">3.500,00 Kr</td><td class="has-text-align-right" data-align="right">3.402,00 Kr</td><td class="has-text-align-right" data-align="right">3.297,00 Kr</td><td class="has-text-align-right" data-align="right">3.402,00 Kr</td></tr><tr><td>August</td><td class="has-text-align-right" data-align="right">4.000,00 Kr</td><td class="has-text-align-right" data-align="right">3.888,00 Kr</td><td class="has-text-align-right" data-align="right">3.768,00 Kr</td><td class="has-text-align-right" data-align="right">3.888,00 Kr</td></tr><tr><td>September</td><td class="has-text-align-right" data-align="right">4.500,00 Kr</td><td class="has-text-align-right" data-align="right">4.374,00 Kr</td><td class="has-text-align-right" data-align="right">4.239,00 Kr</td><td class="has-text-align-right" data-align="right">4.374,00 Kr</td></tr><tr><td>Oktober</td><td class="has-text-align-right" data-align="right">5.000,00 Kr</td><td class="has-text-align-right" data-align="right">4.860,00 Kr</td><td class="has-text-align-right" data-align="right">4.710,00 Kr</td><td class="has-text-align-right" data-align="right">4.860,00 Kr</td></tr><tr><td>November</td><td class="has-text-align-right" data-align="right">5.500,00 Kr</td><td class="has-text-align-right" data-align="right">5.346,00 Kr</td><td class="has-text-align-right" data-align="right">5.181,00 Kr</td><td class="has-text-align-right" data-align="right">5.346,00 Kr</td></tr><tr><td><strong>December</strong></td><td class="has-text-align-right" data-align="right"><strong>6.000,00 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong>5.832,00 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong>5.652,00 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong><strong>5.832,00</strong></strong><strong>Kr</strong></td></tr><tr><td><strong>Syntetisk +10%</strong></td><td class="has-text-align-right" data-align="right"><strong>6.600,00 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong>6.415,20 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong>6.217,20 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong><strong>6.415,20</strong></strong><strong>Kr</strong></td></tr><tr><td>Adm. Gebyr<br>1% ÅOP</td><td class="has-text-align-right" data-align="right">-66,00 Kr</td><td class="has-text-align-right" data-align="right">-64,15 Kr</td><td class="has-text-align-right" data-align="right">-62,17 Kr</td><td class="has-text-align-right" data-align="right">-64,15 Kr</td></tr><tr><td><em>Subtotal</em></td><td class="has-text-align-right" data-align="right"><em>6.534,00 Kr</em></td><td class="has-text-align-right" data-align="right"><em>6.351,05 Kr</em></td><td class="has-text-align-right" data-align="right"><em>6.155,03 Kr</em></td><td class="has-text-align-right" data-align="right"><em>6.351,05 Kr</em></td></tr><tr><td>Salgskurtage</td><td class="has-text-align-right" data-align="right"><em>(0,1%&gt;29)</em><br>-29,00 Kr</td><td class="has-text-align-right" data-align="right"><em>(0,1%&gt;14)</em><br>-14,00 Kr</td><td class="has-text-align-right" data-align="right"><em>(0,1%&gt;29)</em><br>-29,00 Kr</td><td class="has-text-align-right" data-align="right"><em>(0,1%&gt;14)</em><br>-14,00 Kr</td></tr><tr><td><em>Subtotal</em></td><td class="has-text-align-right" data-align="right"><em>6.505,00 Kr</em></td><td class="has-text-align-right" data-align="right"><em>6.337,05 Kr</em></td><td class="has-text-align-right" data-align="right"><em>6.126,03 Kr</em></td><td class="has-text-align-right" data-align="right"><em><em>6.337,05</em> Kr</em></td></tr><tr><td><span class="has-inline-color has-vivid-cyan-blue-color"><strong>Fortjeneste</strong></span></td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-vivid-cyan-blue-color"><strong>505,00 Kr</strong></span></td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-vivid-cyan-blue-color"><strong>505,05 Kr</strong></span></td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-vivid-cyan-blue-color"><strong>474,03 Kr</strong></span></td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-vivid-cyan-blue-color"><strong><strong>505,05</strong> Kr</strong></span></td></tr><tr><td>Beskatning</td><td class="has-text-align-right" data-align="right"><em>(27% Skat)</em><br>-136,35 Kr</td><td class="has-text-align-right" data-align="right"><em>(17% Skat)</em><br>-85,65 Kr</td><td class="has-text-align-right" data-align="right"><em>(27% Skat)</em><br>-127,99 Kr</td><td class="has-text-align-right" data-align="right"><em>(27% Skat)</em><br>-136,36 Kr</td></tr><tr><td><strong>Totale Afkast</strong></td><td class="has-text-align-right" data-align="right"><strong>368,65 Kr</strong></td><td class="has-text-align-right" data-align="right"><span class="has-inline-color has-vivid-green-cyan-color"><strong>419.40 Kr</strong></span></td><td class="has-text-align-right" data-align="right"><strong>346,04 Kr</strong></td><td class="has-text-align-right" data-align="right"><strong><span class="has-inline-color has-luminous-vivid-amber-color">368.69 Kr</span></strong></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Overstående har indbygget et syntetisk positivt afkast på 10%, da alle 4 eksempler er baseret ud fra at være i samme investering med samme vilkår. Oversigten giver derfor et indblik i indbetalingernes værdi efter kurtage, administrationsgebyr og beskatning.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":2335,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/06/Nordnet-vs-Saxo-Bank-Maanedsopsparing-Aktiesparekonto.png" alt="Nordnet vs Saxo Bank - Månedsopsparing - Aktiesparekonto" class="wp-image-2335"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi har muligheden for at investerer i præcise samme vilkår, så ville vi altså få mere ud af en aktiesparekonto, selv om vi betaler en kurtage per handel. Det er derfor en fordel også at kigge på beskatningen, når du afgøre hvordan du vil investerer dine penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her i eksemplet kom vi dog aldrig over 100.000 kroner, så vi ramte aldrig loftet af aktiesparekontoen. Hvis du regner med at investerer mere end loftet, så kan du overveje at fylde aktiesparekontoen ud før du skifter til enten et af de andre investeringstyper.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Overstående eksempel er givet i basal dansk handel. Det er vigtigt at kigge på kurtage mellem forskellige børser og dertil gebyr ved valuta veksling. Du bør derfor holde de 2 platforme og investerings muligheder op imod hinanden inden hver handel, da man sagtens kan handle via begge platforme.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Generel aktieinvestering</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er sjældent en fast kurtage som dækker over alle børser, da omkostningerne ved at have et depot kan varierer. I overstående eksempel kiggede vi kun på danske kurtager i en fiktiv dansk investeringsforening. Målet var at få en pointe igennem med beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her tager vi et kig på generel aktieinvestering, ved brug af normale investerings kontoer. Hvis du vil vide mere om aktiesparekontoen, så har den samme forhold, hvis man ser bort fra lagerbeskatningen og den lavere beskatning på 17%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Hvem har de billigste kurtager, Nordnet eller Saxo Bank?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis det er muligt at have private selskaber, så er der oftest også en børs, hvor selskabet kan blive noteret til offentligheden. Her er der en automatisk fordel til Saxo Bank, da de har adgang til flere børsmarkeder end Nordnet. Derfor forholder vi os til de markeder, hvor de kan konkurrer, og hvor den generelle person ville investerer sine penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td><strong>Markedet</strong></td><td><strong>Nordnet Kurtager</strong></td><td><strong>Saxo Bank Kurtager</strong></td></tr><tr><td><strong>Danmark</strong><br>OMX</td><td>0,10%<br><em>min. 29 DKK</em></td><td>0,10%<span class="has-inline-color has-vivid-green-cyan-color"><br>min. 14 DKK</span></td></tr><tr><td><strong>Sverige</strong><br>OMX</td><td>0,10%<br><em>min. 59 SEK</em></td><td>0,10%<span class="has-inline-color has-vivid-green-cyan-color"><br>min. 20 SEK</span></td></tr><tr><td><strong>Norge</strong><br>Oslo</td><td>0,10%<br><em>min. 59 NOK</em></td><td>0,10%<span class="has-inline-color has-vivid-green-cyan-color"><br>min. 20 NOK</span></td></tr><tr><td><strong>Finland</strong><br>OMX</td><td>0,10%<br><em>min. 8 EUR</em></td><td>0,10%<span class="has-inline-color has-vivid-green-cyan-color"><br>min. 2 EUR</span></td></tr><tr><td><strong>Tyskland</strong><br>Xetra</td><td>0,10%<br><em>min. 12 EUR</em></td><td>0,10%<span class="has-inline-color has-vivid-green-cyan-color"><br>min. 2 EUR</span></td></tr><tr><td><strong>London (UK)</strong><br>LSE</td><td>0,30 %<br><em>min. 25 GBP</em></td><td><span class="has-inline-color has-vivid-green-cyan-color">0,10%<br>min. 2 GBP</span></td></tr><tr><td><strong>USA</strong><br>NASDAQ &amp; NYSE</td><td>0.15 %<br><em>min. 13 USD</em></td><td>$0,20/Aktie kurs under $10<br><span class="has-inline-color has-vivid-green-cyan-color">0,10% kurs over $10<br>min. 3 USD</span></td></tr><tr><td><strong>Canada</strong><br>Toronto (TSE)</td><td>0,15 %<span class="has-inline-color has-vivid-green-cyan-color"><br><em>min. 19 CAD</em></span></td><td><span class="has-inline-color has-vivid-green-cyan-color">0.03 CAD/aktie</span><br><em>min. 25 CAD</em></td></tr></tbody></table><figcaption>Nordnet: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://www.nordnet.dk/dk/kundeservice/prisliste/priser-aktiedepot" target="_blank">https://www.nordnet.dk/dk/kundeservice/prisliste/priser-aktiedepot</a><br>Saxo Bank: <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link" href="https://www.home.saxo/da-dk/rates-and-conditions/stocks/commissions" target="_blank">https://www.home.saxo/da-dk/rates-and-conditions/stocks/commissions</a></figcaption></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Der er 2 sektioner som er vigtige at kigge på.</strong> Hvis du kigger på USA og Canada, så opdager du at Saxo Bank tager et fast beløb per aktie. Dog er det faste beløb af amerikanske aktier kun, hvis aktiekursen er under $10. Det giver os en interessant problemstilling, når vi skal beregne hvilken kurtage er billigst.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>USA : NASDAQ / NYSE</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved amerikanske aktier betaler vi 0,20 USD per aktie, hvor kursen er under 10 USD per aktie. Ved Nordnet betaler vi 0,15% eller minimum 13 USD. Det vil sige at vi har 2 scenarier at opstille de 2 kurtager imod hinanden på:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><li>Hvor mange aktier skal vi købe hos Saxo Bank for at opnå 13 USD minimum ved Nordnet? <em>13/0,2=</em><strong>65 aktier.</strong></li><li>Hvornår overgår 0,20 USD de 0,15% af kursen? <em>0,2/0,0015=</em><strong>133.34 USD per aktie</strong> er langt over 10 USD, og er derfor <span class="has-inline-color has-vivid-red-color">ikke relevant</span>.</li></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De 2 overstående opsætninger fortæller os, at hvis du generelt handler under 65 amerikanske aktier per handel, at Saxo Bank giver mest mening.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Canada : TSE</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du vil handle canadiske aktier, så kan vi igen forholde os til de 2 punkter. Ved Nordnet betaler vi 0,15% eller minimum 19 CAD, hvor imod Saxo Bank tager 0,03 CAD per aktie eller minimum 25 CAD. I modsætning til de amerikanske aktier, så er der ikke nogen overgang til procentvis kurtage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><li>Hvor mange aktier skal vi købe hos Saxo Bank for at opnå 19 CAD ved Nordnet? <em>19/0,03=</em><strong>633 aktier.</strong></li><li>Hvornår overgår 0,03 CAD de 0,15% af kursen? <em>0,03/0,0015=</em><strong>20 CAD per aktie.</strong></li><li>Hvor mange aktier skal vi købe ved Saxo Bank for at opnå de 25 CAD minimum? <em>25/0,03=</em><strong>833 aktier.</strong></li></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her lærer vi 3 ting, som kan være afgørende hvilken platform er bedst for os at investerer gennem. Hvis vi køber under 633 aktier, så kommer vi som minimum af med 19 CAD i kurtage. Handler vi mellem 633 og 833 aktier, til en pris under 20 CAD er Nordnet bedre, er prisen over 20 CAD vinder Saxo Bank. Efter 833 aktier får vi mest ud af Saxo Bank. <strong>Her er det vigtigt man husker at det skal være per handel.</strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Handler du under 633 aktier per handel, bør du overveje hvor mange aktier du handler, til hvilken pris, så du ikke ender med at spilde en masse penge på kurtage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad koster det at investere i udlandske aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har planer om at købe aktier i udlandske selskaber, skal du først veksle dine danske penge til deres valuta. Her har du 2 valgmuligheder. En normal konto, hvor alting opgøres i DKK. Det vil sige køb, salg og udbytter automatisk omregnes til/fra danske kroner, til et fast spread-gebyr.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Spread dækker over den totale forskel på køb og salgskurs. Hvis spread er 0,50%, vil du betale 0,25% mere ved køb eller modtage 0,25% mindre ved salg. Hvis DKK/SEK kursen er 0,75, vil det sige at 100 DKK er 75 SEK værd. Vil du betale 100,25 DKK for 75 SEK, eller modtage 99,75 DKK den modsatte vej.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dit andet valg er en valutakonto, hvor du selv veksler pengene inden du køber aktier. Hvis du har planer om at købe mange aktier i USA, kan det være en fordel at have en USD-konto, så du ikke betaler veksling af salg og udbytter. Du betaler altså kun veksling når du selv overføre penge til eller fra valutakontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Autoveksling</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du ikke har en valuta-konto eller handler i anden valuta end kontoen indeholder, vil systemet automatisk veksle ved køb, salg og udbytte. Dette kalder man autoveksling, fordi det sker fra systemets side af.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nordnet og Saxo Bank har begge en spread på 0,50% ved autoveksling, hvilket er grundlaget til eksemplet ovenfor. Der er det vigtigt at kigge på at venstre side køber højre, eller højre sælger til venstre.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Valutakonto</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at åbne en valuta-konto så afgøre du valutaen på forhånd. Det sparer dig for en masse veksling når du handler i bestemte markeder og modtager udbytter fra dem. Hvis du foretager mange handler i en bestemt valuta, så bør man altid overveje en valuta-konto.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her har begge valgt at give dig en lavere spread, så det koster dig mindre at veksle imellem valutaer, hvis du gør det på forhånd. Hos Nordnet har man nedsat spread til 0,15%, altså 0,30% hvis man tager hver vej sammenlagt. Det giver dig en fordelagtig veksling i forhold til autoveksling.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Nordnet opdaterer valuta kursen klokken 11:30, 17:00 og 22:00. Har ikke kunne finde tidspunkter for Saxo Bank.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Afgørelsen: Nordnet eller Saxo Bank?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi tager et generelt overblik på overstående information, så giver det god mening at investerer gennem Saxo Bank, både normalt og via aktiesparekonto. Hvis du ikke har planer om at lave flere eller større investeringer i Canada, så har Saxo Bank de bedste kurtager og samme vekslings forhold.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis jeg skulle give dem en <strong>1-5 rating</strong>, ville det være som følgende:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><thead><tr><th class="has-text-align-left" data-align="left">Nordnet</th><th class="has-text-align-left" data-align="left">Saxo Bank</th></tr></thead><tbody><tr><td class="has-text-align-left" data-align="left">⭐⭐⭐</td><td class="has-text-align-left" data-align="left">⭐⭐⭐⭐</td></tr><tr><td class="has-text-align-left" data-align="left">Nordnet har et godt design, med gode funktioner. Det er nemt at undersøge aktier, udbyttehistorik og nyheder. Desværre er deres Kurtager ret høje, hvis man ikke udføre handler over 30.000 kroner.</td><td class="has-text-align-left" data-align="left">Saxo Bank har gode muligheder for at investerer, da man både kan anvende app, browser og program. Man får anbefalinger fra professionelle investorer og indsigt i investeringsmålet. Kurtagerne er skruet i bund, hvis man ser bort fra Canada. Man kan dog ikke skabe sig et ordentligt overblik over udbytter. Dertil er der investeringsmål som mangler i forhold til f.eks Nordnet.</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En ting der kan gøre Nordnet attraktiv, er deres nemmere adgang til nordiske IPO\'s. Dertil er der investeringsmål, jeg har fundet via Nordnet, men ikke Saxo Bank. Vil derfor anbefale at lave en investerings plan specifikke investeringsmål og beløb.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Undersøg de 2 platforme på forhånd og opgør hvad det cirka vil koste dig. Hvis det er muligt, så start med en aktiesparekonto, for at opnå den lave beskatning i starten.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '1199'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-10-05 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-05 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:31:09'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:31:09'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'nordnet-vs-saxo-bank'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_3bed3092426cb86daae16ec9044fee93'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="Nordnet vs Saxoinvestor / Saxo Bank (Sammenlign priser) | Hvor er det billigst at handle aktier?" width="800" height="450" src="https://www.youtube.com/embed/QflZ9-Gw7u0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_3bed3092426cb86daae16ec9044fee93'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1601913912'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '95'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Saxo bank,nordnet'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_facebook_title'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '🥊 Bedst i test: Nordnet eller Saxo Bank? 🕵🏽‍♂️'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1219'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering-nordnet-eller-saxo-bank'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'aktieinvestering-nordnet-vs-saxo-bank'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_date'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2020-06-27'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '7'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: "Investering i ETF'er for begyndere 2020",
					link: 'https://finansteori.dk/borshandel/bors-starter/investering-i-etf-for-begyndere-2020',
					pubDate: 'Tue, 08 Sep 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2124'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>ETF er på dansk en børsnoteret lukket investeringsforening. Du kan ikke indskyde eller trække penge ud af en ETF, da man handler investerings-beviserne mellem investorer på børsen, og ikke med fonden selv. Det betyder at fonden er tættere knyttet på sine investeringer, da de kun har intern kapital at arbejde med. Bliv klogere på hvordan du kan integrere ETF\'er i din porteføljer her!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en ETF?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>ETF er en forkortelse for "Exchange-Traded Fund", og svare til en lukket værdipapir fond i danmark. Det betyder at der et et bestemt antal investeringsbeviser, ligesom et selskab har et bestemt antal aktier. Den primære og vigtige forskel, er at aktier giver ejerskab over selskabet, men investeringsbeviser giver ejerskab over den investerede pulje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Normale investeringsforeninger og fonde har åbne puljer, hvilket betyder at du til enhver tid kan forøge puljens størrelse med dine egne penge. Når du investere i dem, så modtager fonden pengene og udsteder et investeringsbevis, som du senere kan indløse imod bevisets værdi ved indløsningen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Med andre ord. Ved åbne fonde smider du penge i puljen, hvor værdien følger puljens værdi. Med lukkede fonde køber og sælger du ejerskabet over en pulje med andre investorer, og ikke med fonden selv. Du kan kun blive ejer af en lukket fond hvis nogen sælger deres investeringsbeviser, og du kan kun realisere dit afkast hvis du kan sælge investeringsbeviset til en ny investor.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvorfor investere man i en ETF?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er populært at investere sine penge i investeringsforeninger og fonder for at opnå en spredning i markedet. Ved at købe sig ind i disse foreninger og fonder, så slipper man for selv at analysere og forvalte porteføljen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man investere sine penge i en aktivt forvaltet fond, så sidder der en række investorer, som aktivt tager stilling til investeringerne. De forsøger på bedste vis at analysere det fremtidige aktiemarkedet, for derefter at investere penge i den sektor eller branche.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En passiv forvaltet fond følger derimod oftest et indeks. Det vil sige at pengene investeres ud fra forudbestemte rammer, i forudbestemte aktier, obligationer, eller andre/alternative investeringsmål.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at købe 1 investeringsbevis i en fond, eller ETF, så kan man opnå en spredning på flere hundrede aktier. Det giver dig en mere stabil investering, da du følger den totale værdi af aktierne. Hvis nu 10 aktiekurser udløber -3, +4, -11, +5, +7, -6, +23, -2, +9, +8, så bevæger din investering sig +34 den dag, hvilket er tallet du ser, og ikke kursændringerne på de mange underlæggende investeringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan investere man i en ETF?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at eje investeringsbeviser i en ETF, så skal du først oprette en investeringskonto. <a href="https://finansteori.dk/borshandel/aktiesparekonto-17-pct-skat" class="rank-math-link">Du må eje godkendte ETF\'er på en aktiesparekonto (ASK)</a>. Det betyder at du kan opnå en fordelagtig lavere lagerbeskatning af dine ETF\'er, hvis du må holde den på din ASK.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har din investeringskonto, som giver dig adgang til børsmarkedet. Så kan du begynde at undersøge hvilke ETF der giver mening for din investering. Når du har fundet dem, så kan du være heldig at de handles ofte, så du nemt kan købe dig ind. Du kan også være mindre heldig, at folk holder fast på deres investeringsbeviser, så du er nød til at give et bud og håbe at nogen går med på den.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a aria-label=" (opens in a new tab)" href="https://www.saxoinvestor.dk/sim/investor-demo/page/etfs" target="_blank" rel="noreferrer noopener" class="rank-math-link">Find ETF ved SaxoInvestor her</a></li><li><a href="https://www.nordnet.dk/dk/marked/etf" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Find ETF ved Nordnet her</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ligesom aktier er ETF\'er handlet på baggrund af udbud og efterspørgsmål. Er folk interesseret i at købe eller sælge den del eller hele deres beholdning? Hvis ja, kan man blive enige om til hvilken pris?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad koster det at eje investeringsbeviser i en ETF?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har fundet og købt dine investeringsbeviser, så skal du huske at puljen forvaltes af en fond eller et investerings-institut. De opkræver nogle gebyr for at håndtere porteføljen, men prisen variere meget ud fra bestemte kriterier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Er puljen aktivt eller passivt forvaltet?</li><li>Er puljen forsikret, f.eks imod valuta-tab?</li><li>Er puljen investeret i flere valutaer (intern valuta-veksling)?</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er ikke alle omkostningerne du får at se, da de er direkte forbundet med investeringerne. Du bliver typisk kun gjort opmærksom på fondens omkostninger, som for eksempel administrations gebyr. Her skal du være opmærksom på fondens basis-valuta, da alle investeringer opgøres i den valuta. Hvis der investeres i flere forskellige lande, har dagens vekslings-kurs direkte indflydelse på værdien af ETF\'en.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:pullquote -->\r\n<figure class="wp-block-pullquote"><blockquote><p>Morningstar analyserede amerikanske fonder og fandt frem til at deres gennemsnitlige årlige omkostninger lå på kun 0,45% i 2019. Det svare til 45 kroner per 10.000 kroner du investere!</p><cite>Morningstar, Inc. (Nasdaq: MORN), a leading provider of independent investment research, today published its annual fund fee study, which evaluates trends in the cost of U.S. open-end mutual funds and exchange-traded funds (ETFs). The study found that across U.S. funds, the asset-weighted average expense ratio dropped to 0.45% in 2019, compared to 0.48% in 2018. This six percent year-over-year decline is the third largest recorded dating back to 1991.<br><a aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link" href="https://newsroom.morningstar.com/newsroom/news-archive/press-release-details/2020/Morningstars-Annual-Fund-Fee-Study-Finds-Investors-Saved-Nearly-6-Billion-in-Fund-Fees-in-2019/default.aspx" target="_blank">Læs analysen her</a></cite></blockquote></figure>\r\n<!-- /wp:pullquote -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan beskattes en ETF?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Fordelen ved at investere i ETF\'er er at man altid er lagerbeskattet. Det betyder at du hvert år bliver beskattet efter investeringens udvikling i markedet. Hvis værdien er steget, så beskattes du af forskellen mellem køb eller sidste opgørelse og hvad værdien er ved opgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give dig et eksempel, sidste år købte du 100 investeringsbeviser til 100 kr.p.stk som var 200 kr værd de 31 december. Du betalte derfor skat af de 100 kroners fortjeneste per aktie. I år køber du yderligere 100 investeringsbeviser midt på året til 220 kr.p.stk. Ved næste opgørelse den 31 december er investeringsbeviserne 285 kr.p.stk værd. Det vil sige de 100 beviser fra sidste har har en stigning fra 200 til 285 og de nye har en stigning fra 220 til 285. Du skal altså beskattes af 100*85 + 100*65 = 15.000 kroner totalt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bliver altså beskattet af den individuelle udvikling per aktie. Hvis du vælger at købe 100 beviser i januar og sælge dem i marts, så bliver de også talt med ved opgørelsen den 31 december.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I starten af Januar vil investerings.platformen typisk opgøre din årlige udvikling, indrapportere beløbet til skat og derefter trække aconto-skat fra den investeringskonto, som ETF\'en ligger på. Du skal derfor sørge for at have eksterne midler til rådighed, så du du kan dække skatten på investeringskontoen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Populære ETF\'er ved Nordnet i 2020</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er mange valgmuligheder på markedet, som følger de samme indekser. For eksempel er der <a aria-label=" (opens in a new tab)" href="https://www.spglobal.com/spdji/en/indices/equity/sp-500/#index-linked-product" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">mere end 100 ETF\'er som er forbundet til S&amp;P 500 indekset</a>. De kan variere i hvordan de har vægtfordelt indekset, hvilken valuta de handles i, eller hvilken børs de handles gennem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her får du de 10 mest populære ETF\'er hos Nordnet fra første kvartal i 2020.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td><strong>ETF</strong></td><td class="has-text-align-right" data-align="right"><strong>Årlige omk.</strong></td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16309430-black-rock-i-shares-core" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Core MSCI World (Acc)</a></td><td class="has-text-align-right" data-align="right">0,20 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16326392-black-rock-i-shares-core" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Core S&amp;P 500 (Dist)</a></td><td class="has-text-align-right" data-align="right">0,10 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16291245-i-shares-core-msci" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Core MSCI EM (Acc)</a></td><td class="has-text-align-right" data-align="right">0,18 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16996723-xact-omxc-25" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">XACT OMXC25</a></td><td class="has-text-align-right" data-align="right">0,20 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16128786-black-rock-i-shares-core" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Core S&amp;P 500 (Acc)</a></td><td class="has-text-align-right" data-align="right">0,10 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16309429-black-rock-i-shares-core" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Core MSCI Europe (Acc)</a></td><td class="has-text-align-right" data-align="right">0,12 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16561306-black-rock-i-shares-global" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Global Clean Energy (Dist)</a></td><td class="has-text-align-right" data-align="right">0,65 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16477176-i-shares-sp-500" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares S&amp;P IT Sector (Acc)</a></td><td class="has-text-align-right" data-align="right">0,15 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16573896-i-shares-edge-msci" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">iShares Edge MSCI World Min Volatility (Acc)</a></td><td class="has-text-align-right" data-align="right">0,30 %</td></tr><tr><td><a href="https://www.nordnet.dk/markedet/etf-lister/16128241-xtrackers-euro-stoxx" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Xtrackers Euro STOXX 50</a></td><td class="has-text-align-right" data-align="right">0,09 %</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:image {"align":"center","id":2201,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/09/nord-investments-etf-1024x536.png" alt="Nord Investments ETF Spredning" class="wp-image-2201"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Alternativt: Invester gennem Nord.Investments</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke selv er interesseret i at udvælge ETF\'er, og har en formue over 30.000 kroner, som du gerne vil investere. Så kan du vælge at investere dine penge gennem Nord.Investments. Her udfylder du en risikoprofil og svare på en række spørgsmål, hvor efter de rådgiver dig til hvordan du udvælger relevante fonder til din portefølje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote -->\r\n<blockquote class="wp-block-quote"><p>NORD.investments er for den langsigtede investor, som forstår vigtigheden af at have lave omkostninger, når man investerer. Vores løsning passer til dig, uanset om du skal i gang med at investere for første gang eller om du har investeret før. Rigtig mange har spørgsmål, inden, under og efter de investerer - derfor tager vi folk i hånden hele vejen.</p><cite><strong>Nikolaj Bomann Mertz</strong><br>Head of Marketing, Nord Investments A/S</cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De har indgået et samarbejdet med Saxo Bank, hvor igennem din portefølje bliver plejet, forsikret og oplyst til skat fra. Så hvad er det helt præcist Nord.Investments gør?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Rådgiver dig til at finde de mest relevante ETF\'er til din portefølje.</li><li>Hjælper dig igang med at investere og at overvåge porteføljen.</li><li>Hjælper dig med at følge markedet, istedet for at konkurrere om at slå markedet.</li><li>Hjælper dig med at investere ud fra dine risikogrupper, ved at vælge ETF\'er der investere efter din strategi.</li><li>Hjælper dig med at analysere markedet, for at sikre at du er spredt ud i de rigtige fonder, ud fra markedets løbende situation.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På den måde undgår du at blive stock picker, hvor du udvælger individuelle aktier til din portefølje. Du behøver heller ikke holde øje med dine investeringer hver dag, da Nord Investments hjælper dig med den del.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:buttons -->\r\n<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"vivid-purple","textColor":"white","className":"is-style-fill"} -->\r\n<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-white-color has-vivid-purple-background-color has-text-color has-background" href="https://www.nord.investments/vi-tilbyder" target="_blank" rel="noreferrer noopener">Blig klogere på Nord.Investments</a></div>\r\n<!-- /wp:button --></div>\r\n<!-- /wp:buttons -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2124'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-09-08 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-09-08 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 17:02:55'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 15:02:55'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'investering-i-etf-for-begyndere-2020'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '91'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '34'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'etf'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2153'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '9'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Nordnet Månedsopsparing vs Aktiesparekonto - Hvor får du mest for pengene?',
					link: 'https://finansteori.dk/borshandel/bors-indsigt/nordnet-manedsopsparing-vs-aktiesparekonto-mest-for-pengene',
					pubDate: 'Mon, 05 Oct 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2215'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Er du i tvivl om du skal skal oprette en Nordnet månedsopsparing eller investere gennem en aktiesparekonto? Er den gratis købskurtage på månedsopsparingen billigere på den lange bane?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Først vil jeg gøre dig opmærksom på at Aktiesparekontoen har et indskudsloft på 100.000 kroner i 2020. Derfor vil den primære fokus i artiklen ligge på de første 100.000 kroners investeringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er Nordnet\'s månedsopsparing?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nordnet har et investerings produkt der kan hjælpe dig med at <a href="https://finansteori.dk/borshandel/investeringsforeninger-fonde-etf-spredning" class="rank-math-link">akkumulere din formue gennem investeringsforeninger, fonder og ETF\'er</a>. Månedsopsparingen giver dig muligheden for automatisk at investere et beløb i en række selv valgte fonder hver måned. Du vælger et loft for hvor meget der må investeres og hvordan pengene skal fordeles på dine valgte fonder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Produktet indeholder ingen købskurtager, så du skal kun fokusere på de årlige omkostninger, salgskurtage og beskatning. Her skal du være opmærksom på om de valgte investeringsforeninger og fonder er aktiebeskattet eller kapitalbeskattet. Om de er beskattet efter lagerprincippet eller realisationsprincippet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er en Aktiesparekonto?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Aktiesparekontoen er en selvstændig depot type, som er isoleret fra andre investerings kontotyper. Du kan kun have 1 aktiesparekonto per person, og du kan kun (i 2020) indskyde op til 100.000 kroner på kontoen. Derudover er kontoen <a href="https://finansteori.dk/borshandel/aktiesparekonto-17-pct-skat" class="rank-math-link">fordelagtigt fast beskattet på kun 17% efter lagerprincippet</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kontoens formål er at få flere danskere til at investere sine penge i markedet, istedet for at have pengene stående på deres bank kontoer. På den måde kommer pengene i omløb og kan hjælpe os med at gro økonomisk.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Realisationsprincippet vs Lagerprincippet</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På et tidspunkt vil du opnå et afkast af dine investeringer, som skal beskattes. Det kan være ved at sælge en del af din portefølje eller ved at modtage udbytter. Her får du en kort opsummering af de 2 beskatningsformer, så du ved hvad du skal holde øje med.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Realisationsprincippet</strong> betyder at du er beskattet af realiseret positivt afkast (<span class="has-inline-color has-vivid-green-cyan-color">gevinst</span>). Omvendt opnår du et skattefradrag for realiseret negativt afkast (<span class="has-inline-color has-luminous-vivid-orange-color">tab</span>). Du opgøre afkastet ved at tage salgsprisen og trække købsprisen fra, begge priser efter eventuelle kurtager og gebyr. Udbytter er betegnet som et direkte afkast, så her beskattes du af det fulde beløb.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Lagerprincippet</strong> betyder at du er årligt beskattet af det udviklede afkast. På samme måde skal du betale skaf af positivt afkast (<span class="has-inline-color has-vivid-green-cyan-color">gevinst</span>) og får et fradrag af negativt afkast (<span class="has-inline-color has-luminous-vivid-orange-color">tab</span>). Den primære forskel er at man opgøre afkastet årligt, uanset om det er realiseret eller ej. Du skal altså beskattes uanset om du har solgt en del af din beholdning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Hvis du har købt 100 aktier til en samlet værdi af 1.000 kroner, som ved årsopgørelsen er 1.600 kroner værd, så skal du beskattes af de 600 kroners positive afkast.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Månedsopsparing vs Aktiesparekonto</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel går vi ikke gennem de mange banker som tilbyder aktiesparekontoen, da man i sidste ende får de bedste priser og vilkår ved Saxo Bank. Hvis der er stor interesse for en generel sammenligning af danske banker, så udformer jeg en analyse til jer!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at lave en gennemgående sammenligning, så laver vi et syntetisk eksempel. Det vil sige at beregningerne er lavet ud fra fastsatte og forudbestemte tal. Du kan derfor kun bruge dette eksempel til at holde dem op imod hinanden objektivt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du først vil have en gennemgående sammenligning mellem Nordnet og Saxobank, så har vi lavet en artikel om <a href="https://finansteori.dk/borshandel/nordnet-vs-saxo-bank" class="rank-math-link">hvem er billigst, Nordnet eller Saxo Bank?</a> Lad os opstille nogle parametre for vores eksempel. Der har jeg også lavet en 12-måneders opstilling mellem Månedsopsparingen, Aktiesparekontoen og 2 normale investeringskontoer ved Nordnet og Saxo Bank.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>10 års syntetisk sammenligning</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Før at vi kan sammenligne en Nordnet Månedsopsparing og Aktiesparekonto ved Saxo Bank. Så skal vi først have opstillet nogle parametre, som sikre os at begge kontoer behandles ens.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>0,45% årlige administrative omkostninger af fonder efter <a href="https://finansteori.dk/borshandel/investering-i-etf-for-begyndere-2020" class="rank-math-link">Morningstar analysen af amerikanske fonders gennemsnitlige omkostninger</a>.</li><li>8% syntetisk årlig vækst fordelt ud på alle måneder, det vil sige (1.08^(1/12)-1=) ~0.64340% om måneden.</li><li>2020 skatte satser, 27/42% split ved 55.300 kroner på månedsopsparingen og 17% på aktiesparekontoen.</li><li>Ingen valuta eller vekslings-gebyr for at holde tallene overskuelige.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Da vi ikke kan indskyde mere på aktiesparekontoen end 100.000 kroner i 2020, som skulle forestille at vokse med 50.000 kroner om året. Vi kommer til at have 3 kolonner. En månedsopsparing efter realisationsprincippet og en efter lagerprincippet og til sidst en aktiesparekonto med månedlige investeringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>Eksemplet herunder er opdateret til de nye Saxo Bank minimumkurtager der kommer 2. november 2020. Det vil sige at Saxo Bank har en minimumskurtage på 14 DKK ved danske aktier/fonde.</strong></em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong>NMR</strong> = Nordnet Månedsopsparing efter Realisationsprincippet</li><li><strong>NML</strong> = Nordnet Månedsopsparing efter Lagerprincippet</li><li><strong>SAM</strong> = Saxo Bank Aktiesparekonto med Månedlige investeringer</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><thead><tr><th>1.000kr/mdr</th><th class="has-text-align-right" data-align="right">NMR</th><th class="has-text-align-right" data-align="right">NML</th><th class="has-text-align-right" data-align="right">SAM</th></tr></thead><tbody><tr><td>År 1</td><td class="has-text-align-right" data-align="right">13.539,63</td><td class="has-text-align-right" data-align="right">13.539,63</td><td class="has-text-align-right" data-align="right">13.410,42</td></tr><tr><td>År 2</td><td class="has-text-align-right" data-align="right">28.190,29</td><td class="has-text-align-right" data-align="right">28.190,29</td><td class="has-text-align-right" data-align="right">27.921,27</td></tr><tr><td>År 3</td><td class="has-text-align-right" data-align="right">44.043,15</td><td class="has-text-align-right" data-align="right">44.043,15</td><td class="has-text-align-right" data-align="right">43.622,85</td></tr><tr><td>År 4</td><td class="has-text-align-right" data-align="right">61.196,85</td><td class="has-text-align-right" data-align="right">61.196,85</td><td class="has-text-align-right" data-align="right">60.612,85</td></tr><tr><td>År 5</td><td class="has-text-align-right" data-align="right">79.758,14</td><td class="has-text-align-right" data-align="right">79.758,14</td><td class="has-text-align-right" data-align="right">78.997,01</td></tr><tr><td>År 6</td><td class="has-text-align-right" data-align="right">99.842,52</td><td class="has-text-align-right" data-align="right">99.842,52</td><td class="has-text-align-right" data-align="right">98.889,73</td></tr><tr><td>År 7</td><td class="has-text-align-right" data-align="right">121.574,98</td><td class="has-text-align-right" data-align="right">121.574,98</td><td class="has-text-align-right" data-align="right">120.414,80</td></tr><tr><td>År 8</td><td class="has-text-align-right" data-align="right">145.090,75</td><td class="has-text-align-right" data-align="right">145.090,75</td><td class="has-text-align-right" data-align="right">143.706,16</td></tr><tr><td>År 9</td><td class="has-text-align-right" data-align="right">170.536,16</td><td class="has-text-align-right" data-align="right">170.536,16</td><td class="has-text-align-right" data-align="right">168.908,74</td></tr><tr><td>År 10</td><td class="has-text-align-right" data-align="right">198.069,56</td><td class="has-text-align-right" data-align="right">198.069,56</td><td class="has-text-align-right" data-align="right">196.179,39</td></tr><tr><td>Totale Investering<br>(Efter kurtage)</td><td class="has-text-align-right" data-align="right">130.000,00</td><td class="has-text-align-right" data-align="right">130.000,00</td><td class="has-text-align-right" data-align="right">128.180,00</td></tr><tr><td>Totale Skat</td><td class="has-text-align-right" data-align="right">20.211,03</td><td class="has-text-align-right" data-align="right">18.378,78</td><td class="has-text-align-right" data-align="right">11.409,82</td></tr><tr><td>Totale Afkast</td><td class="has-text-align-right" data-align="right">47.660,47</td><td class="has-text-align-right" data-align="right">49.492,71</td><td class="has-text-align-right" data-align="right">55.513,91</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I alle 3 eksempler skal du være opmærksom på at skatterne er sat til siden, som dækket med eksterne penge. Du behøver ikke at sælge ud af din investering for at betale skatten, så derfor skal skatten ikke trækkes fra de løbende måneder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/twitter {"url":"https://twitter.com/Skattefar/status/1304318844702523393","type":"rich","providerNameSlug":"twitter","className":""} -->\r\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\r\nhttps://twitter.com/Skattefar/status/1304318844702523393\r\n</div><figcaption>Psst! <a aria-label=" (opens in a new tab)" href="https://twitter.com/Skattefar" target="_blank" rel="noreferrer noopener" class="rank-math-link">@Skattefar på Twitter</a> svare næsten altid inden for 2-3 hverdage hvis du har simple spørgsmål, som ikke kræver dybe eller bindende svar.</figcaption></figure>\r\n<!-- /wp:core-embed/twitter -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det spændende at bemærke her er at vi som lagerbeskattede betaler skat efter administrative omkostninger. Så mellem måned 1 og 2 betaler vi udviklingen efter administrative omkostninger. På den måde ender vi med at betale mindre i skat, selv om vi har samme udvikling som den beskattet efter realisationsprincippet. Dog får vi langt mere ud af at investere i fonderne med aktiesparekontoen, da vi får endnu mere ud af den lavere beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="https://docs.google.com/spreadsheets/d/1wA75khfwW9-QfU3j81D9s47f0j30eiqeguQUBendsRI/edit?usp=sharing" target="_blank" class="rank-math-link">se den detaljerede beregning her</a>. Du kan kopiere arket over til dig selv, hvis du er interesseret i at afprøve forskellige månedlige indsatser, administrative omkostninger og andet. Der kan du også se hvordan udregningerne er lavet.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2215'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-10-05 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-05 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:30:51'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:30:51'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'nordnet-manedsopsparing-vs-aktiesparekonto-mest-for-pengene'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '84'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '35'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'månedsopsparing,aktiesparekonto'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_965176c5fd6439c1f7fa18b160d336ea'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<blockquote class="twitter-tweet" data-width="550" data-dnt="true"><p lang="da" dir="ltr"><a href="https://twitter.com/Skattefar?ref_src=twsrc%5Etfw">@Skattefar</a> Hurtigt spørgsmål, hvis jeg investere i en lagerbeskattet ETF, som er på godkendt listen som aktieindkomst. Hvordan bliver skatten så opkrævet? Af min løn? Fra investerings kontoen? Hvordan?</p>&mdash; Alex Ahlgreen Westergaard (@alexwestergaard) <a href="https://twitter.com/alexwestergaard/status/1304072311255990274?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_965176c5fd6439c1f7fa18b160d336ea'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1599840501'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_598cc7a1fe9f1fbd6861d9d45ae815f2'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<blockquote class="twitter-tweet" data-width="550" data-dnt="true"><p lang="da" dir="ltr">For 2020 vil skatten blive opkrævet via årsopgørelsen for 2020. Hvis du selv har en idé om, hvad skatten bliver, så kan du inden den 31. december 2020 foretage en frivillig indbetaling fra din TastSelv. ^Simone</p>&mdash; Skattefar (@Skattefar) <a href="https://twitter.com/Skattefar/status/1304318844702523393?ref_src=twsrc%5Etfw">September 11, 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_598cc7a1fe9f1fbd6861d9d45ae815f2'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1601912356'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2270'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_old_date'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2020-09-15'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Sådan får du pengene på børneopsparingen til at yngle',
					link: 'https://finansteori.dk/artikel/gaest/fa-borneopsparingen-til-at-yngle',
					pubDate: 'Tue, 22 Sep 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'carolinejohansen'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2226'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p><em>Artiklen er skrevet af Caroline Johansen, kvinden bag <a href="https://tradies.dk/" class="rank-math-link">Tradies.dk</a>. Jeg fortæller i denne artikel om, hvordan du kan få dine børns børneopsparing til at vokse. </em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2><strong>Lidt baggrundsinfo</strong></h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg er hverken finansiel rådgiver, ekspert eller har en fin økonomisk uddannelse bag mig. I virkeligheden er jeg nok mere den kreative type, der altid har hadet matematik og tal. Jeg har til gengæld en stor interesse i at skabe økonomisk frihed for mig selv og min familie. Og det tror jeg faktisk, de fleste har. Desværre kan det der med investeringer godt sommetider blive omtalt som et område, som kun er forbeholdt mænd i jakkesæt og med spidse sko.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Spoiler alert. Det er det ikke! Investeringer og økonomi er forbeholdt alle, der har lyst til at dykke ned i det. Heldigvis har vi i dag alle lige muligheder for at tage ansvar for vores egen økonomi. Og det er ligegyldigt, om du er mand eller kvinde, rig eller fattig, ung eller gammel. I virkeligheden handler det måske mere om at gøre det her med investeringer og økonomi mere spiseligt for helt almindelige mennesker som du og jeg.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Denne artikel er skrevet ud fra egne erfaringer. Jeg vil desuden altid anbefale, at man forholder sig kritisk, og følger sin egen intuition i penge- og investeringsverdenen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2><strong>Giv dit barn en god start på livet</strong></h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kort tid efter at jeg fødte vores søn, oprettede min kæreste og jeg en børneopsparing til ham med dertilhørende aktiedepot. Det gjorde vi fordi, at vi allerede inden hans ankomst havde snakket en masse om, hvordan vi med relativt ganske få midler kan give ham en god start på hans voksne liv. I know - det ligger langt ude i fremtiden, når man sidder der med en lille nyfødt i armene uden manual. Og det kan helt ærligt også virke en smule uoverskueligt at tænke på, at ens hjælpeløse lille klump kød en dag vokser op, og skal tage kørekort og købe fast ejendom. Men det er nu engang sådan, at verden hænger sammen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Helt lavpraktisk ringede vi til vores bankmand og sagde “Dav, vil du oprette en børneopsparing plus en helt almindelig konto til Junior? Og vi vil gerne bede om at få tilknyttet et aktiedepot til både børneopsparingen og den almindelige konto.”&nbsp;</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi valgte at oprette en børneopsparing samt en helt almindelig konto (også kaldet en Oskarkonto i Jyske bank) i samme omgang, fordi det giver mest mening for os i forhold til investeringer af hans penge. I 2020 kan man “kun” indbetale 6000 kroner om året på børneopsparingen og 72.000 kroner i alt. Det betyder for os, at vi som forældre har tænkt os at indbetale 6000 kroner én gang om året de næste 12 år, hvorefter vi investerer dem med det samme. Når de 12 år er gået, og vi har nået max på de 72.000 kroner, har pengene yderligere 9 år til at yngle i, da vores søn først kan få sin børneopsparing udbetalt, når han bliver 21 år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Grunden til at vi har så “travlt” med at indbetale pengene på hans børneopsparing, er, at renters rente effekten allerede træder i kraft, så snart de første penge er investeret. Det fede ved en børneopsparing er, at pengene ofte står i lang tid. Og tid og renters rente effekten er din bedste ven, når du investerer!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som førnævnt fik vi også oprettet en helt almindelig konto til Junior. Det gjorde vi fordi, at vi har valgt at børneopsparingen, er en konto, hvor kun vi som forældre indbetaler til. Den anden konto er derfor tiltænkt til de beløb og pengegaver, vores søn kommer til at få i løbet af hans barndom og teenageår. Blandt andet pengegaverne fra hans barnedåb er sat ind på hans Oskarkonto (eller bedsteforældrekontoen, som vi også kalder den).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2><strong>Hvorfor overhovedet investere på barnets vegne?</strong></h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>At få tilknyttet et aktiedepot til børneopsparingen og/eller barnets almindelige konto betyder blot, at du har mulighed for at købe og sælge aktier og obligationer osv. på barnets vegne. Og hvorfor så overhovedet investere de opsparede penge? Det er der to rigtig gode grunde til:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den ene grund hedder inflation. Lader du blot pengene stå passive på en konto i flere år, bliver de mindre værd. Lad mig vise dig et lille regnestykke, som beskriver det meget godt:&nbsp;</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Har du sparet de 72.000 kroner op, som børneopsparingen tillader, og lader dem stå passive i en periode på 10 år, altså uden at investere dem, så vil pengene være 59.065 kroner værd, da man regner med, at priserne på blandt andet helt almindelige dagligvarer stiger i gennemsnit med ca. 2% procent hvert år. Den stigning kaldes også for inflation. Du vil altså stadig have 72.000 kroner stående på kontoen (medmindre du skal betale negativ rente af at have penge stående, som man skal i mange banker på nuværende tidspunkt). Men i og med at priserne på blandt andet dagligvarer stiger, så vil dine 72.000 kroner være mindre værd, da en liter mælk som koster 10 kroner i dag, vil koste dig 12,5 i stedet om 10 år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Og det er her, at den anden gode grund kommer ind i billedet. Investering af pengene. Lad os sige at du i stedet investerer de 72.000 kroner i fx aktier eller i en investeringsforening. Og lad os gå ud fra at du på en periode på 10 år har et gennemsnitligt årligt afkast på 3% fratrukket inflationen. Så vil du i stedet stå tilbage med 83.880 kroner (beregningen tager ikke højde for omkostninger og skat). Det virker da noget mere attraktivt, hvis du spørger mig! Selvfølgelig er der risiko for, at dine investeringer går op og ned i løbet af årene. Men alt andet lige er det bedre at investere pengene end bare at lade dem stå passive.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan selv prøve at lege lidt med beløb, inflation og med eller uden investeringer via <a href="https://danskebank.dk/privat/produkter/investering/kom-i-gang-med-at-investere/beregn-inflation" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Danske Banks inflationsberegner</a>. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2><strong>Hvad så med skat og alt det andet med småt?</strong></h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En af de andre grunde til at vi har fået oprettet både en børneopsparing og en almindelig konto, skyldes, at der er forskellige skatteregler på disse to. På børneopsparingen skal man IKKE betale skat af afkastet på nuværende tidspunkt, hvis du investerer pengene. Det er også derfor, at der er et max på 72.000 kroner. Vær dog opmærksom på at der altid er nogle gebyr, når du handler med finansielle midler.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På den almindelige konto gælder der nogle lidt andre skatteregler. Indbetaler du som forældre til den almindelig konto, og investerer pengene, så bliver du som forældre beskattet af afkastet. Og det er ligegyldigt, om det er aktier, obligationer, ETF’er, akkumulerende investeringsforeninger osv. du investerer i.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis familiemedlemmer såsom fx bedsteforældre indbetaler til vores søns almindelige konto i forbindelse med en pengegave, og vi som forældre investerer pengene på barnets vegne i fx. enkeltaktier, så er det barnet selv, der bliver beskattet af afkastet. Barnet har dog et personfradrag på 36.100 (under 18 år) kroner om året, som det kan gøre brug af, hvis pengegaverne fra familiemedlemmer bliver investeret i noget, som bliver beskattet som kapitalindkomst, hvilket for eksempel kunne være en akkumulerende investeringsforening, mens investering i aktier realisationsbeskattes, hvilket betyder, at barnet skal betale skat af en gevinst på det tidspunkt, hvor aktien sælges.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2><strong>Tiden er din ven</strong></h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Som jeg tidligere har nævnt, så er tiden og renters rente effekten din bedste ven i den her sammenhæng. En børneopsparing står ofte i rigtig lang tid, hvilket giver de optimale forhold til at få pengene til at yngle. De 72.000 kroner kan altså gå hen og blive til rigtig rigtig mange penge, hvis du har fokus på at få dem indbetalt og investeret hurtigst muligt.&nbsp;</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Afslutningsvis vil jeg lige slå et slag for min netværksgruppe på Facebook, hvor alle spørgsmål er velkomne. Gruppen hedder <a href="https://www.facebook.com/groups/tradies.dk/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">TRADIES - Aktiehandel og investering for kvinder</a>, og er som navnet antyder kun for kvinder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan ligeledes finde <a href="https://www.instagram.com/tradies.dk/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Tradies på Instagram</a> - og her er alle velkomne ;-)</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2226'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-09-22 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-09-22 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:18:58'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:18:58'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'fa-borneopsparingen-til-at-yngle'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'artikel',
							__cdata: 'Artikel'
						},
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						},
						{
							_domain: 'category',
							_nicename: 'gaest',
							__cdata: 'Gæsteindlæg'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '84'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '36'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'børneopsparing'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2266'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '8'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'FIVO Budget - Reserver dine penge og undgå livsstils-inflation ved at investere',
					link: 'https://finansteori.dk/artikel/fivo-budget-reserver-dine-penge',
					pubDate: 'Tue, 06 Oct 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2272'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>I danmark er vi desværre ret dårlige til at snakke om penge og budgettering, derfor opnår sjældent et sundt kendskab til vores økonomiske situation. Hvis du ikke modtager input fra andre, om det er gode eller dårlige praksis, så kan du kun lære fra dine egne fejl og successer. I den her artikel vil jeg introducere dig for en simpel budget-strategi, så du hurtigt kan navigere dine penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel kigger vi primært på at udvikle et sundt budget, som indeholder indtægter og udgifter i forhold til "betal dig selv først" princippet. Det er meget mere detaljeret end den tidligere <a href="https://finansteori.dk/borshandel/manedsbudget-hvor-meget-investering" class="rank-math-link">artikel om hvor meget du skal investere</a>. Hvis du kun vil finde dit rådighedsbeløb til at investere, kan du starte med den artikel.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er ny til at udforme budgetter og at opgøre din økonomi, kan det måske give mening at starte fra starten. Forbrugerrådet Tænk har udformet en god artikel om at lave et grundlæggende budget. FIVO Budgettet bygger ovenpå generelle principper. <a href="https://taenk.dk/test-og-forbrugerliv/privatoekonomi-og-aftaler/budget/budget-saadan-laegger-du-et" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Sådan lægger du et budget af Tænk</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Indtægtskilder, hvor kommer pengene fra?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er mange former for indtægtskilder, men de 3 typiske indtægtskilder er løn, a-kasse eller kontanthjælp. Det er specielt gældende hvis folk ikke har nogen afkastende investeringer. Først skal vi have fundet alle dine indtægtskilder, altså hvor kommer dine indtægter fra. Derefter skal vi opgøre hvor meget vi gennemsnitligt kan forvente fra den indtægtskilde.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td>LØN</td><td>UDBYTTE</td></tr><tr><td>A-KASSE</td><td>LEJEINDTÆGT</td></tr><tr><td>KONTANTHJÆLP</td><td>RENTEINDTÆGT</td></tr><tr><td>TRUST FUND /<br>LOMMEPENGE</td><td>ROYALTIES</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her har du et par mulige kategorier, som kan være potentielle indtægtskilder. Vil anbefale at du sætter dig ned med din bank konto og tjekker hvor meget du gennemsnitligt har fået fra de forskellige kilder, over de seneste 6-12 måneder. Du skal kun kigge på pålidelige indtægter, og ikke medtage midlertidige indtægter, bonusser eller udbetalinger fra forsikringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Udgiftskilder, hvem har reservering på dine indtægter?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er næsten umuligt at undgå udgifter i den moderne verden, da vi alle skal have et sted at bo, gerne med el, vand og varme. Dertil vil vi gerne have noget mad, internet og tøj. Nogle udgifter er dog vigtigere end andre, derfor har vi fordelt dem i forholdsvist faste udgifter og variable udgifter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td>HUSLEJE / GRUNDSKAT</td><td>ACONTO (EL, VAND, VARME)</td></tr><tr><td>INTERNET + MOBIL</td><td>FORSIKRINGER</td></tr><tr><td>BRÆNDSTOF /<br>OFFENTLIG TRANSPORT</td><td>BIL +<br>VEDLIGEHOLDELSE</td></tr><tr><td>SKATTER</td><td>LÅN / RENTER</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På listen finder du nogen af de helt basale udgiftskilder, som man typisk skal have betalt månedligt. På listen har jeg undladet at skrive <strong>mad</strong>, da det høre under basal overlevelse. Her anbefaler jeg igen at du tjekker dine gennemsnitlige udgifter over seneste 6-12 måneder, så du ved cirka hvor meget du skal lægge til side hver måned. På den måde udligner du dine månedlige udgifter istedet for at du har ekstra høje udgifter hver 3 eller 6 måned når forsikringerne skal betales.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td>Januar</td><td class="has-text-align-right" data-align="right">12.700 kr</td></tr><tr><td>Februar</td><td class="has-text-align-right" data-align="right">11.900 kr</td></tr><tr><td>Marts</td><td class="has-text-align-right" data-align="right">12.100 kr</td></tr><tr><td>April</td><td class="has-text-align-right" data-align="right">13.600 kr</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det sværeste ved at skifte til gennemsnitlig månedlig budgettering er at man først skal igennem en cirkel af varierende udgifter. Når man har været igennem cirklen, så begynder de månedlige til side sætninger at være pålidelige. Når vi kommer ind på selve FIVO opsætningen, så kommer jeg nærmere ind på selve overgangen fra rod til gennemsnitlig budgettering - som jeg selv gjorde det!</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>De grundlæggende elementer bag FIVO budgettering</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>FIVO lyder næsten som "five", altså 5 på engelsk, og så dækker det over de 4 aspekter jeg går efter på dansk. Formålet med FIVO er hver måned at have penge til <strong>F</strong>aste udgifter, <strong>I</strong>nvesteringer, <strong>V</strong>ariable udgifter og ikke mindst <strong>O</strong>psparing. Det er her det begynder at blive lidt avanceret at forklare, men simpelt at bruge, når man forstår konceptet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-regular"} -->\r\n<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><tbody><tr><td class="has-text-align-center" data-align="center">FORUD RESERVEREDE PENGE (70%)</td></tr><tr><td class="has-text-align-center" data-align="center">BAGUD RESERVEREDE PENGE (30%)</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-regular"} -->\r\n<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><tbody><tr><td class="has-text-align-center" data-align="center">NUTID (60%)</td><td class="has-text-align-center" data-align="center">FREMTID (40%)</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har en boks med 4 felter, hvor den øverste række er fordelt på faste udgifter og investering, og skal til sammen udgøre cirka 70% af vores indtægter. Nedenunder har vi variable udgifter og opsparing, som til sammen udgøre cirka 30% af vores indtægter. Det interessante ved opsætningen er at vi i venstre side har reserverede udgifter (altså både faste og variable udgifter) og de burde cirka udgøre 60% af dine indtægter hvor investering og opsparing burde cirka udgøre 40% af dine indtægter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:image {"align":"center","id":2311,"sizeSlug":"large"} -->\r\n<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://finansteori.dk/wp-content/uploads/2020/09/fivo-v2-board.jpg" alt="FIVO Budgettet (v2 board)" class="wp-image-2311"/></figure></div>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Grunden til at boksen er fordel sådan, er fordi vi læser boksen med urets retning. Så når du modtager vores penge, så går der et beløb til skat, det kan vi ikke ændre på. Herefter starter vi med at sætte penge til side til faste udgifter. Øverste række burde udgøre 70%, så hvis du har faste udgifter for 50%, så har du kun 20% til investering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Derunder har vi variable udgifter og opsparing. Da vi følger urets retning, så køre vi højre-til-venstre, så vi afsætter 10% til vores opsparing og har resten til variable udgifter. Det gør vi for altid at have penge til u-forudsete udgifter. 10% bliver til 120% af dine indtægter over et år, så vi burde have en gennemsnitlig måneds indtægt i buffer efter et år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Husk at have en indtægts-konto til at formidle dit budget fra</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det 5 element ligger i konto-opbygningen. Hvis du er meget disciplineret, kan du opnå det med mindre kontoer, men hvis du først starter ud, så skal vi have 4 bank kontoer og 1 investerings konto. Anbefaler at du har din investeringskonto ved Saxo Bank eller Nordnet, inden du vælger kan du læse artiklen <a class="rank-math-link" href="https://finansteori.dk/borshandel/nordnet-vs-saxo-bank">Nordnet vs Saxo Bank, hvem er billigst?</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Indbetalinger (+ Nem-konto)</li><li>Faste udgifter (+ Betalingsservice)</li><li>Opsparing (evt. rente-konto?)</li><li>Forbrugs konto (Variable udgifter - mad, tøj, biograf, andet)</li><li>Investerings konto</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det absolut vigtigste ved budgetteringen er at du overføre pengene fra indbetaling til de respektive kontoer 1 eller 2 gange om måneden, alt efter hvor tit du får løn, og ikke bruger indbetalings-kontoen direkte. Der er ingen som siger at du skal investere pengene på investerings kontoen med det samme, du kan sagtens akkumulere op før du køber, målet er at reservere pengene, så du ved præcist hvad formålet er med dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad betyder det at betale sig selv først?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er ikke nogen rationel god forklaring på hvad det vil sige at betale sig selv først, da man er den første person der modtager pengene. Selve idéen med "betal dig selv først" handler om at du tilsidesætte penge til dig selv før du betaler dine regninger og andet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Derfor er det vigtigt at vide hvor meget du skal sætte til side til regninger, mad og andre udgifter. Det hjælper ikke noget at sætte penge til siden hvis du derefter ikke kan betale dine regninger. Det er her vi kommer ind på at have en konto til at modtage alle vores penge på, et centralt sted vi kan delegere pengene fra.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du modtager løn, udbytte eller penge tilbage fra forsikring danmark, så går en forudbestemt del til nuværende behov og en del til at forbedre dine fremtidige vilkår. Man kan sige at du tager pengene ud af nuet og reservere dem til fremtidige dig, så du skal tænke mindre på at finde pengene til den tid.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har opgjort din skat og udgifter, så tager du den totale indtægt efter skat og fordeler pengene ud. Hvis du oplever ikke at have nok penge til udgifter så skal du justere hvor meget du overføre til udgifter. På den måde kan du også se hvis udgiftkontoen går i negativ eller har et usædvanligt stort beløb til overs, at dine udgifter har ændret sig. Vær opmærksom på dine penge.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad er livsstils-inflation?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er meget naturligt for den ikke-økonomiske person at leve efter pengene der står på kontoen. Hvis man har 8.000 kroner efter skat og faste  udgifter, så bruger man pengene i løbet af måneden på mad, byture, biografture og måske et par venne-gaver. Når man så får en forfremmelse og højere løn, så får man råd til en ekstra tur i byen eller måske en større bil på leasing-kontrakten.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Livsstils-insflation er kort og godt bare et udtryk for at man lever fra lønseddel til den næste. For de penge man har til overs til sig selv hver måned efter skat og faste udgifter. Man tænker ikke så meget på den dag man måske mister sit arbejde, pludselig skal betale en skade på bilen eller skal skifte et halvt køkken ud fordi de hårdehvidevarer er slidte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ved at føre et procent-fordelt budget som for eksempel FIVO, eller et andet, så vokser dine investeringer og opsparinger i relation til din eventuelle livsstils-inflation. Din økonomi kan derfor bedre bære at du får lidt dyrere vaner, da du har både opsparing og investering at falde tilbage på.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår giver det mening at bruge FIVO-Budgettet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Personligt er det en formular jeg altid forsøger at følge, uanset hvor meget der kommer ind på min konto. Der er dog nogle forbehold som er vigtige at tage stilling til, før man begynder at dele sine penge op i forudbestemte grupperinger. Hvis du tjener 12.000 kroner efter skat, og har faste udgifter for 8.000 kroner (~67%), så giver det måske ikke mening at smide de 3% over på en investeringskonto, men nærmere at smide 13% (1.040 kroner) på din opsparing istedet for, så du stadig har råd til u-forudsete udgifter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er i en økonomisk situation, hvor du har mere brug for at fokusere på din nuværende situation, end din potentielle fremtidige situation. Så giver det typisk bedre mening at forholde sig til en opsparing frem for at investere.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan selvfølgelig vælge at investere en del af din opsparing, så længe du er opmærksom på at markedet kan falde i værdi og at du skal betale skat af dine fortjenester. Du vil havne i en situation hvis du forventer at have 50.000 kroner på din opsparing, men mangler at betale skat af 20.000 af dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering, sådan kommer du igang med FIVO budgettet</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at have et utroligt simpelt og "dummy"-sikkert budget, så kan FIVO eller et ligende budget hjælpe dig igang med at håndtere dine penge. Formålet med selve FIVO er at opdele pengene ud fra at månedligt perspektiv, og ikke direkte af indtægterne. Hvis du har variable indtægter, så kan du vælge at overføre ekstra til enten investering, opsparing eller variable omkostninger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Den måde jeg selv skiftede over var meget hård og kontant, da jeg skiftede gik direkte igang med uddelingerne på gennemsnitlig vis. Når jeg så havde højere udgifter den en måned, så tog jeg fra variable udgifter og købte lidt mere simpel mad i den måned. Hvis du har et meget stramt mad budget i forvejen, så skal du måske investere eller spare lidt mindre op i de måneder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Personligt går jeg ind på kontoen omkring den 25 i måneden, da jeg fik løn den dag i sverige. Her opstiller jeg dato-specifikke overførelser til den 1. i måneden efter, uanset om det er hverdag eller weekend. Selve overførelsen skal banken nok sørge for sker på et passende tidspunkt deromkring.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg logger ind og sætter min indtægtskonto til at overføre til de andre kontoer ud fra tallet mit budget siger. Hvis der stadig er penge i overskud når pengene er overført, så gik de ind på min opsparingskonto, da jeg fortrækker minimum 3-6 måneders faste + variable udgifter til nødsituationer uden job, sygdom eller andet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Har du et budget?</strong></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2272'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-10-06 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-06 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-21 16:31:42'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-21 14:31:42'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'fivo-budget-reserver-dine-penge'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'artikel',
							__cdata: 'Artikel'
						},
						{
							_domain: 'category',
							_nicename: 'bors-indsigt',
							__cdata: 'Børs Indsigt'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '91'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'budget'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_pillar_content'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'on'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2309'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '5'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Det moderne samfund: Er penge en værdiløs illusion?',
					link: 'https://finansteori.dk/artikel/moderne-samfund-penge-vaerdilos-illusion',
					pubDate: 'Tue, 03 Nov 2020 16:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2391'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Man ville ikke antage at et moderne samfund kunne være baseret på illusionen af en værdi, som réelt ikke eksistere før den er skabt, kun for at man skal give dem tilbage med renter. Et økonomisk system der er baseret på en matematisk formular der aldrig kan udlignes, da man aldrig kan betale flere penge tilbage end der er udgivet i systemet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Jeg har længe gerne ville skrive en artikel der er baseret på den monetære udvikling, en forsimplet blanding af faktuel data og historie. Artiklen er skrevet, set fra fugleperspektiv. Du bør derfor forholde dig kritisk til den her artikel, da den kun giver dig et indblik og ikke går i dybden. Målet er at du får en bedre forståelse for værdien af de penge du bruger til hverdag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Gæld: Forskudt handel med poletter</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi går cirka 3.000 år tilbage i historien, så finder vi det første koncept af et monetært system. Da vi mennesker forsøgte at udvide vores kolonier og handle med andre kolonier, var det meget normalt at handle goder for andre goder. Landmænd handlede typisk med råvare, skovhuggere med brænde, og sådan hver deres overskydende goder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her var der nogle lande, for eksempel Kina og Indien, som udviklede handels-poletter. Små jern eller bronze mønter, som skulle repræsentere værdien af varene man handler med. Det gjorde det muligt at sælge vare forskudt med købet af andre vare. Man havde principielt opfundet konceptet bag gæld, uden dengang at tænke på det vi idag kender som gæld. Folk blev nemlig i stand til at få vare uden at give en anden vare i bytte. Landmanden kunne for eksempel sælge sine råvare for mønter, som senere kunne købe andres vare af ligende værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Skat: Mønter baseret på guld, sølv og bronze</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Rom er historisk anset til at være det første land der forbandt det monetære systems værdi til en underliggende værdi, ved at opbygge et monetært system hvor 1 guldmønt svarede til 25 sølvmønter, og 1 sølvmønt til 10 bronzemønter. Det gjorde et let at vurdere rigdomme og opgøre værdi-baseret beskatning til kejserens rige. <em>Forstil dig at have en beskatning på hele op til 3%!?</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ikke nok med at de delte pengene op i flere niveauer, så anerkender man også Rom for at starte udviklingen af den traditionelle bank, som vi kender idag. Istedet for at have et kæmpe fort med landes værdier, spredte man det ud i lokale banker, så befolkningen havde mere direkte adgang til sin formue, men stadig sikret fra tyveri.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>IOU: Overgangen til papir-penge</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Herefter begynder vi at overgå til det monetære system, som vores bedsteforældre voksede op med. For at gøre det nemmere og mere bekvemt at have sine værdier med rundt, opfandt man banknoter (datidens "pengesedler"). Et papir kunne råde over en andel af bankens guld opbevaring, som skiftede hånd sammen med papiret.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Man fik udstedt et papyrus-papir, med en værdibetegnelse, man senere kunne veksle tilbage til guld. Nu skulle folk ikke længere bære rundt på tunge mønter, og man kunne samle flere mønters værdi på samme papyrus. Når man en dag hellere vil have den fysiske mønt, kan man gå ned til banken med sine banknoter og få udbetalt tilsvarende mængde guld. Kort sagt var penge altså beskyttet af den underlæggende værdi af guld.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>"IOU" er en forkortelse for "I Owe You", altså "Jeg Skylder Dig" på dansk. Det monetære bank-system er baseret på dette koncept, at vi kan købe tjenester og goder for samme mønter vi tidligere har solgt tjenester eller goder for.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>1+1=7: Den fraktionelle reserve</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Over en årrække med papir-penge viste det sig at de færreste faktisk trak guld ud fra banken, men blot handlede med retten til guldet i sin papirform. Det gav muligheden for spekulation i at låne mere guld ud, end der réelt var til rådighed i banken. Det er her konceptet bag den \'fraktionelle reserve\' kommer i spil.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kort forklaret går det ud på, at når du indlåner 10 guldmønter til banken, så kunne de låne 8 af dem ud til en anden. På den måde ville banken nu have en gælds-balance på 18 guldmønter, trods de kun har 10 guldmønter til rådighed. Problemet her opstår når banken så kan sige at de har 8 guldmønter fra den nye person, og kan låne 6 af dem ud til en 3 person. På den måde vokser 10 guldmønter hurtigt til 70 guldmønter. Derudover skal folk med lånet betale renter, så dine 10 guldmønter er réelt blevet 75 guldmønter værd i bankens varetægt, og kan kun betales tilbage ved at pengene cirkulere gennem banken flere gange.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dette system kan kun lade sig gøre, så længe folk handler med banknoterne og ikke forsøger at få mere guld udbetalt, end banken har til rådighed i sin inventar. Historisk har vi oplevet et par gange, hvor en bank ikke har været i stand til at udbetale de réelle ejeres guld tilbage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>I 2008 oplevede mange amerikanere at de ikke kunne få deres penge udbetalt, da bankerne ikke havde nok fysiske kontanter til alle. Det var et større problem fordi flere banker var ramt sammentidigt. Typisk forsikre bankerne sig imod udtag gennem andre bankers reserver, men når flere banker rammes  kan de ikke dække hinanden.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>1971: Richard Nixon fjerner guld standarden</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Omkring 1945, efter 2. verdenskrig, oprettede USA en stor mængde kapital, som de indskød i de krigsramte lande. Det medførte at mange møntfødder ("Valutaer") blev bundet til den Amerikanske Dollar, som herefter var bundet til deres Guld Reserve. USA havde bundet deres Dollar til $35 for cirka 29 gram guld, relativ til deres totale reserve.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at begrænse risikoen for at private ville overrende en bank, begrænsede mand guld-udtaget til bankerne selv. Det resulterede i at bankerne, i de lande som kom på fod, begyndte at veksle deres Dollar Reserve for guld. Det medførte store inflationer i USA, da de fik flere penge til rådighed i forhold til mængden af guld. For at stoppe at USA løb tør for guld, udmeldte Præsident Richard Nixon denne tale, som dengang chokerede mange lande.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=ye4uRvkAPhA","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} -->\r\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\r\nhttps://www.youtube.com/watch?v=ye4uRvkAPhA\r\n</div></figure>\r\n<!-- /wp:core-embed/youtube -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Her fra har penge ikke været bundet til dollaren, men de fleste lande har stadig en stor reserve af dollaren. Det er derfor stadig vigtigt at forholde os til hvordan det går i de forenede stater, hvis vi spekulere i den internationale værdi af vores penge og investeringer.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Fiat: Troværdigheden på statens levering</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Penge mistede værdi-relationen til sit underlagte aktiv, guld. Det betyder at dine penge ikke bære nogen réel værdi, før de køber en vare eller betaler skat. "Fiat" er nemlig latinsk for "Let it be done", altså "Lad det ske" på dansk. Det betyder at penges værdi er bundet op på at staten siger, at de har værdi, og den vedholder de ved at opgøre skatter og offentlige værdier i pengeform.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan ikke møde op på skattekontoret for at betale din gæld med kvæg, brænde eller silke. Ved kun at opgøre værdi i penge er du automatisk tvunget til at komme i besiddelse af penge, hvis du ønsker at betale dine skatter og offentlige afgifter. Hvert land bruger en bestemt valuta, i danmark er det DKK / Danske Kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu begynder det at blive lidt mere kompliceret, da vi ikke længere beregner inflation på relationen mellem penge i systemet og værdien af guld i vores nationale reserve. Istedet for opgøre vi pengenes værdi i udviklingen af national købekræft. Hvis du idag kan købe 1 franskbrød for 20 kroner, men om 12 måneder kun kan købe 0,75 franskbrød, så er købekræften lavere og vi har derfor oplevet inflation. Kunne du derimod købe 1,25 franskbrød, så er købekræften større og vi har derfor oplevet deflation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Bonus: Til trods for at vores penge ikke længere er bundet til værdien af vores guld reserve, så er vores penge som medlem af den Europæiske Union bundet til Euro\'en. <a aria-label=" (opens in a new tab)" href="https://www.nationalbanken.dk/da/om_nationalbanken/ofte_stillede_sporgsmaal/Sider/Danmarks-fastkurspolitik.aspx" target="_blank" rel="noreferrer noopener" class="rank-math-link">Du kan læse om Danmarks fastkurspolitik her</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Digital: Det moderne samfund</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Idag lever vi i den seneste iteration af et moderne samfund, som gennemgår en interessant udvikling imod cloud-baserede løsninger og nedsat personlig kontakt. Den direkte og nærmest ubegrænsede adgang til information på internettet har skubbet os over i et "gør det selv online" samfund. Hvornår mødte du sidst din bankrådgiver, personen der er mellemledet mellem dig og banken du er kunde i. Var jeres sidste kontakt gennem en chat, ringede du, eller mødte du op til en samtale med personen?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det moderne samfund sætter større krav til at vi selv undersøger vores muligheder, da vi ikke snakker med de professionelle på samme måde. Vi har ikke en samtale med vores bankrådgiver om vores økonomiske muligheder, vi udfylder en form og så gennemgår rådgiveren om banken kan stå inde for dig eller ej. Før i tiden havde man en personlig relation til banken, man kendte personen der overvåger vores økonomi, og kunne i nogen tilfælde få et par ekstra goder ved at kende rådgiveren.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Digitaliseringen gør det også nemmere at betale for tjenester og goder, det kræver kun at man har telefonen med og at banken godkender Google Wallet eller Apple Pay. Der laves årlige analyser omkring brugen af penge, hvor tit vi betaler med fysiske kontante i forhold til alternativer. I 2018 var 46% af alle betalinger i Europa udført med et betalingskort. <a aria-label=" (opens in a new tab)" rel="noreferrer noopener" href="https://www.ecb.europa.eu/press/pr/stats/paysec/html/ecb.pis2018~c758d7e773.en.html" target="_blank" class="rank-math-link">Du kan læse den fulde analyse her</a>. Dog viser analyser at unge har svært ved at håndtere sin økonomi, da de ikke har en relation til hvor mange penge de har til rådighed, et problem der var mindre med fysiske kontanter mellem hænderne før i tiden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Blockchain: Automatiske smart-kontrakter</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste idag er bekendt med Bitcoin, Ethereum eller generelt "Crypto Currency". De der internet penge som ikke er kontrolleret eller reguleret af en offentlig instans, og derved både kan frembringe anonymitet og ubalance. Teknologien er baseret på noget man kalder Blockchain, en metode at bekræfte en købshistorik gennem en hovedbog, som flere tusinde har adgang til at bekræfte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her har Ethereum været smart at udvikle et koncept der hedder "Smart Kontrakter". Her kan man opstille en handelsaftale, hvor man reservere et bestemt beløb, indtil kontrakten er fuldført eller bortfaldet. Det kan for eksempel være betting, køb af fremtidige vare til en forudbestemt tid eller andet spændende. Teknologien er så interessant at flere virksomheder, både offentligt og privat, undersøger og udvikler videre på teknologien.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>For at give et eksempel fokusere <a href="https://www.maersk.com/news/articles/2019/07/02/hapag-lloyd-and-ocean-network-express-join-tradelens" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">A. P. Møller Mærsk på at udvikle en blockchain</a> der kan holde styr på alle deres skibe og de containere de fragter. På den måde kan de spore hvor en container er lastet på hvilket skib, om det skifter skib undervejs og hvor det til sidste afleveres - og til hvem.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Cashless: Forsvinder fysiske kontanter?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Idag er der allerede lovgivning der kræver at betalinger over 8.000 kroner skal gøres elektronisk. Det gør det nemmere for banker (hvis de holder øje med det) at spotte potentiel hvidvaskning eller økonomisk kriminalitet. Din ynglings-rapper kan altså ikke tage pengene fra "gaden" og købe porschen kontant, uden at pengene først skal indsættes på en bank konto og så derefter overføres til forhandleren... eller leasingselskabet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her opstår en masse debatter omkring <a aria-label=" (opens in a new tab)" href="https://www.finansforbundet.dk/dk/nyheder/2020/hver-tredje-har-helt-droppet-kontanterne/" target="_blank" rel="noreferrer noopener" class="rank-math-link">balancen mellem at spore kriminalitet og folks private økonomi</a> og købsadfærd. Hvis staten kan se alting du bruger penge på, har du så reelt et økonomisk privatliv? Et andet aspekt er tilgængeligheden, hvad sker der hvis banken eller butikken ikke kan udføre transaktionen på grund af tekniske eller internet problemer?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>I nabolandet sverige har man allerede eksperimenteret med en chip i håndledet, som kan bruges til at betale for offentlig transport og bruges som ID/Pas inden for sveriges grænser. Chippen indeholder NFC, ligesom dit bank kort bruger til kontaktløse betalinger, som automatisk sender dine informationer ud til identifisering og betaling.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote {"className":"is-style-large"} -->\r\n<blockquote class="wp-block-quote is-style-large"><p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p><cite><strong>Ayn Rand</strong></cite></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:heading -->\r\n<h2>TL;DR: Opsummeringen</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dengang vi mennesker valgte at udvide handlen mellem flere kolonier opfandt vi et monetært system, så vi kunne handle forskudt mellem køb og salg af varer. Vi kunne sælge vores kvæg for poletter, som senere kunne bruges til at kæbe brænde eller korn. Siden da har vi fundet måder at kunne opkræve skatter og via kredit låne flere penge ud end vi havde til rådighed. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Efter 2. verdenskrig lånte USA en masse penge til krigsramte lande, som gjorde at økonomien blev bundet op på Dollaren, som derefter var bundet op på deres Guld reserve. Da landende senere indkasserede dollaren imod guldet fjernede de vekslingen mellem dollaren og guldet for at undgå store inflationer og tab i landets rigdom. Det betyder at penge idag er baseret på statens krav om at bruge penge og ikke værdien af et underliggende aktiv (guld).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Digitaliseringen har skabt større afstand i befolkningen og dertil et økonomisk overblik. Bankerne yder ikke personlig betjening i samme omfang, så vi skal selv undersøge vores muligheder for at fremme vores økonomiske situation. Det har også gjort os mindre afhængig af fysiske kontanter, da vi bare kan betale med kort eller mobil. Det kan medføre at nogle folk har sværer ved at forholde sig til sin økonomiske situation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På vej imod et potentielt kontaktløs moderne samfund, er vi også blevet introduceret for Blockchain teknologien. Det giver os muligheden for at handle i Bitcoin, Ethereum og andre former for internet penge, som ikke er kontrolleret eller reguleret af en offentlig instans. Det giver muligheden mere økonomisk privatliv, men kan også skabe en stor ubalance i markedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2391'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-11-03 17:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-11-03 16:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-10-29 23:51:30'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-10-29 22:51:30'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'moderne-samfund-penge-vaerdilos-illusion'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'artikel',
						__cdata: 'Artikel'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '81'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'moderne samfund'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_2fb41f33017a45e6ffe7164626b09675'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'<iframe title="The Challenge of Peace - President Nixon&#039;s Address to the Nation on A New Economic Policy" width="800" height="600" src="https://www.youtube.com/embed/ye4uRvkAPhA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_oembed_time_2fb41f33017a45e6ffe7164626b09675'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1603637792'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2493'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '4'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Gælds balancen - Hvornår giver det mening at låne penge?',
					link: 'https://finansteori.dk/artikel/gaelds-balancen-lane-penge',
					pubDate: 'Thu, 19 Nov 2020 15:00:00 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2505'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>De fleste har stået i en situation hvor de gerne vil låne penge til noget, som de ikke har råd til at købe på anden vis. Enten fordi muligheden for købet er tidsbegrænset eller fordi opsparingen vil tage flere år. I den her situation er der mange som vælger at optage et lån, enten gennem banken eller på kredit. På den måde kan de købe noget for fremtidens penge, nu og her.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:more -->\r\n<!--more-->\r\n<!-- /wp:more -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Desværre er der ikke altid en rationel eller logisk balance mellem pengene vi låner og hvordan vi planlægger at betale dem tilbage senere. Nogle er endda så uheldige ikke at forstå hvordan renter og renters renter fungere, og får en overraskelse længere ned ad vejen. Målet med den her artikel er at forberede dig på lånets gang og hvordan du kan bedømme om et lån giver mening i den given situation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har brug for hurtigt at beregne eventuelle afbetalinger og renter af et lån, så kan jeg anbefale denne side: <a href="https://laaneberegneren.dk/laaneberegner/" target="_blank" aria-label="https://laaneberegneren.dk/laaneberegner/ (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">https://laaneberegneren.dk/laaneberegner/</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Brug af fremtidens penge nu</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der kan være mange gode grunde til at bruge fremtidens penge nu, også selv om du har pengene stående på din konto. Hele situationen handler om hvor vidt det giver mening for dig, i din nuværende situation, og potentielle fremtidige situation, at låne pengene nu. For at kan vurdere et låns muligheder og risikoer, skal man først kunne forholde sig til 5 ting.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><li>Hvad koster varen kontant?</li><li>Hvor meget kan/skal du selv betale nu og her?</li><li>Hvor store er renterne/gebyrene?</li><li>Hvordan kan du betale lånet + eventuelle renter/gebyr tilbage?</li><li>Hvilke begrænsninger får du af at låne pengene?</li></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke har styr på forholdende af dit lån, så risikere du nemmere at få en dårligere oplevelse med det. Måske var du ikke forberedt på renters rente effekten, eller måske skete der nogle forandringer i din situation som gjorde lånet sværere at betale tilbage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor meget skal du réelt låne?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man låner penge, så skal man typisk også selv indskyde nogle penge i købet. Hvis du låner penge til et hus, så skal du enten betale 5% til et banklån, så du har 20-30% til realkreditten. På den måde kræver det at du i første omgang har en risikovillig kapital, men også at du risikere kapitalen sammen med långiveren.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at købe en ny bil til 280.000 kroner, men kun selv har de 50.000 af dem. Så har du brug for at låne 280.000-50.000 = 230.000 kroner. Det vil svare til at du køber 17,85% af bilen nu, for at opkøbe en større andel af bilen i fremtiden. Hvis du kan afbetale 50.000 hvert år, skal lånet vare minimum 230.000/50.000= 4,6 år, og laver derfor et lån på 5 års afbetaling.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu skal vi huske at långiveren også skal tjene penge på at låne dig pengene, så de opkræver nogle renter for den risikovillige kapital du har fået på 2.6% om året. Det vil sige at du over 5 år kommer til at 15.336,85 kroner i renter alene.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Låner du til aktiver eller passiver?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os tage et nærmere kig på hvad du egentligt vil låne pengene til. Planlægger du at låne penge til et hus til dig selv, eller til udlejning? Har du brug for en bil for sjov, eller til at komme rundt? Skal du bruge den nyeste iPhone til at være på Facebook, eller optage videoer eller tage billeder?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste redskaber derude kan enten klassificeres som et Aktiv, en ting som er med til at øge dine indkomster - eller et Passiv, en ting som er med til at øge dine udgifter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis vi kigger tilbage på bilkøbet, så kan vi vurdere om bilen er et redskab. Hvis bilen giver dig muligheden for at varetage et arbejde, som kræver at du har en bil, og hvor lønnen kan afvikle gælden. Så kan man argumentere at bilen er et aktiv, så længe bilen har til formål at generere dig en løn, altså et aktiv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Havde du valgt at købe en stor og dyr bil, som ville optage en stor portion af den eventuelle løn, så kan man derimod argumentere om du har bilen for at kan udføre arbejdet, eller har arbejdet for at kan betale bilen. Det er en gråzone, men den større risiko og usikkerhed vil typisk gøre bilen til et passiv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Derfor er vi nød til at kigge på balancen mellem godt og ondt, ved at bruge de 5 kriterier fra listen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Bære lånet sin egen indtægtskilde?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En af tingene man også kan kigge på, som ikke er på listen, er om lånet kan finansiere sig selv. Hvis du låner penge til at købe noget der generer indkomst i sig selv. Det kan for eksempel være at du overtager en udlejningsejendom, som allerede har en lejer der betaler til tiden. Her ved du på forhånd hvor meget husleje boligen generer hver måned, og kan derfor opgøre tallene direkte imod lånemarkedet lige nu.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at vende tilbage til vores bil-eksempel, så er bilen i sig selv en udgift. Vi er udsat for udgifter som afbetaling, forsikringer, brændstof og slidtage. Hvis vi mister vores arbejde, så kan vi sælge bilen og udelukke udgifterne, men de forsvinder ikke indtil bilen er solgt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har nogle dage om ugen eller måneden hvor du ikke skal bruge din bil, så kan du prøve at smide den på GoMore, så den har muligheden for at tjene nogle af pengene hjem selv. På den måde er bilen mindre afhængig af eksterne indtægter, og kan med-finansiere sig selv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvilke begrænsninger møder du?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er en naturlig balance mellem lånte penge og disciplinen at betale dem tilbage. Du kan vælge at optage lån på et strategist niveau, hvor du låner pengene til et aktiv, der helt eller delvist kan finansiere lånet på egen hånd. Du kan også vælge at tage et lån imod noget, som kræver at du aktivt skal genere indkomsten til at betale lånet tilbage, som vores bil eksempel ovenfor.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Til sidst kan du vælge at låne penge uden nogen relation til indtægt eller muligheden for at genere indkomst på købet, altså et passiv. Det er den her type købsadfærd eller holdning til penge og lån, vi oftest ser i tv-programmet Luksusfælden. <em>Lån til passiver (udgiftskilder) - f.eks telefon, tøj, tatoveringer - er det vi også kalder forbrugslån, hvis man køber noget fordi man ikke har råd nu og her.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du låner 100.000 kroner til 5 års afbetaling, svarende til ~1.667 kroner om måneden uden renter. Så skal du enten finde en måde at undvære dem hver måned, eller finde en måde et tjene dem ekstra. Derfor er det både vigtigt og relevant at forholde dig til både din nuværende økonomi, potentielle fremtidige økonomi, og selve lånet + eventuelle renter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Opsummering</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er en naturlig balance mellem indtægter og udgifter, der nogengange gør at man ikke har råd til at købe ønskede produkter eller ydelser. Her er det vigtigt at gøre op med sig selv og sin økonomi, hvor mange penge det koster en kontant i forhold til at låne pengene med renter. Derudover bør man være opmærksom på hvilke begrænsninger lånet har med sig og at man kan undvære de penge det koster at betale lånet tilbage.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Er du stadig interesseret i det lån du overvejer lige nu?</strong></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2505'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2020-11-19 16:00:00'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2020-11-19 15:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2020-11-19 16:35:37'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2020-11-19 15:35:37'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'gaelds-balancen-lane-penge'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'artikel',
						__cdata: 'Artikel'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_sbi_oembed_done_checking'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '78'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'lån'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2536'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '3'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Mini-Guide: Køb din første aktie/fond i 2021',
					link: 'https://finansteori.dk/borshandel/din-forste-aktie-fond-i-2021',
					pubDate: 'Sat, 30 Jan 2021 14:12:34 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2543'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>I 2020 valgte mange at oprette en konto hos Nordnet for at købe deres første aktier midt i Covid-19 frygten. På den ene side har vi dem der forsøger at likvidere (sælge) deres aktier, og på den anden side har vi dem som gerne vil erhverve (købe) beholdningerne (værdipapirene).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Man kan nemt sætte sig ind i hvorfor det er nemt at tjene penge når markedet lige er dykket og man bare venter på at se hvem der overlever. For dem der overlever vil typisk gennemgå en korrektion, hvor de kommer tilbage til de positive fremtidsprospekter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvor kan jeg handle aktier?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark er det muligt at investere på børsmarkedet ved de fleste kommercielle banker, altså dem som har både private og erhvervsdrivende kunder. Derudover har vi også adgang til et par investerings banker, hvis primære funktion er at handle værdipapir på børsmarkedet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Personligt vil jeg altid anbefale, som privat person, at man investere gennem en dansk bank. Fordi så sørger de for at oplyse dine handler til skat, så du ikke selv skal gøre dig klog på gevinst, tab, realisations- eller lagerbeskatning. Det er selvfølgelig en god idé at dobbelt-tjekke tallene ved årsopgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td class="has-text-align-center" data-align="center">Saxo Bank</td><td class="has-text-align-center" data-align="center">Nordnet</td></tr><tr><td class="has-text-align-center" data-align="center">Danske Bank</td><td class="has-text-align-center" data-align="center">Nordea</td></tr><tr><td class="has-text-align-center" data-align="center">Handelsbanken</td><td class="has-text-align-center" data-align="center">Jyske Bank</td></tr><tr><td class="has-text-align-center" data-align="center">Sydbank</td><td class="has-text-align-center" data-align="center">Lunar</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan også vælge at investere gennem udlandske banker, hvor det er din egen opgave at holde styr på gevinster, tab, beskatning, fradrag, og dertil skattemæssige forhold. </p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->\r\n<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><tbody><tr><td class="has-text-align-center" data-align="center">eToro</td><td class="has-text-align-center" data-align="center">Degiro</td></tr><tr><td class="has-text-align-center" data-align="center">Revolut</td><td class="has-text-align-center" data-align="center">Acorns</td></tr><tr><td class="has-text-align-center" data-align="center">Stockpile</td><td class="has-text-align-center" data-align="center">Betterment</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad koster det at investere i værdipapir?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du handler med værdipapir på en børs er der typisk 3 hovedformer for gebyrer. Bankerne kan vælge at tage et gebyr for at administrere købet og salget af værdipapirene, også kaldet Kurtage. Derudover kan de tage et gebyr for at veksle dine penge til andre valutaer, når du køber udlandske aktier, også kaldet et vekslings-gebyr. Sidst og ikke mindst, så kan du også blive opkrævet et gebyr for at at lagre dine investeringer, hvor banken opkræver et administrativt gebyr for at opbevare dine investeringer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os lige gentage det, men lidt mere organiseret.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><strong>Kurtage</strong> er et gebyr for at udføre købet eller salget af aktier</li><li><strong>Veksling</strong> er et gebyr for at veksle dine penge til udlandske penge</li><li><strong>Lager</strong><em>(-afgift)</em> er et gebyr for at opbevare dine værdipapirer</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark bruger vi primært Saxo Bank og Nordnet til at investere i værdipapir, fordi de er billigere, specialiseret og kan adskille vores investeringer fra den daglige økonomi. Hvis du vil læse mere om de 2 platforme, så har jeg skrevet en artikel her: <a aria-label=" (opens in a new tab)" href="https://finansteori.dk/borshandel/bors-indsigt/nordnet-vs-saxo-bank" target="_blank" rel="noreferrer noopener" class="rank-math-link">Saxo Bank vs Nordnet, hvem er billigst?</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Er det bedre at investere i enkelte aktier eller fonde?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er altid forskellige holdninger til om man skal satse på individuelle virksomheder, eller om man skal købe en fond med spredning. I bund og grund kommer det an på hvor involveret du ønsker at være i dine investeringer. Hvis du fortrækker at investere passivt, så giver det typisk bedre mening at investere i en fond, som har forudvalgt nogle aktier.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal selvfølgelig bruge lidt tid på at finde en fond/ETF, der investere indenfor noget du forstår dig på, eller tror på vækster i fremtiden. Hvis det lyder som noget for dig, så <a href="https://finansteori.dk/borshandel/bors-starter/investeringsforeninger-fonde-etf-spredning" class="rank-math-link">bliv klogere på at investere i fonder her!</a></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Er du interesseret i at involvere dig i dine investeringer, så giver det måske mere mening at investere i enkeltaktier. Det kan være at du er tilknyttet Vestas (Vindmøller/Grøn Energi) eller tror på EA (Spil/Gaming), så giver det måske bedre mening at investere koncentreret i dem.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår skal man købe sin første aktie?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er umuligt at fortælle dig hvornår det giver god mening at investere i aktier, da man ikke kan forudsige hvad selskabet gennemgår i fremtiden. Det kan gå fantastisk og aktien stiger i værdi, eller de kan møde udfordringer, som kan få aktien til at falde i værdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er er et ordsprog der hedder "Time in the market is better than timing the market", hvilket på dansk er noget i stil med "At være på markedet er bedre end at forsøge at spå markedet". Okay, det kunne man nok godt skrive bedre, men kan ikke lige komme på noget smart lige nu.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er en strategi der går ud på løbende at investere i fast beløb med faste intervaller, så man ender med at købe ind til en gennemsnitlig pris over tid. Hvis du investere for 1.500 kroner om måneden, vil du automatisk købe flere aktier når de er billige og færre når de er dyre. Du vil derfor ikke købe aktierne på toppen eller bunden, men et sted omkring midten.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3>Giver det mening at købe populære brands aktier?</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>En helt ny aktieinvestor kan måske ikke gennemskue hvordan man analysere et selskab og finder ud af om det er en god investering. Derfor kan det måske give mening at investere i populære aktier, da man har en eller anden form for tryghed i dens popularitet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det udelukker ikke risikoen for at aktien kan falde i pris, eller at selskabet kan gå konkurs. Omvendt stiger selskaberne typisk også langsommere i værdi da aktierne typisk handles med højere forventninger og derved til højere priser generelt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan betaler man skat af aktier/fonde?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Uden at gå for dybt ind i beskatningen, så vil jeg give dig et par tommelfingerregler at følge. Når du køber værdipapir på en offentlig børs, så skal der typisk betales aktieindkomstskat. Det er en beskatnings gruppe der er adskilt fra din kapitalindkomst (f.eks løn, honorar, b-indkomst, osv), hvilket betyder at dine værdipapir typisk ikke beskattes efter bundskat eller topskat principper.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er dog nogle former for værdipapir og investerings-muligheder, som bliver beskattet som kapitalindkomst. Disse investeringer kommer til at have indflydelse på om du risikere at skal betale topskat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Selve beskatningen er i skrivende stund fordelt 27/42% efter en skilning på 56.500 kroner (i 2021). Det vil sige at du betaler 27% skat af dine gevinster op til 56.500 kroner og så 42% af gevinster derefter, baseret på din årlige totalværdi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan også vælge at investere gennem en Aktiesparekonto, hvor der kun er 17% beskatning. Men for ikke at genskrive en masse skatte-relateret, så kan du vælge at fordybe dig her:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a href="https://finansteori.dk/borshandel/bors-starter/aktiesparekonto-17-pct-skat" target="_blank" aria-label="Beskatning af aktiesparkonto (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Beskatning af aktiesparkonto</a></li><li><a href="https://finansteori.dk/borshandel/bors-starter/aktieinvestering-alt-for-begyndere-2020" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Beskatning af værdipapir</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Konklusion: Din første aktie?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis man er helt ny til at investere i aktier, så kan det hurtigt virke overvældende hvor mange ting der kan være at sætte sig ind i. Det nemmeste udgangspunkt er at finde et par aktier man kender til og tror på, følge dem i et par dage, så man kan se hvordan priserne svinger, så man får en idé om hvor voilatil aktien er.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man har en idé om hvor store udsving selskabet har, skal man gøre op med sig selv, om man tror på at aktiekursen vil stige over de næste 2, 5, 10 eller 20 år. Jo længere tid du har planer om at investere i en aktie, jo mindre betydning har daglige eller årlige udsving, da en aktie gennemsnitligt gror 7% om året ifølge historisk data.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du investere i en aktie og den falder i pris, så skal du være kritisk overfor hvorfor den falder. Det handler om at afgøre med sig selv om aktien fortsat vil falde, eller gennemgå en korrektion og komme op på/over det den var på før faldet. Her skal du være opmærksom på du ikke sælger baseret på følelser, da det kun bliver irriterende, hvis aktien stiger igen lige efter.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2543'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2021-01-30 15:12:34'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2021-01-30 14:12:34'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2021-01-30 15:12:35'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2021-01-30 14:12:35'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'din-forste-aktie-fond-i-2021'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: [
						{
							_domain: 'category',
							_nicename: 'bors-starter',
							__cdata: 'Børs Starter'
						},
						{
							_domain: 'category',
							_nicename: 'borshandel',
							__cdata: 'Børshandel'
						}
					],
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '76'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'første'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2560'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Sådan kommer du igang med freelance arbejde i 2021',
					link: 'https://finansteori.dk/selvstaendig/kom-igang-med-freelance',
					pubDate: 'Sun, 07 Mar 2021 16:19:05 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alexwestergaard'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=2571'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Freelance arbejde er et ord der bruges i flere sammenhænge, men oftest referer man til en person der arbejder på et individuelt projekt, uden at være ansat i virksomheden. Når man bliver ansat til at udføre en freelance projekt, så er man typisk kun ansat til at udføre dette specifikke projekt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Uanset om du har et fast arbejde i hverdagen eller ej, så er det muligt at optage og udføre freelance arbejde. Du skal dog være opmærksom på, at hvis du er ansat et sted, at der måske er en konkurrenceklausul. I dette tilfælde anbefaler jeg at du først og fremmest snakker med din arbejdsgiver/kontraktgiver, så du med sikkerhed ved hvad slags arbejde du ikke må opsøge eller tage imod.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Kræver det et CVR-nummer at udføre freelance arbejde?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at blive selvstændig, eller at udføre hobby-arbejde ved siden af dit hverdagsarbejde, så er det muligt at gøre uden at registrere en virksomhed først. Der er nogle få ting man skal være opmærksom på, hvis man udføre fakturerings-arbejde, uden at gøre det gennem et selskab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><li>Du kan og må ikke opkræve moms når du fakturere som privat.</li><li>Du kan ikke trække moms fra indkøb, hvis du ikke er moms-registreret.</li><li>Du skal indberette indtægter som B-skat/honorar, hvor du selv er ansvarlig for at betale skat af den faktureret indtægt.</li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:list -->\r\n<ul><li><a aria-label="Skat: B-indkomst (honorarer) (opens in a new tab)" href="https://skat.dk/skat.aspx?oid=2234739" target="_blank" rel="noreferrer noopener" class="rank-math-link">Skat: B-indkomst (honorarer)</a></li><li><a href="https://www.retsinformation.dk/eli/lta/2019/1021" target="_blank" aria-label="Retsinformation: Bekendtgørelse af lov om merværdiafgift (momsloven) (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Retsinformation: Bekendtgørelse af lov om merværdiafgift (momsloven)</a></li></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvornår skal man momsregistreres (Oprette virksomhed)?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark har vi love der afgøre hvornår man skal momsregistreres. Når man ikke er momsregistreres, er der i bund og grund ingen forskel på om man har et CVR eller ej, da man ikke må opkræve eller trække moms fra.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har en grænse der hedder 50.000 kroners momspligtig omsætning inden for en 12 måneders periode. Vær opmærksom på at det ikke er inden for et kalenderår, men inden for en 12 måneders periode. Det gør altså ingen forskel om det er fra 1 januar til 31 december eller 13 marts til 12 marts året efter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ikke nok med det, så skal du teknisk set allerede lade dig momsregistrere, hvis du har en forventning om, at omsætte for mere end 50.000 kroner i en 12 måneders periode inden for de næste 12 måneder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at blive momsregistreres skal du også registrere et CVR. De mest populære virksomhedsformer (med CVR) er enkeltmandsvirksomheder og anpartsselskaber (ApS).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvad må man lave som freelancer?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er ikke nogen reel begrænsning for hvad du må lave som freelancer, medmindre du er begrænset af din arbejdsplads eller mangler licenser/certifikater/godkendelser. Det handler i bund og grund om hvad du gerne vil tilbyde folk, og så hvor god du er til at sælge dig selv.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er igang med at uddanne dig indenfor IT, kan det måske give mening at opsøge freelance arbejde imens du studere, så du kan prøve kræfter med det du lærer i skolen. Det kan for eksempel være små hjemmesider som web integrator eller simple brochure som grafisk designer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Alternativt, hvis du er ved at uddanne dig som murer, kan du måske tilbyde folk med lav-selv hjemmeprojekter. Der er ikke nogen videre begrænsning for hvad du må udføre som freelancer, så længe du er opmærksom på at du er ansvarlig for det arbejde du udfører.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Hvordan bliver man betalt for freelance arbejde?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Inden du går igang med at udføre arbejdet, som du gerne vil sælge, så skal du først og fremmest have styr på vilkår og kontrakt. Det første du bør gøre, er at stille en række spørgsmål til en potentielle kunde, for at være sikker på opgavens omfang og størrelse. Når du har et godt indblik i opgaven, så kan du lave et tilbud til kunden, hvor du beskriver specifikt hvad opgaven indeholder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du udformer tilbudet bør du forholde dig til smuthuller, så kunden ikke kan komme og ændre på opgaven senere, så du ender med at udføre ekstra arbejde gratis. Ved at lukke smuthuller, så kan du også forventnings-afstemme med kunden. På den måde kan du beskytte dig selv imod at kunden er uenig i det udførte arbejde, og fjerne grundlaget for ikke at betale, fordi det færdig produkt ikke er som aftalt eller forventet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du udarbejder dit tilbud, bør du også forholde dig til en tid. Her kan du vælge at give en fast sats for hele arbejdet, men også om det skal være timebetalt eller ligende. <strong>Hvis du er momsregistreret, så skal du være opmærksom på at privat-kunder kun må oplyses priser inklusiv moms</strong>, men du må gerne oplyse hvor stor del af prisen er moms.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når kunden har skrevet under på dit tilbud, så skal du udføre arbejdet først. Derefter skal du fakturere kunden det endelige beløb, f.eks den aftalte pris, eller udregningen af totale timer ganget med timeprisen.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '2571'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2021-03-07 17:19:05'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2021-03-07 16:19:05'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2021-03-07 17:54:32'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2021-03-07 16:54:32'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'kom-igang-med-freelance'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'publish'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'selvstaendig',
						__cdata: 'Selvstændig'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '84'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_internal_links_processed'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '11'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'freelance'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_thumbnail_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '2585'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_analytic_object_id'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Sådan fungere skat og fradrag (2022 satser)',
					link: 'https://finansteori.dk/?p=4',
					pubDate: '',
					creator: {
						__prefix: 'dc',
						__cdata: 'alex'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=6'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Skat er en af de ting, som de fleste bare betaler, uden helt at forstå. Når året er omme, og man har rettet sin årsopgørelse, så bruger man bare det til sin næste forskudsopgørelse også. Sådan oplever folk altid at have skattegæld i slutningen af året, hvis man har opnået større indtægter eller brugt færre fradrag gennem året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\r\n\r\n<!-- wp:list -->\r\n<ul><!-- wp:list-item -->\r\n<li><a href="https://skat.dk/satser" target="_blank" rel="noreferrer noopener">Find aktuelle satser på skat her</a></li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li><a href="https://skat.dk/data.aspx?oid=2339612" target="_blank" rel="noreferrer noopener">Få hjælp til din forskudsopgørelse</a></li>\r\n<!-- /wp:list-item --></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-opgiv-forventede-indt-gter-p-forskudsopg-relsen">Opgiv forventede indtægter på forskudsopgørelsen</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det danske skattesystem er bygget op omkring indtægter og fradrag. Hvis du ikke har været inde at redigere din forskudsopgørelse, er der en stor chance for, at den bruger sidste årsopgørelse for igangværende år.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Skat giver dig muligheden for at oplyse dine forventede indtægter og fradragsberettigede udgifter på forhånd, så de kan beskatte dig bedst muligt i løbet af året. Sådan undgår du også at skal have en masse penge tilbage fra skat, eller værre, at skal af med penge når du skal udfylder opgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er forskellige rubrikker i forskudsopgørelsen, men det er kun relevant for dig at kigge på dem du kan svaret på i forvejen. Nogle af rubrikkerne er automatisk udfyldt, f.eks aktiehandel gennem dansk-registreret broker.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du for eksempel tjener 30.000 kroner før skat om måneden, så skal du indtaste den forventede indtjening for hele året, svarende til 30.000x12= 360.000. Hvis du halvvejs gennem året stiger i løn, til f.eks 32.000 kroner, så skal du gå ind og ændre din opgivelse til 30.000x6 + 32.000x6 = 372.000. Sådan ender du ikke med at skylde skatten af de ekstra 2.000 kroner om måneden i 6 måneder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>OBS:</strong> Hvis du er usikker på hvordan du skal beregne eller opgive nogle rubrikker så <a href="https://skat.dk/kontakt" target="_blank" rel="noreferrer noopener">kontakt Skattestyrelsen</a> for at få direkte rådgivning og undgå fejl eller overraskelser senere.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-s-dan-beregnes-din-skat-i-hovedtr-k">Sådan beregnes din skat i hovedtræk</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er ikke muligt at give en beregning der passer på alle, da skat er en individuel sag baseret på nogle overordnet skatteregler. Derfor laver jeg en overordnet skatte beregning her.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>OBS:</strong> Dette eksempel tager kun udgangspunkt i personfradrag og befordringsfradrag for at holde det simpelt for alle at følge med. Der tages heller ikke højde for topskat, pension eller ATP. Du bør altid tage stilling til hvert punkt på din lønseddel og følge op på dem du ikke forstår.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><!-- wp:list-item -->\r\n<li>Personfradrag i 2022 er 48.800 kroner, hvis man er +18 år gammel.</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Befordringsfradrag efter 2022 takster er 40.986 kroner ved 100km pr arbejdsdag. <em>* Se beregning længere nede.</em></li>\r\n<!-- /wp:list-item --></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Månedsløn</td><td class="has-text-align-right" data-align="right">30.000,00</td></tr><tr><td>Årsløn</td><td class="has-text-align-right" data-align="right"><em>30.000x12=</em> 360.000,00</td></tr><tr><td>AM Bidrag 8%</td><td class="has-text-align-right" data-align="right"><em>360.000*0,08=</em> 28.800,00</td></tr><tr><td></td><td class="has-text-align-right" data-align="right"><em>360.000-28.800= 331.200,00</em></td></tr><tr><td>Fradrag Totalt</td><td class="has-text-align-right" data-align="right"><em>48.800+40.986=</em> 89.786,00</td></tr><tr><td></td><td class="has-text-align-right" data-align="right"><em>331.200-89.786= 241.414</em>,00</td></tr><tr><td>Beskatning<br>(<a href="https://www.skm.dk/skattetal/satser/danmarkskort-over-kommuneskatter/#/kommune/koebenhavn" target="_blank" rel="noreferrer noopener nofollow">*kbh 2022</a>)</td><td class="has-text-align-right" data-align="right"><em>241.414*0,3669=</em> 88.574,80</td></tr><tr><td></td><td class="has-text-align-right" data-align="right"><em>241.414-88.574,80= 152.839,20</em></td></tr><tr><td>Tilbageført fradrag</td><td class="has-text-align-right" data-align="right"><em>152.839,20+89.786=</em> 242.625,20</td></tr><tr><td>Månedsløn</td><td class="has-text-align-right" data-align="right"><em>242.625,20/12=</em><strong>20.218,77</strong></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan du også se at din effektive skat er lavere end først antaget, fordi man først trækker fradragene fra. Din effektive beskatning ender med at være <em>100-(20.218,77/30.000*100)=</em> 32.60% og ikke de fulde 41.75% mange tror med 8% AM og *36,69% kommunal beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-s-dan-beregner-du-befordringsfradraget">Sådan beregner du befordringsfradraget</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Befordringsfradraget er delt op i flere kilometer-grupper, så du får ikke samme sats for alle kilometer du kører til og fra arbejde om dagen. Det er beregnet ud fra totale kilometer kørt til og fra arbejde på en dag, så hvis du har 50 km hver vej, kører du 100 km om dagen. <strong>Her er satserne for 2022:</strong></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list -->\r\n<ul><!-- wp:list-item -->\r\n<li>0-25 km giver fradrag på 0 kr.pr.km.</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>25-120 km giver fradrag på 2,16 kr.pr.km.</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>+120 km giver fradrag på 1,08 kr.pr.km.</li>\r\n<!-- /wp:list-item --></ul>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er vigtigt at forstå at det fungere som trappetrin og at satsen ikke er baseret på alle kilometer hvis den totale afstand falder inden for en gruppe. I overstående sektion bruger vi 100 km om dagen som eksempel for vores befordringsfradrag. Her er hvordan vi er kommet frem til 40.986 kroner i fradrag for året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Afstand</td><td class="has-text-align-center" data-align="center">Dækket</td><td class="has-text-align-right" data-align="right">Sats</td><td class="has-text-align-right" data-align="right">Beløb</td></tr><tr><td>0-25 km</td><td class="has-text-align-center" data-align="center">25</td><td class="has-text-align-right" data-align="right">0</td><td class="has-text-align-right" data-align="right">0</td></tr><tr><td>25-100 km</td><td class="has-text-align-center" data-align="center">75</td><td class="has-text-align-right" data-align="right">2,16</td><td class="has-text-align-right" data-align="right">162</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan du se at vi opnår 162 kroners fradrag om dagen. I 2022 er der 253 arbejdsdage, så hvis du kører de 100 km til og fra arbejde alle 253 dage, opnår du et befordringsfradrag på 40.986 kroner. Det svarer gennemsnitligt til 3.415,50 kroner om måneden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-s-simpelt-tilf-jer-du-topskat-til-din-udregning">Så simpelt tilføjer du topskat til din udregning</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Topskat i danmark er en tillægsskat der lægges oven på din kommunale totalskat. I 2022 er topskat tillægget på 15% og topskatte grænsen er på 552.500 kroner <strong>efter</strong> AM og fradrag er trukket. Det betyder at vores eksempel med København ender på 36,69+15= 51,59% af alt vi tjener over 552.500 kroner i 2022.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du skal have et lynhurtigt eksempel på hvordan topskat ser ud i beregningen, så lad os tage udgangspunkt i 75.000 kroner om måneden med samme fradrag som før:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Månedsløn</td><td class="has-text-align-right" data-align="right">75.000,00</td></tr><tr><td>Årsløn</td><td class="has-text-align-right" data-align="right">900.000,00</td></tr><tr><td>Efter AM</td><td class="has-text-align-right" data-align="right">828.000,00</td></tr><tr><td>Efter fradrag</td><td class="has-text-align-right" data-align="right">738.214,00</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal du være opmærksom på at beløbet skal deles op efter topskatte grænsen, da det kun er beløbet over 552.500 kroner der skal top beskattes efter 2022 satserne. Det vil sige at vi har 552.500 kroner med normal beskatning og 738.217-552.500= 185.717 kroner med top beskatning.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Alm.</td><td class="has-text-align-right" data-align="right">552.500</td><td class="has-text-align-center" data-align="center">36,69%</td><td class="has-text-align-right" data-align="right">257.962,25</td></tr><tr><td>Top</td><td class="has-text-align-right" data-align="right">185.717</td><td class="has-text-align-center" data-align="center">51,59%</td><td class="has-text-align-right" data-align="right">95.811,40</td></tr><tr><td>Beskatning</td><td class="has-text-align-right" data-align="right"></td><td class="has-text-align-center" data-align="center"></td><td class="has-text-align-right" data-align="right"><strong>353.773,65</strong></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi ender altså med en beskatning på 353.773,65 kroner ud af de 900.000 kroner vi har tjent gennem året. Det vil sige vi ender med at have 474.226,35 kroner tilbage af vores 900.000 kroner efter AM bidrag og Skat - svarende til 39.518,86 udbetalt om måneden. Det vil sige at vores effektive beskatning er på <em>100-(474.226,35/900.000*100)=</em> 47,31%.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-rsopg-relsen-er-slutresultatet-for-ret">Årsopgørelsen er slutresultatet for året</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Forskudsopgørelsen er vores forventninger til årets økonomi, hvad vi regner med at have af indtægter og bruge af fradrag. Her bliver hele årets indtægter og fradrag fordelt ud på alle årets måneder, så din arbejdsgiver kan indbetale acontoskat af din løn eller du kan indbetale acontoskat af b-indkomster (hvis du f.eks freelancer eller er selvstændig).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Årsopgørelsen fungere ligesom din forskudsopgørelse. I stedet for at bruge dine oplysninger, så opgøre de hvor meget din arbejdsgiver, bank og investerings platform har oplyst om dig. Når alle tallene er oplyst og lagt ind i systemet, så får du muligheden for at lave de sidste rettelser, i tilfældet af at nogle rubrikker mangler eller er forkerte.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Sidst, når du har rettet din årsopgørelse, så laver skat den endelige beregning på hvor meget der er betalt ind på din skattekonto og hvor meget du skulle have betalt. Hvis der står for meget på din skattekonto, så får du penge tilbage, ellers opkræver de det manglede beløb.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Der er mange som vælger at betale for meget i skat, for at få penge tilbage som en slags "gave" fra dem selv til sig selv. Når dagen er omme er det vel altid sjovere at få lidt tilbage, end at skal af med penge. Hvis dette er noget du gerne vil opnå, så sæt et lidt større beløb ind på din forskudsopgørelse, så du får opkrævet lidt mere i skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-b">Beskatning af B-indkomster</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har en indtægtskilde, der ikke fratrækker AM bidrag eller skat, så skal du selv sørge for det. For at adskille dette på dit skattekort, skal disse indtægter oplyses som B-Skat/Honorar.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan for eksempel være indtægter fra udlandet, ved at føre hobby-virksomhed, eller hvis du modtager penge (honorar/donationer) i relation til en ydelse du udfører.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her er det vigtigt at notere, at du skal oplyse alle indtægter til skat, uanset beløb størrelse eller akkumulation. Det gør altså ingen forskel om du tjener 1.000 kroner hele året, eller 1.000 kroner hver måned. Beløbet skal oplyses til skat, så de kan opkræve beskatningen fra dig.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Normalt skal forskudsopgørelsen reflektere forventede indtægter for hele året. Det er derfor ændringer først træder i kræft måneden efter, men nogen gange ændre ens økonomi sig i løbet af året. Det er altså okay at tilpasse tallene løbende, som du kender udfaldet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-s">Eksempel på B-skat udregning</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For et give et eksempel. Hvis du tjener et variabelt beløb fra udlandet hver måned, så giver det måske mere mening at opdatere forskudsopgørelsen hver eller hver anden måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I januar tjener du 1.300 kroner og i februar tjener du 1.800 kroner. Så kan ud i marts indsætte 3.100 kroner i forskudsopgørelsen. Marts og April tjener du sammenlagt 2.400 kroner, så i maj tilpasser du forskudsopgørelsen til 3.100 + 2.400 = 5.500 kroner, altså det totale beløb for året.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du tjener et lavere beløb op året, så giver det mest mening at betale skatten ved årsopgørelsen, men du kan også vælge at betale løbende acontoskat, så du ikke står med en større skattegæld ved opgørelsen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>B-indkomster bliver beskattet efter normal AM og Kommunale skattesatser, men der fratrækkes ikke fradrag eller andet i denne opgørelse. Det vil sige at dine 5.500 kroner skal du først trække AM på 8%, og så af det nye beløb trække 36,69% (kbh sats 2022).</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>B-indkomst</td><td class="has-text-align-right" data-align="right">5.500</td></tr><tr><td>AM Bidrag</td><td class="has-text-align-right" data-align="right">5.500-8%(440)= 5.100</td></tr><tr><td>Beskatning</td><td class="has-text-align-right" data-align="right">5.100-36,69%(1.871,19)= 3.228,81</td></tr><tr><td>Totale beskatning</td><td class="has-text-align-right" data-align="right">440+1.871,19= 2.311,19</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Note A</strong>: Hvis du betaler acontoskat løbende gennem året, så skal du huske at bekræfte at rubrik 342 består af det totale beløb du allerede har indbetalt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Note B</strong>: Som privatperson må man ikke opkræve moms, men hvis du sælger <strong>momspligtige ydelser/produkter</strong> for mere end 50.000 på en 12-måneders periode, så skal du momsregistreres. Det er ligemeget om det er som enkeltmandsvirksomhed eller ApS.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><strong>Note C</strong>: Hvis dine B-indtægter er salgs-fremmende/relateret, så kan du trække udgifter fra. Hvis du for eksempel sælger en hjemmeside til 5.000 kroner, men det koster dig 1.200 kroner for domæne og hosting, så skal du kun betale B-skat af 5.000-1.200= 3.800 kroner. <em>(Husk at gemme kvitteringer i minimum 5 år, fysisk eller digitalt, ref bogføringsloven §10)</em></p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '4'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2022-12-04 20:47:17'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '0000-00-00 00:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2022-12-04 20:47:17'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-04 19:47:17'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'skat-og-fradrag-2022'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'draft'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'oekonomi',
						__cdata: 'Økonomi'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '70'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'skat'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'skat'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '64'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_estimated-reading-time-minutes'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '9'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_wordproof_timestamp'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Stil disse 5 spørgsmål før du optager lån',
					link: 'https://finansteori.dk/?p=10',
					pubDate: 'Tue, 08 Nov 2022 21:20:07 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alex'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=10'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>De fleste har stået i en situation, hvor de gerne vil låne penge til noget, som de ellers ikke havde råd til. I stedet for at spare pengene op, vil de hellere betale fremtiden penge for at få tingen med det samme. Faktisk har hvert 4 person over 18 år optaget et forbrugslån ifølge <a href="https://tjek-laan.dk/spmogsvar/hvor-mange-danskere-har-forbrugslaan" target="_blank" rel="noreferrer noopener nofollow">TjekLån</a>.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Lad os først tage et kig på de 5 spørgsmål, og så kan vi tage et nærmere kig på hvad de indebærer bagefter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><!-- wp:list-item -->\r\n<li>Hvad koster varen kontant?</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Hvor meget kan/skal du selv betale her og nu?</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Hvor store er renterne/gebyrene?</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Hvordan kan du betale lånet + renter or gebyr tilbage?</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Hvilke begrænsninger får du af at tage lånet?</li>\r\n<!-- /wp:list-item --></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-1-hvad-koster-varen-kontant">1) Hvad koster varen kontant?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er altid vigtigt at kende varens normale købspris, så vi ved hvilken værdi vi skal forholde os til. Hvis vi kigger på mobiltelefoner kan vi hurtigt se en masse lånemuligheder der kun koster 200-300 kroner on måneden. Hvis telefonen koster 10.000 kroner, så skal du undvære 300 kroner om måneden i 33 måneder, svarende til 2 år og 9 måneder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her kan det være klogt at vurdere, hvor vigtigt det er at få den nye telefon lige nu. Hvor lang tid ville det tage dig at spare op til mobilen, og hvad er chancen for at der er noget du hellere vil bruge penge på inden de næsten 3 år er gået?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-2-hvor-meget-kan-eller-skal-du-selv-betale-her-og-nu">2) Hvor meget kan eller skal du selv betale her og nu?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du er interesseret i at købe noget dyrere, som for eksempel en bil. Så vil de fleste låne selskaber og banker kræve, at du selv kommer med med en andel af købsprisen. På den måde sikre de sig selv imod det værditabet relateret til din andel.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du for eksempel vil købe en bil til 100.000 kroner, og selv betaler 25.000 kroner. Så er der større chance for, at banken kan sælge bilen, og hente de resterende 75.000 kroner hjem igen. Dine 25.000 kroner er altså automatisk afskrevet, i deres opgørelse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Dine 25.000 kroner er selvfølgelig kun gået tabt, hvis du ikke kan betale gælden tilbage, eller ikke kan sælge bilen til mere end købsprisen og pålagt renter. Dog vil man typisk antage, specielt hvis det er en nyere bil, at dit indskud er tabt så snart handlen er gennemført.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-3-hvor-store-er-renterne-og-gebyrene">3) Hvor store er renterne og gebyrene?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du optager et lån vil låne selskabet eller banken også gerne tjene nogle penge. Dette sker ved at de pålægger lånet en rente, et oprettelsesgebyr, eller på anden vis en form for mere-udgift ved at optage lånet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bør altid være opmærksom på hvor meget det koster at optage lånet, men også hvor meget du ender med at betale totalt efter renter. Lave renter på små lån gør typisk ikke den store forskel. Du skal typisk være mere opmærksom på højere renter eller højere beløb, da renterne hurtigere løber op her.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du kan finde en låne-beregner online, hvor du kan indtaste lånte beløb, rente og løbetid. Det kan være en god læring at lege med forskellige beløb, renter og løbetider. Sådan kan man få et indtryk af hvilken indflydelse det kan have på din økonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-4-hvordan-kan-du-afbetale-g-lden">4) Hvordan kan du afbetale dit lån?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste låne selskaber og banker sikre sig at du har råd til at optage lånet. Det gør de ved at få dig til at lave et budget, der viser hvad dine penge går til. Der er også nogle steder, hvis det er mindre lån, som kun tjekker om du er i RKI.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er som udgangspunkt en god plan at vide hvor pengene tages fra. At være opmærksom at du har pengene til rådighed, eller hvor du skal måske skal bruge færre penge i afbetalings-perioden. Det kan for eksempel være at du skal skære en bytur fra om måneden, eller spise lidt mindre take-away.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-5-hvilke-begr-nsninger-f-r-du-af-at-tage-l-net">5) Hvilke begrænsninger får du af at tage lånet?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når man optager et lån, så reservere man nogle penge fra ens fremtidige indtægt(er). Du tager altså penge ud af din din økonomi, og det tænker man ikke altid over, når man gerne vil købe noget her og nu. Hvis det er tilfældet, så sætter man en fælde for sig selv, når man pludselig mange pengene i fremtiden.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bør derfor lærer dig selv at være kritisk, både over hvad du låner til, men også hvad du potentielt går glip af i fremtiden. Det kan være at der er noget du gerne vil købe, men ikke har fundet den rigtige variant eller en pris du kan råde over. Så ville det være ærgerligt, hvis du fandt den perfekte udgave, men ikke kunne købe eller låne pengene.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Derfor er det sundt at være kritisk, både over for de ting man overvejer at købe, men også hvilke andre ting man er interesseret i at købe i fremtiden. Forholde sig til hvilken værdi det skaber i ens liv i forhold til købsprisen eller de månedlige afbetalinger.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-kan-du-spare-penge-p-at-oml-gge-dit-l-n">Kan du spare penge på at omlægge dit lån? </h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har flere lån fra forskellige steder, med forskellige renter, så kan du måske spare penge ved at omlægge lånene samme sted. Det kan være at du har banklån til boligen og et kreditlån til bilen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ikke kan vurdere, hvilket lån du skal prioritere, eller hvor hurtigt du kan blive gældsfri. Giver det måske mening at omlægge lånet, med en fast rente og løbetid. Sådan kan du sikre din afbetaling, vide hvornår du er ude af gælden, og måske spare nogle penge i renter.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal dog være opmærksom på, at det ikke er gratis at omlægge et lån. Derfor skal du være opmærksom på gamle og nye forhold, så du kan opveje fordele og ulemper. Det giver ikke altid mening at omlægge et lån, men det kan være værd at undersøge.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '10'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2022-11-08 22:20:07'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2022-11-08 21:20:07'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2022-12-16 00:04:29'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-15 23:04:29'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: '5-sporgsmal-optage-lan'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'draft'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'oekonomi',
						__cdata: 'Økonomi'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '67'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'lån'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_page_template'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'default'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Lån'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '61'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_estimated-reading-time-minutes'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '6'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_wordproof_timestamp'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Sådan udregner du din nettoformue ("Net Worth")',
					link: 'https://finansteori.dk/?p=11',
					pubDate: '',
					creator: {
						__prefix: 'dc',
						__cdata: 'alex'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=11'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>"Net Worth" er et engelsk udtryk for din nettoformue. Et udtryk for hvor mange penge du ville have, hvis du solgte alt du ejede lige nu, efter alt gæld er betalt. Her tager man udgangspunkt i ting der kan opgøres med en markedsværdi. Så man tager altså ikke højde for om du har en sofa der kan sælges til 15.000 kroner.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel: Hvis du har 50.000 kroner og låner 950.000 kroner til at købe et hus for 1.000.000 kroner. Så er din nettoformue kun dine 50.000 kroner, fordi de resterende 950.000 kroner ikke er dine. Som du abetaler på din gæld, så stiger din formue relateret tilsvarende.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har afbetalt alt gælden i huset, så ville din nettoformue svare til den fulde markedspris af dit hus. Her tager man normal udgangspunkt i en sidste handels pris (eller ejendomsvurdering), tilpasser prisen ud fra markeds udviklingen, frem for at spørge hvad folk reelt vil betale for dit hus.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kigger vi derimod på værdipapir, så kigger vi enten på lukkeprisen fra sidste handels dag. På den måde skal vi ikke tage stilling til hvordan markedet udvikler sig fra minut til minut. Hvis vi opgør din formue på en mandag, så ville vi teknisk set tage udgangspunkt i fredag aften.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-derfor-beregnes-nettoformue-ud-fra-markedpriserne">Derfor beregnes nettoformue ud fra markedpriserne</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>De fleste har på et eller andet tidspunkt undersøgt en kendt persons nettoformue ("Net Worth"). Uden rigtigt at tage forbehold for hvordan det er regnet ud. Den egentlige værdi af mennesker er meget svær at komme frem til, fordi ikke alting kan vurderes objektivt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For eksempel er det ikke lovkrav at oplyse økonomien i en enkeltmandsvirksomhed. Her kan vi ikke se hvad en person har ejerskab over i virksomheden. Er det derimod et ApS eller A/S, så kan vi se hvordan økonomien ser ud og estimere en værdi ud fra personens anslået ejerskab.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em><strong>Note:</strong> Du kan selvfølgelig altid beregne din egen nettoformue, da du har adgang til alle informationerne omkring dig selv. Dette er primært for at opgøre nettoformuen om andre, som ikke nødvendigvis oplyser deres egen nettoformue direkte. Det er en ligende model Forbes bruger til at udregne \'verdens rigeste personer\' listen.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Kigger vi derimod på aktier, så er der nogle regler for hvornår selskabet skal oplyse ejerskabet. I Europa skal selskabet oplyse alle ejere der ejer 5% af kapitalen eller stemmeretterne, for hver 5% (hver 10% i USA) de ejer af et selskab. Her har vi muligheden for at slå op hvilke selskaber en person har medejerskab i af værdi. Derfor laver man typisk kun statistik på rigere personer, da de har ejerskaber man kan tjekke op på.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har også mulighed for at se hvem der ejer hvilke ejendomme, med lidt tålmodighed. Vi kan se hvornår de har købt boligen og bruge tingskøddet til at se hvor meget de har betalt for huset. Det kan vi tilpasse ud fra markeds udviklingen siden købet. Vi kan dog ikke se om de har sat huset i stand, så medmindre de har fået lavet en offentlig ejendomsvurdering, kan vi kun lave en estimering.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-hvorfor-er-vores-nettoformue-relevant">Hvorfor er vores nettoformue relevant?</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I normale sammenhænge er vores nettoformue i bund og grund irrelevant. Hvis man ser bort fra samfunds hierarki og social selv indsigt selvfølgelig. Det er dog mindre irrelevant, hvis vi begynder at kigge på gæld faktorer eller økonomisk sikkerhed. Her er det vigtigt at kigge på nettoformue forbundet med aktiver, som for eksempel din bolig eller aktieportefølje.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du ejer en bolig, hvor gælden er afbetalt, så kan du låne penge imod boligens værdi. Du skal altså ikke have penge op af lommen, og du mister ikke dit hus, så længe du kan afbetale gælden. Da banken har høj sikkerhed i din boligs markedsværdi, kan du ofte opnå bedre vilkår (f.eks. renter) på lånet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu skal du huske at hvis du har et hus til 1.000.000 kroner og låner 800.000 kroner imod huset, så er du kun en nettoformue på 200.000 kroner. Du har dog 800.000 kroners mulighed for at købe aktiver (noget der generere indtægter), som på sigt kan forøge formuen.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Note: Dette er også grunden til at Mark Zuckerberg\'s personlige formue kan falde millioner på en eftermiddag</em>.<em> Hvis aktieprisen af Facebook falder et par procenter. Aktien falder måske kun et par dollars, men hvis du har 100.000 aktier, så er det </em>et<em> par dollars 100.000 gange.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu hvor du ved hvordan nettoformue fungere, så kender du måske flere millionære end antaget. Bare husk at de nok ikke har millioner på kontoen. På samme måde fejltolker folk, at de mega-rige, har milliarder på kontoen. Langt størstedelen af deres formue er bundet op i aktiver som ejendomme eller aktier.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '11'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2022-12-04 21:05:21'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '0000-00-00 00:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2022-12-04 21:05:21'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-04 20:05:21'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'nettoformue'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'draft'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'oekonomi',
						__cdata: 'Økonomi'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '70'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Nettoformue'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_contentai_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:4:{s:9:"wordCount";s:3:"100";s:9:"linkCount";s:1:"0";s:12:"headingCount";s:3:"100";s:10:"mediaCount";s:5:"62.22";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'nettoformue'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '61'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_estimated-reading-time-minutes'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '5'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_wordproof_timestamp'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Obligationer - Sådan styres markedet af gæld',
					link: 'https://finansteori.dk/?p=14',
					pubDate: 'Thu, 22 Dec 2022 01:05:48 +0000',
					creator: {
						__prefix: 'dc',
						__cdata: 'alex'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=14'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Renter er typisk forbundet med omkostningen ved gæld. Det er nemt at tro gæld kun påvirker en, når man låner penge. Renter er med til at påvirke inflation, hvor dyre ting er og hvor mange penge der bliver frigivet i markedscirkulationen. Der er i hovedtræk 3 lag af renter, som hver påvirker dig og markedet forskelligt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>Statsobligationer - penge kommer ikke helt af ingenting</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det første lag er nationale renter af obligationer. Når en stat har brug for penge, så kan de ikke bare skabe penge ud af den blå luft på den måde de fleste tror. Det fungere ved at staten udsteder obligationer, som risikovillige investorer køber, imod en fastsat rente i en fastsat periode.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give et eksempel; så skal staten bruge 1,5 milliard kroner til en motorvej. Staten udsteder et 10 års statsobligationer med en rente på 3%. Financielle institutioner som banker og pensionsordninger køber gælden fra staten. Efterfølgende skal staten betale 3% af 1,5 milliard om året i 10 år, hvor efter de 1,5 milliard skal tilbagebetales.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:quote -->\r\n<blockquote class="wp-block-quote"><!-- wp:paragraph -->\r\n<p>Hvis du er lidt matematisk, så koster lånet på 1,5 milliard staten (1.500.000.000*0,03=) 45.000.000 kroner om året. Hvilket svarer til 450.000.000 kroner tilbagebetalt til investorerne over 10 år, ud over det egentlige lånebeløb på 1,5 milliard.</p>\r\n<!-- /wp:paragraph --></blockquote>\r\n<!-- /wp:quote -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Staten kan også vælge at tilbagekæbe obligationer til markedspris, hvilket typisk er dyrere, hvis renten er favorable for investoren. Pengene til at tilbagebetale disse obligationer kommer fra dig og mig gennem vores skatter og afgifter. Derfor anses statsobligationer som en god investering, fordi pengene i sidste ende er opkrævet af befolkningen - inklusiv investoren af obligationen, hvis de betaler skat i landet obligationen er udstedt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2>"Drømme" obligationer - Når private køber fast egendom</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det andet lag er privatiserede obligationer mellem et finansielt institut og en virksomhed eller privatperson. Det kan for eksempel være Hr og Fru Jensen der vil købe et hus, men de har ikke råd et betale huset kontant. De arrangere derfor et Zoom møde med deres bankrådgiver, som vurderes deres årlige indtægter, sikre en udbetaling, og så sælger deres gæld til en realkreditforening.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er derfor du nogengange høre om et realkreditlån på kurs 97, det er fordi du kun får 97% af de lånte penge udbetalt. Hvis familien Jensen skal bruge 1 million kroner, så skal de altså låne 1,03 millioner for at have 1 million kroner til købet af huset. Alt efter hvad type obligationslån man sælger, så skal man på et eller andet tidspunkt have renten justeret efter markedsrenten.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du sælger et F5 realkreditlån til 0,6% rente, så skal du altså betale 0,6% af lånet i 5 år, hvorefter du skal refinansiere dit realkreditlån ved at sælge nye obligationer der køber din nuværende gæld, forhåbentligt med en lavere rente. Du kan også risikere at renten bliver højere.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '14'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2022-12-22 02:05:48'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-22 01:05:48'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2022-12-22 02:05:48'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-22 01:05:48'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: '__trashed'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'trash'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'artikel',
						__cdata: 'Artikel'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '56'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'Rente'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_estimated-reading-time-minutes'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '3'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_wordproof_timestamp'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_trash_meta_status'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'draft'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_trash_meta_time'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1671671148'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_wp_desired_post_slug'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						}
					]
				},
				{
					title: 'Få styr på din privatøkonomi med disse 3 principper',
					link: 'https://finansteori.dk/?p=15',
					pubDate: '',
					creator: {
						__prefix: 'dc',
						__cdata: 'alex'
					},
					guid: {
						_isPermaLink: 'false',
						__text: 'https://finansteori.dk/?p=15'
					},
					description: '',
					encoded: [
						{
							__prefix: 'content',
							__cdata:
								'<!-- wp:paragraph -->\r\n<p>Privatøkonomi er en kategorisering af pengene i dit liv, både dine indtægter, udgifter eller gæld. Ved at få styr på din privatøkonomi, har du muligheden for at forbedre din livskvalitet, og sikre dig imod uventede ændringer i din økonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du kan finde en måde, at få styr på din pengestrøm, så kan du undgå mange økonomiske problemer. Det kan give dig et overblik over din livsstil, så du kan justere dine udgifter tilsvarende din indtægter. En god måde at holde sig selv i skak og undgå livsstils inflation.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I den her artikel går vi i dybden med 3 principper, som kan hjælpe dig med at få kontrol over din privatøkonomi. Du behøver ikke at være god til matematik, for at lærer fra denne artikel.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:list {"ordered":true} -->\r\n<ol><!-- wp:list-item -->\r\n<li>Kend dine indtægtskilder</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Vær opmærksom på alle dine udgifter</li>\r\n<!-- /wp:list-item -->\r\n\r\n<!-- wp:list-item -->\r\n<li>Kontroller din privatøkonomi med et budget</li>\r\n<!-- /wp:list-item --></ol>\r\n<!-- /wp:list -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-kend-dine-indt-gtskilder1">Kend dine indtægtskilder</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at kende dine omstændigheder, skal du først kende dine begrænsninger. Det kræver penge på kontoen at betale udgifter eller afbetale lån, derfor kan vi afgøre at indtægter er vores begrænsning rent økonomisk. I danmark har vi heldigvis a-kasse og kontanthjælp, men det dækker kun basale udgifter. Der er ikke mange penge til sjov og fornøjelse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du bør som udgangspunkt forholde dig til faste og regelmæssige indtægter, som for eksempel løn fra en arbejdsgiver eller eget firma. Det giver ikke mening at betragte bonusser, specielt hvis den er variabel. Indtægtskilder er altså alle former for indbetalinger, der ikke ikke kun sker 1 gang. Du kan altså ikke betragte arv, forsikringspræmier eller gambling som indtægtskilder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-husk-at-tr-kke-skat-fra">Husk at trække skat fra</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>I danmark bliver du beskattet af nærmest alle former for indtægter. Det er svært at bruge penge man skylder til staten, derfor er det vigtigt at kigge på indtægter efter skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For eksempel, hvis du tjener 30.000 kroner før skat, men kun har 20.000 kroner efter skat, så er der hele 10.000 kroner du ikke har adgang til. Du er derfor nødt til at forholde dig til de 20.000 kroner til forbrug, ellers risikere du at ødelægge din privatøkonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Skat og fradrag er et komplekst emne at dække. Det vil derfor blive forklaret i sin egen artikel. Du kan som start kigge på din lønseddel, der har du den basale udregning, og kan se hvad du har udbetalt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-s">Vær opmærksom på alle dine udgifter</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har opgjort dine indtægter, og fundet dine økonomiske begrænsninger. Så er det tid til at kigge på alle dine udgifter, så du kan danne dig et overblik, over hvor mange penge der går ind og ud af din konto(er). Her er det en god start at skrive alle udgifterne op på en liste efter kategori og løbetider. Det kan for eksempel se således ud:</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Postering</td><td class="has-text-align-right" data-align="right">Beløb</td><td class="has-text-align-center" data-align="center">Interval</td><td class="has-text-align-right" data-align="right">Mdr</td></tr><tr><td>Bolig/Husleje</td><td class="has-text-align-right" data-align="right">5.000</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">5.000</td></tr><tr><td>Boligforsirking</td><td class="has-text-align-right" data-align="right">3.600</td><td class="has-text-align-center" data-align="center">3</td><td class="has-text-align-right" data-align="right">1.200</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>For at give lidt uddybning, så forholder vi os til selve beløbet på posteringen. Herefter kigger vi på hvor ofte den regning skal betales, og så dividere det op i månedsbeløb. Sådan får du et godt overblik over dine totale månedlige udgifter. Hvordan din privatøkonomi ser ud.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-i">Vær kritisk om alle udgiftsposter er relevante</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er vigtigt at du starter ud med en fuldkommen liste over alle dine faste udgifter. Hvis det er første gang du laver en liste med udgifter, så kan det være en fordel også at kigge på dine variable udgifter også. Danne dig et overblik over din levestandard og egentlige levevilkår.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du er færdig med at lave din liste, så kommer den hårde del. Nu skal du være kritisk overfor dine egne pengevaner, og finde ud af hvad du har brug for eller kan undvære.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan for eksempel være at nedgradere dit mobil abonnement, hvis du ikke udnytter alle fordelene inkluderet. Det kan være at skifte spise tur i byen ud med noget hjemmelavet mad, da 350 kroner måske svare til 4-6 dages hjemmelavet måltider, hvis man er lidt opmærksom på priserne.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-u">Undgå at din privatøkonomi oplever livsstilsinflation</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Livsstilsinflation er et udtryk for når udgifterne følger med indtægterne op, men ikke nødvendigvis kan håndtere at indtægterne falder. Hvis du automatisk eller ubevidst får dyrere købsvaner med lønstigningerne, så vil du automatisk ende i en situation, hvor du heletiden glæder dig til næste lønforhøjelse.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det kan du hjælpe dig selv med at begrænse, ved at have nogle faste rammer for udgifter, både de faste og variable. En måde at holde styr på, at du ikke ubevidst forhøjer din levestandard, bare fordi du har råd til det. Ingen grund til at risikere fremtiden med en dårlig privatøkonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det betyder ikke at du skal begrænse dig selv unødvendigt. Hvis du har en kærlighed for biler, så kan det måske være en luksus for dig med en større bil. Du skal bare være opmærksom på ikke at købe en større bil, fordi du har råd til det, uden egentligt at have et behov for det.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-k">Kontroller din privatøkonomi med et budget</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har styr på dine indtægter og udgifter, så er det tid til at skabe et visuelt overblik og et regelsæt. En måde at se hvordan din nuværende situation ser ud, hvordan fremtidige ændringer påvirker den, og hvilke regler du har for din privatøkonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her skal du forstå regler mere som retningslinjer for dig selv, og ikke definitioner der begrænser eller bestemmer over dig, medmindre du har et problem med at håndtere din økonomi - så kan det måske være en fordel.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-i1">Sådan organisere du et budget</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Et budget er lidt ligesom at få en indkøbsliste og nogle penge, og så får du lov til at beholde hvad der er tilbage. Først så skal vi have nogle penge at købe for, så vi kan vurdere hvad vi har råd til.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her giver det kun mening at forholde os til stabile indtægter, som for eksempel fast løn eller SU. Husk at opgive indtægterne efter skat, så du har retsvisende tal at forholde dig til i budgettet.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Postering</td><td class="has-text-align-right" data-align="right">Beløb</td><td class="has-text-align-center" data-align="center">Interval</td><td class="has-text-align-right" data-align="right">Mdr</td></tr><tr><td>Løn fra A (Efter skat)</td><td class="has-text-align-right" data-align="right">20.000</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">20.000</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu ved du hvor mange penge du har at gøre godt med. Nu er det tid til at tilføje alle de faste udgifter. Hvis du vil have lidt mere information ud af tallene, så kan du tilføje en kolonne der opgøre saldoen løbende med hver postering. <em>I eksemplet opgøre vi saldoen ved at trække fra indtægterne, men du kan også lægge udgifterne sammen løbende, og så sammenligne dem til sidst.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Postering</td><td class="has-text-align-right" data-align="right">Beløb</td><td class="has-text-align-center" data-align="center">Interval</td><td class="has-text-align-right" data-align="right">Mdr</td><td class="has-text-align-right" data-align="right">Saldo</td></tr><tr><td>Bolig/Husleje</td><td class="has-text-align-right" data-align="right">5.000</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">5.000</td><td class="has-text-align-right" data-align="right">15.000</td></tr><tr><td>Boligforsikring</td><td class="has-text-align-right" data-align="right">3.600</td><td class="has-text-align-center" data-align="center">3</td><td class="has-text-align-right" data-align="right">1.200</td><td class="has-text-align-right" data-align="right">13.500</td></tr><tr><td>Internet</td><td class="has-text-align-right" data-align="right">350</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">350</td><td class="has-text-align-right" data-align="right">13.150</td></tr><tr><td>Aconto (el, vand, varme)</td><td class="has-text-align-right" data-align="right">3.200</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">3.200</td><td class="has-text-align-right" data-align="right">9.950</td></tr><tr><td>Mobil abb.</td><td class="has-text-align-right" data-align="right">99</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">99</td><td class="has-text-align-right" data-align="right">9.851</td></tr><tr><td>...</td><td class="has-text-align-right" data-align="right"></td><td class="has-text-align-center" data-align="center"></td><td class="has-text-align-right" data-align="right"></td><td class="has-text-align-right" data-align="right"><em>4.600</em></td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Tænker du forstår idéen nu. Når du har opgjort alle dine faste udgifter, så står du tilbage med dit egentlige rådighedsbeløb. Penge du kan bruge på mad, underholdning, og brændstof hvis du har en bil. Alle de ting du ikke skal betale en fast ydelse til, for at have adgang til eller rådighed over.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-k1">Visualiser dine variable omkostninger</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu kan du begynde at sætte nogle regler (retninglinjer) op for dig selv. En måde at fortælle dig selv, hvordan du sørger for, at have råd til alting. Være sikker på at du har råd til mad hele måneden, kan fylde brændstof på bilen, eller se venner og familie. Også kaldet at have luft i privatøkonomien til fornøjelser.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Disse posteringer hører normaltvist ikke til på et budget, da det er variable udgifter. Altså ting du kan vælge at købe, springe over til næste måned, eller bruge penge på i forskellige mængder hver måned.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:table -->\r\n<figure class="wp-block-table"><table><tbody><tr><td>Postering</td><td class="has-text-align-right" data-align="right">Beløb</td><td class="has-text-align-center" data-align="center">Interval</td><td class="has-text-align-right" data-align="right">Mdr</td><td class="has-text-align-right" data-align="right">Saldo</td></tr><tr><td>Madbudget</td><td class="has-text-align-right" data-align="right">2.500</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">2.500</td><td class="has-text-align-right" data-align="right">2.400</td></tr><tr><td>Brændstof</td><td class="has-text-align-right" data-align="right">800</td><td class="has-text-align-center" data-align="center">1</td><td class="has-text-align-right" data-align="right">800</td><td class="has-text-align-right" data-align="right">1.600</td></tr><tr><td>Spise ude</td><td class="has-text-align-right" data-align="right">1.800</td><td class="has-text-align-center" data-align="center">3</td><td class="has-text-align-right" data-align="right">600</td><td class="has-text-align-right" data-align="right">1.000</td></tr></tbody></table></figure>\r\n<!-- /wp:table -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Nu har vi fordelt vores forventede forbrug på variable udgifter. Hvis vi tager udgangspunkt i at der er 31 dage på en måned, så har vi altså 2.500/31= ~80 kroner til mad hver dag.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Vi har dog også valgt at vi gerne vil spise ude for omkring 1.200 kroner hvert kvartal, hvilket kan opveje lidt på de 80 kroner til mad. Her i eksemplet er den sat over 3 måneder, fordi så kan vi spare op til det sideløbende. Det hjælper os også med at definere hvor meget vi har råd til at tage ud at spise, uden at ødelægge vores privatøkonomi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er svært at afgøre på forhånd om det er en tur på mcd for 165 kroner eller en tur på Noma for 1.600 kroner. På den her måde kan vi give os selv lov, uden at bekymre os om vi har råd.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du har bemærket det, så står der 1.000 kroner tilbage på kontoen, her vil være et godt sted at starte en opsparing. En måde at sikre dig selv imod ukendte udgifter i fremtiden, også selv om du kan trække nogle penge ud fra "spise ude" posten.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p><em>Du bør altid sikre din privatøkonomi ved ikke at bruge alle dine penge mellem lønningerne.</em></p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading -->\r\n<h2 id="htoc-f">Sådan sikre du din privatøkonomi ved lønforhøjelse imod livsstilsinflation</h2>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Ovenfor har du 3 principper der kan hjælpe dig med at få styr på din privatøkonomi. Du er også blevet gjort opmærksom på udtrykket livsstilsinflation. Så hvordan undgår du hæve udgifterne med lønforhøjelserne, og dertil styrker din økonomi?</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det er her du skal begynde at sætte dig ind i de grundlæggende principper for formue forvaltning. Arten at beholde sine penge på længere sigt. Her får du et par punkter at tage til overvejelse, når du får en lønforhøjelse og derved flere penge på kontoen efter udgifterne er betalt.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-s1">Start en opsparing til krise situationer</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Det bedste sted at starte, er ved at sikre sig selv imod økonomiske udfordringer. Det kan for eksempel være en konto der indeholder tilsvarende 3 måneders løn efter skat.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>På den måde sikre du dig selv imod en eventuel opsigelse, ved at have mere løbetid, til at finde et nyt arbejde. Hvis du har 3-6 måneders opsigelse, så har du altså råd til 6-9 måneder med sådan en opsparing.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Hvis du starter sådan en opsparing, anbefales du at tage en samtale med din bank. Så de kan hjælpe dig med at have pengene på en konto uden negative renter eller andre gebyrer.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Din bankrådgiver kan måske også komme med forslag til, hvordan du kan forbedre din privatøkonomi, hvis du på et tidspunkt vil låne penge i banken.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:heading {"level":3} -->\r\n<h3 id="htoc-b">Invester penge i aktier og fonde</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Når du har nok penge til at kan dække dig selv imod økonomiske udfordringer, så er det tid til at forsvare økonomien imod handelsmarkedet. Det gør du nemmest ved at investere i markedet, hvilket for de fleste ender med at blive gjort gennem aktier og fonder.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Her på siden kan du blive klogere på at investere i både aktier og fonder, men hvis du vil i gang uden at sætte dig ind i for meget på forhånd. Anbefalingen at investere i passive investeringsfonde, som investere pengene ud fra nogle regler eller retningslinjer. Det kan for eksempel være grøn energi, infrastruktur eller teknologi.</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:paragraph -->\r\n<p>Du skal bare være opmærksom på at alle former for investering bære risikoen for at tabe penge. Du bør derfor altid læse op på dine investeringer og kende din risiko, før du investere rigtige penge - og kun penge du kan undvære.</p>\r\n<!-- /wp:paragraph -->'
						},
						{
							__prefix: 'excerpt',
							__cdata: ''
						}
					],
					post_id: {
						__prefix: 'wp',
						__text: '15'
					},
					post_date: {
						__prefix: 'wp',
						__cdata: '2022-12-20 23:45:12'
					},
					post_date_gmt: {
						__prefix: 'wp',
						__cdata: '0000-00-00 00:00:00'
					},
					post_modified: {
						__prefix: 'wp',
						__cdata: '2022-12-20 23:45:12'
					},
					post_modified_gmt: {
						__prefix: 'wp',
						__cdata: '2022-12-20 22:45:12'
					},
					comment_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					ping_status: {
						__prefix: 'wp',
						__cdata: 'closed'
					},
					post_name: {
						__prefix: 'wp',
						__cdata: 'privatokonomi-3-principper'
					},
					status: {
						__prefix: 'wp',
						__cdata: 'draft'
					},
					post_parent: {
						__prefix: 'wp',
						__text: '0'
					},
					menu_order: {
						__prefix: 'wp',
						__text: '0'
					},
					post_type: {
						__prefix: 'wp',
						__cdata: 'post'
					},
					post_password: {
						__prefix: 'wp',
						__cdata: ''
					},
					is_sticky: {
						__prefix: 'wp',
						__text: '0'
					},
					category: {
						_domain: 'category',
						_nicename: 'oekonomi',
						__cdata: 'Økonomi'
					},
					postmeta: [
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_seo_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '73'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_focus_keyword'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'privatøkonomi'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_edit_last'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '1'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: 'rank_math_contentai_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:4:{s:9:"wordCount";s:3:"100";s:9:"linkCount";s:1:"0";s:12:"headingCount";s:3:"100";s:10:"mediaCount";s:5:"62.22";}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_uagb_toc_options'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata:
									'a:2:{s:17:"_uagb_toc_version";s:10:"1668812959";s:18:"_uagb_toc_headings";a:2:{i:0;a:4:{s:5:"level";i:2;s:2:"id";s:23:"kend-dine-indtgtskilder";s:7:"content";s:25:"Kend dine indtægtskilder";s:5:"depth";i:2;}i:1;a:4:{s:5:"level";i:3;s:2:"id";s:22:"husk-at-trkke-skat-fra";s:7:"content";s:24:"Husk at trække skat fra";s:5:"depth";i:3;}}}'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_primary_category'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '12'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_focuskw'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: 'privatøkonomi'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_linkdex'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '59'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_content_score'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '90'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_estimated-reading-time-minutes'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: '11'
							},
							__prefix: 'wp'
						},
						{
							meta_key: {
								__prefix: 'wp',
								__cdata: '_yoast_wpseo_wordproof_timestamp'
							},
							meta_value: {
								__prefix: 'wp',
								__cdata: ''
							},
							__prefix: 'wp'
						}
					]
				}
			]
		},
		'_xmlns:excerpt': 'http://wordpress.org/export/1.2/excerpt/',
		'_xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
		'_xmlns:wfw': 'http://wellformedweb.org/CommentAPI/',
		'_xmlns:dc': 'http://purl.org/dc/elements/1.1/',
		'_xmlns:wp': 'http://wordpress.org/export/1.2/',
		_version: '2.0'
	}
};
