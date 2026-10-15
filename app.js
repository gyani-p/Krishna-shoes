/* Krishna Shoes demo storefront.
   Edit SHOP_CONFIG and PRODUCTS below to add real store information and inventory. */
let SHOP_CONFIG = {
  address: "Add your shop address here",
  hours: "Mon – Sun · 10:00 AM – 9:00 PM (demo)",
  phone: "",
  whatsapp: "",
  email: "",
  mapsUrl: "https://maps.google.com/"
};

let PRODUCTS = [
  {id:1,name:"Classic Runner",category:"Shoes",price:799,rating:4.8,popularity:98,badge:"Bestseller",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",description:"An everyday athletic style with a bold look. Replace this demo description with your actual product details.",sizes:["6","7","8","9","10"],colours:["Red","White"],available:true},
  {id:2,name:"Everyday Comfort",category:"Slippers",price:399,rating:4.6,popularity:92,badge:"Everyday",image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",description:"Easy, relaxed footwear for everyday errands and downtime. Product information is sample content.",sizes:["6","7","8","9","10"],colours:["Black","Tan"],available:true},
  {id:3,name:"Street Form",category:"Sneakers",price:1299,rating:4.9,popularity:96,badge:"Featured",image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",description:"A street-inspired sneaker designed to make a statement. Confirm actual sizes and colours with the store.",sizes:["6","7","8","9","10"],colours:["White","Black"],available:true},
  {id:4,name:"Urban Motion",category:"Shoes",price:999,rating:4.5,popularity:83,badge:"New",image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",description:"A versatile pair to complement your everyday rotation. Demo listing; replace with verified product details.",sizes:["6","7","8","9","10"],colours:["Grey","Navy"],available:true},
  {id:5,name:"Daily Flex",category:"Slippers",price:349,rating:4.4,popularity:76,badge:"Comfort",image:"https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",description:"A simple casual option for relaxed days. Price and availability are illustrative until updated.",sizes:["6","7","8","9","10"],colours:["Black","Blue"],available:true},
  {id:6,name:"Canvas Low",category:"Sneakers",price:699,rating:4.7,popularity:89,badge:"Popular",image:"https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=800&q=80",description:"A clean, casual sneaker for a range of everyday looks. Replace demo information before publishing.",sizes:["6","7","8","9","10"],colours:["Cream","Black"],available:true},
  {id:7,name:"Active Pace",category:"Shoes",price:1499,rating:4.8,popularity:87,badge:"Performance",image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",description:"A sporty silhouette for people who like to keep moving. Check actual specifications before ordering.",sizes:["6","7","8","9","10"],colours:["White","Red"],available:true},
  {id:8,name:"Soft Step",category:"Slippers",price:599,rating:4.3,popularity:70,badge:"Comfort",image:"https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",description:"Comfort-first casual footwear. This is a demo product and should be replaced with store inventory.",sizes:["6","7","8","9","10"],colours:["Brown","Black"],available:true}
];

const I18N = {
  en: {
    tagline:"हर कदम में अपनी पहचान।",menu:"MENU",home:"Home",products:"Our Products",gallery:"Gallery",about:"About Krishna Shoes",contact:"Contact Us",location:"Our Location",preferences:"PREFERENCES",settings:"Settings",
    searchPlaceholder:"Search for shoes, slippers...",searchHint:"Try “sneakers” or a product name.",heroEyebrow:"WALK WITH CONFIDENCE",heroTitle:'हर कदम में<br><em>अपनी पहचान।</em>',heroDesc:"रोज़ की चाल हो या कोई खास मौका—अपना अंदाज़ चुनिए, अपने कदमों के साथ।",explore:"Explore Collection",discover:"Discover our story",heroMeta:"MADE FOR YOUR EVERYDAY JOURNEY",
    trust1:"Everyday Comfort",trust2:"Styles for Every Mood",trust3:"Made to Move With You",curated:"CURATED FOR YOU",topSelling:'Our Top Selling <em>Products</em>',viewAll:"View all products ↗",ourPhilosophy:"OUR PHILOSOPHY",statement:'सिर्फ़ जूते नहीं,<br><em>हर कदम का अंदाज़।</em>',statementDesc:"आपकी रोज़मर्रा की दुनिया के लिए, आपके अपने अंदाज़ के साथ।",
    theCollection:"THE COLLECTION",shopByStyle:'Find Your <em>Style.</em>',collectionDesc:"From everyday essentials to statement sneakers.",sortBy:"Sort by",popular:"Popular",lowHigh:"Price: Low to High",highLow:"Price: High to Low",all:"All",shoes:"Shoes",sneakers:"Sneakers",slippers:"Slippers",noResults:"No products found",tryAgain:"Try another search or category.",reset:"Reset filters",
    visitUs:"VISIT US IN STORE",locationTitle:'Good things<br>start <em>here.</em>',locationDesc:"Come by, explore the collection, and find the pair that feels just right.",storeAddress:"Store Address",openingHours:"Opening Hours",getDirections:"Get directions",ourStory:"A LITTLE ABOUT US",aboutTitle:'A good pair.<br><em>A better day.</em>',aboutDesc:"At Krishna Shoes, we believe the right footwear is more than something you wear—it’s part of how you take on the day. Our aim is to bring together everyday comfort, versatile styles, and choices for every kind of journey.",talkToUs:"Talk to us ↗",
    letsConnect:"LET’S CONNECT",contactTitle:'Need a hand<br>finding <em>your pair?</em>',contactDesc:"We’re happy to help with product details, sizes, and availability.",callUs:"Call us",messageUs:"Message us ↗",quickEnquiry:"Quick enquiry",sendEnquiry:"Send an enquiry ↗",footerTagline:"हर कदम में अपनी पहचान।",allRights:"ALL RIGHTS RESERVED."
  },
  hi: {
    tagline:"हर कदम में अपनी पहचान।",menu:"मेन्यू",home:"होम",products:"हमारे प्रोडक्ट",gallery:"गैलरी",about:"कृष्णा शूज़ के बारे में",contact:"संपर्क करें",location:"हमारी दुकान",preferences:"पसंद",settings:"सेटिंग्स",
    searchPlaceholder:"जूते, चप्पल और स्नीकर्स खोजें...",searchHint:"“Sneakers” या प्रोडक्ट का नाम लिखें।",heroEyebrow:"आत्मविश्वास के साथ चलें",heroTitle:'हर कदम में<br><em>अपनी पहचान।</em>',heroDesc:"रोज़ की चाल हो या कोई खास मौका—अपना अंदाज़ चुनिए, अपने कदमों के साथ।",explore:"कलेक्शन देखें",discover:"हमारी कहानी जानें",heroMeta:"आपके हर दिन के सफ़र के लिए",
    trust1:"हर दिन का आराम",trust2:"हर अंदाज़ के लिए स्टाइल",trust3:"आपके साथ चलने के लिए",curated:"आपके लिए चुना गया",topSelling:'हमारे लोकप्रिय <em>प्रोडक्ट</em>',viewAll:"सभी प्रोडक्ट देखें ↗",ourPhilosophy:"हमारा नज़रिया",statement:'सिर्फ़ जूते नहीं,<br><em>हर कदम का अंदाज़।</em>',statementDesc:"आपकी रोज़मर्रा की दुनिया के लिए, आपके अपने अंदाज़ के साथ।",
    theCollection:"हमारा कलेक्शन",shopByStyle:'अपना <em>अंदाज़</em> चुनें।',collectionDesc:"रोज़मर्रा के फुटवियर से लेकर स्टाइलिश स्नीकर्स तक।",sortBy:"क्रम चुनें",popular:"लोकप्रिय",lowHigh:"कम कीमत से ज़्यादा",highLow:"ज़्यादा कीमत से कम",all:"सभी",shoes:"जूते",sneakers:"स्नीकर्स",slippers:"चप्पल",noResults:"कोई प्रोडक्ट नहीं मिला",tryAgain:"दूसरी खोज या कैटेगरी आज़माएँ।",reset:"फ़िल्टर हटाएँ",
    visitUs:"दुकान पर आइए",locationTitle:'अच्छी शुरुआत<br><em>यहीं से।</em>',locationDesc:"दुकान पर आइए, कलेक्शन देखिए और अपने लिए सही जोड़ी चुनिए।",storeAddress:"दुकान का पता",openingHours:"खुलने का समय",getDirections:"रास्ता देखें",ourStory:"हमारे बारे में",aboutTitle:'अच्छी जोड़ी।<br><em>बेहतर दिन।</em>',aboutDesc:"कृष्णा शूज़ में हमारा मानना है कि सही फुटवियर सिर्फ़ पहनने की चीज़ नहीं, बल्कि आपके दिन का हिस्सा है। हमारा उद्देश्य रोज़मर्रा के आराम, अलग-अलग स्टाइल और हर सफ़र के लिए विकल्प उपलब्ध कराना है।",talkToUs:"हमसे बात करें ↗",
    letsConnect:"संपर्क में रहें",contactTitle:'अपनी पसंद की<br><em>जोड़ी चाहिए?</em>',contactDesc:"प्रोडक्ट, साइज़ और उपलब्धता की जानकारी के लिए हम मदद करेंगे।",callUs:"कॉल करें",messageUs:"मैसेज करें ↗",quickEnquiry:"पूछताछ",sendEnquiry:"पूछताछ भेजें ↗",footerTagline:"हर कदम में अपनी पहचान।",allRights:"सर्वाधिकार सुरक्षित।"
  }
};

const initialSearch = new URLSearchParams(window.location.search).get("search") || "";
let state = {category:"All", sort:"popular", query:initialSearch, lang:"en"};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const formatPrice = n => "₹" + Number(n||0).toLocaleString("en-IN");
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));

function setLanguage(lang){
  state.lang = lang;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  $$("[data-i18n]").forEach(el => { const key=el.dataset.i18n; if(I18N[lang][key]) el.innerHTML=I18N[lang][key]; });
  $$("[data-i18n-placeholder]").forEach(el => { const key=el.dataset.i18nPlaceholder; if(I18N[lang][key]) el.placeholder=I18N[lang][key]; });
  $$("[data-lang]").forEach(b => b.classList.toggle("active",b.dataset.lang===lang));
  renderProducts(); renderFeatured();
}
function productCard(p){
  return `<article class="product-card" tabindex="0" role="button" aria-label="View ${escapeHTML(p.name)}" data-product-id="${escapeHTML(p.id)}">
    <div class="product-image-wrap"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x800/e9e6df/242321?text=Krishna+Shoes'"><span class="product-badge">${escapeHTML(p.available===false ? "Sold Out" : (p.badge||"Available"))}</span><button class="quick-view" aria-label="Quick view ${escapeHTML(p.name)}" data-quick="${escapeHTML(p.id)}">↗</button></div>
    <div class="product-info"><div class="product-title-row"><div><h3 class="product-title">${escapeHTML(p.name)}</h3><p class="product-category">${escapeHTML(categoryName(p.category))}</p></div><span class="product-price">${formatPrice(p.price)}</span></div><div class="product-rating"><span class="stars">★★★★★</span><span>${p.rating.toFixed(1)}</span></div></div></article>`;
}
function categoryName(cat){ if(state.lang==="hi") return ({Shoes:"जूते",Sneakers:"स्नीकर्स",Slippers:"चप्पल"})[cat]||cat; return cat; }
function filteredProducts(){
  let list = PRODUCTS.filter(p => (state.category==="All" || p.category===state.category) && (p.name+" "+p.category+" "+p.description).toLowerCase().includes(state.query.toLowerCase()));
  if(state.sort==="low") list.sort((a,b)=>a.price-b.price);
  else if(state.sort==="high") list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>b.popularity-a.popularity);
  return list;
}
function renderProducts(){
  const list=filteredProducts(); $("#productGrid").innerHTML=list.map(productCard).join("");
  $("#resultsCount").textContent=`${list.length} ${state.lang==="hi"?"प्रोडक्ट":"products"}`;
  $("#emptyState").hidden=list.length!==0; $("#productGrid").hidden=list.length===0;
}
function renderFeatured(){ $("#featuredGrid").innerHTML=[...PRODUCTS].filter(p=>p.featured!==false).sort((a,b)=>(b.popularity||0)-(a.popularity||0)).slice(0,3).map(productCard).join(""); }
function openProduct(id){
  const p=PRODUCTS.find(x=>String(x.id)===String(id)); if(!p)return;
  const labels=state.lang==="hi"?{available:"उपलब्धता",sizes:"साइज़",colours:"रंग",inStock:"दुकान से उपलब्धता की पुष्टि करें",ask:"इस प्रोडक्ट के बारे में पूछें"}:{available:"Availability",sizes:"Sizes",colours:"Colours",inStock:"Confirm availability with the store",ask:"Enquire about this product"};
  $("#modalContent").innerHTML=`<div class="modal-product-layout"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" onerror="this.onerror=null;this.src='https://placehold.co/700x800/e9e6df/242321?text=Krishna+Shoes'"><div class="modal-product-copy"><span class="eyebrow"><span class="eyebrow-line"></span>${categoryName(p.category).toUpperCase()}</span><h2>${escapeHTML(p.name)}</h2><div class="product-rating"><span class="stars">★★★★★</span><span>${p.rating.toFixed(1)}</span></div><p class="modal-price">${formatPrice(p.price)}</p><p>${escapeHTML(p.description)}</p><b>${labels.sizes}</b><div class="detail-pills">${(p.sizes||[]).map(s=>`<span>${escapeHTML(s)}</span>`).join("")}</div><b>${labels.colours}</b><div class="detail-pills">${(p.colours||[]).map(c=>`<span>${escapeHTML(c)}</span>`).join("")}</div><p><b>${labels.available}:</b> ${p.available===false ? (state.lang==="hi"?"अभी उपलब्ध नहीं":"Currently sold out") : labels.inStock}</p><button class="btn btn-dark" id="modalEnquire">${labels.ask} ↗</button></div></div>`;
  $("#modalBackdrop").classList.add("open"); document.body.classList.add("locked");
  $("#modalEnquire").addEventListener("click",()=>{closeProduct();goWhatsApp(`Hello Krishna Shoes, I want to enquire about ${p.name} (${formatPrice(p.price)}).`);});
}
function closeProduct(){ $("#modalBackdrop").classList.remove("open"); document.body.classList.remove("locked"); }
function toast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2600);}
function openDrawer(){ $("#drawer").classList.add("open");$("#scrim").classList.add("open");document.body.classList.add("locked");}
function closeDrawer(){ $("#drawer").classList.remove("open");$("#scrim").classList.remove("open");document.body.classList.remove("locked");}
function closeNotifications(){const pop=$("#notificationPopover");pop.hidden=true;$("#noticeBtn").setAttribute("aria-expanded","false");}
function renderNotifications(items){
  const pop=$("#notificationPopover"); if(!pop) return;
  const safeItems=(items||[]).filter(n=>n.active!==false).sort((a,b)=>(Number(b.createdAt||0)-Number(a.createdAt||0))).slice(0,8);
  const title=state.lang==="hi"?"सूचनाएँ":"Notifications";
  pop.innerHTML=`<p class="notification-heading">${title}</p>`+(safeItems.length?safeItems.map(n=>`<div class="notification-item"><span class="notification-dot"></span><div><b>${escapeHTML(n.title||"Store update")}</b><p>${escapeHTML(n.message||"")}</p></div></div>`).join(""):`<div class="notification-item"><div><b>${state.lang==="hi"?"अभी कोई नई सूचना नहीं":"No new notifications"}</b><p>${state.lang==="hi"?"नई जानकारी जल्द यहाँ दिखाई देगी।":"New store updates will appear here."}</p></div></div>`);
}
function goWhatsApp(message="Hello Krishna Shoes, I would like to know more about your products."){
  const number=(SHOP_CONFIG.whatsapp||SHOP_CONFIG.phone).replace(/\D/g,"");
  if(!number){toast(state.lang==="hi"?"पहले app.js में दुकान का WhatsApp नंबर जोड़ें।":"Add the store WhatsApp number in app.js first.");return;}
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}
function applyShopConfig(){
  $("#storeAddress").textContent=SHOP_CONFIG.address;$("#storeHours").textContent=SHOP_CONFIG.hours;
  $("#mapsLink").href=SHOP_CONFIG.mapsUrl||"https://maps.google.com/";
  if(SHOP_CONFIG.phone){$("#phoneText").textContent=SHOP_CONFIG.phone+" ↗";$("#phoneLink").href="tel:"+SHOP_CONFIG.phone.replace(/\s/g,"");}
  if(SHOP_CONFIG.whatsapp)$("#whatsappLink").href=`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/\D/g,"")}`;
  if(SHOP_CONFIG.email){$("#emailText").textContent=SHOP_CONFIG.email+" ↗";$("#emailLink").href="mailto:"+SHOP_CONFIG.email;}
}
$("#menuBtn").addEventListener("click",openDrawer);$("#closeDrawer").addEventListener("click",closeDrawer);$("#scrim").addEventListener("click",closeDrawer);
$$(".drawer nav a").forEach(a=>a.addEventListener("click",closeDrawer));
$("#topSearchForm").addEventListener("submit",e=>{e.preventDefault();state.query=$("#searchInput").value.trim();renderProducts();$("#products").scrollIntoView({behavior:"smooth",block:"start"});});
$("#searchInput").addEventListener("input",e=>{state.query=e.target.value.trim();renderProducts();});
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
$("#filterRow").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;state.category=b.dataset.category;$$(".filter-btn").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
$("#sortSelect").addEventListener("change",e=>{state.sort=e.target.value;renderProducts();});
document.addEventListener("click",e=>{const card=e.target.closest("[data-product-id]");const quick=e.target.closest("[data-quick]");if(quick){e.stopPropagation();openProduct(quick.dataset.quick);}else if(card)openProduct(card.dataset.productId);});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDrawer();closeNotifications();closeProduct();}const card=e.target.closest&&e.target.closest("[data-product-id]");if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openProduct(card.dataset.productId);}});
$("#closeModal").addEventListener("click",closeProduct);$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeProduct();});
$("#resetFilters").addEventListener("click",()=>{state.category="All";state.query="";state.sort="popular";$("#searchInput").value="";$("#sortSelect").value="popular";$$(".filter-btn").forEach(b=>b.classList.toggle("active",b.dataset.category==="All"));renderProducts();});
$("#noticeBtn").addEventListener("click",e=>{e.stopPropagation();const pop=$("#notificationPopover");pop.hidden=!pop.hidden;$("#noticeBtn").setAttribute("aria-expanded",String(!pop.hidden));});
document.addEventListener("click",e=>{if(!e.target.closest(".top-actions"))closeNotifications();});
$("#settingsBtn").addEventListener("click",()=>{const reduce=document.body.classList.toggle("reduce-motion");toast(reduce?(state.lang==="hi"?"कम Animation चालू":"Reduced animations enabled"):(state.lang==="hi"?"Animation सामान्य":"Animations restored"));});
$("#contactFormBtn").addEventListener("click",()=>goWhatsApp("Hello Krishna Shoes, I have a quick enquiry."));
$("#year").textContent=new Date().getFullYear();
window.addEventListener("ks-store-data", e=>{
  const data=e.detail||{};
  if(Array.isArray(data.products)){PRODUCTS=data.products.map((p,i)=>({...p,id:p.id??i+1,price:Number(p.price||0),rating:Number(p.rating||5),popularity:Number(p.popularity||0),sizes:p.sizes||[],colours:p.colours||[],available:p.available!==false}));renderProducts();renderFeatured();}
  if(data.settings){SHOP_CONFIG={...SHOP_CONFIG,...data.settings};applyShopConfig();if(data.settings.heroTitle){const h=$(".hero-copy h1");if(h)h.innerHTML=escapeHTML(data.settings.heroTitle).replace(/\n/g,"<br>");}if(data.settings.heroDescription){const d=$(".hero-description");if(d)d.textContent=data.settings.heroDescription;}if(data.settings.aboutDescription){const d=$(".about-right [data-i18n=aboutDesc]");if(d)d.textContent=data.settings.aboutDescription;}if(data.settings.tagline){$$(".footer [data-i18n=footerTagline], .intro-tagline").forEach(el=>el.textContent=data.settings.tagline);}if(data.settings.heroImage){const im=$(".hero-shoe");if(im)im.src=data.settings.heroImage;}if(data.settings.storeImage){const im=$(".location-image img");if(im)im.src=data.settings.storeImage;}}
  if(Array.isArray(data.notifications))renderNotifications(data.notifications);
});
applyShopConfig();renderNotifications([]);if(initialSearch)$("#searchInput").value=initialSearch;renderProducts();renderFeatured();
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});$$(".reveal").forEach(el=>observer.observe(el));}else $$(".reveal").forEach(el=>el.classList.add("visible"));
setTimeout(()=>{const intro=$("#intro");if(intro)intro.remove();},2450);
