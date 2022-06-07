import CANDLE_LOGO_URL from '../assets/images/candle-logo.png' // added Candle 2022/06/06
import OPTIMISM_LOGO_URL from '../assets/images/optimism.svg'
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg'
import ETHEREUM_LOGO_URL from '../assets/images/ethereum-logo.png'
import POLYGON_LOGO_URL from '../assets/images/polygon-logo.png'

export enum SupportedNetwork {
  CANDLE, //Added Candle 2022/06/06
  ETHEREUM,
  ARBITRUM,
  OPTIMISM,
  POLYGON,
}

export type NetworkInfo = {
  id: SupportedNetwork
  route: string
  pathName: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

export const CandleNetworkInfo: NetworkInfo = {
  // added Candle 2022/06/06
  id: SupportedNetwork.CANDLE,
  route: 'candle',
  pathName: '/candle/',
  name: 'Candle',
  bgColor: '#8247e5',
  primaryColor: '#000080',
  secondaryColor: '#FB7876',
  imageURL: CANDLE_LOGO_URL,
  blurb: '',
}

export const EthereumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ETHEREUM,
  route: '',
  pathName: '/',
  name: 'Ethereum',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#2172E5',
  imageURL: ETHEREUM_LOGO_URL,
}

export const ArbitrumNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.ARBITRUM,
  route: 'arbitrum',
  pathName: '/arbitrum/',
  name: 'Arbitrum',
  imageURL: ARBITRUM_LOGO_URL,
  bgColor: '#0A294B',
  primaryColor: '#0490ED',
  secondaryColor: '#96BEDC',
  blurb: 'Beta',
}

export const OptimismNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.OPTIMISM,
  route: 'optimism',
  pathName: '/optimism/',
  name: 'Optimism',
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: OPTIMISM_LOGO_URL,
  blurb: 'Beta',
}

export const PolygonNetworkInfo: NetworkInfo = {
  id: SupportedNetwork.POLYGON,
  route: 'polygon',
  pathName: '/polygon/',
  name: 'Polygon',
  bgColor: '#8247e5',
  primaryColor: '#8247e5',
  secondaryColor: '#FB7876',
  imageURL: POLYGON_LOGO_URL,
  blurb: '',
}

export const SUPPORTED_NETWORK_PATH_NAMES = [
  CandleNetworkInfo.pathName, //Added Candle 2022/06/06
  EthereumNetworkInfo.pathName,
  ArbitrumNetworkInfo.pathName,
  OptimismNetworkInfo.pathName,
  PolygonNetworkInfo.pathName,
]

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [
  CandleNetworkInfo, //Added Candle 2022/06/06
  EthereumNetworkInfo,
  PolygonNetworkInfo,
  OptimismNetworkInfo,
  ArbitrumNetworkInfo,
]
