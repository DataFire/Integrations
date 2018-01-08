const SUFFIXES = [
  '.com', '.org', '.net', '.co.uk', '.io',
]

const PROVIDER_CHANGES = {
  "citrixonline.com": "citrix",
  "googleapis.com": "google",
  "hetrascertification.net": "hetras",
  "m2010.vg": "magento",
  "microsoft.com": "microsoft",
  "nrel.gov": "nrel",
}

const NAME_CHANGES = {
  "posty-api.herokuapp.com": "posty",
  "amazonaws": {
    "alexaforbusiness": "a4b",
    "AWSMigrationHub": "mgh",
    "application-autoscaling": "autoscaling",
    "appstream": "appstream2",
    "elasticloadbalancingv2": "elasticloadbalancing",
    "iot-data": "data_iot",
    "iot-jobs-data": "data_jobs_iot",
    "lex-models": "models_lex",
    "mediastore-data": "data_mediastore",
    "meteringmarketplace": "metering_marketplace",
    "opsworkscm": "opsworks_cm",
    "pricing": "api_pricing",
  }
}

function cleanName(str) {
  SUFFIXES.forEach(suffix => {
    let regex = new RegExp(suffix.replace(/\./g, '\\.') + '$');
    str = str.replace(regex, '');
  });
  return str.toLowerCase().replace(/\W+/g, '_');
}

const getName = module.exports = (apisGuruName) => {
  let provider = apisGuruName.substring(0, apisGuruName.indexOf(':'));
  provider = PROVIDER_CHANGES[provider] || provider;
  provider = cleanName(provider);
  let name = apisGuruName.substring(apisGuruName.indexOf(':') + 1);
  nameChange = NAME_CHANGES[provider] || NAME_CHANGES;
  name = nameChange[name] || name;
  name = cleanName(name);
  if (provider) name = provider + '_' + name;
  return {provider, name};
}

