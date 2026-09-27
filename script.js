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
        document.getElementById("pickaxe").remove();
        document.getElementById("talk").innerHTML = "";
    }

    if(shovel_built >= 1) {
        document.getElementById("shovel").remove();
        document.getElementsByClassName("dirt").style.visibility = "visible";
    }

    if(furnace_built >= 1) {
        document.getElementById("furnace").remove();
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
    var iron_gathered = 0;
    var wood_gathered = 0;
    var leaf_gathered = 0;
    var gravel_gathered = 0;
    var magnet_gathered = 0;


    var smelted_copper = 0;
    var smelted_gold = 0;
    var smelted_iron = 0;
    var smelted_gravel = 0;


    var pickaxe_built = 0;
    var shovel_built = 0;
    var axe_built = 0;
    var furnace_built = 0;
    var glass_built = 0;


    var thunderstorm = false;
    


    function opennatural() {
        document.getElementById("natural_div").style.display = "block";
    }
    function closenatural() {
        document.getElementById("natural_div").style.display = "none";
        document.getElementById("overlay1").style.display = "none";
    }
    function open_smelted() {
        document.getElementById("smelted_items_div").style.display = "block";
    }
    function close_smelted() {
        document.getElementById("smelted_items_div").style.display = "none";
        document.getElementById("overlay1").style.display = "none";
    }


    function gravel() {
        gravel_gathered++;
        document.getElementById("gravel_counter").innerText = "Gravel: " + gravel_gathered;
    }
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
            alert("How are you doing this without a shovel, HOW?");
        }
    }
    function iron() {
        if (thunderstorm === false) {
        iron_gathered++;
        document.getElementById("iron_counter").innerText = "Iron: " + iron_gathered;
        } else {
            if (Math.random() < 0.25) {
                magnet_gathered++;
                document.getElementById("magnet_counter").innerText = "Magnet: " + magnet_gathered;
            }
        }
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
    function glass() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Glass";
        document.getElementById("item_description").innerText = "You can use this to make windows and other transparent items.";
        document.getElementById("item_requirements").innerText = "Requirements: 10 smelted gravel + 5 water + 1 iron";
    }

    function light_bulb() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("item_name").innerText = "Light Source 1: Small Light Bulb";
        document.getElementById("item_description").innerText = "This light source will be the first step to lighting up your world. It will be a small light source that will light up a small area but enough to see. You'll need a lot of materials.";
        document.getElementById("item_requirements").innerText = "Requirements: 15 smelted copper + 2 leaves + 2 grass + 5 smelted iron + 2 water + 10 wood + 10 stone + 2 magnets????";
        document.getElementById("talk").innerText = "You are going to need *lightning* you can try waiting around for a thunderstorm ";

        setTimeout(function () {
            document.getElementById("everything").style.background = "linear-gradient(to top, #040407, #040510, #000000, #64646494)";
            document.getElementById("talk").innerText = "Now you have to start collecting iron (Silver) to get lightning and the iron you need to make the light source.";
            thunderstorm = true;
        }, 15000);

    }



function createItem() {
    if (document.getElementById("item_name").innerText === "Pickaxe") {
        if (wood_gathered >= 2 && stone_gathered >= 1) {
            wood_gathered -= 2;
            stone_gathered -= 1;
            pickaxe_built += 1;
                document.getElementById("pickaxe").remove();
                document.getElementsByClassName("spacer1")[0].remove();
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

            document.getElementById("shovel").remove();
            document.getElementsByClassName("spacer2")[0].remove();
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

            document.getElementById("axe").remove();
            document.getElementsByClassName("spacer3")[0].remove();
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
            document.getElementById("furnace").remove();
            document.getElementsByClassName("spacer4")[0].remove();
            document.getElementById("furnace_btn").style.visibility = "visible";

        } else {
            alert("You don't have enough resources to craft this item.");
        }
    } else if (document.getElementById("item_name").innerText === "Glass") {
        if (smelted_gravel >= 10 && water_gathered >= 5 && iron_gathered >= 1) {

            smelted_gravel -= 10;
            water_gathered -= 5;
            iron_gathered -= 1;
            glass_built += 1;

            const glassBtn = document.getElementById("glass");
            if (glassBtn) glassBtn.remove();

            const spacer = document.getElementsByClassName("spacer5")[0];
            if (spacer) spacer.remove();
            document.getElementById("light1_btn").innerText = "Light Bulb";
        } else {
            alert("You don't have enough resources to craft this item.");
        }
    } else if (document.getElementById("item_name").innerText === "Light Source 1: Small Light Bulb") {

        document.getElementById("light1_btn").style.visibility = "visible";
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
            document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
            document.getElementById("smelt_copper").style.visibility = "visible";
            document.getElementById("smelt_gold").style.visibility = "visible";
            document.getElementById("smelt_iron").style.visibility = "visible";
            document.getElementById("smelt_gravel").style.visibility = "visible";
        }

        function smelt_copper() {
            if (copper_gathered >= 1 && wood_fuel >= 1) {
                copper_gathered--;
                wood_fuel--;
                document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
                smelted_copper++;
                document.getElementById("smelted-copper").innerText = "Smelted Copper: " + smelted_copper;
                document.getElementById("talk").innerText = "You better start making a light source since it's going to get dark soon.";
                setTimeout(function() {
                    document.getElementById("talk").innerText = "You can find the light source in the BUILD menu.";
                }, 5000);
                document.getElementById("light1").style.visibility = "visible";
            } else {
                alert("You do not have enough materials to do this action.");
            }
}
function smelt_gold() {
    if (gold_gathered >= 1 && wood_fuel >= 1) {
        gold_gathered--;
        wood_fuel--;
        document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
        smelted_gold++;
        document.getElementById("smelted-gold").innerText = "Smelted Gold: " + smelted_gold;
    } else {
        alert("You do not have enough materials to do this action.");
    }
}

function smelt_iron() {
    if (iron_gathered >= 1 && wood_fuel >= 1) {
        iron_gathered--;
        wood_fuel--;
        document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
        smelted_iron++;
        document.getElementById("smelted-iron").innerText = "Smelted Iron: " + smelted_iron;
    } else {
        alert("You do not have enough materials to do this action.");
    }
}

function smelt_gravel() {
    if (gravel_gathered >= 1 && wood_fuel >= 1) {
        gravel_gathered--;
        wood_fuel--;
        document.getElementById("wood_fuel_counter").innerText = "Wood Fuel: " + wood_fuel;
        smelted_gravel++;
        document.getElementById("smelted-gravel").innerText = "Smelted Gravel: " + smelted_gravel;
    } else {
        alert("You do not have enough materials to do this action.");
    }
}

function closefurnace2() {
    document.getElementById("furnace_div").style.display = "none";
    document.getElementById("overlay4").style.display = "none";
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("overlay1").style.display = "none";
}
//liiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee





































































































































































































































































































































































































































