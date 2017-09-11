const SUFFIXES = [
  '.com', '.org', '.net', '.co.uk', '.io',
]

const NAME_CHANGES = {
  "m2010.vg": "magento",
  "googleapis.com": "google",
  "citrixonline.com": "citrix",
  "hetrascertification.net": "hetras",
  "nrel.gov": "nrel",
  "posty-api.herokuapp.com": "posty",
  "microsoft.com": "microsoft_security_updates",
}

const getName = module.exports = (apisGuruName) => {
  let provider = '';
  let name = NAME_CHANGES[apisGuruName];
  if (!name) {
    name = apisGuruName.substring(apisGuruName.indexOf(':') + 1);
    provider = apisGuruName.substring(0, apisGuruName.indexOf(':'));
    provider = NAME_CHANGES[provider] || provider;
    SUFFIXES.forEach(suffix => {
      let regex = new RegExp(suffix.replace(/\./g, '\\.') + '$');
      name = name.replace(regex, '');
      provider = provider.replace(regex, '');
    });
    if (provider) name = provider + '_' + name;
  }
  name = name.toLowerCase().replace(/\W+/g, '_');
  return {provider, name};
}

