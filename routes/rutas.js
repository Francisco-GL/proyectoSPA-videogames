const express = require("express"); // Importar express
const router = express.Router();
// const square = require("../calculos");

// router.get('/calculos/:width', (req, res) => {
//     const { width } = req.params;
//     console.log(width);
//     let area = square.area(width);
//     let perimeter = square.perimetro(width);
//     console.log(width, area, perimeter);
//     res.send({
//         ancho: width,
//         area: area,
//         perimetro: perimeter
//     });
// });


module.exports = router;