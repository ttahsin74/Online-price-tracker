import { Scrapper } from "../../../utils/scrapper.js";

const getAllScrape = async (product) => {
    const [
      starTech,
      techLand,
      skyLand,
      ryans,
      pcHouse,
      ultra,
      binary,
      potaka,
      daraz,
    ] = await Promise.all([
      Scrapper.scrapeStarTech(product),
      Scrapper.scrapeTechLand(product),
      Scrapper.scrapeSkyLand(product),
      Scrapper.scrapeRyans(product),
      Scrapper.scrapePcHouse(product),
      Scrapper.scrapeUltraTech(product),
      Scrapper.scrapeBinary(product),
      Scrapper.scrapePotakaIT(product),
      Scrapper.scrapeDaraz(product),
    ]);
  
    return {
      starTech,
      techLand,
      skyLand,
      ryans,
      pcHouse,
      ultra,
      binary,
      potaka,
      daraz
    };
  };
  
export const ScrapperService = {
  getAllScrape,
};
