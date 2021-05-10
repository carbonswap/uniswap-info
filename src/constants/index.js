export const FACTORY_ADDRESS = '0x17854c8d5a41d5A89B275386E24B2F38FD0AfbDd'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  //MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  //HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/carbonswap/assets/master/carbonswap/Carbonswap_List.json'
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0xecc6acbab3d9a806dd8abd6cf983d118cd7a6d7c', // CLP
  '0x3a9c927dd096070cff9e6b554e313cc047ea23f5', // EDAI
  // '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  // '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  // '0xe31debd7abff90b06bca21010dd860d8701fd901',
  // '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  // '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
  // '0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b',

  // // rebass tokens
  // '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  // '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  // '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  // '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  // '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x70f95560f5a197aa42d47a5d9fe8cee5263042dc', // WEWT-TEST
  '0x7398e5ac1180b5da3cb658cf91a5b53a79edb432', // EDAI-WEWT
  '0x20e3eb54df8e523b265c1720868b742279991d76', // ROGE-WEWT
  // '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  // '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  // '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  // '0x7d7e813082ef6c143277c71786e5be626ec77b20',
]

export const LP_BLACKLIST = [
  '0xd323586fb6b6e33cb0a7309c131811faafee737b', // contract
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or EWT pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  '0x87da823b6fc8eb8575a235a824690fda94674c88',
  '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  '0xe1573b9d29e2183b1af0e743dc2754979a40d237',
]
