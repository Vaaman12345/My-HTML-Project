 document.getElementById("openBtn").onclick = function() {
        document.getElementById("overlay1").style.display = "block";
}

    document.getElementById("closeBtn").onclick = function() {
        document.getElementById("overlay1").style.display = "none";
    }

    document.getElementById("craftBtn").onclick = function() {
        document.getElementById("overlay2").style.display = "block";
    }

    document.getElementById("closecraftBtn").onclick = function() {
        document.getElementById("overlay2").style.display = "none";
    }

    if(pickaxe_built >= 1) {
        document.getElementById("pickaxe").style.visibility = "hidden";
        document.getElementById("talk").innerHTML = "";
    }

    if(shovel_built >= 1) {
        document.getElementById("shovel").style.visibility = "hidden";
        document.getElementsByClassName("dirt").style.visibility = "visible";
    }

    if(furnace_built >= 1) {
        document.getElementById("furnace").style.visibility = "hidden";
        document.getElementById("furnace_btn").style.visibility = "visible";
    }


    var soil_gathered = 0;
    var clay_gathered = 0;
    var grass_gathered = 0;
    var stone_gathered = 0;
    var snow_gathered = 0;
    var water_gathered = 0;
    var copper_gathered = 0;
    var gold_gathered = 0;
    var silver_gathered = 0;
    var wood_gathered = 0;
    var leaf_gathered = 0;


    var pickaxe_built = 0;
    var shovel_built = 0;
    var axe_built = 0;
    var furnace_built = 0;





    function leaf() {
        leaf_gathered++;
        document.getElementById("leaf_counter").innerText = "Leaf: " + leaf_gathered;
    }
    function wood() {
        if(axe_built <= 0) {
        wood_gathered++
        document.getElementById("wood_counter").innerText = "Wood: " + wood_gathered;
        } else {
            wood_gathered += 2;
            document.getElementById("wood_counter").innerText = "Wood: " + wood_gathered;
        }
    }
    function grass() {
        grass_gathered++;
        document.getElementById("grass_counter").innerText = "Grass: " + grass_gathered;
    }
function stone() {
    const rocks = document.getElementsByClassName("stone-rock");

    if (pickaxe_built === 0) {
        alert("You will only gain 1 'stone' without a pickaxe use it carefully.");

        for (let rock of rocks) {
            rock.style.pointerEvents = "none";
        }

        stone_gathered = 1;
        document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;

    } else if (pickaxe_built === 1) {

        for (let rock of rocks) {
            rock.style.pointerEvents = "auto";
        }

        stone_gathered++;
        document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;
    }
}

    function snow() {
        snow_gathered++;
        document.getElementById("snow_counter").innerText = "Snow: " + snow_gathered;
    }
    function water() {
        water_gathered++;
        document.getElementById("water_counter").innerText = "Water: " + water_gathered;
    }
    function copper() {
        copper_gathered++;
        document.getElementById("copper_counter").innerText = "Copper: " + copper_gathered;
    }
    function gold() {
        gold_gathered++;
        document.getElementById("gold_counter").innerText = "Gold: " + gold_gathered;
    }
    function soil() {
        if (shovel_built === 1) {
            if (Math.random() < 0.25) {
                clay_gathered++;
                document.getElementById("clay_counter").innerText = "Clay: " + clay_gathered;
                console.log("Success!");
            } else {
                soil_gathered++;
                document.getElementById("soil_counter").innerText = "Dirt: " + soil_gathered;
            }
        } else {
            alert("How did you do this without a shovel, HOW?");
        }
    }
    function silver() {
        silver_gathered++;
        document.getElementById("silver_counter").innerText = "Silver: " + silver_gathered;
    }



    function pickaxe() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Pickaxe";
        document.getElementById("item_description").innerText = "You can mine more with this tool.";
        document.getElementById("item_requirements").innerText = "Requirements: 2 wood + 1 stone";
    }



    function shovel() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Shovel";
        document.getElementById("item_description").innerText = "You can start digging up dirt and soil with this tool.";
        document.getElementById("item_requirements").innerText = "Requirements: 2 wood + 1 stone";
    }

    function axe() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Axe";
        document.getElementById("item_description").innerText = "You can cut down trees more efficiently with this tool.";
        document.getElementById("item_requirements").innerText = "Requirements: 2 wood + 2 stone";
    }

    function furnace() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Furnace";
        document.getElementById("item_description").innerText = "You will be able to smelt things down by using wood.";
        document.getElementById("item_requirements").innerText = "Requirements: 5 clay + 2 stone";
    }



function createItem() {
    if (document.getElementById("item_name").innerText === "Pickaxe") {
        if (wood_gathered >= 2 && stone_gathered >= 1) {
            wood_gathered -= 2;
            stone_gathered -= 1;
            pickaxe_built += 1;
                document.getElementById("pickaxe").style.visibility = "hidden";
            document.getElementById("wood_counter").innerText = "Wood: " + wood_gathered;
            document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;

            // FIX: re-enable the rock here
            const rocks = document.getElementsByClassName("stone-rock");
            for (let rock of rocks) {
                rock.style.pointerEvents = "auto";
            }
        } else {
            alert("You don't have enough resources to craft this item.");
        }


    } else if (document.getElementById("item_name").innerText === "Shovel") {
        if (wood_gathered >= 2 && stone_gathered >= 1) {
            wood_gathered -= 2;
            stone_gathered -= 1;
            shovel_built += 1;

            document.getElementById("shovel").style.visibility = "hidden";
            document.getElementById("wood_counter").innerText = "Wood: " + wood_gathered;
            document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;

            const dirtBlocks = document.getElementsByClassName("dirt");
            for (let i = 0; i < dirtBlocks.length; i++) {
                dirtBlocks[i].style.visibility = "visible";
            }

        } else {
            alert("You don't have enough resources to craft this item.");
        }
    } else if (document.getElementById("item_name").innerText === "Axe") {
        if (wood_gathered >= 2 && stone_gathered >= 2) {
            wood_gathered -= 2;
            stone_gathered -= 2;
            axe_built += 1;

            document.getElementById("axe").style.visibility = "hidden";
            document.getElementById("wood_counter").innerText = "Wood: " + wood_gathered;
            document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;
        } else {
            alert("You don't have enough resources to craft this item.");
        }
    } else if (document.getElementById("item_name").innerText === "Furnace") {
        if (clay_gathered >= 5 && stone_gathered >= 2) {
            clay_gathered -= 5;
            stone_gathered -= 2;
            furnace_built += 1;

            document.getElementById("clay_counter").innerText = "Clay: " + clay_gathered;
            document.getElementById("stone_counter").innerText = "Stone: " + stone_gathered;
            document.getElementById("furnace").style.visibility = "hidden";
            document.getElementById("furnace_btn").style.visibility = "visible";

        } else {
            alert("You don't have enough resources to craft this item.");
        }
    }


}


    function closeitembtn() {
        document.getElementById("overlay3").style.display = "none";
        document.getElementById("overlay2").style.display = "none";
        document.getElementById("overlay1").style.display = "none";
    }

    function openstructures() {
        document.getElementById("overlay4").style.display = "block";
    }
    function closestructuresbtn() {
        document.getElementById("overlay4").style.display = "none";
        document.getElementById("overlay3").style.display = "none";
        document.getElementById("overlay2").style.display = "none";
        document.getElementById("overlay1").style.display = "none";

    }
// LIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIINNEEEEEEEEEEEEEEEEEE



    function openfurnace() {
        if(furnace_built >= 1) {
            document.getElementById("furnace_div").style.display = "block";
        }
    }
var wood_fuel = 0;
document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
    function fill_furnace() {
        if(wood_gathered < 2){
            alert("You do not have enough materials to do this action.");
        }else{
            wood_gathered -= 2;
            wood_fuel++;
            document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
        }
    }

    function use_furnace() {
        if(wood_fuel <= 0){
            alert("You do not have enough fuel to do this action.");
        }else{
            wood_fuel -= 1;
            document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
        }
    }