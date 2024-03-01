# Leefer
cannlytics: https://docs.cannlytics.com/

api shit: https://docs.cannlytics.com/api/data/strains/

api call: https://cannlytics.com/api/data/strains

insp: https://www.leafly.com/

Frontend: React

Backend: Node.js / Express / axios

Reference Materials for api call: https://www.freecodecamp.org/news/make-api-calls-in-javascript/

*******************************************************************************************************

https://cannlytics.com/api/data/strains response JSON data/fields:

// success (OK or error) \\\

// data (contains all the following) \\\

- strain id, strain name, description, keywords, image

data[0].id

data[37].strain_name

data[34].description

data[26].keywords

data[10].image_url


- effects and aromas

data[36].potential_effects

data[7].potential_aromas


- total cannabinoid

data[15].total_cannabinoids


- terpenes

data[1].carene

data[2].total_terpenes

data[6].humulene

data[11].isopulegol

data[13].beta_myrcene

data[14].caryophyllene_oxide

data[18].ocimene

data[19].alpha_terpinene

data[20].alpha_pinene

data[21].terpinolene

data[23].gamma_terpinene

data[24].linalool

data[25].alpha_bisabolol

data[28].camphene

data[30].geraniol

data[31].eucalyptol

data[35].d_limonene

data[38].guaiol

data[39].nerolidol

data[40].terpinene

data[43].beta_caryophyllene

data[44].terpinenes

data[45].beta_pinene


- cbd and the like

data[16].total_cbd

data[3].cbd

data[4].cbg

data[8].cbda

data[9].cbga

data[29].cbn

data[41].total_cbg

data[46].cbc



- thc and the like

data[17].total_thc

data[12].thcv

data[22].delta_8_thc

data[41].thca

data[47].delta_9_thc


- dont really care

data[5].updated_at

data[27].tests

data[32].model

data[33].total_favorites

data[42].updated_by

data[48].model_stats

steve
