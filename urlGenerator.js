const addresses = [
    "1219 Broad Street, Durham, NC", 
    "135 E Franklin Street, Chapel Hill, NC",
];

function urlGenerator(address)
{
    address = address.split(" ").join("+");
    return "https://www.google.com/maps/dir/Current+Location/" + address;
}



addresses.map(add => console.log(urlGenerator(add)));