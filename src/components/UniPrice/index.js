import React, { useMemo } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { RowFixed } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'
import { formattedNum } from '../../utils'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -220px;
  width: 220px;
  top: -20px;
  z-index: 9999;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg1};
`

function formatPercent(rawPercent) {
  if (rawPercent < 0.01) {
    return '<1%'
  } else return parseFloat(rawPercent * 100).toFixed(0) + '%'
}

export default function UniPrice() {
  const daiPair = usePairData('0xecc6acbab3d9a806dd8abd6cf983d118cd7a6d7c')
  const usdcPair = usePairData('0x5cec0ccc21d2eb89a0613f6ca4b19b07c75909b0')
  //const usdtPair = usePairData('0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852')

  const totalLiquidity = useMemo(() => {
    return daiPair && usdcPair //&& usdtPair
      ? daiPair.trackedReserveUSD + usdcPair.trackedReserveUSD //+ usdtPair.trackedReserveUSD
      : 0
  }, [daiPair, usdcPair /*, usdtPair*/])

  console.log('yolo daipair', daiPair)
  console.log('yolo usdcpair', usdcPair)

  const daiPerEth = daiPair ? parseFloat(daiPair.token0Price).toFixed(2) : '-'
  const usdcPerEth = usdcPair ? parseFloat(usdcPair.token1Price).toFixed(2) : '-'
  //const usdtPerEth = usdtPair ? parseFloat(usdtPair.token1Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>DAI/EWT: {formattedNum(daiPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {daiPair && totalLiquidity ? formatPercent(daiPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDC/EWT: {formattedNum(usdcPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdcPair && totalLiquidity ? formatPercent(usdcPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        {/*
        <RowFixed>
          <TYPE.main>USDT/ETH: {formattedNum(usdtPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdtPair && totalLiquidity ? formatPercent(usdtPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        */}
      </AutoColumn>
    </PriceCard>
  )
}
