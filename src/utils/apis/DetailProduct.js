import axios from "axios";

const GetDetailProduct = async ({ autocode, designno, MetalTypeid }) => {
  let data = JSON.stringify({
    con: '{"id":"","mode":"GETPRODUCTLIST","appuserid":"neha@gmail.com"}',
    f: "(singleProdList)",
    p: "eyJQYWNrYWdlSWQiOiIxIiwiYXV0b2NvZGUiOiIwMDE1Njc2IiwiRnJvbnRFbmRfUmVnTm8iOiJpZDF1Z211b3F6YjQ0aGRzIiwiQ3VzdG9tZXJpZCI6IjEyNzQiLCJkZXNpZ25ubyI6IlIgMDM1MjMiLCJDdXJyZW5jeVJhdGUiOiIwLjEwMTYiLCJNZXRhbGlkIjoiMSIsIkRpYVFDaWQiOiIxMSwxNCIsIkNzUUNpZCI6IjAsMCIsIkxhYm91cnNldGlkIjoiMTQiLCJkaWFtb25kcHJpY2VsaXN0bmFtZSI6ImRocmRpYW1IS0QiLCJjb2xvcnN0b25lcHJpY2VsaXN0bmFtZSI6ImRocmNvbG9ySEtEIiwiU2V0dGluZ1ByaWNlVW5pcXVlTm8iOiIyMyIsIklzU3RvY2tXZWJzaXRlIjoiMSIsIlNpemUiOiIiLCJJc0Zyb21EZXNEZXQiOjEsIkFsYnVtTmFtZSI6IiIsIkRvbWFpbkZvck5vIjoiMCIsIldlYkRpc2NvdW50IjoiMCIsIklzWmVyb1ByaWNlUHJvZHVjdFNob3ciOiIwIiwiSXNTb2xpdGFpcmVXZWJzaXRlIjoiMCJ9",
    dp: `
    {"PackageId":"1",
    "autocode":"${autocode}",
    "FrontEnd_RegNo":"id1ugmuoqzb44hds",
    "Customerid":"1274",
    "designno":"${designno}",
    "CurrencyRate":"0.1016",
    "Metalid":"${MetalTypeid}",
    "DiaQCid":"11,14",
    "CsQCid":"0,0",
    "Laboursetid":"14",
    "diamondpricelistname":"dhrdiamHKD",
    "colorstonepricelistname":"dhrcolorHKD",
    "SettingPriceUniqueNo":"23",
    "IsStockWebsite":"1",
    "Size":"",
    "IsFromDesDet":1,"AlbumName":"",
    "DomainForNo":"0",
    "WebDiscount":"0",
    "IsZeroPriceProductShow":"0",
    "IsSolitaireWebsite":"0"}
    `,
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
  };

  try {
    const response = await axios.request(config, {});
    return response?.data?.Data;
  } catch (error) {
    console.log(error);
  }
};

export { GetDetailProduct };
