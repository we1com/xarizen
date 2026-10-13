const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
/* ===== ПЕРЕВОДЫ: ru / en / kk ===== */
const L={
ru:{title:'XARIZMA — караоке-клуб',metro:'м. Лубянка',halls:'Наши залы',book:'Забронировать',
 kicker:'Арендуй караоке-зал до 10 человек',h1:'Возьми <br class="lg:hidden">алкоголь<br>и еду с собой',
 ok1:'Если хочешь попеть и оторваться',ok2:'Отдохнуть после работы',ok3:'Хорошо провести время',cta:'Забронировать онлайн',
 f1:'Профессиональное караоке AST-50',f2:'Без пробкового сбора',f3:'Без депозита',f4:'Скидка в День Рождения',
 halls_sub:'Ознакомьтесь с атмосферой праздника',of:'из',m2:'м²',cap:'до {n}-ти человек',prev:'Назад',next:'Вперёд',
 adv_t:'Наши преимущества',adv_sub:'Почему гости выбирают нас',book_room:'Забронировать зал',
 adv:[['Никакого дресс-контроля',[]],['~ 40.000 песен в сет листе',['Более 50,000 студийных фонограмм','Ежемесячное обновление репертуара']],['Индивидуальные залы',['Только Ваша компания']],['Без депозита',['Мы не берем депозит','Оплата происходит за человека в час']],['В самом центре Москвы',['м. Лубянка']],['Нет пробкового сбора',['Можно приносить с собой еду, напитки и алкоголь без пробкового сбора']]],
 how_t:'Как забронировать зал?',how_sub:'Бронирование по шагам в чат-боте',
 steps:['Перейти в чат-бот fh_harizma_bot','Выбрать количество человек','Выбрать количество часов посещения','Выбрать дату','Выбрать время старта брони','Выбрать зал','Оставить контакт','Проверить детали брони','Получить подтверждение'],
 mocks:[{l:'Свободные залы:',o:['Hall №1 · до 20 чел.','Hall №2 · до 14 чел.']},{l:'Ваш номер телефона?',o:['Поделиться номером']},{l:'Зал №1, 19 Янв, 2:00, 2 часа',o:['Подтвердить','Изменить']},{l:'Бронь подтверждена. Ждем вас!',o:['В меню']}],
 faq_t:'Вопросы и ответы',faq_sub:'Мы подготовили ответы на часто задаваемые вопросы',
 faq:[['Какое у вас караоке?','Более 50,000 студийных фонограмм. Из них 80% — оригинальные минусовки в качестве PRO (mp3 – WAV). Ежемесячное обновление репертуара. Более 10,000 специальных фонограмм в сопровождении оригинальных видеоклипов.'],['Есть ли у вас английские песни?','Да, в каталоге много англоязычных песен — от классики до свежих хитов.'],['Можно ли подключить телефон?','Да, телефон можно подключить к системе зала. Уточните детали у администратора.'],['Сколько микрофонов в каждом зале?','В каждом зале есть несколько микрофонов — их количество зависит от размера зала.'],['Есть ли оплата картой?','Да, оплата возможна как наличными, так и банковской картой.'],['Можно приносить с собой алкоголь и еду?','Да, пробковый сбор не взимается — приносите еду, напитки и алкоголь с собой.'],['Как рассчитывается стоимость?','Оплата происходит за человека в час. Депозит не требуется.']],
 slip:"В нашем заведении Бельгийский ковролин. На входе выдают <span class='text-[#FF9900]'>индивидуально запакованные тапочки,</span> в которые необходимо переобуться.",
 hours:'Пн — Вс круглосуточно',addr:'м. Лубянка, ул. Сретенский переулок, 4',route:'Построить маршрут',tg:'Написать в Telegram',up:'Наверх'},
en:{title:'XARIZMA — karaoke club',metro:'Lubyanka metro',halls:'Our halls',book:'Book now',
 kicker:'Rent a karaoke room for up to 10 people',h1:'Bring your own<br>drinks and food',
 ok1:'Want to sing and cut loose',ok2:'Unwind after work',ok3:'Have a great time',cta:'Book online',
 f1:'Professional AST-50 karaoke',f2:'No corkage fee',f3:'No deposit',f4:'Birthday discount',
 halls_sub:'Feel the party atmosphere',of:'of',m2:'m²',cap:'up to {n} guests',prev:'Back',next:'Next',
 adv_t:'Our advantages',adv_sub:'Why guests choose us',book_room:'Book a room',
 adv:[['No dress code',[]],['~ 40,000 songs in the setlist',['50,000+ studio backing tracks','Repertoire updated monthly']],['Private rooms',['Only your group']],['No deposit',['We take no deposit','You pay per person per hour']],['In the very heart of Moscow',['Lubyanka metro']],['No corkage fee',['Bring your own food, drinks and alcohol — no corkage fee']]],
 how_t:'How to book a room?',how_sub:'Step-by-step booking in our chat bot',
 steps:['Open the chat bot fh_harizma_bot','Choose the number of guests','Choose how many hours','Pick a date','Pick a start time','Choose a room','Leave your contact','Check the booking details','Get your confirmation'],
 mocks:[{l:'Available rooms:',o:['Hall №1 · up to 20 guests','Hall №2 · up to 14 guests']},{l:'Your phone number?',o:['Share my number']},{l:'Room №1, 19 Jan, 2:00, 2 hours',o:['Confirm','Edit']},{l:'Booking confirmed. See you soon!',o:['Menu']}],
 faq_t:'Questions & answers',faq_sub:'Answers to the questions we hear most often',
 faq:[['What karaoke system do you have?','50,000+ studio backing tracks, 80% of them original PRO-quality instrumentals (mp3 – WAV). The repertoire is updated every month. 10,000+ special tracks come with the original music videos.'],['Do you have English songs?','Yes, the catalog has plenty of English-language songs, from classics to the latest hits.'],['Can I connect my phone?','Yes, you can connect your phone to the room system. Ask the administrator for details.'],['How many microphones are in each room?','Each room has several microphones; the number depends on the room size.'],['Can I pay by card?','Yes, you can pay by cash or bank card.'],['Can I bring my own alcohol and food?','Yes, there is no corkage fee — bring food, drinks and alcohol with you.'],['How is the price calculated?','You pay per person per hour. No deposit is required.']],
 slip:"Our venue has Belgian carpet. At the entrance you get <span class='text-[#FF9900]'>individually wrapped slippers</span> to change into.",
 hours:'Mon — Sun, open 24/7',addr:'Lubyanka metro, 4 Sretensky Lane',route:'Get directions',tg:'Message us on Telegram',up:'Back to top'},
kk:{title:'XARIZMA — караоке-клуб',metro:'Лубянка м.',halls:'Біздің залдар',book:'Брондау',
 kicker:'Караоке-залды 10 адамға дейін жалға ал',h1:'Алкоголь мен<br>тамақты өзіңмен ал',
 ok1:'Ән айтып, көңіл көтергің келсе',ok2:'Жұмыстан кейін демал',ok3:'Уақытты жақсы өткіз',cta:'Онлайн брондау',
 f1:'Кәсіби AST-50 караоке',f2:'Қосымша алымсыз',f3:'Депозитсіз',f4:'Туған күнге жеңілдік',
 halls_sub:'Мереке атмосферасымен танысыңыз',of:'/',m2:'м²',cap:'{n} адамға дейін',prev:'Артқа',next:'Алға',
 adv_t:'Біздің артықшылықтар',adv_sub:'Қонақтар неге бізді таңдайды',book_room:'Залды брондау',
 adv:[['Дресс-код жоқ',[]],['Тізімде ~ 40 000 ән',['50 000-нан астам студиялық фонограмма','Репертуар ай сайын жаңарады']],['Жеке залдар',['Тек сіздің компания']],['Депозитсіз',['Біз депозит алмаймыз','Төлем сағатына бір адамға есептеледі']],['Мәскеудің дәл орталығында',['Лубянка метросы']],['Пробка жинағы жоқ',['Тамақ, сусын және алкогольді өзіңізбен алып келуге болады, қосымша алымсыз']]],
 how_t:'Залды қалай брондауға болады?',how_sub:'Чат-боттағы қадамдық брондау',
 steps:['fh_harizma_bot чат-ботына өту','Адам санын таңдау','Келу сағатының санын таңдау','Күнді таңдау','Брондау басталу уақытын таңдау','Залды таңдау','Байланыс деректерін қалдыру','Брон мәліметтерін тексеру','Растау алу'],
 mocks:[{l:'Бос залдар:',o:['Hall №1 · 20 адамға дейін','Hall №2 · 14 адамға дейін']},{l:'Телефон нөміріңіз?',o:['Нөмірді бөлісу']},{l:'№1 зал, 19 қаң., 2:00, 2 сағат',o:['Растау','Өзгерту']},{l:'Брон расталды. Сізді күтеміз!',o:['Мәзірге']}],
 faq_t:'Сұрақтар мен жауаптар',faq_sub:'Жиі қойылатын сұрақтарға жауаптар дайындадық',
 faq:[['Сіздерде қандай караоке бар?','50 000-нан астам студиялық фонограмма. Оның 80%-ы PRO сапасындағы (mp3 – WAV) түпнұсқа минусовкалар. Репертуар ай сайын жаңарады. Түпнұсқа бейнеклиптері бар 10 000-нан астам арнайы фонограмма.'],['Ағылшын әндері бар ма?','Иә, каталогта классикадан жаңа хиттерге дейін ағылшын әндері көп.'],['Телефонды қосуға бола ма?','Иә, телефонды зал жүйесіне қосуға болады. Толығырақ әкімшіден сұраңыз.'],['Әр залда қанша микрофон бар?','Әр залда бірнеше микрофон бар, саны зал өлшеміне байланысты.'],['Картамен төлеуге бола ма?','Иә, төлем қолма-қол ақшамен де, банк картасымен де қабылданады.'],['Өзімізбен алкоголь мен тамақ алып келуге бола ма?','Иә, пробка жинағы алынбайды — тамақ, сусын және алкогольді өзіңізбен алып келіңіз.'],['Құны қалай есептеледі?','Төлем сағатына бір адамға есептеледі. Депозит қажет емес.']],
 slip:"Біздің мекемеде бельгиялық кілем төселген. Кіреберісте <span class='text-[#FF9900]'>жеке оралған тәпішке</span> беріледі, соны киіп алу керек.",
 hours:'Дс — Жс, тәулік бойы',addr:'Лубянка м., Сретенский тұйығы, 4',route:'Маршрут салу',tg:'Telegram-ға жазу',up:'Жоғарыға'}
};
let lang='ru';
try{lang=localStorage.getItem('lang')||((navigator.language||'').slice(0,2)==='kk'?'kk':(navigator.language||'').slice(0,2)==='en'?'en':'ru')}catch(e){}
const t=k=>L[lang][k]??L.ru[k];

/* ===== ЗАЛЫ ===== */
const halls=[{n:'HALL №1',a:40,c:20},{n:'HALL №2',a:32,c:14},{n:'HALL №3',a:28,c:10},{n:'HALL №5',a:55,c:25}];
const photos=[1,2,3,4,5].map(i=>`img/hall${i}.jpg`);
halls.forEach(h=>h.imgs=photos); // для каждого зала можно задать свои 5 фото
let hi=0,si=0,fo=0;
function hall(){
 const h=halls[hi];
 $('#tabs').innerHTML=halls.map((x,i)=>`<button role="tab" class="tab ${i==hi?'on':''}" data-i="${i}">${x.n}</button>`).join('');
 $('#hn').textContent='№ '+h.n.split('№')[1];$('#ha').textContent=h.a+' '+t('m2');$('#hc').textContent=t('cap').replace('{n}',h.c);
 slide();
}
function slide(){
 const h=halls[hi];
 $('#main').style.background=`url(${h.imgs[si]}) center/cover`;
 $('#hi').textContent=si+1;
 $('#thumbs').innerHTML=[0,1,2,3,4].map(i=>`<div class="thumb h-20 md:h-28 ${i==si?'on':''}" data-i="${i}" style="background:url(${h.imgs[i]}) center/cover" role="button" aria-label="${i+1}"></div>`).join('');
}
$('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(b){hi=+b.dataset.i;si=0;hall()}};
$('#thumbs').onclick=e=>{const b=e.target.closest('.thumb');if(b){si=+b.dataset.i;slide()}};
$('#hp').onclick=()=>{si=(si+4)%5;slide()};$('#hnx').onclick=()=>{si=(si+1)%5;slide()};

/* ===== ПРЕИМУЩЕСТВА ===== */
const advIcons=['img/icons/shirt.png','img/icons/disc.png','img/icons/dancers.png','img/icons/money.png','img/icons/target.png','img/icons/bottle.png'];
function advR(){
 $('#adv').innerHTML=t('adv').map((a,i)=>`<div class="card p-6 min-h-[170px]"><img src="${advIcons[i]}" alt="" class="w-12 h-12 mb-5"><h3 class="font-extrabold text-sm mb-3">${a[0]}</h3>${a[1].map(x=>`<p class="text-xs text-white/70 flex gap-2 mb-1"><span class="text-[#FF9900]">✓</span>${x}</p>`).join('')}</div>`).join('');
}

/* ===== ШАГИ БРОНИРОВАНИЯ ===== */
const stepIcons=['img/icons/login.png','img/icons/people.png','img/icons/clock.png','img/icons/calendar.png','img/icons/stopwatch.png','img/icons/dancers.png','img/icons/phone.png','img/icons/target.png','img/icons/bottle.png'];
const stepShots=['img/steps/s1.jpg','img/steps/s2.jpg','img/steps/s3.jpg','img/steps/s4.jpg','img/steps/s5.jpg'];
function stepsR(){
 const mk=t('mocks');
 $('#track').innerHTML=t('steps').map((s,i)=>{
  const shot=stepShots[i];
  const inner=shot?`<img src="${shot}" alt="${i+1}" class="w-full h-full object-cover object-top">`:`<div class="text-[11px] text-center bg-[#4a90c2] -m-[10px] mb-2 p-2 text-white">harizma_karaoke_bot</div><div class="pt-3"><div class="b">${mk[i-5].l}</div>${mk[i-5].o.map(o=>`<div class="opt">${o}</div>`).join('')}</div>`;
  return `<div class="phone" data-i="${i}"${shot?' style="padding:0;overflow:hidden"':''}>${inner}</div>`;
 }).join('');
 step();
}
function step(){
 $$('.phone').forEach((p,i)=>p.classList.toggle('on',i==si));
 const p=$('.phone'),pw=p?p.offsetWidth:210,w=pw+24,box=$('#track').parentElement.clientWidth,d=document.documentElement.clientWidth>=1024;
 $('#track').style.transform=`translateX(${d?Math.min(0,box/2-pw/2-si*w):-si*w}px)`;
 $('#si').textContent=si+1;
 $('#sic').innerHTML=`<img src="${stepIcons[si]}" alt="" class="w-10 h-10">`;
 $('#stx').textContent=t('steps')[si];
}
$('#sp').onclick=()=>{si=Math.max(0,si-1);step()};$('#sn').onclick=()=>{si=Math.min(8,si+1);step()};
$('#track').onclick=e=>{const p=e.target.closest('.phone');if(p){si=+p.dataset.i;step()}};
addEventListener('resize',step);

/* ===== FAQ ===== */
function faqR(){
 $('#faq').innerHTML=t('faq').map((f,i)=>`<div class="faq ${i==fo?'open':''} bg-[#25262b]" data-i="${i}"><button class="w-full flex items-center justify-between gap-4 p-5 text-left text-sm font-extrabold hover:bg-white/5 transition" aria-expanded="${i==fo}">${f[0]}<span class="chev text-[#ffd21f]">⌄</span></button><div class="faq-a"><div><p class="px-5 pb-5 text-xs text-white/70 leading-6">${f[1]}</p></div></div></div>`).join('');
}
$('#faq').onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=+b.parentElement.dataset.i;fo=(fo===i)?-1:i;$$('.faq').forEach((x,k)=>{x.classList.toggle('open',k===fo);x.firstChild.setAttribute('aria-expanded',k===fo)})};

/* ===== ЯЗЫК ===== */
function applyLang(){
 document.documentElement.lang=lang;document.title=t('title');
 $$('[data-i]').forEach(e=>{if(!e.closest('#tabs,#thumbs,#faq,#track'))e.textContent=t(e.dataset.i)});
 $$('[data-h]').forEach(e=>e.innerHTML=t(e.dataset.h));
 $$('[data-a]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.a)));
 $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));
 hall();advR();stepsR();faqR();
}
document.addEventListener('click',e=>{const b=e.target.closest('.lang button');if(!b)return;lang=b.dataset.l;try{localStorage.setItem('lang',lang)}catch(x){}applyLang();fit()});

/* ===== КНОПКА «НАВЕРХ» ===== */
const up=$('#up');
addEventListener('scroll',()=>up.classList.toggle('show',scrollY>500),{passive:true});
up.onclick=()=>scrollTo({top:0,behavior:'smooth'});

/* ===== HERO: масштаб сцены 1920×871 + шапка ===== */
const hdr=$('.hdr');
function fit(){
 const vw=document.documentElement.clientWidth,d=vw>=1024;
 const s=d?Math.max(vw/1920,.66):vw/860;
 document.documentElement.style.setProperty('--s',s);
 const st=$('#stage'),hb=$('#herobox');
 st.style.transform=`scale(${s})`;
 if(d){hb.style.minHeight=871*s+'px';st.style.left=(vw-1920*s)+'px';st.style.top='0px'}
 else{hb.style.minHeight='';st.style.left=(vw-1700*s)+'px';st.style.top=(hb.offsetHeight-760*s)+'px'}
}
function hdrState(){hdr.classList.toggle('solid',scrollY>20)}
addEventListener('resize',fit);addEventListener('scroll',hdrState,{passive:true});
fit();hdrState();
applyLang();fit();
addEventListener('load',fit);
if(window.ResizeObserver)new ResizeObserver(fit).observe($('#htext'));
/* мобильное меню */
const menu=$('#menu'),mbg=$('#menubg');
const tog=o=>{menu.classList.toggle('hidden',!o);mbg.classList.toggle('hidden',!o)};
$('#burger').onclick=()=>tog(true);$('#menux').onclick=()=>tog(false);mbg.onclick=()=>tog(false);
menu.addEventListener('click',e=>{if(e.target.closest('a'))tog(false)});
