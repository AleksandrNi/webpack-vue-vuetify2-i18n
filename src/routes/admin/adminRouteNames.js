const adminPath = process.env.NODE_ENV === 'production' ? '' : '/admin';

// ADMIN
export const MAIN = `${adminPath}/`;
export const ADVERTIZER = `${adminPath}/advertiser`;
export const AGENCY = `${adminPath}/agency`;
export const ARBITRAGE = `${adminPath}/arbitrage`
export const FAQ = `${adminPath}/faq`;
export const CONTACTS = `${adminPath}/contacts`;
export const DEV = `${adminPath}/dev`;

export const RULES = `${adminPath}/rules`;
export const RTB = `${adminPath}/rtb`;
export const PRIVATE_POLICY = `${adminPath}/private-policy`;
export const GDPR = `${adminPath}/gdpr`;
export const OPT_OUT = `${adminPath}/opt-out`;