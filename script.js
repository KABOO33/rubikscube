const rubik = document.getElementById("rubik");

const walls = [
    ["B", "blue"],
    ["O", "orange"],
    ["W", "white"],
    ["R", "red"],
    ["Y", "yellow"],
    ["G", "green"]
]

const movesWallOut = {
    "F": ["B20", "B21", "B22", "R00", "R10", "R20", "G02", "G01", "G00", "O22", "O12", "O02"],
    "R": ["B22", "B12", "B02", "Y00", "Y10", "Y20", "G22", "G12", "G02", "W22", "W12", "W02"],
    "L": ["B00", "B10", "B20", "W00", "W10", "W20", "G00", "G10", "G20", "Y22", "Y21", "Y20"],
    "U": ["W02", "W01", "W00", "O02", "O01", "O00", "Y02", "Y01", "Y00", "R02", "R01", "R00"],
    "D": ["W00", "W01", "W22", "R20", "R21", "R22", "Y20", "Y21", "Y22", "O02", "O21", "O22"],
    "B": ["B02", "B01", "B00", "O00", "O10", "O20", "G20", "G21", "G22", "R22", "R12", "R02"]
}

let cubeSize = 3;

function createCube () {
    const cube = document.createElement("div");
    cube.className = "cube";

    for (let x of walls) {
        const wall = document.createElement("div");
        wall.className = "cube-wall";

        for (let i = 0; i < cubeSize; i++) {
            for (let j = 0; j < cubeSize; j++) {
                const piece = document.createElement("div");
                piece.className = "cube-piece";
                piece.style.backgroundColor = x[1];
                piece.setAttribute("id", `${x[0]}${i}${j}`);
                wall.appendChild(piece);
            }
        }
        wall.setAttribute('id', x[0]);
        cube.appendChild(wall);
        }
    rubik.appendChild(cube);
}

window.onload = createCube();

function moveCube (moveName) {
    moveType = moveName.slice(0, 1);
    if (Object.keys(movesWallOut).some(key => key.includes(moveName))) {
        moveWall(moveName);
    } else {
        console.log(moveName, moveType);
    }
}

function moveWall (moveName) {
    console.log(moveName)
}