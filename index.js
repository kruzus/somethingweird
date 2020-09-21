const player = {
    name: "Player One",
    level: 5, //max 60,
    health: 100,
    armor: 0,
};

function doDamage(amount,target){

    //Checking if armor exists: return true or false;

    const {armor,health} = target;
    let isArmorActive;
    let currentArmor = armor;
    const ARMOR_REDUCTION = .66;

    const DMG_AFTER_REDUCTION = amount * ARMOR_REDUCTION;



    if(!armor <= 0){
        //apply damage reduction
        console.log(`armor: ${armor}`)
        isArmorActive = true;
    } else {
        //do full damage without reduction
        console.log(`${armor} left`)
        isArmorActive = false;

    }
    
    if(isArmorActive){
        // console.log(`your armor is active so we applying armor reduction`)
    } else {
        // console.log(`sorry ur armor is not active`)

    }



   console.log(`isArmorActive: ${isArmorActive}`)
   console.log(`DMG_AFTER_REDUCTION: ${DMG_AFTER_REDUCTION}`)
   console.log(`health:${health}`)
   console.log(`incomming damage: ${amount}`)
    


}

doDamage(50,player)