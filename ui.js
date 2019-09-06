// ===========================================
var ui = {
    texFrame: true,
    dispBuffer: true,
    dispSquare: true,
    showCube: false,
    reloadCube: false
};
// ===========================================


var verticesCube = [];
var verticesCubeNumItems = 0;
var colorsCube = [];
var colorsNumItems = 0;


// ===========================================
var generateCubeVertices = function () {
    return [
        -0.3, -0.3, 0.3, 0.3, -0.3, 0.3, 0.3, 0.3, 0.3, -0.3, 0.3, 0.3,
        -0.3, -0.3, -0.3, -0.3, 0.3, -0.3, 0.3, 0.3, -0.3, 0.3, -0.3, -0.3,
        -0.3, -0.3, -0.3, -0.3, -0.3, 0.3, -0.3, 0.3, 0.3, -0.3, 0.3, -0.3,
        0.3, -0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, -0.3, 0.3, -0.3, -0.3,
        -0.3, 0.3, 0.3, 0.3, 0.3, 0.3, -0.3, 0.3, -0.3, -0.3, 0.3, -0.3,
        -0.3, -0.3, 0.3, 0.3, -0.3, 0.3, 0.3, -0.3, -0.3, -0.3, -0.3, -0.3
    ];
}

var generateColorsCube = function () {
    return [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0

    ]
}


// ===========================================
var manageCube = function () {
    console.log(verticesCube.length);
    if (ui.showCube === true) {
        verticesCube = generateCubeVertices();
        verticesCubeNumItems = verticesCube.length / 3;

        colorsCube = generateColorsCube();
        colorsNumItems = 4;
    } else {
        verticesCube = [];
        verticesCubeNumItems = 0;
        colorsCube = [];
        colorsNumItems = 0;
    }
    ui.reloadCube = true;
}

// ===========================================
var translateCube = function (t) {
    var verticesCube = generateCubeVertices();
    for (let i = 0; i < verticesCube.length; i++) {
        verticesCube[i] +=  t;
    }
    return verticesCube;
}
function translateCustomX(newVal){
    translateCustom[1] = newVal;
}

// =================================================


// ===========================================
$(document).ready(function () {
    $("#showCube").click(function () {
        ui.showCube = !ui.showCube;
        manageCube();

    });

    $(document).on('input', '#translateCube', function () {
        var translateVal = $(this).val();
        console.log(translateVal);
        translateVal = parseFloat(translateVal);
        translateCustomX(translateVal);
    });



});
// ===========================================












