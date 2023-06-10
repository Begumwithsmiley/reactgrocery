"use client";
import Image from 'next/image'
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

export default function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  )
}
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {address} <br></br>
        <button className="btn btn-secondary" onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return <button className="btn btn-secondary" onClick={() => connect()}>Connect Wallet</button>
}

function Home() {
  return (
  <div className="rating gap-1 text-3xl font-bold underline">
    Hello world!
    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
    <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
  </div>
  )
}
