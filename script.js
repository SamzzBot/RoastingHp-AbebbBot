const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Roasting logic
const getRoasting = (merk, chipset, ram, battery, camera) => {
    // Roasting phrases
    const praises = [
        `Wihh, ${merk} ini lumayan gahar sih... tapi tunggu dulu 😏`,
        `Kayaknya ${merk} ini cocok buat sultan ya... eh tapi bentar dulu... 😬`,
        `Buset ${merk} pake chipset ${chipset}, RAM ${ram}, tapi sabar... ada yang aneh nih 😅`,
        `Wahhh spek dewa, ${merk} ini sih keren banget sih... eh tapi baterai cuma ${battery}mAh?`
    ];

    const insults = [
        `Chipset ${chipset}? Terlihat gahar tapi panas kaya kompor gas, gak lama rusak tuh 😂`,
        `RAM ${ram} doang? Pake buat buka YouTube aja nge-lag, dasar hp lemot 😂🤡`,
        `Baterai ${battery}mAh doang? Itu mah 10 menit langsung abis tuh, mending bawa powerbank terus 😭`,
        `Kamera ${camera}MP? Kalo malem kualitas kamera kaya CCTV 90-an, buram abis 😅`,
        `Pake chipset ${chipset} tapi buka aplikasi berat langsung nge-freeze, percuma chip kuat kalau hp-nya lemah 😏`,
        `RAM ${ram}? Udah pasti buat scrolling IG aja nyangkut-nyangkut. Klasik hp kentang 🤣`,
        `Baterai ${battery}mAh? Ini mah kaya pake jam tangan digital, baterainya tiap saat minta charger 😂`,
        `Chipset ${chipset} tapi harga segitu? Lu beli hape atau beli beban hidup baru? 🤑`
    ];

    const finalRoasts = [
        `Mending jual aja tuh ${merk}, sebelum makin jatuh harga kaya martabak tengah malem 🤡`,
        `Mau pake ${merk} biar keren? Nyatanya sih, itu hp mah buat pelengkap penderitaan aja 😭`,
        `Berasa sultan pake ${merk}? Sabar... itu hape bakal jadi barang museum sebentar lagi 🤡`,
        `Kalo mau keren jangan cuma di spek doang, tapi fitur sekarat kaya ${merk} ini sih bikin sedih 😅`,
        `Nyari HP yang tahan lama? Kayaknya bukan ${merk} deh, itu bakal jadi hp buangan tahun depan 😂`,
        `Tuh ${merk}? Paling cuma gaya doang, performanya udah jompo dari lahir 🥳`
    ];

    // Combine random phrases
    let roast = praises[Math.floor(Math.random() * praises.length)];
    roast += " " + insults[Math.floor(Math.random() * insults.length)];
    roast += " " + finalRoasts[Math.floor(Math.random() * finalRoasts.length)];

    return roast;
};

app.get('/', (req, res) => {
    res.render('index', { roast: null });
});

app.post('/roast', (req, res) => {
    const { merk, chipset, ram, battery, camera } = req.body;

    // Generate roasting based on the input
    const roast = getRoasting(merk, chipset, ram, battery, camera);

    res.render('index', { roast: roast });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
