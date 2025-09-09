import axios from "axios";

let data = JSON.stringify({
    "con": "{\"id\":\"\",\"mode\":\"GETBestSeller\",\"appuserid\":\"\"}",
    "f": "zen (cartcount)",
    "dp": "{\"FrontEnd_RegNo\":\"id1ugmuoqzb44hds\",\"Customerid\":\"0\",\"PackageId\":1,\"Laboursetid\":14,\"diamondpricelistname\":\"dhrdiamHKD\",\"colorstonepricelistname\":\"dhrcolorHKD\",\"SettingPriceUniqueNo\":23,\"Metalid\":1,\"DiaQCid\":\"11,14\",\"CsQCid\":\"\",\"IsStockWebsite\":1,\"IsPLW\":\"\",\"CurrencyRate\":1,\"Collectionid\":\"\",\"Categoryid\":\"\",\"SubCategoryid\":\"\",\"Brandid\":\"\",\"Genderid\":\"\",\"Ocassionid\":\"\",\"Themeid\":\"\",\"Producttypeid\":\"\",\"FilPrice\":\"\",\"Min_DiaWeight\":\"\",\"Max_DiaWeight\":\"\",\"Min_GrossWeight\":\"\",\"Max_GrossWeight\":\"\",\"Min_NetWt\":\"\",\"Max_NetWt\":\"\",\"WebDiscount\":\"0\",\"IsZeroPriceProductShow\":\"0\",\"IsSolitaireWebsite\":\"0\"}"
});

let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.optigoapps.com/ReactStoreV3/ReactStore.aspx",
    headers: {
        accept: "application/json, text/plain, */*",
        authorization: "Bearer 1967803746536091",
        "content-type": "application/json",
        sp: "1",
        sv: "1",
        yearcode: "e3tsaXZlLm9wdGlnb2FwcHMuY29tfX17ezIwfX17e2FzdG9yZX19e3thc3RvcmV9fQ==",
        version: "V3",
        Cookie: "ASP.NET_SessionId=lojk5uad5a5duuxr0w2mihb4",
    },
    data: data,
    cache: "force-cache",
    next: {
        revalidate: 60,
    },
};

const GetBestSeller = async () => {
    try {
        const response = await axios.request(config, {});
        return response?.data?.Data;
    } catch (error) {
        console.log(error);
    }
};

const storeInit = {
    CDNDesignImageFolThumb: "https://cdnfs.optigoapps.com/content-global4/astoreCNARMLXHPFKS6TIY1_Image/Design_Image/Design_Thumb/",
    CDNVPath: "https://cdnfs.optigoapps.com/content-global4/astoreCNARMLXHPFKS6TIY1_Image/Video/",
};

let getDesignImageFol = storeInit?.CDNDesignImageFolThumb;
const getDesignVideoFol = storeInit?.CDNVPath;

const getDynamicRollImages = (designno, count, extension) => {
    if (count > 1) {
        return `${getDesignImageFol}${designno}~${2}.jpg`;
    }
    return;
};

const getDynamicImages = (designno) => {
    return `${getDesignImageFol}${designno}~${1}.jpg`;
};

const getDynamicVideo = (designno, count, extension) => {
    if (extension && count > 0) {
        const url = `${getDesignVideoFol}${designno}~${1}.${extension}`;
        return url;
    }
    return;
};
// https://cdnfs.optigoapps.com/content-global4/astoreCNARMLXHPFKS6TIY1_Image/Design_Image/Design_Thumb/R%2003523~2.jpg

export { getDynamicRollImages, getDynamicImages, getDynamicVideo, GetBestSeller };
