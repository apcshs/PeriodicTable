class PeriodicTableInfoBox
{
    constructor(periodictable, infoboxbackgroundid, infoboxid)
    {
        this._periodictable = periodictable;
        this._infoboxid = infoboxid;
        this._infoboxbackgroundid = infoboxbackgroundid;

        document.onkeyup = (event) => {
            if (event.key === "Escape" && document.getElementById(this._infoboxid).style.visibility === "visible") {
                this.Hide();
            }
        };

        document.getElementById("btnCloseInfoBox").onclick = () => this.Hide();
        document.getElementById(infoboxbackgroundid).onclick = () => this.Hide();
    }

    Hide()
    {
        document.getElementById(this._infoboxid).style.visibility = "hidden";
        document.getElementById(this._infoboxbackgroundid).style.visibility = "hidden";
    }

    Show(atomicnumber)
    {
        const element = this._periodictable.GetElement(atomicnumber);

        document.getElementById("infoName").textContent = element.name;
        document.getElementById("infoChemicalSymbol").textContent = element.symbol;
        document.getElementById("infoCategory").textContent = element.category;
        document.getElementById("infoAtomicNumber").textContent = element.atomicnumber;
        document.getElementById("infoAtomicWeightConventional").textContent = element.atomicweight;
        document.getElementById("infoAtomicWeightStandard").textContent = element.atomicweightfull;
        document.getElementById("infoOccurrence").textContent = element.occurrence;
        document.getElementById("infoStateOfMatter").textContent = element.stateofmatter;
        document.getElementById("infoGroup").textContent = element.group;
        document.getElementById("infoPeriod").textContent = element.period;
        document.getElementById("infoBlock").textContent = element.block;
        document.getElementById("infoElectronConfiguration").textContent = element.electronConfiguration || "—";
        document.getElementById("infoValenceElectrons").textContent = element.valenceElectrons ?? "—";

        const imageData = this._getImageData(element.symbol);
        const wrap = document.getElementById("infoImageWrap");
        const img  = document.getElementById("infoImage");
        const cap  = document.getElementById("infoImageText");

        if (imageData && imageData.url) {
            img.src = imageData.url;
            img.alt = element.name;
            cap.innerHTML = imageData.caption;
            wrap.style.display = "block";
        } else if (imageData && imageData.caption) {
            img.style.display = "none";
            cap.innerHTML = imageData.caption;
            wrap.style.display = "block";
            img.style.display = "none";
        } else {
            wrap.style.display = "none";
        }

        img.style.display = (imageData && imageData.url) ? "block" : "none";

        document.getElementById(this._infoboxbackgroundid).style.visibility = "visible";
        document.getElementById(this._infoboxid).style.visibility = "visible";
    }

    _getImageData(symbol)
    {
        const data = {
            "H":  { url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg", caption: "<em>Hydrogen powers rockets — when ignited it reacts with oxygen to produce enormous thrust and water vapor.</em>" },
            "He": { url: "https://www.gasworld.com/cdn-cgi/image/width=1200,height=900,fit=contain,quality=75,metadata=none,format=auto,gravity=auto/https://www.gasworld.com/wp-content/files/gwml/mrimachine_628365.jpg", caption: "<em>Helium cools the superconducting magnets in MRI machines to near absolute zero.</em>" },
            "Li": { url: "https://cdn-reichelt.de/bilder/web/artikel_ws/D600%2FANS_1512-0002_02_ANW.jpg", caption: "<em>Lithium's light weight and energy density make it the go-to material for rechargeable batteries.</em>" },
            "Be": { url: "https://scx2.b-cdn.net/gfx/news/hires/509902main_heaveymetal-img2-orig.jpg", caption: "<em>Beryllium's strength and low thermal expansion make it ideal for space telescope mirrors.</em>" },
            "B":  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXAfq_-SYPG2BbOqGpnyZ_zk0S0noK1R-qNK9E5QAXOX_Pix-U-A4QCj8sM7qQ-JHyf4&usqp=CAU", caption: "<em>Boron is an essential plant nutrient used in fertilizers to support cell wall development and fruit production.</em>" },
            "C":  { url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Charcoal_8.jpg", caption: "<em>Carbon as charcoal burns efficiently and is used for both cooking and water filtration.</em>" },
            "N":  { url: "https://etimg.etb2bimg.com/photo/70126789.cms", caption: "<em>Nitrogen is pumped into car tires because it is more stable than air, reducing pressure swings with temperature changes.</em>" },
            "O":  { url: "https://engiomed.ae/wp-content/uploads/2022/09/oxygen-cylinder.jpg", caption: "<em>Oxygen tanks supply concentrated O₂ for patients with respiratory conditions and for deep-sea diving.</em>" },
            "F":  { url: "https://periodictable.com/Samples/009.1/s13.JPG", caption: "<em>Fluorine's chemical stability makes it perfect for Teflon — the non-stick, heat-resistant coating on cookware.</em>" },
            "Ne": { url: "https://www.repairfaq.org/sam/jkhene/Laser_2_Front_Big.JPG", caption: "<em>Neon gas glows red-orange when electrified, and is used in lasers and iconic neon signs.</em>" },
            "Na": { url: "https://supplements.selfdecode.com/app/uploads/2018/04/bigstock-jar-of-baking-soda-on-the-blac-134347160-min-1.jpg", caption: "<em>Sodium bicarbonate (baking soda) releases CO₂ when heated, making baked goods rise.</em>" },
            "Mg": { url: "https://thumbs.dreamstime.com/b/fireworks-various-colours-20356437.jpg", caption: "<em>Magnesium burns intensely white — its bright flame is used in fireworks and flares.</em>" },
            "Al": { url: "https://www.windpowerengineering.com/wp-content/uploads/2019/05/helukabel-headline-image.jpg", caption: "<em>Aluminum's light weight and conductivity make it the preferred material for high-voltage power cables.</em>" },
            "Si": { url: "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/60df7dec735f6345d2dc9f59_Depositphotos_7331896_m-2015-p-800.jpeg", caption: "<em>Silicon semiconductors are the foundation of modern computer chips and electronics.</em>" },
            "P":  { url: "https://cdn.mos.cms.futurecdn.net/kUec7ZhbuZkR4DQAhvPB57-500-80.jpg.webp", caption: "<em>Phosphorus ignites easily — it is the active ingredient in matchstick tips and strike surfaces.</em>" },
            "S":  { url: "https://medsgo.ph/images/detailed/26/Unilab-United-Home-Sulfent-_Sulfur-Ointment-for-Pimples-Scabies-30g-Tube_-3[1].jpg", caption: "<em>Sulfur's antibacterial properties make it a classic ingredient in ointments for acne and skin conditions.</em>" },
            "Cl": { url: "https://araxchemi.com/my_uploads/2019/05/Chlorine-with-pool-768x512.webp", caption: "<em>Chlorine kills bacteria and algae, keeping swimming pool water safe and clear.</em>" },
            "Ar": { url: "https://img-seychelles.com/wp-content/uploads/2023/05/Argon-Gas-for-sale-in-Seychelles.jpg", caption: "<em>Argon is pumped into light bulbs — its inert nature protects the hot tungsten filament from oxidising.</em>" },
            "K":  { url: "https://5.imimg.com/data5/SELLER/Default/2022/5/WO/WB/XI/14297314/potassium-chloride-bp-10-injection-sal-kcl-injection--500x500.jpeg", caption: "<em>Potassium chloride injections restore electrolyte balance and support heart and muscle function.</em>" },
            "Ca": { url: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/642x361_IMAGE_1_8_Fast_Facts_About_Calcium.jpg", caption: "<em>Calcium is essential for strong bones and teeth and plays a role in muscle contraction and blood clotting.</em>" },
            "Sc": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkOUiLmwl3q6cIfXEPEkl1hsSduMD6PPaLviLr38u8IP3aBS33oQfi6aSVm_D11c4_Sk&usqp=CAU", caption: "<em>Scandium strengthens aluminum alloys used in aerospace and high-performance sporting equipment.</em>" },
            "Ti": { url: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/10/applications_of_titanium_in_dental_implants.jpg", caption: "<em>Titanium's biocompatibility and strength make it the gold standard for dental and orthopedic implants.</em>" },
            "V":  { url: "https://www.americangeosciences.org/static/earth/mineral-resource-month-vanadium/2008-04-14_Chrome-Vanadium_Wrenches.jpg", caption: "<em>Vanadium strengthens steel alloys used in tools and automotive parts, improving wear resistance.</em>" },
            "Cr": { url: "https://study.com/cimages/multimages/16/d89a3253-78f3-4df0-b342-ebbac3830ed9_cake-fork-metal-cutlery-small-fork-39552.jpeg", caption: "<em>Chromium's shiny, corrosion-resistant coating makes it the standard finish on cutlery and fixtures.</em>" },
            "Mn": { url: "https://www.manganese.org/sites/default/files/styles/text_image_x2_/public/featured_images/ALUMINIUM.jpg.webp?itok=kHiIcn1E", caption: "<em>Manganese improves the strength and durability of steel and aluminum used in cans and packaging.</em>" },
            "Fe": { url: "https://periodictable.com/Samples/026.59/s7s.JPG", caption: "<em>Iron's excellent heat retention makes cast iron pans beloved in cooking for consistent, even temperatures.</em>" },
            "Co": { url: "https://chemistrytalk.org/wp-content/uploads/2023/03/640px-Early_2000s_Rechargeable_Batteries.jpg", caption: "<em>Cobalt improves the energy density and lifespan of lithium-ion batteries in phones and electric vehicles.</em>" },
            "Ni": { url: "https://www.mecmining.com.au/wp-content/uploads/2016/10/nickel-004-1.jpg", caption: "<em>Nickel's durability and corrosion resistance make it ideal for coinage and stainless steel production.</em>" },
            "Cu": { url: "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/10/1603441464_Copper_big_3.jpg", caption: "<em>Copper's high thermal conductivity and antimicrobial properties make it ideal for cookware and surfaces.</em>" },
            "Zn": { url: "https://1.bp.blogspot.com/-D067hJvnJcE/XW5a8yqv_LI/AAAAAAAAABU/gNRox4yNbg0vIgH6PIKyAFZFRaxpPeWkQCLcBGAs/s1600/zinc-manufacturers-in-India.jpg", caption: "<em>Zinc is a key component in batteries, galvanized steel, and immune-supporting supplements.</em>" },
            "Ga": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXzgxUIP4ZqmFA_I5F4BYH8LxnZ83MMEJ1OprjNq404mFLy2qfPXjtzBynTLw6Apk&usqp=CAU", caption: "<em>Gallium melts just above room temperature, making it useful in thermometers and semiconductors.</em>" },
            "Ge": { url: "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/63ec538e059ecdbc89b2c7d3_pexels-rfstudio-3825581.jpg", caption: "<em>Germanium's semiconductor properties make it valuable in fiber optics and early transistors.</em>" },
            "As": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEGar3X05QUqXvKYVcijM21ZnXIS5qVZMkJPZwimG-OPEYSqwRAq11zYTYSsvcvZF6l8&usqp=CAU", caption: "<em>Arsenic's density makes it useful in hardening lead alloys for ammunition.</em>" },
            "Se": { url: "https://www.alzdiscovery.org/uploads/cognitive_vitality/iStock-Selenium_rating.jpg", caption: "<em>Selenium is a powerful antioxidant found in Brazil nuts, supporting immune function and thyroid health.</em>" },
            "Br": { url: "https://bromine123.weebly.com/uploads/4/6/9/4/46940515/379692.jpg?321", caption: "<em>Bromine compounds are widely used in agricultural insecticides and flame retardants.</em>" },
            "Kr": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFibQzuBBmmCFgGHYqbUjPw1ibPXvqcOFTCtZjRYzmDxjunesGMbK6JYGhbLT2kxEWtdc&usqp=CAU", caption: "<em>Krypton produces a bright white light used in stage lighting, photography flashes, and some lasers.</em>" },
            "Rb": { url: "https://study.com/cimages/multimages/16/rsz_purple.jpg", caption: "<em>Rubidium creates vivid purple hues when burned in fireworks displays.</em>" },
            "Sr": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw-8tN3B72LF081VNnBk5tnz-ZVS7IKHWRbGRajo0Bsm79kwtFnfWeY8Iil_cXpvWxrI&usqp=CAU", caption: "<em>Strontium produces brilliant red colors in fireworks and is used in toothpaste for sensitive teeth.</em>" },
            "Y":  { url: "https://periodic-table.rsc.org/Content/Images/Elements/Yttrium-L.jpg?6.0.4.2", caption: "<em>Yttrium stabilizes performance in satellite and radar components through its superconducting properties.</em>" },
            "Zr": { url: "https://www.zircon-association.org/assets/images/2019/600x400/gemstone-pixabay-diamond-123338_600x400.jpg", caption: "<em>Cubic zirconia — a zirconium compound — is the most popular diamond simulant in jewelry.</em>" },
            "Nb": { url: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Uses_of_Niobium-2.jpg", caption: "<em>Niobium withstands extreme heat and pressure, making it vital for aerospace and jet engine components.</em>" },
            "Mo": { url: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Molybdenum_Powder_Types_Applications.jpg", caption: "<em>Molybdenum's color stability and corrosion resistance make it useful in industrial paints and pigments.</em>" },
            "Tc": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTO-ycZX9x3oKvGMMp-8wzc49Oohn-5E23RRIln7kD2Ow8wf5KdHnwBw19qTbjbmrVK4&usqp=CAU", caption: "<em>Technetium-99m is the most widely used radiotracer in nuclear medicine diagnostic imaging.</em>" },
            "Ru": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL4OqBkSFnhSZK7EMWLuuQlVaNxkjYJaQMwDVv_XaM6TGgH4DFlRkCISdi1EONfSPH7U&usqp=CAU", caption: "<em>Ruthenium is added to platinum and palladium jewelry alloys for superior scratch resistance and durability.</em>" },
            "Rh": { url: "https://i00.eu/img/413/680x680/47nzz836/39495.jpg", caption: "<em>Rhodium's reflectivity and hardness make it the premium plating for white gold and silver jewelry.</em>" },
            "Pd": { url: "https://img.medicalexpo.com/images_me/photo-mg/72900-9526751.webp", caption: "<em>Palladium alloys are biocompatible and used in dental crowns and fillings for their durability.</em>" },
            "Ag": { url: "https://sarasotaantiquebuyers.com/wp-content/uploads/2017/11/We-buy-Antique-Silver.jpg", caption: "<em>Silver's beauty and antimicrobial properties have made it the material of choice for fine tableware for centuries.</em>" },
            "Cd": { url: "https://www.globalhealingcenter.com/natural-health/wp-content/uploads/2013/05/cadmium-batteries.jpg", caption: "<em>Cadmium is used in nickel-cadmium rechargeable batteries found in power tools and portable electronics.</em>" },
            "In": { url: "https://images.squarespace-cdn.com/content/v1/5fc769a68b9e860b7b20d9a1/97bd6fd9-60a9-481a-84c2-8a893bda7452/unsplash-image-oCfkSnqZ0SI.jpg", caption: "<em>Indium tin oxide — transparent and conductive — is essential for touchscreens and flat-panel displays.</em>" },
            "Sn": { url: "https://study.com/cimages/videopreview/videopreview-full/yiu1pc0sap.jpg", caption: "<em>Tin coats steel cans to prevent rust and is used in solder for joining electrical components.</em>" },
            "Sb": { url: "https://image.made-in-china.com/226f3j00ZLHWvUmYYQkz/SZSC-Series-Tin-Zinc-Antimony-Copper-Alloy-Wire-for-Film-Capacitor-Patented-Product-Sample-Customization.webp", caption: "<em>Antimony hardens lead alloys used in batteries, bearings, and type metal for printing.</em>" },
            "Te": { url: "https://media.sciencephoto.com/image/c0132774/800wm", caption: "<em>Tellurium suboxide is the active recording layer in rewritable Blu-ray, CD-RW, and DVD-RW discs.</em>" },
            "I":  { url: "https://media.post.rvohealth.io/wp-content/uploads/2019/03/Salt_Spoons_732x549-thumbnail.jpg", caption: "<em>Iodine is added to table salt worldwide to prevent iodine deficiency and thyroid disorders.</em>" },
            "Xe": { url: "https://www.powerbulbs.com/uploads/images/blog_images/Xenon-BMW-Blog-Image-1.jpg", caption: "<em>Xenon produces intense white-blue light used in car headlights, camera flashes, and as a general anaesthetic.</em>" },
            "Cs": { url: "https://optica.africa/cdn/shop/files/CESIUMC25-P81___FRONT_1200x1200.jpg?v=1709721702", caption: "<em>Cesium is used in optical glass for high-refractive-index lenses and in atomic clocks for precise timekeeping.</em>" },
            "Ba": { url: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/415x277/9/2/3/108923_eic0514_elements_fig1_300tb.jpg", caption: "<em>Barium sulfate is a contrast agent swallowed before X-rays to highlight the digestive tract clearly.</em>" },
            "La": { url: "https://preview.redd.it/is-the-lanthanide-coating-in-the-lll-35mm-f2-dangerous-v0-k4mu0hpi8mac1.jpg?width=871&format=pjpg&auto=webp&s=0037216e62b6d8f004fb62883b7d840b9b7080bb", caption: "<em>Lanthanum oxide is added to camera lens glass to increase refractive index and improve image sharpness.</em>" },
            "Ce": { url: "https://image.made-in-china.com/229f0j00YtiRzLlysPqM/62f276415648a871d66f9ca0163a5fa0-mp4.webp", caption: "<em>Cerium sulfide pigments produce vivid orange and red hues in paints, ceramics, and plastics.</em>" },
            "Pr": { url: "https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_574,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20190331201044_Photo1-DENON-AH-D7200-explodedviewWeb.png", caption: "<em>Praseodymium is combined with neodymium to create powerful magnets used in headphones and speakers.</em>" },
            "Nd": { url: "https://m.media-amazon.com/images/I/71UTQKtJuvL._SL1500_.jpg", caption: "<em>Neodymium magnets are the strongest permanent magnets known, used in hard drives, motors, and headphones.</em>" },
            "Pm": { url: "https://periodictable.com/Samples/038.6/s13.JPG", caption: "<em>Promethium is a rare radioactive element with limited uses, primarily in specialized nuclear batteries.</em>" },
            "Sm": { url: "https://www.magnetshop.com/includes/work/image_cache/webp/35d8f09fe195e6d72eb03b4f8a984075.thumb.webp", caption: "<em>Samarium-cobalt magnets excel in high-temperature environments like motors and aerospace generators.</em>" },
            "Eu": { url: "https://periodictable.com/Samples/063.5/s13.JPG", caption: "<em>Europium produces red and blue phosphors in TV screens, fluorescent lights, and euro banknote security features.</em>" },
            "Gd": { url: "https://jodasexpoim.in/wp-content/uploads/2024/05/GBCAs-in-MRI.jpg", caption: "<em>Gadolinium's magnetic properties make it an effective contrast agent for enhancing MRI scan clarity.</em>" },
            "Tb": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDnKJKATMR18xmlnV-W76qZqfOF0ZICRrd9QiRhu6jhw6dX_DE9QYymTqcb_hodR3lBw&usqp=CAU", caption: "<em>Terbium produces the green phosphor in color TV tubes and is used in solid-state data storage.</em>" },
            "Dy": { url: "https://nuclear-power.com/wp-content/uploads/2014/11/Cluster_assembly.png", caption: "<em>Dysprosium's exceptional magnetic strength is essential for the motors in electric vehicles and wind turbines.</em>" },
            "Ho": { url: "https://auction.fabexchange.com/Content/listingImages/20220606/8091cfdf-65f1-4d9c-af44-cf278c2f1554_fullsize.jpg", caption: "<em>Holmium has the highest magnetic moment of any naturally occurring element and is used in specialized magnets and lasers.</em>" },
            "Er": { url: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1682563166-normal-erbium-oxide-as-a-colorant-in-glass-production.jpg", caption: "<em>Erbium amplifies optical fiber signals and gives glass and gems a distinctive pink color.</em>" },
            "Tm": { url: "https://pub.mdpi-res.com/sensors/sensors-17-00531/article_deploy/html/images/sensors-17-00531-g006.png?1569249753", caption: "<em>Thulium is used in portable X-ray devices and has potential applications in high-temperature superconductors.</em>" },
            "Yb": { url: "https://techwin-china.com/products/1_1_4_ytterbium_doped_pulsed_fiber_01.jpg", caption: "<em>Ytterbium is used in high-power fiber lasers and in the world's most precise atomic clocks.</em>" },
            "Lu": { url: "https://marketing.webassets.siemens-healthineers.com/1800000007261928/c44fd355fad6/v/58b7dc2f3c4a/siemens-healthineers_mi_biograph-vision_pet_ct_scanner_preview.png?nowebp=1", caption: "<em>Lutetium is used in PET scanner detectors and in targeted alpha therapy for treating certain cancers.</em>" },
            "Hf": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5DTj6VLr2kPWXSij3XzKVvsz96Ou_QyQTLlia6yp9cioOXdE8YRnVAKlcwBKqIxqIhE&usqp=CAU", caption: "<em>Hafnium absorbs neutrons exceptionally well, making it the material of choice for nuclear reactor control rods.</em>" },
            "Ta": { url: "https://ph.element14.com/productimages/large/en_US/4484183.jpg", caption: "<em>Tantalum's corrosion resistance makes it ideal for capacitors in smartphones and computers.</em>" },
            "W":  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdSPBgWAd44tMBpZZXKG6qOmkbRFXCEobJaq_N5DVKGViO78Pu2QKTVZv7wlBG4usNGM&usqp=CAU", caption: "<em>Tungsten has the highest melting point of any element — essential for light bulb filaments and welding electrodes.</em>" },
            "Re": { url: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/04/Rhenium_Uses_in_Aerospace-2.png", caption: "<em>Rhenium is added to nickel superalloys used in jet engine turbine blades that must withstand extreme heat.</em>" },
            "Os": { url: "https://periodictable.com/Samples/OsmiridiumPen/s13.JPG", caption: "<em>Osmium is one of the densest elements and is used in fountain pen nibs and electrical contacts.</em>" },
            "Ir": { url: "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFGWlhKcm95MkwuX0FDX1NMMTUwMF8uanBn.jpg", caption: "<em>Iridium's extreme hardness and corrosion resistance make it ideal for spark plugs and scientific crucibles.</em>" },
            "Pt": { url: "https://stefanonavi.com/cdn/shop/articles/a_74b80132-e544-4995-9d14-0b2298434303_600x.jpg?v=1623270810", caption: "<em>Platinum is used in catalytic converters, cancer-fighting drugs (cisplatin), and fine jewelry.</em>" },
            "Au": { url: "https://investingnews.com/media-library/rows-of-gold-bars.jpg?id=54966053&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0", caption: "<em>Gold's rarity, conductivity, and resistance to corrosion make it valuable in jewelry, electronics, and currency.</em>" },
            "Hg": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2DM769FEQZ0c7D03eDium0gCswQAIKJWSnTbiqnvQlFVy-4EH7S-t1z8YNUizIaeyTk&usqp=CAU", caption: "<em>Mercury's liquid state at room temperature made it the standard fluid in thermometers and barometers.</em>" },
            "Tl": { url: "https://productimages.edmundoptics.com/9499.jpg?quality=100", caption: "<em>Thallium compounds are used in infrared optics for thermal imaging and night-vision equipment.</em>" },
            "Pb": { url: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/4280/MFG_ENR_Max_Product-Image_E92_Straight.jpg", caption: "<em>Lead-acid batteries power automotive starters and backup power systems in buildings worldwide.</em>" },
            "Bi": { url: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/peb/peb03928/l/24.jpg", caption: "<em>Bismuth subsalicylate is the active ingredient in Pepto-Bismol, treating indigestion and nausea.</em>" },
            "Po": { url: "https://www.orau.org/health-physics-museum/img/museum/consumer-products/miscellaneous/staticmaster-1.jpg", caption: "<em>Polonium's radioactive decay generates heat; it powered the Lunokhod lunar rovers and static eliminators.</em>" },
            "At": { url: "https://news.cnrs.fr/sites/default/files/styles/lightbox-hd/public/assets/images/img_0452_enceinte_blindee_pour_automate_de_synthese_de_produits_radiopharmaceutiques_72dpi_0.jpg?itok=nkGUuKNL", caption: "<em>Astatine-211 is used in targeted alpha-particle therapy to selectively destroy cancer cells.</em>" },
            "Rn": { url: "https://www.popsci.com/wp-content/uploads/2019/03/18/ZNEQNMUE6JC3V7UEVWGVC32IKQ.jpg?quality=85", caption: "<em>Radon detectors are used in homes to monitor this naturally occurring radioactive gas that seeps from soil.</em>" },
            "Ra": { url: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/3/9/143439_shutterstock_1097370944.jpg", caption: "<em>Radium was used in early medical imaging and luminous watch dials before safer alternatives were developed.</em>" },
            "Ac": { url: "https://i.ytimg.com/vi/BjIhiWU1e3Q/maxresdefault.jpg", caption: "<em>Actinium-225 is a promising agent for targeted alpha therapy in treating kidney and other cancers.</em>" },
            "Th": { url: "https://www.orau.org/health-physics-museum/img/museum/consumer-products/thorium/pentax-camera.jpg", caption: "<em>Thorium was added to camera lens glass to increase refractive index and reduce optical distortion.</em>" },
            "U":  { url: "https://upload.wikimedia.org/wikipedia/commons/2/24/2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg", caption: "<em>Uranium-235 undergoes nuclear fission to generate heat in nuclear power plants, producing electricity.</em>" },
            "Pu": { url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fat_Man_%28replica_of_nuclear_bomb%29.jpg", caption: "<em>Plutonium-239 was used as the fission core of the Fat Man bomb and is used in nuclear reactors.</em>" },
            "Am": { url: "https://study.com/cimages/multimages/16/webp.net-resizeimage_864297105507316655674.jpg", caption: "<em>Americium-241 ionizes air inside smoke detectors, allowing them to sense smoke particles and trigger alarms.</em>" },
            "Cm": { url: "https://www.sky-rayinstrument.com/uploads/201816063/portable-mineral-analyzer49271158291.jpg", caption: "<em>Curium is used as a radioactive heat source in portable X-ray fluorescence mineral analyzers.</em>" },
            "Fr": { url: null, caption: "<em>Francium is the most unstable naturally occurring element — it exists only in trace amounts and decays within seconds, making it impossible to collect or use practically.</em>" },
            "Pa": { url: null, caption: "<em>Protactinium is extremely rare and highly radioactive. Its complex extraction and toxicity restrict its use to specialized nuclear and geological research.</em>" },
            "Np": { url: null, caption: "<em>Neptunium is a byproduct of nuclear reactors. Safety concerns around its radioactivity limit it to research applications.</em>" },
            "Bk": { url: null, caption: "<em>Berkelium is a synthetic element produced in nuclear reactors, mainly used to create heavier elements. Its radioactivity makes it impractical for everyday use.</em>" },
            "Es": { url: null, caption: "<em>Einsteinium is created in minute amounts during nuclear explosions or in accelerators. It exists only as a subject of advanced nuclear research.</em>" },
            "Rf": { url: "https://www.americanelements.com/images/2024-08/rutherfordium-banner.jpg", caption: "<em>Rutherfordium was first produced by bombarding californium with carbon ions in a particle accelerator.</em>" },
            "Db": { url: "https://isoflex.com/images/widgetkit/CoolingTowers660x308.jpg", caption: "<em>Dubnium is a synthetic element produced in nuclear reactions and has no practical applications outside research.</em>" },
            "Sg": { url: "https://www.chemistrylearner.com/wp-content/uploads/2018/01/Seaborgium.jpg", caption: "<em>Seaborgium is a synthetic transactinide element produced in particle accelerators with no known uses outside research.</em>" },
            "Bh": { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjPTi86eBfCL3ZqjgjYGWqopNyTwE7sbjlCxyKmkix3HwHxqH2lX7BEbdkNpiQltdS4k&usqp=CAU", caption: "<em>Bohrium is named after Niels Bohr. It was first synthesized by bombarding bismuth with chromium ions.</em>" },
            "Hs": { url: "https://periodic-table.rsc.org/Content/Images/Elements/Hassium-L.jpg?6.0.4.2", caption: "<em>Hassium was first synthesized in Darmstadt, Germany in 1984 by bombarding lead with iron ions.</em>" },
            "Mt": { url: "https://periodic-table.rsc.org/Content/Images/Elements/Meitnerium-L.jpg?6.0.4.2", caption: "<em>Meitnerium is named after physicist Lise Meitner and has no practical applications outside nuclear research.</em>" },
            "Ds": { url: "https://study.com/cimages/multimages/16/bates_linear_accelerator_002.jpg", caption: "<em>Darmstadtium was first synthesized at GSI in Darmstadt using a heavy-ion particle accelerator.</em>" },
            "Rg": { url: "https://www.americanelements.com/images/2024-08/roentgenium-banner.jpg", caption: "<em>Roentgenium was synthesized by colliding nickel ions with bismuth targets in a particle accelerator.</em>" },
            "Cn": { url: "https://img.chemie.de/Portal/News/1695_vtOBw7aWY.jpg?tr=n-xzoom", caption: "<em>Copernicium (named after Nicolaus Copernicus) was synthesized inside a particle accelerator by heavy-ion collisions.</em>" },
            "Nh": { url: "https://www.thoughtco.com/thmb/laf80UF2HLJyhaxb0UiwlpUG20g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/distorted-concentric-light-circles-light-painting-534360517-58865a615f9b58bdb3aa07f2.jpg", caption: "<em>Nihonium (named after Japan) was discovered through high-energy physics experiments in a particle accelerator.</em>" },
            "Fl": { url: "https://cdn1.byjus.com/wp-content/uploads/2018/08/Flerovium-2.jpg", caption: "<em>Flerovium is a superheavy synthetic element named after the Flerov Laboratory of Nuclear Reactions in Russia.</em>" },
            "Mc": { url: "https://cdn1.byjus.com/wp-content/uploads/2018/08/Moscovium-2.jpg", caption: "<em>Moscovium is a synthetic element named after Moscow Oblast, Russia, studied only in nuclear research.</em>" },
            "Lv": { url: "https://cdn1.byjus.com/wp-content/uploads/2018/08/Livermorium-2.jpg", caption: "<em>Livermorium is named after Lawrence Livermore National Laboratory and has no known practical applications.</em>" },
            "Ts": { url: "https://cdn1.byjus.com/wp-content/uploads/2018/08/Tennessine-2.jpg", caption: "<em>Tennessine is named after Tennessee, USA, and remains largely unstudied due to its extreme instability.</em>" },
            "Og": { url: "https://cdn1.byjus.com/wp-content/uploads/2018/08/Oganesson-2.jpg", caption: "<em>Oganesson is the heaviest known element, named after physicist Yuri Oganessian. Despite being a noble gas by period, it likely behaves very differently.</em>" },
            "Fm": { url: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/780xany/4/9/6/135496_shutterstock_339962993.jpg", caption: "<em>Fermium was discovered in the debris of the first hydrogen bomb test in 1952.</em>" },
            "Md": { url: "https://chemicool.com/elements/images/300-berkeley-60inch-cyclotron.jpg", caption: "<em>Mendelevium was first produced in 1955 at Berkeley by bombarding einsteinium with alpha particles in a cyclotron.</em>" },
            "No": { url: "https://www.chemicool.com/elements/images/gammasphere.jpg", caption: "<em>Nobelium was first synthesized in the 1950s and is studied using advanced particle detection systems.</em>" },
            "Lr": { url: "https://periodic-table.rsc.org/Content/Images/Elements/Lawrencium-L.jpg?6.0.4.2", caption: "<em>Lawrencium was first created using cyclotron technology at Lawrence Berkeley National Laboratory.</em>" }
        };

        return data[symbol] || null;
    }
}
