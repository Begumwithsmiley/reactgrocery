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
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { getChainId } from 'viem/dist/types/actions/public/getChainId';

function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  
  const { chain, chains } = useNetwork()



  if (isConnected)
    return (
          
      <div>
        
        <button className="btn btn-secondary" onClick={() => disconnect()}>Disconnect</button>
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="py-3">Let's join to adventure with us. </p>
        <div className="rating gap-1 text-2xl font-bold underline">
      
        Hello world!
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
    
      </div>
      </div>
      </div>
      
          Connected to {address}  <br></br>
         
      </div>
      {chain && <div>Connected to {chain.name}</div>}
        {chains && (
           <div>Available chains: {chains.map((chain) => chain.name)} 
           </div>
        )}
    </div>
    
    )
  return <button className="btn btn-primary" onClick={() => connect()}>Connect Wallet</button>
}

