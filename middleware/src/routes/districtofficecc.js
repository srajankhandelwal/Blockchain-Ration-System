const express = require("express");
const md5 = require("md5")
const DistrictOffice = require("../../fabric/districtofficecc");

const router = new express.Router();

// router.post("/api/main/stategov/inputgrains", async (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     try {
//         foodgraindata = JSON.parse(req.body.payload);
//         foodgraindata.ID = md5(JSON.stringify(ChargeSheetData) + new Date().toString());
//         await CentralGovernment.InputFoodGrains(req.user, foodgraindata);
//         res.status(200).send({
//             message: "ChargeSheet has been successfully added!",
//             id: ChargeSheetData.ID,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Error! ChargeSheet NOT Added!" });
//     }
// });

router.get("/api/main/district/ricecount",async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const Type = req.params.Type;
    try {
        let data = await DistrictOffice.GetRiceCount(req.user, Type);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Something went wrong" });
    }
});

router.get("/api/main/district/wheatcount",async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const Type = req.params.Type;
    try {
        let data = await DistrictOffice.GetWheatCount(req.user, Type);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Something went wrong" });
    }
});

module.exports = router;