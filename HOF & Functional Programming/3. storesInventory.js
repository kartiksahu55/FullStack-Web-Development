const inventoryInUsd = {
    Ptron_Headset: 2200,
    Samsun_Galagy: 250,
    SanDisk_128gb: 20,
    Dell_Laptop: 850,
    Apple_Ipad: 1800,
    Printer_Hp: 200
}

const exchangeRate = 80;

const inventoryInInr = Object.fromEntries(Object.entries(inventoryInUsd).map(([key, value]) => [key, value * exchangeRate]));

console.log(inventoryInInr);