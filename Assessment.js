/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTcont = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_OS,_RAM,_ROM,_Battery,_NetworkType,_ExpandableStorage) {
    const NFT= {
        "name": _name,
        "OS": _OS,
        "RAM": _RAM,
        "ROM": _ROM,
        "Battery": _Battery,
        "Network_Type": _NetworkType,
        "Expandable_Storage": _ExpandableStorage
    }
    NFTcont.push(NFT);
    console.log("Minted:"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTcont.length; i++){
        console.log("\n\n__________Mobile Features_________\n\n");
        console.log("Name:"+ NFTcont[i].name);
        console.log("OS:"+ NFTcont[i].OS);
        console.log("RAM:"+ NFTcont[i].RAM);
        console.log("ROM:"+ NFTcont[i].ROM);
        console.log("Battery:"+ NFTcont[i].Battery);
        console.log("Network Type:"+ NFTcont[i].Network_Type);
        console.log("Expandable Storage:"+ NFTcont[i].Expandable_Storage);
        console.log("\n\n___________* * * * *__________\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTcont.length);
}

// call your functions below this line
mintNFT("SAMSUNG Galaxy S24 Ultra","Android","12 GB","512 GB","5000 mAh","5G","No",);
mintNFT("vivo T2 pro","Android OS","8 GB","128 GB","4600 mAh","5G","No");
mintNFT("Apple iphone 15 plus","Apple iOS","8 GB","128 GB","4383 mAh","5G","No");
mintNFT("vivo T3x","Android OS","6 GB","128 GB","600 mAh","5G","Yes");
listNFTs();
getTotalSupply();
