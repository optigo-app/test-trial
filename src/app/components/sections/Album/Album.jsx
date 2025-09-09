import React from "react";
import { GetAlbum } from "@/utils/apis/Album";
import View from "./View";


const Album = async ({ theme, pageType }) => {
    // 👇 Fetch directly on the server during SSR
    const data = await GetAlbum();
    const dynamicAlbum = data?.rd || [];

    const staticAlbum = [
        {
            "SrNo": 1,
            "Albumid": 321,
            "AlbumName": "Solitair Ring",
            "AlbumImageName": "",
            "UnitCost": 10819.57,
            "DesignMarkUpAmount": 0,
            "UnitCostWithMarkUp": 10818,
            "UnitCostWithMarkUpIncTax": 10818,
            "Nwt": 8.585,
            "Gwt": 8.78,
            "Dwt": 0.976,
            "Dpcs": 21,
            "CSwt": 0,
            "CSpcs": 0,
            "Designdetail": "[{\"autocode\":\"0014449\",\"designno\":\"E 07975WY\",\"UnitCost\":3249.87,\"DesignMarkUp\":0.00,\"DesignMarkUpAmount\":0.00,\"UnitCostWithMarkUp\":3249,\"UnitCostWithMarkUpIncTax\":3249,\"Nwt\":2.405,\"Gwt\":2.480,\"Dwt\":0.376,\"Dpcs\":19,\"CSwt\":0.000,\"CSpcs\":0,\"MetalColorid\":2,\"DefaultSize\":\"US 6\",\"Categoryid\":1,\"CategoryName\":\"Ring\",\"IsInWish\":0,\"IsInCart\":0,\"IsInReadyStock\":0,\"InReadyStockCnt\":0,\"TitleLine\":\"Solitaire Diamond Ring\",\"SrNo\":1,\"DisplayOrder\":1,\"ImageCount\":1,\"ImageExtension\":\"\",\"IsImageNameWithRandNo\":0},{\"autocode\":\"0014840\",\"designno\":\"E E BU 02394Y\",\"UnitCost\":3209.27,\"DesignMarkUp\":0.00,\"DesignMarkUpAmount\":0.00,\"UnitCostWithMarkUp\":3209,\"UnitCostWithMarkUpIncTax\":3209,\"Nwt\":2.390,\"Gwt\":2.490,\"Dwt\":0.500,\"Dpcs\":1,\"CSwt\":0.000,\"CSpcs\":0,\"MetalColorid\":6,\"DefaultSize\":\"EU 14\",\"Categoryid\":1,\"CategoryName\":\"Ring\",\"IsInWish\":0,\"IsInCart\":0,\"IsInReadyStock\":0,\"InReadyStockCnt\":0,\"TitleLine\":\"Solitaire Diamond Ring\",\"SrNo\":2,\"DisplayOrder\":1,\"ImageCount\":1,\"ImageExtension\":\"\",\"IsImageNameWithRandNo\":0},{\"autocode\":\"0015142\",\"designno\":\"R 05767WY\",\"UnitCost\":4360.43,\"DesignMarkUp\":0.00,\"DesignMarkUpAmount\":0.00,\"UnitCostWithMarkUp\":4360,\"UnitCostWithMarkUpIncTax\":4360,\"Nwt\":3.790,\"Gwt\":3.810,\"Dwt\":0.100,\"Dpcs\":1,\"CSwt\":0.000,\"CSpcs\":0,\"MetalColorid\":2,\"DefaultSize\":\"US 6\",\"Categoryid\":1,\"CategoryName\":\"Ring\",\"IsInWish\":0,\"IsInCart\":0,\"IsInReadyStock\":0,\"InReadyStockCnt\":0,\"TitleLine\":\"Solitaire Diamond Ring\",\"SrNo\":3,\"DisplayOrder\":1,\"ImageCount\":1,\"ImageExtension\":\"\",\"IsImageNameWithRandNo\":0}]"
        }
    ]

    const albums = pageType === "static" ? staticAlbum : dynamicAlbum;

    return <View albums={albums} />

};

export default Album;
