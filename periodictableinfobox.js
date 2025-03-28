class PeriodicTableInfoBox
{
    constructor(periodictable, infoboxbackgroundid, infoboxid)
    {
        this._periodictable = periodictable;
        this._infoboxid = infoboxid;
        this._infoboxbackgroundid = infoboxbackgroundid;

        document.onkeyup = (event) =>
        {
            if(event.key === "Escape" && document.getElementById(this._infoboxid).style.visibility === "visible")
            {
                this.Hide();
            }
        };

        document.getElementById("btnCloseInfoBox").onclick = () => this.Hide();
    }

    Hide()
    {
        document.getElementById(this._infoboxid).style.visibility = "hidden";
        document.getElementById(this._infoboxbackgroundid).style.visibility = "hidden";
    }

    Show(atomicnumber) {
        const element = this._periodictable.GetElement(atomicnumber);
    
        document.getElementById("infoName").innerHTML = element.name;
        document.getElementById("infoAtomicNumber").innerHTML = element.atomicnumber;
        document.getElementById("infoChemicalSymbol").innerHTML = element.symbol;
        document.getElementById("infoCategory").innerHTML = element.category;
        document.getElementById("infoAtomicWeightConventional").innerHTML = element.atomicweight;
        document.getElementById("infoAtomicWeightStandard").innerHTML = element.atomicweightfull;
        document.getElementById("infoOccurrence").innerHTML = element.occurrence;
        document.getElementById("infoStateOfMatter").innerHTML = element.stateofmatter;
        document.getElementById("infoGroup").innerHTML = element.group;
        document.getElementById("infoPeriod").innerHTML = element.period;
        document.getElementById("infoBlock").innerHTML = element.block;
        document.getElementById("infoElectronConfiguration").innerHTML = element.electronConfiguration;
        document.getElementById("infoValenceElectrons").innerHTML = element.valenceElectrons;
        

        let imageUrl = "";
        let imageText = "";
        if (element.symbol === "Li") {
            imageUrl = "https://cdn-reichelt.de/bilder/web/artikel_ws/D600%2FANS_1512-0002_02_ANW.jpg?type=Product&";
			imageText = `<em>Lithium is used in batteries because it is very light and stores a lot of energy.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "H") {
            imageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg";
			imageText = `<em>The image shows a rocket launching, powered by hydrogen fuel, commonly used in rocket propulsion. <br><br>URL: <a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Be") {
            imageUrl = "https://scx2.b-cdn.net/gfx/news/hires/509902main_heaveymetal-img2-orig.jpg";
            imageText = `<em>Beryllium is used in space telescope mirrors because it is very strong, lightweight, and can handle extreme temperatures which helps telescopes capture clear images. <br><br>URL: <a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "B") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXAfq_-SYPG2BbOqGpnyZ_zk0S0noK1R-qNK9E5QAXOX_Pix-U-A4QCj8sM7qQ-JHyf4&usqp=CAU";
			imageText = `<em>Boron is used in fertilizers because it is an essential nutrient for plant growth. It helps plants develop strong cell walls, improves root growth, and supports flowering and fruit production. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "C") {
            imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/51/Charcoal_8.jpg";
			imageText = `<em>Carbon is used as charcoal because it burns efficiently and produces high heat with minimal smoke. Charcoal is also used for filtering and purifying due to its ability to absorb impurities. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Na") {
            imageUrl = "https://supplements.selfdecode.com/app/uploads/2018/04/bigstock-jar-of-baking-soda-on-the-blac-134347160-min-1.jpg";
            imageText = `<em>Sodium is used in baking soda because it helps create bubbles that make baked goods rise. Sodium also helps balance pH levels in cooking and cleaning. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Mg") {
            imageUrl = "https://thumbs.dreamstime.com/b/fireworks-various-colours-20356437.jpg";
            imageText = `<em>Magnesium is used in fireworks because it burns very brightly, producing intense white light. When ignited, magnesium reacts with oxygen to create a high-temperature flame, making fireworks more dazzling and visible from far away. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "K") {
            imageUrl = "https://5.imimg.com/data5/SELLER/Default/2022/5/WO/WB/XI/14297314/potassium-chloride-bp-10-injection-sal-kcl-injection--500x500.jpeg";
            imageText = `<em>Potassium is used as a liquid medication because it helps maintain proper muscle and nerve function, especially for people with low potassium levels. It is essential for heart health, fluid balance, and cell function. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ca") {
            imageUrl = "https://media.post.rvohealth.io/wp-content/uploads/2020/08/642x361_IMAGE_1_8_Fast_Facts_About_Calcium.jpg";
            imageText = `<em>Primarily found in dairy products like milk, cheese, and yogurt, calcium is crucial for building and maintaining strong bones and teeth. It also plays a key role in muscle function, nerve transmission, and blood clotting. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Rb") {
            imageUrl = "https://study.com/cimages/multimages/16/rsz_purple.jpg";
            imageText = `<em>Rubidium is used in fireworks to produce vibrant purple colors. It is one of the alkali metals and, when burned, produces a distinctive and visually stunning flame that adds to the display's overall effect. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sr") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw-8tN3B72LF081VNnBk5tnz-ZVS7IKHWRbGRajo0Bsm79kwtFnfWeY8Iil_cXpvWxrI&usqp=CAU";
            imageText = `<em>Strontium is used in toothpaste for sensitive teeth, helping to reduce discomfort caused by exposed nerves. It is also found in red-colored fireworks due to its ability to produce intense red hues when burned. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cs") {
            imageUrl = "https://optica.africa/cdn/shop/files/CESIUMC25-P81___FRONT_1200x1200.jpg?v=1709721702";
            imageText = `<em>Cesium is used to create optical lenses and prisms for high refractive index glasses.  Glass can also be polished or decolored with it.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ra") {
            imageUrl = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/3/9/143439_shutterstock_1097370944.jpg";
            imageText = `<em>The image shows an MMR scanner powered by radium, used historically in early medical imaging before being replaced by safer technologies. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sc") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkOUiLmwl3q6cIfXEPEkl1hsSduMD6PPaLviLr38u8IP3aBS33oQfi6aSVm_D11c4_Sk&usqp=CAU";
            imageText = `<em>Scandium is used in the production of lightweight, high-strength gun bullets. Its strength-to-weight ratio makes it ideal for military applications, improving the efficiency and power of ammunition. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Y") {
            imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Yttrium-L.jpg?6.0.4.2";
            imageText = `<em>Yttrium is used in satellite disks for its superconducting properties. It helps stabilize the performance of satellites by reducing the effects of electromagnetic interference and improving overall signal transmission. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Lu") {
            imageUrl = "https://marketing.webassets.siemens-healthineers.com/1800000007261928/c44fd355fad6/v/58b7dc2f3c4a/siemens-healthineers_mi_biograph-vision_pet_ct_scanner_preview.png?nowebp=1";
            imageText = `<em>This element is used in positron emission tomography (PET) scanners for medical imaging. It also has applications in catalysts and alloys.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Lr") {
            imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Lawrencium-L.jpg?6.0.4.2";
            imageText = `<em>The image displays a conceptual illustration of a particle’s spiral trajectory, representing the cyclotron technology used in the discovery of lawrencium.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "La") {
            imageUrl = "https://preview.redd.it/is-the-lanthanide-coating-in-the-lll-35mm-f2-dangerous-v0-k4mu0hpi8mac1.jpg?width=871&format=pjpg&auto=webp&s=0037216e62b6d8f004fb62883b7d840b9b7080bb";
            imageText = `<em>To increase the clarity of the images that can be captured, lanthanum is added to the glass that is used in some camera lenses.  The ease with which the element burns when ignited is reflected in the background flames.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ac") {
            imageUrl = "https://i.ytimg.com/vi/BjIhiWU1e3Q/maxresdefault.jpg";
            imageText = `<em>The image shows a beacon of hope for kidneys powered by actinium, used commonly in targeted alpha therapy for treating kidney cancer. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ti") {
            imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/10/applications_of_titanium_in_dental_implants.jpg";
            imageText = `<em>Titanium is commonly used in dental implant screws due to its strength, corrosion resistance, and biocompatibility with the human body. It’s ideal for implants because it fuses well with bone tissue, ensuring long-lasting results.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Zr") {
            imageUrl = "https://www.zircon-association.org/assets/images/2019/600x400/gemstone-pixabay-diamond-123338_600x400.jpg";
            imageText = `<em>Zirconium is melted and reshaped into the shape of a jewel which is a good substitute used in jewelry for its brilliance, durability, and affordability. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Hf") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5DTj6VLr2kPWXSij3XzKVvsz96Ou_QyQTLlia6yp9cioOXdE8YRnVAKlcwBKqIxqIhE&usqp=CAU";
            imageText = `<em>It's used in nuclear reactors and can be used and be found in nuclear submarines as control rods due to its excellent neutron absorption properties. It also has applications in microchips and high-temperature alloys.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Rf") {
            imageUrl = "https://www.americanelements.com/images/2024-08/rutherfordium-banner.jpg";
            imageText = `<em> The image displays a particle accelerator used in the creation of rutherfordium, a synthetic element first produced through heavy ion collisions.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ce") {
            imageUrl = "https://image.made-in-china.com/229f0j00YtiRzLlysPqM/62f276415648a871d66f9ca0163a5fa0-mp4.webp";
            imageText = `<em>Cerium sulfide pigments can be used to produce orange and red hues either by themselves or in combination with other pigments and colorants.   Additionally, they work well as shading pigments in beige and pastel colors.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Th") {
            imageUrl = "https://www.orau.org/health-physics-museum/img/museum/consumer-products/thorium/pentax-camera.jpg";
            imageText = `<em>The image shows a thoriated camera lens powered by thorium, used commonly to enhance optical clarity and reduce distortions in high-quality photography. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "V") {
            imageUrl = "https://www.americangeosciences.org/static/earth/mineral-resource-month-vanadium/2008-04-14_Chrome-Vanadium_Wrenches.jpg";
            imageText = `<em>Vanadium is used in manufacturing wrenches and other tools because it enhances steel’s strength and resistance to wear and tear. The addition of vanadium makes tools more durable and able to withstand high levels of stress.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Nb") {
            imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Uses_of_Niobium-2.jpg";
            imageText = `<em>Niobium is used to make aerospace parts because it can withstand extreme temperatures and pressures. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ta") {
            imageUrl = "https://ph.element14.com/productimages/large/en_US/4484183.jpg";
            imageText = `<em>This corrosion-resistant metal is used in capacitors, particularly in electronic devices like smartphones and computers. It also has applications in medical implants and chemical equipment.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Db") {
            imageUrl = "https://isoflex.com/images/widgetkit/CoolingTowers660x308.jpg";
            imageText = `<em> The image displays cooling towers of a nuclear power plant, representing dubnium, a synthetic element produced in nuclear reactions.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pr") {
            imageUrl = "https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_574,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20190331201044_Photo1-DENON-AH-D7200-explodedviewWeb.png";
            imageText = `<em>Praseodymium is an important component of high-power magnets, which transform electrical energy into mechanical vibrations that produce sound in audio equipment like headphones and loudspeakers. It is frequently used in conjunction with neodymium. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cr") {
            imageUrl = "https://study.com/cimages/multimages/16/d89a3253-78f3-4df0-b342-ebbac3830ed9_cake-fork-metal-cutlery-small-fork-39552.jpeg";
            imageText = `<em>Chromium is widely used to coat utensils such as knives, forks, and spoons. Its resistance to corrosion, along with its shiny appearance, makes it ideal for providing a durable, attractive finish that lasts over time.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Mo") {
            imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Molybdenum_Powder_Types_Applications.jpg";
            imageText = `<em>Molybdenum has a stable color formation and corrosion inhibition; that's why it's a suitable chemical to use in making paints or pigments. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "W") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdSPBgWAd44tMBpZZXKG6qOmkbRFXCEobJaq_N5DVKGViO78Pu2QKTVZv7wlBG4usNGM&usqp=CAU";
            imageText = `<em>Known for its high melting point, it's used in light bulb filaments, electrical contacts, and high-temperature applications so it can be used in welding. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sg") {
            imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/01/Seaborgium.jpg";
            imageText = `<em> The image displays cooling towers of a nuclear power plant, representing dubnium, a synthetic element produced in nuclear reactions.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Nd") {
            imageUrl = "https://m.media-amazon.com/images/I/71UTQKtJuvL._SL1500_.jpg";
            imageText = `<em>A silvery-white metal, it's a key component of strong neodymium magnets used in various applications, from hard drives to headphones.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "U") {
            imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/24/2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg";
            imageText = `<em>The image shows a nuclear power plant powered by uranium, used commonly to generate electricity through nuclear fission. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Mn") {
            imageUrl = "https://www.manganese.org/sites/default/files/styles/text_image_x2_/public/featured_images/ALUMINIUM.jpg.webp?itok=kHiIcn1E";
            imageText = `<em>Manganese is used in the production of cans, as it increases the strength and durability of steel and aluminum. It also helps prevent corrosion, making it vital in ensuring that cans are resistant to wear and degradation.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Tc") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTO-ycZX9x3oKvGMMp-8wzc49Oohn-5E23RRIln7kD2Ow8wf5KdHnwBw19qTbjbmrVK4&usqp=CAU";
            imageText = `<em>Technetium is a widely used radioactive isotope in nuclear medicine, acting as a radiotracer for various medical imaging procedures, helping doctors visualize internal organs and tissues to diagnose and monitor conditions, which is called technetium-99m (tc-99m). <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Re") {
            imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/04/Rhenium_Uses_in_Aerospace-2.png";
            imageText = `<em>This rare element is used in high-temperature superalloys for jet engines and gas turbines. It also has applications in catalysts and thermocouples.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Bh") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjPTi86eBfCL3ZqjgjYGWqopNyTwE7sbjlCxyKmkix3HwHxqH2lX7BEbdkNpiQltdS4k&usqp=CAU";
            imageText = `<em>The image uses a beer bottle to represent Bohrium (Bh) as a nod to Niels Bohr, who had a direct beer pipeline from Carlsberg at his home.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pm") {
            imageUrl = "https://periodictable.com/Samples/038.6/s13.JPG";
            imageText = `<em>A radioactive element, it has limited practical uses due to its rarity and radioactivity. It's primarily used in specialized applications like luminous paint and nuclear batteries.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Fe") {
            imageUrl = "https://periodictable.com/Samples/026.59/s7s.JPG";
            imageText = `<em>Iron is commonly used in the manufacturing of cast iron pans, which are known for their excellent heat retention and even heating. This makes them ideal for cooking, as they maintain stable temperatures, allowing for consistent cooking results.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ru") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL4OqBkSFnhSZK7EMWLuuQlVaNxkjYJaQMwDVv_XaM6TGgH4DFlRkCISdi1EONfSPH7U&usqp=CAU";
            imageText = `<em>Ruthenium is often added to platinum or palladium alloys to create stronger and more scratch-resistant jewelry, which is a lovely material for making accessories; it can also make white gemstones appear brighter.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Os") {
            imageUrl = "https://periodictable.com/Samples/OsmiridiumPen/s13.JPG";
            imageText = `<em>One of the densest elements, it's used in electrical contacts, fountain pen nibs, and as a catalyst. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Hs") {
            imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Hassium-L.jpg?6.0.4.2";
            imageText = `<em> The image displays a metallic lion, symbolizing Hesse, Germany, where hassium was first synthesized in 1984.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sm") {
            imageUrl = "https://www.magnetshop.com/includes/work/image_cache/webp/35d8f09fe195e6d72eb03b4f8a984075.thumb.webp";
            imageText = `<em>This metal is used in samarium-cobalt magnets, known for their high resistance to demagnetization. They find applications in high-temperature environments, like motors and generators.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pu") {
            imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fat_Man_%28replica_of_nuclear_bomb%29.jpg";
            imageText = `<em>The image shows the Fat Man nuclear bomb powered by plutonium, used historically in World War II as the explosive core for nuclear detonation. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Co") {
            imageUrl = "https://chemistrytalk.org/wp-content/uploads/2023/03/640px-Early_2000s_Rechargeable_Batteries.jpg";
            imageText = `<em>Cobalt is an essential component in the production of rechargeable batteries, such as those used in electric vehicles and portable electronics. Its ability to enhance the energy density and lifespan of batteries makes it vital in modern battery technology.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Rh") {
            imageUrl = "https://i00.eu/img/413/680x680/47nzz836/39495.jpg";
            imageText = `<em>Rhodium belongs to the platinum group and is utilized in jewelry plating because of its high reflectivity. It is also a rare and costly precious metal that is frequently used as a plating material in jewelry to give pieces, particularly white gold and silver, a bright, white, and reflecting surface that improves their durability and look.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ir") {
            imageUrl = "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFGWlhKcm95MkwuX0FDX1NMMTUwMF8uanBn.jpg";
            imageText = `<em>This corrosion-resistant metal is used in spark plugs, crucibles, and as a catalyst. It's also found in meteorites and used to define the Cretaceous-Paleogene boundary.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Mt") {
            imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Meitnerium-L.jpg?6.0.4.2";
            imageText = `<em> The image represents meitnerium through its dynamic, metallic, and high-energy appearance, symbolizing nuclear reactions.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Eu") {
            imageUrl = "https://periodictable.com/Samples/063.5/s13.JPG";
            imageText = `<em>It's used as a red or blue phosphor in television screens and fluorescent lamps. It also has applications in control rods for nuclear reactors.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Am") {
            imageUrl = "https://study.com/cimages/multimages/16/webp.net-resizeimage_864297105507316655674.jpg";
            imageText = `<em>The image shows a smoke detector powered by americium, used commonly to detect smoke particles and trigger fire alarms for safety. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ni") {
            imageUrl = "https://www.mecmining.com.au/wp-content/uploads/2016/10/nickel-004-1.jpg";
            imageText = `<em>Nickel is frequently used in the minting of coins due to its durability, resistance to corrosion, and ability to withstand wear from handling. It also plays a significant role in making stainless steel and other alloys.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pd") {
            imageUrl = "https://img.medicalexpo.com/images_me/photo-mg/72900-9526751.webp";
            imageText = `<em>Palladium is an alloy that is compatible to be made into dental jewelry, where it's used to increase the luster of fillings and fight corrosion. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pt") {
            imageUrl = "https://stefanonavi.com/cdn/shop/articles/a_74b80132-e544-4995-9d14-0b2298434303_600x.jpg?v=1623270810";
            imageText = `<em>A precious metal, it's used in jewelry, catalytic converters, and laboratory equipment. It's also used in medical applications, like chemotherapy drugs.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ds") {
            imageUrl = "https://study.com/cimages/multimages/16/bates_linear_accelerator_002.jpg";
            imageText = `<em>The image shows a particle accelerator, similar to the one used at GSI in Darmstadt, where Darmstadtium was first synthesized.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Gd") {
            imageUrl = "https://jodasexpoim.in/wp-content/uploads/2024/05/GBCAs-in-MRI.jpg";
            imageText = `<em>Possessing unique magnetic properties, it's used in MRI contrast agents to enhance images. It also has applications in magneto-optical discs and neutron capture therapy.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cm") {
            imageUrl = "https://www.sky-rayinstrument.com/uploads/201816063/portable-mineral-analyzer49271158291.jpg";
            imageText = `<em>The image shows a portable mineral analyzer powered by curium, used commonly for identifying mineral compositions through X-ray fluorescence. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cu") {
            imageUrl = "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/10/1603441464_Copper_big_3.jpg";
            imageText = `<em>Copper is commonly used in the production of handi bowls and serving dishes because it conducts heat very efficiently, making it perfect for evenly heating food. It also has antimicrobial properties, making it a good choice for food-related applications.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ag") {
            imageUrl = "https://sarasotaantiquebuyers.com/wp-content/uploads/2017/11/We-buy-Antique-Silver.jpg";
            imageText = `<em>Silver is used in making tableware or utensils for a high value, which was very popular in the past. Up until now, some are still made from silver or other things made using silver. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Au") {
            imageUrl = "https://investingnews.com/media-library/rows-of-gold-bars.jpg?id=54966053&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0";
            imageText = `<em>A highly valued precious metal, it's used in jewelry, coins, and as a store of value. It also has applications in electronics and dentistry. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Rg") {
            imageUrl = "https://www.americanelements.com/images/2024-08/roentgenium-banner.jpg";
            imageText = `<em> The image shows part of a particle accelerator, specifically high-voltage and vacuum system components. This relates to Roentgenium, which was synthesized in a particle accelerator through ion collisions.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Tb") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDnKJKATMR18xmlnV-W76qZqfOF0ZICRrd9QiRhu6jhw6dX_DE9QYymTqcb_hodR3lBw&usqp=CAU";
            imageText = `<em>This element is used as a green phosphor in color television tubes and fluorescent lamps. It also has applications in solid-state devices and magneto-optical recording. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Zn") {
            imageUrl = "https://1.bp.blogspot.com/-D067hJvnJcE/XW5a8yqv_LI/AAAAAAAAABU/gNRox4yNbg0vIgH6PIKyAFZFRaxpPeWkQCLcBGAs/s1600/zinc-manufacturers-in-India.jpg";
            imageText = `<em>Zinc is an important element in batteries, metal bars, and some medicines. It is used in zinc-carbon and zinc-air batteries and is also a key ingredient in zinc-based treatments for various health conditions, such as colds and immune support.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cd") {
            imageUrl = "https://www.globalhealingcenter.com/natural-health/wp-content/uploads/2013/05/cadmium-batteries.jpg";
            imageText = `<em>Nickel-cadmium (Ni-Cd) rechargeable batteries, which are found in a variety of gadgets such as portable computers, cell phones, and cordless power tools, contain cadmium.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Hg") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2DM769FEQZ0c7D03eDium0gCswQAIKJWSnTbiqnvQlFVy-4EH7S-t1z8YNUizIaeyTk&usqp=CAU";
            imageText = `<em>The image shows a glass thermometer powered by mercury, used commonly to measure temperature due to mercury's ability to expand and contract with heat.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cn") {
            imageUrl = "https://img.chemie.de/Portal/News/1695_vtOBw7aWY.jpg?tr=n-xzoom";
            imageText = `<em> The image shows the interior of a particle accelerator, where heavy elements such as Copernicium are synthesized.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Dy") {
            imageUrl = "https://nuclear-power.com/wp-content/uploads/2014/11/Cluster_assembly.png";
            imageText = `<em>It's used in high-strength magnets, particularly in electric vehicles and wind turbines, due to its high magnetic strength, as well perfect for element for a control rod. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cf") {
            imageUrl = "https://www.chemicool.com/elements/images/300-californium-mine-detector.jpg";
            imageText = `<em>The image shows a metal detector powered by californium, used commonly in security screening and locating buried metal objects. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Al") {
            imageUrl = "https://www.windpowerengineering.com/wp-content/uploads/2019/05/helukabel-headline-image.jpg";
            imageText = `<em>Aluminum is used as a conductor material because it is lightweight, has good electrical conductivity, and is more affordable than copper. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ga") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXzgxUIP4ZqmFA_I5F4BYH8LxnZ83MMEJ1OprjNq404mFLy2qfPXjtzBynTLw6Apk&usqp=CAU";
            imageText = `<em>Gallium is used in thermometers because it remains in liquid form at a wide range of temperatures. Its low melting point makes it an ideal material for measuring temperatures in devices that require precision.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "In") {
            imageUrl = "https://images.squarespace-cdn.com/content/v1/5fc769a68b9e860b7b20d9a1/97bd6fd9-60a9-481a-84c2-8a893bda7452/unsplash-image-oCfkSnqZ0SI.jpg";
            imageText = `<em>The majority of indium is used to create indium tin oxide, which is found in solar panels, touchscreens, and flat-screen TVs.  LCD screens use 70% of the lithium produced worldwide.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Tl") {
            imageUrl = "https://productimages.edmundoptics.com/9499.jpg?quality=100";
            imageText = `<em>The image shows an infrared optic powered by thallium, used commonly in thermal imaging and night vision devices.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Nh") {
            imageUrl = "https://www.thoughtco.com/thmb/laf80UF2HLJyhaxb0UiwlpUG20g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/distorted-concentric-light-circles-light-painting-534360517-58865a615f9b58bdb3aa07f2.jpg";
            imageText = `<em> The image shows a glowing, swirling pattern resembling atomic or particle collision tracks. It represents the high-energy physics experiments used to discover Nihonium, a superheavy synthetic element created in a particle accelerator.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ho") {
            imageUrl = "https://auction.fabexchange.com/Content/listingImages/20220606/8091cfdf-65f1-4d9c-af44-cf278c2f1554_fullsize.jpg";
            imageText = `<em>This element has the highest magnetic strength of any naturally occurring element. It's used in specialized magnets, lazer system and nuclear reactors.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Si") {
            imageUrl = "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/60df7dec735f6345d2dc9f59_Depositphotos_7331896_m-2015-p-800.jpeg";
            imageText = `<em>Silicon is used in computer chips because it is a semiconductor, meaning it can control electrical currents. It is also abundant, durable, and can be precisely modified to create tiny circuits that process data. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ge") {
            imageUrl = "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/63ec538e059ecdbc89b2c7d3_pexels-rfstudio-3825581.jpg";
            imageText = `<em>Germanium is used in heat sinks and motherboards due to its excellent semiconductor properties. It helps manage heat in electronic devices and allows for faster processing speeds in computer systems. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sn") {
            imageUrl = "https://study.com/cimages/videopreview/videopreview-full/yiu1pc0sap.jpg";
            imageText = `<em>Tin has a variety of uses, such as reducing agents in glass and ceramics, solders for connecting pipes and electrical circuits, alloys like bronze, and protective coatings for steel containers (like tin cans). <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Pb") {
            imageUrl = "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/4280/MFG_ENR_Max_Product-Image_E92_Straight.jpg";
            imageText = `<em>The image shows an Energizer battery powered by lead, used commonly in backup power systems and automotive batteries. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Fl") {
            imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Flerovium-2.jpg";
            imageText = `<em> A superheavy, synthetic element named after the Flerov Laboratory of Nuclear Reactions. It is highly unstable with unknown practical uses.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Er") {
            imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1682563166-normal-erbium-oxide-as-a-colorant-in-glass-production.jpg";
            imageText = `<em>It's used as a dopant in optical fibers to amplify signals. It also has applications in lasers and infrared detectors, as well a great ingredient for creation of strong glass. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Fm") {
            imageUrl = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/780xany/4/9/6/135496_shutterstock_339962993.jpg";
            imageText = `<em>The image displays a massive mushroom cloud resulting from a nuclear explosion, which is linked to the discovery of the element fermium.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "N") {
            imageUrl = "https://etimg.etb2bimg.com/photo/70126789.cms";
            imageText = `<em>Nitrogen is used in car tires because it is more stable than regular air. It reduces the chances of pressure changes due to temperature fluctuations, helping maintain proper tire inflation for longer. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a</em>`;
        } else if (element.symbol === "P") {
            imageUrl = "https://cdn.mos.cms.futurecdn.net/kUec7ZhbuZkR4DQAhvPB57-500-80.jpg.webp";
            imageText = `<em>Phosphorus is used in matches because it helps ignite the flame. This creates enough heat making phosphorus essential for starting fires safely and easily. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "As") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEGar3X05QUqXvKYVcijM21ZnXIS5qVZMkJPZwimG-OPEYSqwRAq11zYTYSsvcvZF6l8&usqp=CAU";
            imageText = `<em>Arsenic is used in the production of gun bullets and other military-grade weapons due to its hardness and density. Historically, it has also been used as a poison, although its use in this regard has decreased over time. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Sb") {
            imageUrl = "https://image.made-in-china.com/226f3j00ZLHWvUmYYQkz/SZSC-Series-Tin-Zinc-Antimony-Copper-Alloy-Wire-for-Film-Capacitor-Patented-Product-Sample-Customization.webp";
            imageText = `<em>Antimony hardens metals. It's used in alloys like battery lead and bearings, making them stronger and more durable. It also helps create detailed castings.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Bi") {
            imageUrl = "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/peb/peb03928/l/24.jpg";
            imageText = `<em>The image shows a Pepto-Bismol medicine bottle powered by bismuth, used commonly to treat digestive issues like indigestion and nausea. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Mc") {
            imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Moscovium-2.jpg";
            imageText = `<em> A synthetic element named after Moscow Oblast, Russia. It has a short half-life and is mainly studied in nuclear research.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Tm") {
            imageUrl = "https://pub.mdpi-res.com/sensors/sensors-17-00531/article_deploy/html/images/sensors-17-00531-g006.png?1569249753";
            imageText = `<em>This element is used in portable X-ray devices and lasers for medical applications. It also has potential uses in high-temperature superconductors.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Md") {
            imageUrl = "https://chemicool.com/elements/images/300-berkeley-60inch-cyclotron.jpg";
            imageText = `<em>The image displays a scientist operating a particle accelerator, a crucial tool in the discovery of mendelevium. This synthetic element was first produced in 1955 by bombarding einsteinium with alpha particles.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "O") {
            imageUrl = "https://engiomed.ae/wp-content/uploads/2022/09/oxygen-cylinder.jpg";
            imageText = `<em>Oxygen is used and stored in oxygen tanks because it is essential for breathing and medical treatments. These tanks provide a concentrated supply of oxygen for patients with respiratory conditions, people in high-altitude environments, and divers underwater.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "S") {
            imageUrl = "https://medsgo.ph/images/detailed/26/Unilab-United-Home-Sulfent-_Sulfur-Ointment-for-Pimples-Scabies-30g-Tube_-3[1].jpg";
            imageText = `<em>Sulfur is used in ointments because it helps treat skin conditions like acne, dandruff, and scabies. It has antibacterial and antifungal properties that kill germs and reduce inflammation. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Se") {
            imageUrl = "https://www.alzdiscovery.org/uploads/cognitive_vitality/iStock-Selenium_rating.jpg";
            imageText = `<em>Selenium is found in Brazil nuts and is a crucial antioxidant for the body. It helps protect cells from damage and is important for maintaining a healthy immune system and thyroid function. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Te") {
            imageUrl = "https://media.sciencephoto.com/image/c0132774/800wm";
            imageText = `<em>Tellurium suboxide is a crucial part of the active data-recording layer of rewritable Blu-ray discs, CD-RW, and DVD-RW. It is also utilized in Intel's new phase-change memory processors.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Po") {
            imageUrl = "https://www.orau.org/health-physics-museum/img/museum/consumer-products/miscellaneous/staticmaster-1.jpg";
            imageText = `<em>The image shows a static eliminator powered by polonium, used commonly to remove static charges in industrial and photographic applications. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Lv") {
            imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Livermorium-2.jpg";
            imageText = `<em> Named after Lawrence Livermore National Laboratory, this highly radioactive element has no known applications.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Yb") {
            imageUrl = "https://techwin-china.com/products/1_1_4_ytterbium_doped_pulsed_fiber_01.jpg";
            imageText = `<em>It's used in lasers, particularly in high-power fiber lasers. It also has applications in atomic clocks and stress gauges.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "No") {
            imageUrl = "https://www.chemicool.com/elements/images/gammasphere.jpg";
            imageText = `<em>The image displays scientists working with an advanced particle detection system, an essential tool in the discovery of nobelium.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "He") {
            imageUrl = "https://www.gasworld.com/cdn-cgi/image/width=1200,height=900,fit=contain,quality=75,metadata=none,format=auto,gravity=auto/https://www.gasworld.com/wp-content/files/gwml/mrimachine_628365.jpg";
            imageText = `<em>Helium is used in MRI machines to cool the superconducting magnets to extremely low temperatures allowing them to generate a strong, stable magnetic field necessary for high-quality imaging. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ne") {
            imageUrl = "https://www.repairfaq.org/sam/jkhene/Laser_2_Front_Big.JPG";
            imageText = `<em>Neon is used in lasers because it helps create a bright and steady red light. When electricity passes through the neon gas, it glows and amplifies the light. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ar") {
            imageUrl = "https://img-seychelles.com/wp-content/uploads/2023/05/Argon-Gas-for-sale-in-Seychelles.jpg";
            imageText = `<em>Argon is used in light bulbs because it prevents the filament from burning out quickly. Since argon is a non-reactive gas, it protects the hot filament from reacting with oxygen, which would cause it to break down.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Kr") {
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFibQzuBBmmCFgGHYqbUjPw1ibPXvqcOFTCtZjRYzmDxjunesGMbK6JYGhbLT2kxEWtdc&usqp=CAU";
            imageText = `<em>Krypton is used in stage lighting machines to produce bright, white light. Its high efficiency and ability to create a striking glow make it ideal for theatrical lighting and other performance settings where bright illumination is needed. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Xe") {
            imageUrl = "https://www.powerbulbs.com/uploads/images/blog_images/Xenon-BMW-Blog-Image-1.jpg";
            imageText = `<em>The noble gas xenon is employed in a variety of fields, such as space exploration and propulsion, medical imaging (as a tracer), lighting (such as headlights and flash lamps), and general anesthesia. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Rn") {
            imageUrl = "https://www.popsci.com/wp-content/uploads/2019/03/18/ZNEQNMUE6JC3V7UEVWGVC32IKQ.jpg?quality=85";
            imageText = `<em>The image shows an underground radon detector powered by radon, used commonly to monitor radioactive gas levels in homes and soil. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Og") {
            imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Oganesson-2.jpg";
            imageText = `<em> The heaviest known element, named after physicist Yuri Oganessian. Though classified as a noble gas, it may behave differently from others in its group.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "F") {
            imageUrl = "https://periodictable.com/Samples/009.1/s13.JPG";
            imageText = `<em>Fluorine is used in Teflon tapes because it creates a non-stick, heat-resistant, and chemically stable material makes it resistant to water, oils, and most chemicals. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Cl") {
            imageUrl = "https://araxchemi.com/my_uploads/2019/05/Chlorine-with-pool-768x512.webp";
            imageText = `<em>Chlorine is used in swimming pools because it kills bacteria, viruses, and algae, keeping the water clean and safe. It disinfects by breaking down harmful germs and preventing the spread of infections. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Br") {
            imageUrl = "https://bromine123.weebly.com/uploads/4/6/9/4/46940515/379692.jpg?321";
            imageText = `<em>Bromine is widely used in the production of insecticides. It effectively controls pests and insects, making it valuable for agricultural and home use in managing pests that damage crops or create health hazards. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "I") {
            imageUrl = "https://media.post.rvohealth.io/wp-content/uploads/2019/03/Salt_Spoons_732x549-thumbnail.jpg";
            imageText = `<em>The heaviest nonradioactive halogen is iodine, a nonmetallic chemical element.  It is a crystalline solid that is almost black and has the ability to change into a noxious, deep violet vapor.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "At") {
            imageUrl = "https://news.cnrs.fr/sites/default/files/styles/lightbox-hd/public/assets/images/img_0452_enceinte_blindee_pour_automate_de_synthese_de_produits_radiopharmaceutiques_72dpi_0.jpg?itok=nkGUuKNL";
            imageText = `<em>The image shows an ally for cancer treatment powered by astatine, used commonly in targeted radiotherapy for cancer patients. <br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ts") {
            imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Tennessine-2.jpg";
            imageText = `<em> A halogen-like element named after Tennessee, USA. It remains largely unstudied due to its extreme instability.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Ba") {
            imageUrl = "https://d1ymz67w5raq8g.cloudfront.net/Pictures/415x277/9/2/3/108923_eic0514_elements_fig1_300tb.jpg";
            imageText = `<em>The image shows an X-ray procedure. Barium is used as a contrast agent to highlight the digestive tract for clearer imaging.<br><br>URL:&nbsp;<a href="${imageUrl}" target="_blank" style="color: black;">${imageUrl}</a></em>`;
        } else if (element.symbol === "Fr") {
            imageUrl = "";
            imageText = `<em>The most unstable of all naturally occurring elements, francium exists only in minuscule amounts and decays within seconds, making it impossible to collect or use in any practical way.<br><br></em>`;
        } else if (element.symbol === "Pa") {
            imageUrl = "";
            imageText = `<em>Found in uranium ores, protactinium is extremely rare and highly radioactive. Its complex extraction process and toxicity prevent it from being used outside of nuclear and geological research.<br><br></em>`;
        } else if (element.symbol === "Np") {
            imageUrl = "";
            imageText = `<em>A byproduct of nuclear reactors, neptunium has limited applications because of its radioactivity and potential for nuclear proliferation. While it could theoretically be used in nuclear batteries, safety concerns restrict its practical use. <br><br></em>`;
        } else if (element.symbol === "Bk") {
            imageUrl = "";
            imageText = `<em>A synthetic element produced in nuclear reactors, berkelium is mainly used to create heavier elements like californium. Its radioactivity and difficulty in production make it impractical for everyday applications.<br><br></em>`;
        } else if (element.symbol === "Es") {
            imageUrl = "";
            imageText = `<em>An artificial element created in minute amounts during nuclear explosions or in particle accelerators. It has no known practical use due to its rapid decay and extreme radioactivity, serving only as a subject for advanced nuclear research.<br><br></em>`;
        }

        const infoImage = document.getElementById("infoImage");
        infoImage.setAttribute("loading", "lazy");
        infoImage.src = imageUrl; 
        infoImage.alt = element.name;
        infoImage.style.display = imageUrl ? "block" : "none"; 

        const infoImageText = document.getElementById("infoImageText");
        if (imageText) {
            infoImageText.innerHTML = imageText;
            infoImageText.style.display = "block"; 
        } else {
            infoImageText.style.display = "none"; 
        }

        document.getElementById(this._infoboxbackgroundid).style.visibility = "visible";
        document.getElementById(this._infoboxid).style.visibility = "visible";
    }
}

function shortenURL(url, text = "Click here") {
    return `<a href="${url}" target="_blank">${text}</a>`;
}

// Example Usage:
document.getElementById("infoImageText").innerHTML = shortenURL(imageUrl, "Learn more about this element");
