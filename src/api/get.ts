import request from "./req";

export const getSimpleDes = () =>
  request({
    method: "GET",
    url: "/mainPanel",
  });

export const getCarbonAndEnergy = () =>
  request({
    method: "GET",
    url: "/relation_cor",
  });

export const getCarbonAndGdp = () =>
  request({
    method: "GET",
    url: "/relation_gdp",
  });

export const getAllEnergy = () =>
  request({
    method: "GET",
    url: "/energyTotalConsumption",
  });

export const getDevelopment = () =>
  request({
    method: "GET",
    url: "/development",
  });

export const getChinaEnergy = () =>
  request({
    method: "GET",
    url: "/energyTotalByYear",
  });

export const getPer = () =>
  request({
    method: "GET",
    url: "/energyPer",
  });

export const getChinaEnergy2 = () =>
  request({
    method: "GET",
    url: "/energyIndustry",
  });

export const getForestAge = () =>
  request({
    method: "GET",
    url: "/ageacarbon",
  });

export const getCarbonForestArgs = () =>
  request({
    method: "GET",
    url: "/relation_forest",
  });

export const getCoalStruct = (year: number, month: number) =>
  request({
    method: "GET",
    url: `/predict_new?year=${year}&month=${month}`,
  });

export const getEnergyStruct = () =>
  request({
    method: "GET",
    url: "/structural_prediction",
  });

export const getRainCarbon = () =>
  request({
    method: "GET",
    url: "/rain_carbon",
  });

export const getStructuralPrediction = () =>
  request({
    method: "GET",
    url: "/structural_prediction",
  });
