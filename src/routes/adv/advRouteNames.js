const advPath = process.env.NODE_ENV === 'production' ? '' : '/adv';

// ADV
export const MAIN = `${advPath}/`;
export const ADVERTIZER = `${advPath}/advertiser`;
export const AGENCY = `${advPath}/agency`;
export const ARBITRAGE = `${advPath}/arbitrage`
export const FAQ = `${advPath}/faq`;
export const CONTACTS = `${advPath}/contacts`;
export const DEV = `${advPath}/dev`;

export const RULES = `${advPath}/rules`;
export const RTB = `${advPath}/rtb`;
export const PRIVATE_POLICY = `${advPath}/private-policy`;
export const GDPR = `${advPath}/gdpr`;
export const OPT_OUT = `${advPath}/opt-out`;
