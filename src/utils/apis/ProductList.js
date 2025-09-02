import axios from "axios";

let data = JSON.stringify({
  con: '{"id":"","mode":"GETPRODUCTLIST","appuserid":"neha@gmail.com"}',
  f: "onlogin (GETPRODUCTLIST)",
  p: "eyJQYWNrYWdlSWQiOiIxIiwiYXV0b2NvZGUiOiIiLCJGcm9udEVuZF9SZWdObyI6ImlkMXVnbXVvcXpiNDRoZHMiLCJDdXN0b21lcmlkIjoiMTI3NCIsImRlc2lnbm5vIjoiIiwiU2hhcGUiOiIiLCJGaWx0ZXJLZXkiOiJjb2xsZWN0aW9uIiwiRmlsdGVyVmFsIjoiRGFpbHkgV2VhciIsIkZpbHRlcktleTEiOiIiLCJGaWx0ZXJWYWwxIjoiIiwiRmlsdGVyS2V5MiI6IiIsIkZpbHRlclZhbDIiOiIiLCJTZWFyY2hLZXkiOiIiLCJQYWdlTm8iOiIxIiwiUGFnZVNpemUiOiI2MCIsIk1ldGFsaWQiOiIxIiwiRGlhUUNpZCI6IjExLDE0IiwiQ3NRQ2lkIjoiMCwwIiwiQ29sbGVjdGlvbmlkIjoiIiwiQ2F0ZWdvcnlpZCI6IiIsIlN1YkNhdGVnb3J5aWQiOiIiLCJCcmFuZGlkIjoiIiwiR2VuZGVyaWQiOiIiLCJPY2Fzc2lvbmlkIjoiIiwiVGhlbWVpZCI6IiIsIlByb2R1Y3R0eXBlaWQiOiIiLCJNaW5fRGlhV2VpZ2h0IjoiIiwiTWF4X0RpYVdlaWdodCI6IiIsIk1pbl9Hcm9zc1dlaWdodCI6IiIsIk1heF9Hcm9zc1dlaWdodCI6IiIsIk1pbl9OZXRXdCI6IiIsIk1heF9OZXRXdCI6IiIsIkZpbFByaWNlIjoiIiwiQ3VycmVuY3lSYXRlIjoiMC4xMDE2IiwiU29ydEJ5IjoiUmVjb21tZW5kZWQiLCJMYWJvdXJzZXRpZCI6IjE0IiwiZGlhbW9uZHByaWNlbGlzdG5hbWUiOiJkaHJkaWFtSEtEIiwiY29sb3JzdG9uZXByaWNlbGlzdG5hbWUiOiJkaHJjb2xvckhLRCIsIlNldHRpbmdQcmljZVVuaXF1ZU5vIjoiMjMiLCJJc1N0b2NrV2Vic2l0ZSI6IjEiLCJTaXplIjoiIiwiSXNGcm9tRGVzRGV0IjoiIiwiSXNQTFciOiIwIiwiRG9tYWluRm9yTm8iOiIwIiwiQWxidW1OYW1lIjoiIiwiVGF4SWQiOjEsIldlYkRpc2NvdW50IjoiMCIsIklzWmVyb1ByaWNlUHJvZHVjdFNob3ciOiIwIiwiSXNTb2xpdGFpcmVXZWJzaXRlIjoiMCJ9",
  dp: '{"PackageId":"1","autocode":"","FrontEnd_RegNo":"id1ugmuoqzb44hds","Customerid":"1274","designno":"","Shape":"","FilterKey":"collection","FilterVal":"Daily Wear","FilterKey1":"","FilterVal1":"","FilterKey2":"","FilterVal2":"","SearchKey":"","PageNo":"1","PageSize":"60","Metalid":"1","DiaQCid":"11,14","CsQCid":"0,0","Collectionid":"","Categoryid":"","SubCategoryid":"","Brandid":"","Genderid":"","Ocassionid":"","Themeid":"","Producttypeid":"","Min_DiaWeight":"","Max_DiaWeight":"","Min_GrossWeight":"","Max_GrossWeight":"","Min_NetWt":"","Max_NetWt":"","FilPrice":"","CurrencyRate":"0.1016","SortBy":"Recommended","Laboursetid":"14","diamondpricelistname":"dhrdiamHKD","colorstonepricelistname":"dhrcolorHKD","SettingPriceUniqueNo":"23","IsStockWebsite":"1","Size":"","IsFromDesDet":"","IsPLW":"0","DomainForNo":"0","AlbumName":"","TaxId":1,"WebDiscount":"0","IsZeroPriceProductShow":"0","IsSolitaireWebsite":"0"}',
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

const GetProductList = async () => {
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

export { getDynamicRollImages, getDynamicImages, getDynamicVideo, GetProductList };
